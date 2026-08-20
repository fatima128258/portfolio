"use client";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/constants";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 py-16 md:py-20 dark:bg-transparent">
      {/* Background — light: indigo-purple tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden dark:hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #eef2ff 0%, #f3efff 55%, #e8f7fb 100%)" }} />
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.13)_0%,transparent_65%)] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.10)_0%,transparent_65%)] blur-3xl" />
      </div>
      <Container size="narrow">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="Formal training in software engineering paired with continuous applied practice."
        />

        <Reveal>
          <Card className="relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-muted/60 text-primary dark:bg-primary/10">
                <GraduationCap className="h-7 w-7" />
              </span>
              <div>
                <div className="mb-3 flex flex-wrap gap-2">
                  <Badge variant="accent">{education.status}</Badge>
                  <Badge variant="outline">{education.period}</Badge>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {education.degree}
                </h3>
                <p className="mt-1 text-base font-medium text-primary">
                  {education.institution}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {education.description}
                </p>
              </div>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
