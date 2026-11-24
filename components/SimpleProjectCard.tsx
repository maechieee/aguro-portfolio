"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "./Badge";
import { SimpleProject } from "@/data/projects";
import { ExternalLink, Github, ImageIcon } from "lucide-react";

interface SimpleProjectCardProps {
  project: SimpleProject;
  index: number;
}

export function SimpleProjectCard({ project, index }: SimpleProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="bg-paper rounded-xl overflow-hidden border border-line hover:border-signal transition-colors duration-300 shadow-sm flex flex-col h-full"
    >
      <div className="relative aspect-video overflow-hidden bg-signal-dim">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate">
            <ImageIcon className="w-8 h-8 opacity-50" strokeWidth={1.25} aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest">Screenshot to be added</span>
          </div>
        )}
      </div>

      <div className="p-5 space-y-3 flex-1 flex flex-col">
        <h4 className="font-display text-lg font-bold text-ink">{project.title}</h4>
        <p className="text-slate text-sm leading-relaxed">{project.description}</p>

        {project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-auto pt-2 flex flex-wrap gap-4 text-sm font-medium">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate hover:text-signal transition-colors"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                Repository
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate hover:text-signal transition-colors"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
