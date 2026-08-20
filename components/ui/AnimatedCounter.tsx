"use client";

import { useCounter } from "@/hooks/useCounter";
import { cn } from "@/lib/utils";
import type { RefObject } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  className?: string;
  label?: string;
};

export function AnimatedCounter({
  value,
  suffix = "",
  className,
  label,
}: AnimatedCounterProps) {
  const { count, ref } = useCounter(value);

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className={cn(className)}>
      <p className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {count}
        {suffix}
      </p>
      {label ? (
        <p className="mt-1 text-sm text-muted-foreground">{label}</p>
      ) : null}
    </div>
  );
}
