"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, GraduationCap, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { experiences, education } from "@/data/experience";

type Tab = "education" | "experience";

const tabs: { id: Tab; label: string; icon: typeof Briefcase }[] = [
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "experience", label: "Experience", icon: Briefcase },
];

export function ExperienceSection() {
  const [tab, setTab] = useState<Tab>("education");

  return (
    <section id="about" className="py-20 bg-paper-raised border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-3">About me</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-ink tracking-tight leading-[1.05]">
            Student, builder, <span className="text-signal">learner</span>.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-paper rounded-3xl border border-line p-6 sm:p-8 flex flex-col gap-6"
          >
            <p className="text-lg text-ink leading-relaxed">{profile.summary}</p>

            <div className="mt-auto space-y-3">
              <p className="font-mono text-[11px] text-slate uppercase tracking-widest">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {education.interests.map((i) => (
                  <motion.span
                    key={i}
                    whileHover={{ y: -3, scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper-raised px-3.5 py-2 text-sm font-semibold text-ink cursor-default hover:border-signal transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-signal" aria-hidden="true" />
                    {i}
                  </motion.span>
                ))}
              </div>
              <p className="flex items-center gap-2 text-sm text-slate pt-2">
                <MapPin className="w-4 h-4 text-signal" aria-hidden="true" />
                {profile.location}
              </p>
            </div>
          </motion.div>

          {/* Interactive education / experience panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-paper rounded-3xl border border-line p-6 sm:p-8"
          >
            <div role="tablist" aria-label="Background" className="relative flex rounded-full bg-signal-dim p-1 mb-6">
              {tabs.map((t) => {
                const on = tab === t.id;
                return (
                  <button
                    key={t.id}
                    role="tab"
                    id={`about-tab-${t.id}`}
                    aria-selected={on}
                    aria-controls="about-panel"
                    onClick={() => setTab(t.id)}
                    className={`relative flex-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      on ? "text-paper" : "text-slate hover:text-ink"
                    }`}
                  >
                    {on && (
                      <motion.span
                        layoutId="about-tab-pill"
                        className="absolute inset-0 rounded-full bg-ink"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <t.icon className="w-4 h-4" aria-hidden="true" />
                      {t.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div id="about-panel" role="tabpanel" aria-labelledby={`about-tab-${tab}`} className="min-h-56">
              <AnimatePresence mode="wait">
                {tab === "education" ? (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <span className="inline-flex p-3 rounded-xl bg-signal-dim text-signal">
                      <GraduationCap className="w-6 h-6" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-xl font-bold text-ink">{education.degree}</h3>
                    <p className="font-mono text-xs uppercase tracking-wide text-slate">{education.status} | FILAMER CHRISTIAN UNIVERSITY</p>
                    <p className="text-sm text-slate leading-relaxed">
                      Studying web development, programming, and database management through hands-on
                      academic projects.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {experiences.map((exp) => (
                      <div key={exp.id} className="space-y-3">
                        <span className="inline-flex p-3 rounded-xl bg-signal-dim text-signal">
                          <Briefcase className="w-6 h-6" aria-hidden="true" />
                        </span>
                        <h3 className="font-display text-xl font-bold text-ink">{exp.role}</h3>
                        <p className="text-sm font-semibold text-slate">{exp.company}</p>
                        <div className="flex flex-wrap gap-3 font-mono text-xs text-slate">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                            {exp.location}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {exp.description.map((point) => (
                            <li key={point} className="flex gap-3 text-sm text-slate leading-relaxed">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
