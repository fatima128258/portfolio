"use client";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/constants";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-24 py-16 md:py-20 dark:bg-transparent">
      {/* Background — light: purple-cyan tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden dark:hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #f3efff 0%, #eef2ff 50%, #e8f7fb 100%)" }} />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.13)_0%,transparent_65%)] blur-3xl" />
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.10)_0%,transparent_65%)] blur-3xl" />
      </div>
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & learning"
          description="Structured coursework reinforcing web fundamentals, JavaScript, React, and Next.js."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2" delay={0.05}>
          {certifications.map((cert) => (
            <StaggerItem key={cert.title}>
              <Card hover={false} className="h-full">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted/60 text-primary dark:bg-muted/40">
                    <Award className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {cert.issuer}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
