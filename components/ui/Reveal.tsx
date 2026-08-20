"use client";

import { cn } from "@/lib/utils";
import { transitions } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  amount = 0.18,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      transition={{ ...transitions.soft, delay }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

export function Stagger({
  children,
  className,
  delay = 0.04,
  once = true,
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.12, margin: "0px 0px -60px 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: transitions.soft,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
