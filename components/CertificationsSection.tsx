"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, ChevronDown } from "lucide-react";
import { certifications, awards } from "@/data/certifications";

// Show this many first; the rest sit behind a "Show all" button.
const INITIAL_VISIBLE = 6;

export function CertificationsSection() {
  const [showAll, setShowAll] = useState(false);
  const hasMore = certifications.length > INITIAL_VISIBLE;
  const visible = showAll ? certifications : certifications.slice(0, INITIAL_VISIBLE);

  return (
    <section id="certifications" className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs text-slate uppercase tracking-widest mb-3">Credentials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
            Certifications
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Certificates and training that support my skills.
          </p>
        </motion.div>

        {certifications.length > 0 ? (
          <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-paper-raised rounded-xl border border-line hover:border-signal transition-colors p-6 flex gap-4"
              >
                <div className="p-3 h-fit bg-signal-dim rounded-lg text-signal">
                  <Award className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-ink">{c.title}</h3>
                  <p className="text-sm text-slate">{c.issuer}</p>
                  <p className="font-mono text-xs text-slate mt-2">{c.date}</p>
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-signal mt-2 hover:underline"
                    >
                      Verify <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {hasMore && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAll((s) => !s)}
                aria-expanded={showAll}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-raised px-5 py-2.5 text-sm font-semibold text-ink hover:border-signal hover:text-signal transition-colors"
              >
                {showAll ? "Show fewer" : `Show all ${certifications.length} certifications`}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </div>
          )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto rounded-2xl border border-dashed border-line bg-paper-raised p-8 text-center"
          >
            <Award className="w-10 h-10 mx-auto text-slate opacity-60 mb-3" strokeWidth={1.25} aria-hidden="true" />
            <p className="font-mono text-xs uppercase tracking-widest text-slate">
              Certifications to be added
            </p>
          </motion.div>
        )}

        {/* Awards & leadership: compact rows. Hidden while the list is empty. */}
        {awards.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <p className="font-mono text-xs text-slate uppercase tracking-widest mb-3">Recognition</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-ink tracking-tight mb-6">
              Awards &amp; Leadership
            </h3>
            <ul className="grid md:grid-cols-2 gap-x-8 rounded-xl border border-line bg-paper-raised px-5">
              {awards.map((a) => (
                <li
                  key={a.id}
                  className="flex items-baseline justify-between gap-4 py-3.5 border-b border-line last:border-b-0 md:[&:nth-last-child(2):nth-child(odd)]:border-b-0"
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-ink">{a.title}</p>
                    {a.org && <p className="text-sm text-slate">{a.org}</p>}
                  </div>
                  <span className="font-mono text-xs text-slate whitespace-nowrap">{a.date}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
