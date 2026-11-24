"use client";

import { motion } from "framer-motion";
import { Download, Expand, FileText } from "lucide-react";
import { Button } from "./Button";
import { documents } from "@/data/documents";

interface DocumentationSectionProps {
  /** Map of document id -> whether the PDF exists in /public (resolved on the server). */
  available: Record<string, boolean>;
}

export function DocumentationSection({ available }: DocumentationSectionProps) {
  return (
    <section id="documentation" className="py-20 bg-paper-raised border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-slate uppercase tracking-widest mb-3">Documents</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
            Technical Documentation
          </h2>
          <p className="text-lg text-slate max-w-3xl mx-auto leading-relaxed">
            A collection of professional and technical documents demonstrating my communication,
            documentation, and development skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => {
            const ready = available[doc.id];
            return (
              <motion.article
                key={doc.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-paper rounded-xl border border-line hover:border-signal transition-colors shadow-sm hover:shadow-lg flex flex-col overflow-hidden"
              >
                <div className="relative h-72 bg-signal-dim border-b border-line">
                  {ready ? (
                    <object
                      data={`${doc.file}#view=FitH`}
                      type="application/pdf"
                      aria-label={`${doc.title} preview`}
                      className="w-full h-full"
                    >
                      <div className="h-full flex flex-col items-center justify-center gap-3 p-6 text-center text-slate">
                        <FileText className="w-10 h-10 opacity-60" strokeWidth={1.25} aria-hidden="true" />
                        <p className="text-sm">Your browser can&apos;t display this PDF inline.</p>
                        <a href={doc.file} target="_blank" rel="noopener noreferrer" className="text-signal underline underline-offset-4 text-sm">
                          Open {doc.title} in a new tab
                        </a>
                      </div>
                    </object>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center gap-2 text-slate p-6 text-center">
                      <FileText className="w-10 h-10 opacity-50" strokeWidth={1.25} aria-hidden="true" />
                      <span className="font-mono text-xs uppercase tracking-widest">Document to be provided</span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-ink">{doc.title}</h3>
                    <p className="text-slate text-sm leading-relaxed">{doc.description}</p>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3">
                    {ready ? (
                      <>
                        <Button href={doc.file} size="sm" className="gap-2">
                          <Expand className="w-4 h-4" />
                          {doc.openLabel}
                        </Button>
                        <Button href={doc.file} download={doc.downloadName} variant="outline" size="sm" className="gap-2">
                          <Download className="w-4 h-4" />
                          Download PDF
                        </Button>
                      </>
                    ) : (
                      <Button disabled size="sm" variant="outline" className="gap-2">
                        Not yet available
                      </Button>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
