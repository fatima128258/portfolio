"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { achievements } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function Achievements() {
  const [selectedId, setSelectedId] = useState("figma-precision"); // Default to 3rd item (index 2)

  return (
    <section id="achievements" className="relative scroll-mt-24 py-16 md:py-24 dark:bg-transparent">
      {/* Background — light: gradient tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden dark:hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #f0ebff 0%, #eef2ff 50%, #e8f7fb 100%)" }} />
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.13)_0%,transparent_65%)] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.10)_0%,transparent_65%)] blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Key Achievements
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            An overview of my design-to-code workflows, full-stack implementations, and development milestones.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-0">
          {achievements.map((achievement, index) => {
            const isHighlighted = selectedId === achievement.id;
            
            return (
              <Reveal key={achievement.id} delay={index * 0.1}>
                <button
                  onClick={() => setSelectedId(achievement.id)}
                  className={`group w-full relative overflow-hidden transition-all duration-300 ${
                    isHighlighted
                      ? "bg-gradient-to-r from-violet-600 to-violet-500 rounded-2xl px-6 md:px-10 py-8 md:py-10 border-0"
                      : "border-b border-border/50 px-0 py-8 md:py-10 hover:bg-primary/5 rounded-lg transition-colors"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12 text-left">
                    {/* Left side - Number and Title */}
                    <div className="flex gap-4 md:gap-6 flex-shrink-0">
                      {/* Number */}
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg font-display font-bold text-lg ${
                          isHighlighted
                            ? "bg-white/20 text-white"
                            : "text-primary group-hover:text-primary/80 transition-colors"
                        }`}
                      >
                        {achievement.number}
                      </div>

                      {/* Title */}
                      <div>
                        <h3
                          className={`font-display text-lg md:text-xl font-bold leading-snug ${
                            isHighlighted ? "text-white" : "text-foreground"
                          }`}
                        >
                          {achievement.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right side - Description and Arrow */}
                    <div className="flex items-start justify-between gap-6 flex-1">
                      {/* Description */}
                      <p
                        className={`text-sm md:text-base leading-relaxed ${
                          isHighlighted
                            ? "text-white/90"
                            : "text-muted-foreground group-hover:text-foreground/80 transition-colors"
                        }`}
                      >
                        {achievement.description}
                      </p>

                      {/* Arrow icon */}
                      <div className="flex shrink-0 items-center justify-center">
                        <div
                          className={`rounded-full p-3 transition-all ${
                            isHighlighted
                              ? "bg-white/20"
                              : "bg-transparent group-hover:bg-primary/10"
                          }`}
                        >
                          <ArrowUpRight
                            className={`h-5 w-5 transition-transform ${
                              isHighlighted
                                ? "text-white"
                                : "text-muted-foreground group-hover:text-primary"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
