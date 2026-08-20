"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { contactInfo } from "@/constants";
import { GitHubIcon } from "@/components/ui/Icons";
import { isValidEmail } from "@/lib/utils";
import type { ContactFormData } from "@/types";
import { Mail, MapPin } from "lucide-react";
import { useState, useEffect, type FormEvent } from "react";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

function validate(form: ContactFormData): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!isValidEmail(form.email)) {
    errors.email = "Please enter a valid email.";
  }
  if (!form.subject.trim() || form.subject.trim().length < 3) {
    errors.subject = "Please add a subject.";
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

type Toast = { type: "success" | "error"; message: string; id: number };

export function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [toast, setToast] = useState<Toast | null>(null);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    if (!toast) return;
    // Trigger enter animation on next tick
    const enterTimer = setTimeout(() => setToastVisible(true), 10);
    // Start exit animation at 4.5 s, remove at 5 s
    const exitTimer = setTimeout(() => setToastVisible(false), 4500);
    const removeTimer = setTimeout(() => setToast(null), 5000);
    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [toast]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        // Surface any field-level errors returned by the server
        if (data?.fieldErrors) {
          setErrors(data.fieldErrors);
        }
        throw new Error(data?.error ?? "Failed");
      }

      setStatus("success");
      setForm(initialForm);
      setToastVisible(false);
      setToast({
        type: "success",
        message: "Message sent successfully. I'll get back to you soon.",
        id: Date.now(),
      });
    } catch {
      setStatus("error");
      setToastVisible(false);
      setToast({
        type: "error",
        message: "Something went wrong. Please try again or email me directly.",
        id: Date.now(),
      });
    }
  };

  const fields: {
    name: keyof ContactFormData;
    label: string;
    type?: string;
    rows?: number;
  }[] = [
    { name: "name", label: "Name" },
    { name: "email", label: "Email", type: "email" },
    { name: "subject", label: "Subject" },
    { name: "message", label: "Message", rows: 5 },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 py-12 md:py-16 dark:bg-transparent">
      {/* Background — light: cyan-purple gradient mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden dark:hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #e8f7fb 0%, #eef2ff 50%, #f3efff 100%)" }} />
        <div className="absolute -right-20 -top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.13)_0%,transparent_65%)] blur-3xl" />
        <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.11)_0%,transparent_65%)] blur-3xl" />
      </div>
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s discuss your next project"
          description="Open to internships, freelance engagements, and full-time software engineering roles."
        />

        <div className="grid min-h-96 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Card hover={false} className="h-full">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Direct contact
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Prefer email or GitHub? I typically respond within 1–2 business
                days.
              </p>

              <div className="mt-7 space-y-2.5">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 rounded-lg border border-primary/15 bg-white/70 px-4 py-3 text-sm shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-primary/35 hover:bg-primary/5 hover:shadow-[0_4px_12px_rgba(37,99,235,0.12)] dark:border-border dark:bg-transparent dark:hover:bg-muted"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {contactInfo.email}
                </a>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-primary/15 bg-white/70 px-4 py-3 text-sm shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-primary/35 hover:bg-primary/5 hover:shadow-[0_4px_12px_rgba(37,99,235,0.12)] dark:border-border dark:bg-transparent dark:hover:bg-muted"
                >
                  <GitHubIcon className="h-4 w-4 text-primary" />
                  GitHub
                </a>
                <div className="flex items-center gap-3 rounded-lg border border-primary/15 bg-white/50 px-4 py-3 text-sm text-muted-foreground dark:border-border dark:bg-transparent">
                  <MapPin className="h-4 w-4 text-primary/70" />
                  {contactInfo.location}
                </div>
              </div>

              <div className="mt-7">
                <SocialIcons />
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card>
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      {field.label}
                    </label>
                    {field.rows ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        rows={field.rows}
                        value={form[field.name]}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            [field.name]: e.target.value,
                          }))
                        }
                        className="w-full resize-y rounded-lg border border-primary/15 bg-white/80 px-3.5 py-2.5 text-sm text-foreground outline-none backdrop-blur-sm transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/15 dark:border-border dark:bg-background"
                        aria-invalid={Boolean(errors[field.name])}
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type ?? "text"}
                        value={form[field.name]}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            [field.name]: e.target.value,
                          }))
                        }
                        className="w-full rounded-lg border border-primary/15 bg-white/80 px-3.5 py-2.5 text-sm text-foreground outline-none backdrop-blur-sm transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/15 dark:border-border dark:bg-background"
                        aria-invalid={Boolean(errors[field.name])}
                      />
                    )}
                    {errors[field.name] ? (
                      <p className="mt-1 text-xs text-error">
                        {errors[field.name]}
                      </p>
                    ) : null}
                  </div>
                ))}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90"
                  isLoading={status === "loading"}
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </Container>

      {/* Toast notification */}
      {toast && (
        <div
          role={toast.type === "error" ? "alert" : "status"}
          className={[
            "fixed bottom-6 right-6 z-50 flex items-start gap-3 rounded-xl px-5 py-4 shadow-lg",
            "max-w-sm text-sm font-medium transition-all duration-500",
            toast.type === "success"
              ? "bg-green-50 text-green-800 ring-1 ring-green-200 dark:bg-green-900/30 dark:text-green-300 dark:ring-green-700/40"
              : "bg-red-50 text-red-800 ring-1 ring-red-200 dark:bg-red-900/30 dark:text-red-300 dark:ring-red-700/40",
            toastVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0",
          ].join(" ")}
        >
          <span className="mt-0.5 shrink-0 text-base">
            {toast.type === "success" ? "✅" : "⚠️"}
          </span>
          <span>{toast.message}</span>
          <button
            onClick={() => { setToastVisible(false); setTimeout(() => setToast(null), 300); }}
            className="ml-auto shrink-0 opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
