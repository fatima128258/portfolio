"use client";

import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navItems, personalInfo } from "@/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn, scrollToSection } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export function Navbar() {
  const { scrolled } = useScrollPosition(16);
  const { activeId, setActiveId } = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const isProgrammaticScrolling = useRef(false);
const handleNav = (href: string) => {
  const targetId = href.replace("#", "");

  setOpen(false);

  // Keep clicked tab active while smooth scrolling
  setActiveId(targetId, 900);

  // Start smooth scroll immediately
  scrollToSection(targetId);
};

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white shadow-[0_4px_24px_rgba(37,99,235,0.08)] dark:bg-[#0f172a]/95 dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
          : "bg-white/95 backdrop-blur-md dark:bg-[#0f172a]/90"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        {/* ── Logo ── */}
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#home");
          }}
          className="font-display text-sm font-semibold tracking-tight text-foreground sm:text-base"
        >
          <span className="inline-flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-bold text-white shadow-[0_2px_8px_rgba(59,130,246,0.45)]">
              FR
            </span>
            <span className="text-foreground hover:text-foreground/80 transition-colors">
              {personalInfo.name}
            </span>
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const active = activeId === id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.href);
                }}
                className={cn(
                  "group relative inline-flex flex-col items-center px-3 py-2 text-sm font-medium transition-colors duration-200",
                  active
                    ? "text-primary dark:text-primary-light"
                    : "text-foreground/80 hover:text-primary/80 dark:text-white/70 dark:hover:text-white/90"
                )}
              >
                <span>{item.label}</span>
                {/* Active underline - text width only, NO underline on default/hover */}
                <span
                  className={cn(
                    "absolute bottom-0 h-[2px] bg-primary dark:bg-primary-light transition-all duration-300 ease-out",
                    active
                      ? "w-[calc(100%-24px)] opacity-100"
                      : "w-[calc(100%-24px)] opacity-0"
                  )}
                  style={{ left: "12px" }}
                />
              </a>
            );
          })}
        </div>
        {/* ── Actions ── */}
        <div className="flex items-center gap-2">
          {/* Theme toggle — keep visible but tint for dark nav */}
          <div className="[&_button]:border-border [&_button]:text-muted-foreground [&_button:hover]:border-border [&_button:hover]:bg-muted [&_button:hover]:text-foreground dark:[&_button]:border-white/15 dark:[&_button]:text-white/70 dark:[&_button:hover]:border-white/30 dark:[&_button:hover]:bg-white/10 dark:[&_button:hover]:text-white">
            <ThemeToggle />
          </div>
          <a
            onClick={() => scrollToSection("contact")}
            className="hidden sm:inline-flex cursor-pointer"
          >
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 dark:from-primary dark:to-secondary dark:hover:from-primary/80 dark:hover:to-secondary/80"
            >
              Hire Me
            </Button>
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground hover:bg-muted hover:text-foreground dark:border-white/15 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0, overflow: "hidden" }}
            animate={{ opacity: 1, height: "auto", overflow: "visible" }}
            exit={{ opacity: 0, height: 0, overflow: "hidden" }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="bg-white lg:hidden dark:bg-[#0f172a]"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 pb-5 pt-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNav(item.href)}
                  className={cn(
                    "w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors",
                    activeId === item.href.replace("#", "")
                      ? "bg-primary/10 text-primary dark:bg-white/10 dark:text-white"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground dark:text-white/60 dark:hover:bg-white/8 dark:hover:text-white"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3">
                <Button 
                  onClick={() => {
                    setOpen(false);
                    scrollToSection("contact");
                  }}
                  className="w-full rounded-xl" 
                  size="md" 
                  variant="primary"
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
