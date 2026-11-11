"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Modal } from "@/components/ui/Modal";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/constants";
import { transitions } from "@/lib/motion";
import type { Project } from "@/types";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function ProjectVisual({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted/40">
      <motion.div
        className="absolute inset-0"
        whileHover={reduceMotion ? undefined : { scale: 1.04 }}
        transition={transitions.soft}
      >
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
      <Badge className="absolute left-3 top-3" variant="primary">
        {project.category}
      </Badge>
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative scroll-mt-24 py-12 md:py-16 dark:bg-transparent">
      {/* Background — light: blue-cyan tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden dark:hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #eef2ff 0%, #e8f7fb 60%, #f0ebff 100%)" }} />
        <div className="absolute right-0 -top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.13)_0%,transparent_65%)] blur-3xl" />
        <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.10)_0%,transparent_65%)] blur-3xl" />
      </div>
      <Container>
        <SectionHeading
          eyebrow="Selected Projects"
          title="Featured projects"
          description="Three product-focused builds spanning personal study tools, school management, and online learning."
        />

        <Stagger className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3" delay={0.06}>
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <div 
                onClick={() => setSelected(project)}
                className="cursor-pointer"
              >
                <Card className="group flex h-full flex-col overflow-hidden p-4">
                  <ProjectVisual project={project} />
                  <div className="mt-5 flex flex-1 flex-col space-y-3 px-0.5 pb-0.5">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-primary">
                        {project.subtitle}
                      </p>
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <Button size="sm" onClick={(e) => {
                        e.stopPropagation();
                        setSelected(project);
                      }}>
                        View Details
                      </Button>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button size="sm" variant="ghost">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>

      <Modal
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        {selected ? (
          <div className="space-y-5">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
              />
            </div>
            <p className="text-sm font-medium text-primary">
              {selected.subtitle}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {selected.longDescription}
            </p>
            <div>
              <p className="mb-2 text-sm font-semibold text-foreground">
                Key Features
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {selected.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm text-muted-foreground"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {selected.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={selected.liveUrl}
                target="_blank"   
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button> 
               
              </a>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
