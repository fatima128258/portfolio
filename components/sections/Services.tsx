"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/constants";
import {
  Cable,
  Database,
  Layers,
  Layout,
  Palette,
  Server,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useReducedMotion } from "framer-motion";

const icons: Record<string, LucideIcon> = {
  layers: Layers,
  layout: Layout,
  server: Server,
  smartphone: Smartphone,
  cable: Cable,
  database: Database,
  zap: Zap,
  palette: Palette,
};

// Split services into two rows for the dual-row marquee
const row1 = services.slice(0, Math.ceil(services.length / 2));
const row2 = services.slice(Math.ceil(services.length / 2));

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = icons[icon] ?? Layers;
  return (
    <div className="group inline-flex w-64 shrink-0 flex-col rounded-2xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.12)] dark:bg-muted/20 dark:hover:border-primary/25 sm:w-72">
      <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted/60 text-primary transition-colors duration-200 group-hover:border-primary/30 group-hover:bg-primary/10 dark:bg-muted/40">
        <Icon className="h-4 w-4" />
      </span>
      <h3 className="font-display text-base font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

interface TickerRowProps {
  items: typeof services;
  reverse?: boolean;
  speed?: number;
}

function TickerRow({ items, reverse = false, speed = 35 }: TickerRowProps) {
  const reduceMotion = useReducedMotion();
  // Double items for seamless loop
  const doubled = [...items, ...items, ...items, ...items];

  if (reduceMotion) {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    );
  }

  return (
    <div className="ticker-wrapper relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

      <div
        className={reverse ? "animate-marquee-reverse" : "animate-marquee"}
        style={{ animationDuration: `${speed}s`, display: "flex", width: "max-content", gap: "1rem" }}
      >
        {doubled.map((s, i) => (
          <ServiceCard key={`${s.title}-${i}`} {...s} />
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-16 md:py-20 dark:bg-transparent">
      {/* Background — light: purple-blue mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden dark:hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #f3efff 0%, #eef2ff 55%, #e8f7fb 100%)" }} />
        <div className="absolute left-1/3 -top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.13)_0%,transparent_65%)] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.10)_0%,transparent_65%)] blur-3xl" />
      </div>

      <Container>
        <SectionHeading
          eyebrow="Services"
          title="How I can help"
          description="End-to-end web development for startups, teams, and independent product owners."
        />
      </Container>

      {/* Full-bleed ticker rows — outside Container so they reach the edges */}
      <div className="mt-10 flex flex-col gap-5">
        <TickerRow items={row1} reverse={false} speed={32} />
        <TickerRow items={row2} reverse={true} speed={38} />
      </div>
    </section>
  );
}
