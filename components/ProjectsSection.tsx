"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { SimpleProjectCard } from "./SimpleProjectCard";
import { Project, otherProjects } from "@/data/projects";
import { projectService } from "@/services/projectService";

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setProjects(await projectService.getAllProjects());
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-20 bg-paper-raised border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-slate uppercase tracking-widest mb-3">Academic case studies</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
              Flagship Projects
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
              Two academic projects, each documented as a case study: the problem, the
              architecture, my own contribution, and testing outcomes.
            </p>
          </motion.div>

          {loading ? (
            <div className="animate-pulse grid md:grid-cols-2 gap-8" aria-hidden="true">
              <div className="h-96 bg-line rounded-xl" />
              <div className="h-96 bg-line rounded-xl" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => openProjectModal(project)}
                />
              ))}
            </div>
          )}

          {/* More projects: compact cards, no case study. Hidden while the list is empty. */}
          {otherProjects.length > 0 && (
            <div className="mt-20">
              <div className="mb-8">
                <p className="font-mono text-xs text-slate uppercase tracking-widest mb-3">Other work</p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-ink tracking-tight">
                  More Projects
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <SimpleProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeProjectModal} />
    </>
  );
}
