import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isValidEmail } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Rate-limit: simple in-memory store (resets on cold start / redeploy).
// Limits each IP to 5 submissions per 15-minute window.
// ---------------------------------------------------------------------------
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5;

const ipMap = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    ipMap.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count += 1;
  return false;
}

// ---------------------------------------------------------------------------
// Nodemailer transporter (created once, reused across invocations)
// ---------------------------------------------------------------------------
function createTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error(
      "Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables."
    );
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { type: "LOGIN", user, pass },
  });
}

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------
export async function POST(request: Request) {
  // ── Rate limiting ──────────────────────────────────────────────────────────
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please wait a few minutes." },
      { status: 429 }
    );
  }

  // ── Parse body ─────────────────────────────────────────────────────────────
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const raw = body as Record<string, unknown>;
  const name = String(raw?.name ?? "").trim();
  const email = String(raw?.email ?? "").trim();
  const subject = String(raw?.subject ?? "").trim();
  const message = String(raw?.message ?? "").trim();

  // ── Server-side validation ─────────────────────────────────────────────────
  const fieldErrors: Record<string, string> = {};

  if (!name || name.length < 2) {
    fieldErrors.name = "Name must be at least 2 characters.";
  }
  if (!isValidEmail(email)) {
    fieldErrors.email = "A valid email address is required.";
  }
  if (!subject || subject.length < 3) {
    fieldErrors.subject = "Subject must be at least 3 characters.";
  }
  if (!message || message.length < 10) {
    fieldErrors.message = "Message must be at least 10 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", fieldErrors },
      { status: 400 }
    );
  }

  // ── Send email via Nodemailer ──────────────────────────────────────────────
  try {
    const toEmail =
      process.env.CONTACT_TO_EMAIL?.trim() || process.env.GMAIL_USER!;

    // Guard: if env vars are missing or still placeholder, fail with clear message
    const appPass = process.env.GMAIL_APP_PASSWORD?.trim() ?? "";
    if (!appPass || appPass === "your_16_char_app_password_here") {
      console.error("[contact] GMAIL_APP_PASSWORD is not configured.");
      return NextResponse.json(
        { ok: false, error: "Email service not configured. Please contact me directly at fatimaramzan739@gmail.com" },
        { status: 503 }
      );
    }

    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: toEmail,
      replyTo: `"${name}" <${email}>`,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
          <h2 style="margin-top:0;color:#111827">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#6b7280;font-size:14px;width:80px">Name</td>
              <td style="padding:8px 0;font-size:14px;color:#111827">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b7280;font-size:14px">Email</td>
              <td style="padding:8px 0;font-size:14px">
                <a href="mailto:${escapeHtml(email)}" style="color:#2563eb">${escapeHtml(email)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b7280;font-size:14px">Subject</td>
              <td style="padding:8px 0;font-size:14px;color:#111827">${escapeHtml(subject)}</td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0" />
          <p style="font-size:14px;color:#374151;white-space:pre-line;margin:0">${escapeHtml(message)}</p>
          <p style="margin-top:24px;font-size:12px;color:#9ca3af">
            Sent via the contact form on your portfolio. Reply directly to this email to respond to ${escapeHtml(name)}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[contact] Nodemailer error:", message);
    return NextResponse.json(
      { ok: false, error: `Failed to send: ${message}` },
      { status: 500 }
    );
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
