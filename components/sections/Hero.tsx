"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SkillsTicker } from "@/components/ui/SkillsTicker";
import { personalInfo } from "@/constants";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { delayTransition, staggerContainer, staggerItem, transitions } from "@/lib/motion";
import { scrollToSection } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  const typedRole = useTypingEffect(personalInfo.roles, 70, 35, 2000);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden pt-24"
    >
      {/* ── Background layer ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">

        {/* Light: rich Figma-style mesh — layered radials */}
        <div className="absolute inset-0 dark:hidden"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 15% -10%, rgba(37,99,235,0.18) 0%, transparent 55%)," +
              "radial-gradient(ellipse 60% 45% at 85%  0%,  rgba(124,58,237,0.14) 0%, transparent 50%)," +
              "radial-gradient(ellipse 50% 40% at 50% 110%, rgba(8,145,178,0.12) 0%, transparent 55%)," +
              "radial-gradient(ellipse 40% 35% at 0%   70%, rgba(99,102,241,0.10) 0%, transparent 60%)",
          }}
        />

        {/* Dark mode gradient */}
        <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.12),transparent)]" />

        {/* Animated blobs — light only, stronger than before */}
        <div className="absolute -left-32 -top-20 h-[520px] w-[520px] rounded-full dark:hidden
          bg-[radial-gradient(circle,rgba(37,99,235,0.14)_0%,transparent_65%)]
          blur-3xl animate-blob"
        />
        <div className="absolute -right-24 top-10 h-[440px] w-[440px] rounded-full dark:hidden
          bg-[radial-gradient(circle,rgba(124,58,237,0.11)_0%,transparent_65%)]
          blur-3xl animate-blob-reverse animate-blob-delay-2"
        />
        <div className="absolute left-1/2 bottom-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full dark:hidden
          bg-[radial-gradient(circle,rgba(8,145,178,0.09)_0%,transparent_65%)]
          blur-3xl animate-blob animate-blob-delay-4"
        />

        {/* Grid texture */}
        <div className="absolute inset-0 grid-pattern opacity-50 dark:opacity-30
          [mask-image:linear-gradient(to_bottom,black_30%,transparent_80%)]"
        />

        {/* Floating shapes — light only */}
        <div className="absolute dark:hidden">
          <div className="absolute left-[18%] top-1/3 grid grid-cols-3 gap-1.5 animate-float opacity-30">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-primary/70" />
            ))}
          </div>
          <div className="absolute right-[12%] top-28 h-14 w-14 animate-drift opacity-20
            rounded-full border-2 border-primary/60"
          />
          <div className="absolute left-[8%] bottom-32 h-8 w-8 animate-drift-delay opacity-15
            rounded-lg border border-secondary/50 rotate-12"
          />
        </div>
      </div>

      {/* ── Content ── */}
      <Container className="relative grid items-center gap-14 pb-12 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-16 lg:pt-16">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
        >
          {/* Availability badge */}
          <motion.div variants={staggerItem} className="mb-5 inline-flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-primary shadow-sm backdrop-blur-sm dark:border-primary/20 dark:bg-primary/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Based in {personalInfo.location} · Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[1.08]"
          >
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            variants={staggerItem}
            className="mt-4 flex min-h-[1.75rem] items-center text-lg text-muted-foreground sm:text-xl"
          >
            <span className="font-medium text-foreground/90">{typedRole}</span>
            <span className="ml-0.5 inline-block h-[1.1em] w-px animate-pulse bg-primary align-middle" />
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button size="lg" onClick={() => scrollToSection("projects")} className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90">
              View Projects
            </Button>
            <a href={personalInfo.resumeUrl} download>
              <Button size="lg" variant="outline">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* ── Hero card ── */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={delayTransition(0.2, transitions.soft)}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Glow ring behind card */}
          <div className="absolute inset-0 -z-10 dark:hidden">
            <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-primary/30 via-secondary/18 to-accent/15 blur-2xl" />
          </div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="overflow-hidden rounded-2xl border border-primary/15 bg-white/90 shadow-[0_24px_64px_rgba(37,99,235,0.14),0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-sm dark:border-border dark:bg-card dark:shadow-[0_24px_64px_rgba(0,0,0,0.35)]"
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-primary/10 bg-gradient-to-r from-primary/5 to-secondary/5 px-4 py-3 dark:border-border dark:bg-muted/50">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                fatima · portfolio
              </span>
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              {/* Profile row */}
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#4f46e5] text-lg font-semibold text-white shadow-[0_4px_12px_rgba(37,99,235,0.4)]">
                  FR
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">
                    {personalInfo.name}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Full Stack Web Developer
                  </p>
                  <p className="mt-2 text-xs text-primary/70">
                    Next.js · React · TypeScript · Node.js
                  </p>
                </div>
              </div>

              {/* Code snippet */}
              <div className="rounded-xl border border-border bg-muted/50 p-4 font-mono text-[11px] leading-relaxed text-muted-foreground dark:bg-muted/40 sm:text-xs">
                <p>
                  <span className="text-accent">const</span>{" "}
                  <span className="text-foreground">engineer</span> = {"{"}
                </p>
                <p className="pl-4">
                  focus:{" "}
                  <span className="text-primary">
                    &quot;scalable web apps&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  strengths: [
                  <span className="text-secondary">&quot;UI/UX&quot;</span>,{" "}
                  <span className="text-secondary">&quot;architecture&quot;</span>
                  ],
                </p>
                <p className="pl-4">
                  status:{" "}
                  <span className="text-success">&quot;open to work&quot;</span>
                </p>
                <p>{"}"};</p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Stack", value: "Full Stack" },
                  { label: "Focus", value: "Next.js" },
                  { label: "Locale", value: "PK · Remote" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border bg-muted/40 px-3 py-3 dark:bg-background"
                  >
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* ── Skills ticker ── */}
      <div className="relative w-full border-y border-border/50 bg-background/60 backdrop-blur-sm dark:border-border/30 dark:bg-background/30">
        <SkillsTicker />
      </div>


    </section>
  );
}
