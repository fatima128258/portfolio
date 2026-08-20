"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/constants";
import { transitions } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Monitor,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Frontend: Layout,
  Backend: Code2,
  Databases: Database,
  Tools: Wrench,
  "Office & Productivity": Monitor,
};

function SkillCard({ category }: { category: (typeof skillCategories)[0] }) {
  const Icon = iconMap[category.title] ?? Code2;
  return (
    <div className="group inline-flex w-80 shrink-0 rounded-2xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.12)] dark:bg-muted/20 dark:hover:border-primary/25 flex-col min-h-60">
      <div className="mb-6 flex items-center gap-3">
        <motion.span 
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted/60 text-primary transition-colors duration-200 group-hover:border-primary/30 group-hover:bg-primary/10 dark:bg-muted/40"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon className="h-4 w-4" />
        </motion.span>
        <h3 className="font-display text-lg font-semibold text-foreground">
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className="rounded-lg border border-border bg-muted/60 px-3 py-1.5 text-sm font-medium text-foreground/80 transition-all duration-200 hover:border-primary/30 hover:text-primary hover:bg-primary/5 dark:bg-background dark:text-foreground/90 dark:hover:border-primary/30 dark:hover:text-primary"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const reduceMotion = useReducedMotion();
  const doubled = [...skillCategories, ...skillCategories, ...skillCategories, ...skillCategories];

  if (reduceMotion) {
    return (
      <section id="skills" className="relative scroll-mt-24 py-16 md:py-20 dark:bg-transparent">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden dark:hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #f3efff 0%, #eef2ff 50%, #e8f7fb 100%)" }} />
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.13)_0%,transparent_65%)] blur-3xl" />
          <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.10)_0%,transparent_65%)] blur-3xl" />
        </div>
        <Container>
          <SectionHeading
            eyebrow="Skills"
            title="Technical toolkit"
            description="Technologies I use to design, build, and ship reliable web applications."
            align="left"
          />
          <div className="flex flex-wrap justify-center gap-5">
            {skillCategories.map((category) => (
              <SkillCard key={category.title} category={category} />
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="skills" className="relative scroll-mt-24 py-16 md:py-20 dark:bg-transparent">
      {/* Background — light: purple-indigo tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden dark:hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #f3efff 0%, #eef2ff 50%, #e8f7fb 100%)" }} />
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.13)_0%,transparent_65%)] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.10)_0%,transparent_65%)] blur-3xl" />
      </div>
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Technologies I use to design, build, and ship reliable web applications."
          align="left"
        />
      </Container>

      {/* Full-bleed ticker rows — outside Container so they reach the edges */}
      <div className="mt-10 flex flex-col gap-5">
        <div className="ticker-wrapper relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

          <div
            className="animate-marquee"
            style={{ animationDuration: "40s", display: "flex", width: "max-content", gap: "1.25rem" }}
          >
            {doubled.map((category, i) => (
              <SkillCard key={`${category.title}-${i}`} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
