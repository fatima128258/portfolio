"use client";

import { footerLinks, personalInfo, contactInfo } from "@/constants";
import { scrollToSection } from "@/lib/utils";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";

const techStack = [
  { label: "Next.js",       light: "text-gray-700",   dark: "dark:text-white/80" },
  { label: "TypeScript",    light: "text-blue-600",   dark: "dark:text-blue-400" },
  { label: "Tailwind CSS",  light: "text-cyan-600",   dark: "dark:text-cyan-400" },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#0a0f1e] dark:via-[#0b1120] dark:to-[#0a0e1a]">

      {/* ── Top accent line ── */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 h-[2px]"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, #3b82f6 25%, #8b5cf6 60%, #06b6d4 85%, transparent 100%)",
        }}
      />

      {/* ── Faint dot-grid (light: visible, dark: barely visible) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(37,99,235,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Glow blobs (dark mode only — visible gradients) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 hidden h-96 w-96 -translate-x-1/2 rounded-full opacity-25 blur-3xl dark:block"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-1/4 hidden h-72 w-72 translate-x-1/2 rounded-full opacity-20 blur-3xl dark:block"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
      />

      {/* ── Main content ── */}
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-0 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_0.6fr_1.4fr] lg:gap-16">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-[0_4px_14px_rgba(59,130,246,0.4)]">
                FR
              </div>
              <span className="font-display text-lg font-semibold text-gray-900 dark:text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="mb-6 max-w-[22ch] text-sm leading-relaxed text-gray-500 dark:text-white/50">
              Software Engineering student and Full Stack Developer building
              reliable, well-designed web applications.
            </p>

            <div className="flex items-center gap-2.5">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-500 shadow-sm transition-all duration-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-white/50 dark:shadow-none dark:hover:border-blue-500/50 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-500 shadow-sm transition-all duration-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-white/50 dark:shadow-none dark:hover:border-blue-500/50 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {footerLinks.navigation.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href.replace("#", ""));
                    }}
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-900 dark:text-white/50 dark:hover:text-white"
                  >
                    <span className="h-px w-0 bg-blue-500 transition-all duration-200 group-hover:w-3" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-violet-600 dark:text-violet-400">
              More
            </p>
            <ul className="space-y-2.5">
              {footerLinks.navigation.slice(4).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href.replace("#", ""));
                    }}
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-900 dark:text-white/50 dark:hover:text-white"
                  >
                    <span className="h-px w-0 bg-violet-500 transition-all duration-200 group-hover:w-3" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-600 dark:text-cyan-400">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group flex items-start gap-2.5 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-900 dark:text-white/50 dark:hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600/70 transition group-hover:text-cyan-600 dark:text-cyan-500/70 dark:group-hover:text-cyan-400" />
                  <span className="break-all">{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-900 dark:text-white/50 dark:hover:text-white"
                >
                  <GitHubIcon className="h-4 w-4 shrink-0 text-cyan-600/70 transition group-hover:text-cyan-600 dark:text-cyan-500/70 dark:group-hover:text-cyan-400" />
                  <span>github.com/fatimaramzan</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-white/50">
                <MapPin className="h-4 w-4 shrink-0 text-cyan-600/70 dark:text-cyan-500/70" />
                <span>{contactInfo.location}</span>
              </li>
            </ul>

            {/* Back to top */}
            <motion.button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 shadow-sm transition-all duration-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:shadow-none dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-white"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" />
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div
          aria-hidden
          className="mt-12 h-px bg-gray-200 dark:bg-transparent"
          style={{
            background: undefined,
          }}
        >
          <div
            className="h-full w-full dark:block hidden"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, rgba(59,130,246,0.3) 25%, rgba(139,92,246,0.3) 75%, transparent 100%)",
            }}
          />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-gray-500 dark:text-white/35 sm:flex-row">
          <p>{footerLinks.copyright}</p>

          <div className="flex items-center gap-2">
            <span>Built with</span>
            {techStack.map((tech, i) => (
              <span key={tech.label} className="flex items-center gap-2">
                <span className={`font-medium ${tech.light} ${tech.dark}`}>{tech.label}</span>
                {i < techStack.length - 1 && (
                  <span className="text-gray-300 dark:text-white/20">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
