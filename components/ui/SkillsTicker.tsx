"use client";

import { useReducedMotion } from "framer-motion";

// Tech stack items with color-coded icons
const skills = [
  { name: "Next.js",     color: "#000000", darkColor: "#ffffff", icon: "▲" },
  { name: "React",       color: "#61DAFB", icon: "⚛" },
  { name: "TypeScript",  color: "#3178C6", icon: "TS" },
  { name: "JavaScript",  color: "#F7DF1E", icon: "JS" },
  { name: "Node.js",     color: "#539E43", icon: "⬡" },
  { name: "Express.js",  color: "#888888", icon: "Ex" },
  { name: "MongoDB",     color: "#47A248", icon: "🍃" },
  { name: "REST APIs",   color: "#FF6B35", icon: "⚡" },
  { name: "Tailwind CSS",color: "#06B6D4", icon: "~" },
  { name: "HTML",        color: "#E34F26", icon: "</>" },
  { name: "CSS",         color: "#1572B6", icon: "#" },
  { name: "C++",         color: "#00599C", icon: "C++" },
  { name: "Git",         color: "#F05032", icon: "⑂" },
  { name: "GitHub",      color: "#888888", icon: "⊙" },
  { name: "PostgreSQL",  color: "#4169E1", icon: "🐘" },
  { name: "Supabase",    color: "#3ECF8E", icon: "⚡" },
  { name: "Figma",       color: "#A259FF", icon: "✦" },
  { name: "VS Code",     color: "#007ACC", icon: "❰❱" },
];

// Duplicate for seamless loop
const doubled = [...skills, ...skills];

interface SkillPillProps {
  name: string;
  color: string;
  icon: string;
}

function SkillPill({ name, color, icon }: SkillPillProps) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur-sm transition-colors duration-200 hover:border-primary/30 hover:text-foreground dark:bg-muted/30">
      {/* Colored icon dot / glyph */}
      <span
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold leading-none"
        style={{ color, background: `${color}18` }}
        aria-hidden="true"
      >
        {icon}
      </span>
      {name}
    </span>
  );
}

export function SkillsTicker() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    // Static wrapping row for users who prefer reduced motion
    return (
      <div className="flex flex-wrap justify-center gap-2 px-4 py-3">
        {skills.map((s) => (
          <SkillPill key={s.name} {...s} />
        ))}
      </div>
    );
  }

  return (
    <div
      aria-label="Technology skills"
      className="ticker-wrapper relative w-full overflow-hidden py-3"
    >
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      {/* Scrolling track */}
      <div className="animate-marquee flex w-max gap-3">
        {doubled.map((s, i) => (
          <SkillPill key={`${s.name}-${i}`} {...s} />
        ))}
      </div>
    </div>
  );
}
