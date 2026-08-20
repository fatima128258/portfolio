"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import {
  useState,
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "accent";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: ReactNode;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
};

const variants: Record<ButtonVariant, string> = {
  primary: [
    "bg-primary text-white",
    "hover:bg-[#1d4ed8]",
    "active:bg-[#1e40af]",
    "dark:bg-primary dark:hover:bg-[#2563eb]/90",
  ].join(" "),

  secondary: [
    "bg-secondary text-white",
    "hover:bg-[#6d28d9]",
    "active:bg-[#5b21b6]",
    "dark:bg-secondary dark:hover:bg-[#7c3aed]/90",
  ].join(" "),

  outline: [
    "border border-primary/40 bg-transparent text-primary",
    "hover:bg-primary/8 hover:border-primary",
    /* Dark */
    "dark:border-border dark:text-foreground",
    "dark:hover:bg-muted dark:hover:border-foreground/40",
  ].join(" "),

  ghost: [
    "bg-transparent text-muted-foreground",
    "hover:bg-primary/8 hover:text-primary",
    "dark:hover:bg-muted dark:hover:text-foreground",
  ].join(" "),

  accent: [
    "bg-accent text-white",
    "hover:bg-[#0891b2]",
    "active:bg-[#0e7490]",
    "dark:bg-accent dark:hover:bg-[#06b6d4]/90",
  ].join(" "),
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm rounded-lg",
  md: "h-10 px-4 text-sm rounded-lg",
  lg: "h-11 px-5 text-sm rounded-xl",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  onClick,
  disabled,
  isLoading,
  type = "button",
}: ButtonProps) {
  const reduceMotion = useReducedMotion();
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled || isLoading) return;

    if (!reduceMotion) {
      const rect = event.currentTarget.getBoundingClientRect();
      const id = Date.now();
      setRipples((prev) => [
        ...prev,
        {
          id,
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        },
      ]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    }

    onClick?.(event);
  };

  return (
    <motion.button
      type={type}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -2, transition: { type: "spring", stiffness: 400, damping: 28 } }
      }
      whileTap={
        reduceMotion
          ? undefined
          : { scale: 0.97, transition: { duration: 0.12 } }
      }
      disabled={disabled || isLoading}
      onClick={handleClick}
      className={cn(
        "relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden font-medium",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-55",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {isLoading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      ) : null}
      {children}

      {/* Ripple effect */}
      {ripples.map((r) => (
        <span
          key={r.id}
          style={{ left: r.x, top: r.y }}
          className="pointer-events-none absolute h-1 w-1 animate-[ripple_0.6s_ease-out] rounded-full bg-white/35"
        />
      ))}
    </motion.button>
  );
}
