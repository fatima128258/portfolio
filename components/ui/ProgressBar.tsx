"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type ProgressBarProps = {
  value: number;
  label: string;
  className?: string;
};

export function ProgressBar({ value, label, className }: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();

  return (
    <div ref={ref} className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-medium text-foreground">{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
          initial={{ width: reduceMotion ? `${value}%` : 0 }}
          animate={{ width: inView || reduceMotion ? `${value}%` : 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
}
