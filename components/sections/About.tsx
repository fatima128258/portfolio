"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { facts, personalInfo, stats } from "@/constants";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-8 md:py-12 dark:bg-transparent">
      {/* Background — light: warm blue tint with blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden dark:hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #eef2ff 0%, #f0ebff 50%, #e8f7fb 100%)" }} />
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.13)_0%,transparent_65%)] blur-3xl" />
        <div className="absolute left-0 bottom-0 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.10)_0%,transparent_65%)] blur-3xl" />
      </div>
      <Container>
        <SectionHeading
          eyebrow=""
          title=""
          description=""
          align="left"
        />

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.04}>
              <div className="rounded-2xl border border-border bg-card px-4 py-5 text-center">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
