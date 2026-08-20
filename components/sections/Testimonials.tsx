"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/constants";
import Image from "next/image";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-24 py-20 md:py-28 dark:bg-transparent">
      {/* Background — light: blue-indigo tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden dark:hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #eef2ff 0%, #f3efff 50%, #e8f7fb 100%)" }} />
        <div className="absolute left-1/4 -top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.13)_0%,transparent_65%)] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10)_0%,transparent_65%)] blur-3xl" />
      </div>
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What collaborators say"
          description="Feedback from founders, engineers, and design partners I have worked with."
        />

        <Stagger className="grid gap-5 lg:grid-cols-3" delay={0.06}>
          {testimonials.map((item) => (
            <StaggerItem key={item.id}>
              <Card hover={false} className="flex h-full flex-col">
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{item.content}”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
