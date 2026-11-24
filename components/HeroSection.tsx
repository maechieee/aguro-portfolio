"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Github, Linkedin, Mail, User } from "lucide-react";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { heroSkills } from "@/data/skills";
import { profile, emailComposeUrl } from "@/data/profile";

const readouts = [
  { value: "BSIT", label: "Student" },
  { value: "2", label: "Academic project case studies" },
  { value: "2023–24", label: "Work immersion, PDRRMO" },
];

interface HeroSectionProps {
  resumeAvailable: boolean;
  photoAvailable: boolean;
}

export function HeroSection({ resumeAvailable, photoAvailable }: HeroSectionProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-paper text-ink relative overflow-hidden">
      {/* Faint blueprint grid texture */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-5">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
                >
                  Hi, I&apos;m {profile.shortName}.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="font-mono text-sm text-signal uppercase tracking-widest"
                >
                  {profile.title}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg text-ink max-w-lg leading-relaxed"
                >
                  {profile.valueProposition}
                </motion.p>
              </div>

              {/* Status readout row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-x-8 gap-y-3"
              >
                {readouts.map((r) => (
                  <div key={r.label} className="flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-ink">{r.value}</span>
                    <span className="font-mono text-xs text-slate uppercase tracking-wide">
                      {r.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-col sm:flex-row flex-wrap gap-4"
              >
                <Button
                  onClick={() => scrollToSection("#projects")}
                  size="lg"
                  className="px-8 py-3 text-lg"
                >
                  View My Projects
                </Button>

                {resumeAvailable ? (
                  <Button
                    href={profile.resumeUrl}
                    download="Jeremae-Aguro-Resume.pdf"
                    variant="outline"
                    size="lg"
                    className="px-8 py-3 text-lg"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </Button>
                ) : (
                  <Button
                    disabled
                    variant="outline"
                    size="lg"
                    className="px-8 py-3 text-lg"
                    title="Résumé PDF not added yet"
                  >
                    <Download className="w-5 h-5" />
                    Resume (coming soon)
                  </Button>
                )}
              </motion.div>

              <div className="flex flex-wrap gap-3">
                {(
                  [
                    { name: "GitHub", href: profile.github, icon: Github },
                    { name: "LinkedIn", href: profile.linkedin, icon: Linkedin },
                    { name: "Email", href: profile.email ? emailComposeUrl(profile.email) : "", icon: Mail },
                  ] as { name: string; href: string; icon: typeof Github }[]
                ).map((l) =>
                  l.href ? (
                    <a
                      key={l.name}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line text-slate hover:text-signal hover:border-signal transition-colors text-sm"
                    >
                      <l.icon className="w-4 h-4" />
                      {l.name}
                    </a>
                  ) : (
                    <span
                      key={l.name}
                      title={`${l.name} URL not set — add it in data/profile.ts`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-line text-slate/70 text-sm cursor-not-allowed"
                    >
                      <l.icon className="w-4 h-4" />
                      {l.name} (not set)
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="relative w-80 h-80 md:w-96 md:h-96"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-signal-dim rounded-full blur-2xl" />

                  {/* Image Container */}
                  <div className="relative w-full h-full rounded-full border-4 border-paper-raised shadow-xl overflow-hidden bg-signal-dim">
                    {photoAvailable ? (
                      <Image
                        src={profile.photo}
                        alt={`Portrait of ${profile.fullName}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                      />
                    ) : (
                      <div
                        role="img"
                        aria-label="Profile photo placeholder"
                        className="w-full h-full flex flex-col items-center justify-center gap-3 text-slate"
                      >
                        <User className="w-20 h-20 opacity-60" strokeWidth={1.25} />
                        <span className="font-mono text-xs uppercase tracking-widest">Photo to be added</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Tech Strip */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="pb-8 sm:pb-12"
        >
          <div className="bg-paper-raised rounded-2xl p-6 border border-line">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <span className="font-mono text-slate text-xs uppercase tracking-wide hidden sm:block">
                Skills:
              </span>
              <div className="flex flex-wrap justify-center gap-3">
                {heroSkills.map((name, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.06 }}
                  >
                    <Badge variant="outline">{name}</Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
