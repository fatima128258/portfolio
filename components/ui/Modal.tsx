"use client";

import { cn } from "@/lib/utils";
import { transitions } from "@/lib/motion";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, type ReactNode } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center">
          <motion.button
            type="button"
            aria-label="Close modal backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transitions.snappy}
            className="absolute inset-0 cursor-pointer bg-slate-950/55 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title ?? "Dialog"}
            initial={
              reduceMotion ? { opacity: 1 } : { opacity: 0, y: 32, scale: 0.97 }
            }
            animate={
              reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }
            }
            exit={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }
            }
            transition={transitions.soft}
            className={cn(
              "relative z-10 max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8",
              className
            )}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              {title ? (
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {title}
                </h3>
              ) : (
                <span />
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="cursor-pointer rounded-lg border border-border p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {children}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
