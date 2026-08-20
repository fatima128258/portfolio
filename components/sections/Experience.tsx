"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/constants";

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-12 md:py-16 dark:bg-transparent">
      {/* Background — light: cyan-blue tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden dark:hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #e8f7fb 0%, #eef2ff 55%, #f3efff 100%)" }} />
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.13)_0%,transparent_65%)] blur-3xl" />
        <div className="absolute left-0 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.10)_0%,transparent_65%)] blur-3xl" />
      </div>

      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience"
          description="A progressive path from foundational projects to client delivery and full-stack ownership."
        />
      </Container>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8 lg:flex-row">
        {experiences.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.06}>
            <div className="flex-1 rounded-2xl border border-border bg-card/60 px-7 py-6 dark:bg-card/40">
              {/* Header row */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {item.company}
                  </p>
                </div>
                {/* Duration badge — primary blue pill */}
                {"duration" in item && item.duration && (
                  <span className="shrink-0 rounded-full bg-primary/15 px-3.5 py-1 text-xs font-semibold text-primary ring-1 ring-primary/30 dark:bg-primary/20 dark:text-primary-light dark:ring-primary/40">
                    {item.duration as string}
                  </span>
                )}
              </div>

              {/* Achievement bullets */}
              <ul className="mt-5 space-y-3">
                {item.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    {/* Arrow bullet matching screenshot */}
                    <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">
                      ▶
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
