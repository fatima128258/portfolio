"use client";

import { cn } from "@/lib/utils";
import { transitions } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  gradient?: boolean;
};

export function Card({
  className,
  children,
  hover = true,
  glass = false,
  gradient = false,
}: CardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={
        hover && !reduceMotion
          ? {
              y: -6,
              transition: transitions.hover,
            }
          : undefined
      }
      transition={transitions.soft}
      className={cn(
        "rounded-2xl will-change-transform",
        /* Light default: white card, subtle branded border, soft blue-tinted shadow */
        "border border-primary/10 bg-card",
        "shadow-[0_2px_12px_rgba(37,99,235,0.07),0_1px_3px_rgba(0,0,0,0.04)]",
        /* Dark */
        "dark:border-border dark:shadow-sm",
        /* Hover enhancements (light only) */
        hover && [
          "transition-all duration-300",
          "hover:border-primary/25",
          "hover:shadow-[0_12px_40px_rgba(37,99,235,0.14),0_4px_12px_rgba(0,0,0,0.06)]",
          "dark:hover:shadow-md dark:hover:border-border",
        ],
        /* Glass mode */
        glass && [
          "bg-white/70 backdrop-blur-xl border-white/60",
          "dark:bg-card/80 dark:border-border/80 dark:backdrop-blur-xl",
        ],
        /* Gradient border mode */
        gradient && "gradient-border",
        "p-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
