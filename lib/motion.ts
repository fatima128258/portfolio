import type { Transition, Variants } from "framer-motion";

/** Smooth ease-out curve used site-wide */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const transitions = {
  soft: {
    duration: 0.7,
    ease: easeOut,
  } satisfies Transition,
  medium: {
    duration: 0.55,
    ease: easeOut,
  } satisfies Transition,
  snappy: {
    duration: 0.35,
    ease: easeOut,
  } satisfies Transition,
  spring: {
    type: "spring",
    stiffness: 120,
    damping: 22,
    mass: 0.9,
  } satisfies Transition,
  springSoft: {
    type: "spring",
    stiffness: 90,
    damping: 20,
    mass: 1,
  } satisfies Transition,
  hover: {
    type: "spring",
    stiffness: 400,
    damping: 28,
  } satisfies Transition,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.soft,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.medium,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: transitions.soft,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.soft,
  },
};

export function delayTransition(delay = 0, base: Transition = transitions.soft): Transition {
  return { ...base, delay };
}
