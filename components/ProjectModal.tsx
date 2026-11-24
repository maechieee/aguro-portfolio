"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Modal } from "./Modal";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Pending } from "./Pending";
import { Project } from "@/data/projects";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Maximize, X, ImageIcon } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

function CaseStudyBlock({ letter, title, children }: { letter: string; title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h4 className="flex items-baseline gap-2 text-base sm:text-lg md:text-xl font-bold">
        <span className="font-mono text-xs text-signal">{letter}</span>
        {title}
      </h4>
      {children}
    </section>
  );
}

function Field({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="space-y-1">
      <p className="font-mono text-[11px] uppercase tracking-widest text-slate">{label}</p>
      {value ? (
        <p className="text-slate text-sm sm:text-base leading-relaxed">{value}</p>
      ) : (
        <Pending>To be verified from the project repository/documentation</Pending>
      )}
    </div>
  );
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!project) return null;

  const shots = project.screenshots;
  const hasShots = shots.length > 0;
  const { caseStudy: cs } = project;
  const arch = cs.architecture;

  const nextImage = () => setCurrentImageIndex((prev) => (prev === shots.length - 1 ? 0 : prev + 1));
  const prevImage = () => setCurrentImageIndex((prev) => (prev === 0 ? shots.length - 1 : prev - 1));

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-6xl">
      <div className="bg-paper-raised text-ink flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 md:p-8 border-b border-line">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6">
            <div className="flex-1 w-full">
              <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-slate mb-2">
                Academic project case study
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 tracking-tight"
              >
                {project.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-slate text-sm sm:text-base md:text-lg leading-relaxed"
              >
                {project.fullDescription ?? project.shortDescription}
              </motion.p>
            </div>

            {/* E. Project links — real URLs only, otherwise an honest unavailable state */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-row flex-wrap sm:flex-col lg:flex-row gap-2 sm:gap-3 w-full sm:w-auto"
            >
              {project.githubUrl ? (
                <Button href={project.githubUrl} className="gap-2 text-sm flex-1 sm:flex-initial px-3 py-2">
                  <Github className="w-4 h-4" />
                  View Repository
                </Button>
              ) : (
                <Button disabled variant="outline" className="gap-2 text-sm flex-1 sm:flex-initial px-3 py-2">
                  <Github className="w-4 h-4" />
                  Repository unavailable
                </Button>
              )}
              {project.liveUrl ? (
                <Button href={project.liveUrl} variant="outline" className="gap-2 text-sm flex-1 sm:flex-initial px-3 py-2">
                  <ExternalLink className="w-4 h-4" />
                  View Live Demo
                </Button>
              ) : (
                <Button disabled variant="outline" className="gap-2 text-sm flex-1 sm:flex-initial px-3 py-2">
                  <ExternalLink className="w-4 h-4" />
                  No live demo
                </Button>
              )}
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left - Screenshots */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 sm:space-y-6 lg:self-start"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Project Screenshots</h3>

              {hasShots ? (
                <>
                  <div
                    className="relative aspect-video bg-signal-dim rounded-lg overflow-hidden border border-line group cursor-pointer"
                    onClick={() => setIsFullscreen(true)}
                  >
                    <Image
                      src={shots[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsFullscreen(true);
                      }}
                      aria-label="View fullscreen"
                      className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                    >
                      <Maximize className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </button>
                    {shots.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          aria-label="Previous screenshot"
                          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
                        >
                          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          aria-label="Next screenshot"
                          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
                        >
                          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                        </button>
                      </>
                    )}
                    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 px-2 py-0.5 sm:px-3 sm:py-1 bg-black/70 text-white rounded-full text-xs sm:text-sm">
                      {currentImageIndex + 1} / {shots.length}
                    </div>
                  </div>

                  {shots.length > 1 && (
                    <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2">
                      {shots.map((screenshot, index) => (
                        <button
                          key={screenshot}
                          onClick={() => setCurrentImageIndex(index)}
                          aria-label={`Show screenshot ${index + 1}`}
                          className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded border-2 overflow-hidden transition-all shrink-0 ${
                            index === currentImageIndex ? "border-signal" : "border-line hover:border-slate"
                          }`}
                        >
                          <Image src={screenshot} alt="" fill sizes="80px" className="object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="aspect-video rounded-lg border border-dashed border-line bg-paper flex flex-col items-center justify-center gap-2 text-slate">
                  <ImageIcon className="w-10 h-10 opacity-50" strokeWidth={1.25} aria-hidden="true" />
                  <span className="font-mono text-xs uppercase tracking-widest">Screenshots to be added</span>
                </div>
              )}

              <div>
                <h4 className="text-base sm:text-lg font-bold mb-3">Technology Stack</h4>
                {project.techStack.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <Pending>Technologies to be verified from the repository</Pending>
                )}
              </div>
            </motion.div>

            {/* Right - Case study */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <CaseStudyBlock letter="A" title="The Problem">
                {cs.problem ? (
                  <p className="text-slate leading-relaxed text-sm sm:text-base">{cs.problem}</p>
                ) : (
                  <Pending>Problem statement to be provided: who is affected, how the current process falls short, and why the system is needed.</Pending>
                )}
              </CaseStudyBlock>

              <CaseStudyBlock letter="B" title="System Architecture & Tech Stack Justification">
                <Field label="Overview" value={arch.overview} />
                <Field label="Frontend" value={arch.frontend} />
                <Field label="Backend" value={arch.backend} />
                <Field label="Database" value={arch.database} />
                <Field label="How components communicate" value={arch.communication} />
                <Field label="Why these technologies" value={arch.justification} />
              </CaseStudyBlock>

              <CaseStudyBlock letter="C" title="My Individual Contributions">
                {cs.contributions.length > 0 ? (
                  <ul className="space-y-2 text-slate text-sm sm:text-base">
                    {cs.contributions.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-signal rounded-full mt-2 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Pending>My specific contributions, as distinct from the group&apos;s work, to be provided.</Pending>
                )}
              </CaseStudyBlock>

              <CaseStudyBlock letter="D" title="Measurable Results & Testing Outcomes">
                {cs.results.length > 0 ? (
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cs.results.map((r) => (
                      <div key={r.label} className="rounded-lg border border-line bg-paper p-3">
                        <dd className="font-display text-xl font-bold text-ink">{r.value}</dd>
                        <dt className="font-mono text-[11px] uppercase tracking-wide text-slate">{r.label}</dt>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <Pending>Testing results to be provided</Pending>
                )}
              </CaseStudyBlock>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {isFullscreen && hasShots && (
        <div className="fixed inset-0 z-100 bg-black flex items-center justify-center" onClick={() => setIsFullscreen(false)}>
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {shots.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 rounded-full text-sm text-white">
            {currentImageIndex + 1} / {shots.length}
          </div>

          <div className="relative w-full h-full p-4">
            <Image
              src={shots[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </Modal>
  );
}
