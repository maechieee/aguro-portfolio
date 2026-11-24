"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "./Badge";
import { Project } from "@/data/projects";
import { ExternalLink, Github, ImageIcon } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const hasLinks = Boolean(project.liveUrl || project.githubUrl);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group h-full"
    >
      <div className="bg-paper rounded-xl overflow-hidden border border-line hover:border-signal transition-all duration-300 shadow-sm hover:shadow-lg h-full flex flex-col relative">
        <div className="relative h-48 md:h-56 overflow-hidden bg-signal-dim">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate">
              <ImageIcon className="w-10 h-10 opacity-50" strokeWidth={1.25} aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest">Screenshot to be added</span>
            </div>
          )}

          {hasLinks && (
            <div className="absolute inset-0 z-10 bg-ink/60 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} repository`}
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          )}
        </div>

        <div className="p-6 space-y-4 flex-1 flex flex-col">
          <div className="space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate">
              Academic project
            </span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-ink group-hover:text-signal transition-colors">
              {project.title}
            </h3>
            <p className="text-slate leading-relaxed">{project.shortDescription}</p>
          </div>

          {project.techStack.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="font-mono text-[11px] uppercase tracking-wide text-slate">
              Tech stack: to be verified
            </p>
          )}

          <div className="pt-2 mt-auto">
            <button
              onClick={onClick}
              className="text-sm font-medium text-slate group-hover:text-signal transition-colors after:absolute after:inset-0"
            >
              View Project Details →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
