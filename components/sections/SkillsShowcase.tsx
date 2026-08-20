"use client";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/constants";
import { transitions } from "@/lib/motion";
import type { SkillCategory } from "@/types";
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Monitor,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, LucideIcon> = {
  Frontend: Layout,
  Backend: Code2,
  Databases: Database,
  Tools: Wrench,
  "Office & Productivity": Monitor,
};

interface SkillCardProps {
  name: string;
  level: number;
  description?: string;
  icon?: LucideIcon;
}

function SkillCard({ name, level, description, icon: Icon }: SkillCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              transition: transitions.hover,
            }
      }
      className="group rounded-xl border border-border bg-card/50 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(37,99,235,0.15)] dark:bg-muted/10 dark:hover:border-primary/30"
    >
      <div className="flex items-start gap-4">
        {Icon && (
          <motion.div
            whileHover={reduceMotion ? undefined : { scale: 1.1, rotate: 5 }}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-gradient-to-br from-primary/10 to-secondary/10 text-primary dark:from-primary/5 dark:to-secondary/5"
          >
            <Icon className="h-5 w-5" />
          </motion.div>
        )}
        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <h4 className="font-display text-sm font-semibold text-foreground">
              {name}
            </h4>
            <Badge
              variant={level >= 90 ? "primary" : level >= 80 ? "secondary" : "outline"}
              className="shrink-0 text-xs font-semibold"
            >
              {level}%
            </Badge>
          </div>
          {description && (
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted/40">
            <motion.div
              initial={reduceMotion ? { width: `${level}%` } : { width: 0 }}
              whileInView={
                reduceMotion ? undefined : { width: `${level}%` }
              }
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary to-secondary"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>(
    skillCategories[0]?.title ?? "Frontend"
  );
  const reduceMotion = useReducedMotion();

  const currentCategory = skillCategories.find((c) => c.title === activeCategory);

  return (
    <section id="skills" className="relative scroll-mt-24 py-12 md:py-16 dark:bg-transparent">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden dark:hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #f3efff 0%, #eef2ff 50%, #e8f7fb 100%)",
          }}
        />
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.13)_0%,transparent_65%)] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.10)_0%,transparent_65%)] blur-3xl" />
      </div>

      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Technologies I use to design, build, and ship reliable web applications."
          align="left"
        />

        {/* Category tabs */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-wrap gap-2 sm:justify-center"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === category.title
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30"
                  : "border border-border bg-card/50 text-foreground hover:border-primary/30 hover:bg-card dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              }`}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        {currentCategory && (
          <motion.div
            key={activeCategory}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {currentCategory.skills.map((skill, index) => {
              const categoryIcon = iconMap[activeCategory];
              return (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  description={skill.description}
                  icon={categoryIcon}
                />
              );
            })}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
