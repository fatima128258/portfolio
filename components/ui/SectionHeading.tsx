"use client";

import { cn } from "@/lib/utils";
import { transitions } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35, margin: "0px 0px -40px 0px" }}
      transition={transitions.soft}
      className={cn(
        "mb-8 md:mb-10",
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl break-words leading-snug">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
