"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Database, Wrench, LucideIcon } from "lucide-react";
import { skillCategories, otherSkills, tierInfo, SkillTier } from "@/data/skills";

const catIcon: Record<string, LucideIcon> = {
  languages: Code2,
  frameworks: Layers,
  databases: Database,
  tools: Wrench,
};

const tierDot: Record<SkillTier, string> = {
  applied: "bg-signal",
  working: "bg-ink",
  familiar: "bg-slate/50",
};

const tiers = Object.keys(tierInfo) as SkillTier[];

export function SkillsStrip() {
  // Clicking a legend item spotlights that tier; clicking it again clears the filter.
  const [active, setActive] = useState<SkillTier | null>(null);

  return (
    <section id="skills" aria-label="Skills" className="py-20 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-[1fr_auto] gap-6 items-end mb-8"
        >
          <div>
            <p className="font-mono text-xs text-signal uppercase tracking-widest mb-3">
              Skills matrix
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-ink tracking-tight leading-[1.05]">
              Skills I&apos;m <span className="text-signal">growing</span> with.
            </h2>
          </div>
          <p className="text-slate max-w-sm leading-relaxed">
            Organized by how I&apos;ve actually used each skill. No arbitrary percentages or
            inflated expertise claims.
          </p>
        </motion.div>

        {/* Interactive legend / filter */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter skills by familiarity">
          {tiers.map((t) => {
            const on = active === t;
            return (
              <button
                key={t}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(on ? null : t)}
                title={tierInfo[t].hint}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide transition-colors ${
                  on
                    ? "border-signal bg-signal-dim text-ink"
                    : "border-line text-slate hover:border-signal hover:text-ink"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${tierDot[t]}`} />
                {tierInfo[t].label}
              </button>
            );
          })}
          {active && (
            <button
              type="button"
              onClick={() => setActive(null)}
              className="px-2 font-mono text-[11px] uppercase tracking-wide text-slate hover:text-signal"
            >
              Clear
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = catIcon[cat.id] ?? Code2;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group bg-paper-raised rounded-3xl border border-line hover:border-signal hover:shadow-lg transition-all p-6 sm:p-8"
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="p-3 rounded-xl bg-signal-dim text-signal transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink leading-tight">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-sm text-slate mb-6 sm:pl-[4.25rem]">{cat.blurb}</p>

                <ul className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => {
                    const dim = active !== null && active !== skill.tier;
                    return (
                      <li
                        key={skill.name}
                        className={`inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-2 text-sm transition-all duration-200 hover:border-signal hover:-translate-y-0.5 ${
                          dim ? "opacity-30" : "opacity-100"
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full ${tierDot[skill.tier]}`} />
                        <span className="font-semibold text-ink">{skill.name}</span>
                        <span className="hidden sm:inline border-l border-line pl-2 font-mono text-[10px] uppercase tracking-wide text-slate">
                          {tierInfo[skill.tier].label}
                        </span>
                        <span className="sr-only sm:hidden">{tierInfo[skill.tier].label}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap items-center gap-2"
        >
          <span className="font-mono text-[11px] text-slate uppercase tracking-widest mr-2">
            Also relevant
          </span>
          {otherSkills.map((s) => (
            <span
              key={s}
              className="rounded-full bg-signal-dim px-3 py-1 text-sm text-ink transition-colors hover:bg-line"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
