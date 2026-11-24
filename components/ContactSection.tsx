"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Copy, Check } from "lucide-react";
import { Button } from "./Button";
import { ContactForm } from "./ContactForm";
import { profile, emailComposeUrl } from "@/data/profile";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy my email address:", profile.email);
    }
  };
  const hasEmail = Boolean(profile.email);
  const strip = (u: string) => u.replace(/^https?:\/\/(www\.)?/, "");
  const links = [
    { name: "Email", icon: Mail, href: hasEmail ? emailComposeUrl(profile.email) : "", label: profile.email },
    { name: "LinkedIn", icon: Linkedin, href: profile.linkedin, label: strip(profile.linkedin) },
    { name: "GitHub", icon: Github, href: profile.github, label: strip(profile.github) },
  ];

  return (
    <section id="contact" className="py-20 bg-paper relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-slate uppercase tracking-widest mb-3">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            I&apos;m open to opportunities where I can contribute my skills, gain experience, and
            grow as a web developer. Feel free to reach out for collaborations, projects, or
            professional opportunities.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-10">
          {/* Primary contact methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-4"
          >
            {links.map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={contact.href ? { y: -4 } : undefined}
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center gap-3 p-6 h-full bg-paper-raised rounded-2xl border border-line hover:border-signal transition-all duration-300 group"
                  >
                    <div className="p-3 bg-signal-dim rounded-full group-hover:bg-signal group-hover:text-paper transition-colors text-signal">
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-ink font-semibold">{contact.name}</h4>
                      <p className="text-slate text-sm break-all">{contact.label}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex flex-col items-center text-center gap-3 p-6 h-full rounded-2xl border border-dashed border-line">
                    <div className="p-3 bg-signal-dim rounded-full text-slate">
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-ink font-semibold">{contact.name}</h4>
                      <p className="text-slate text-sm">Not set. Add it in data/profile.ts</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            {hasEmail && (
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line text-slate hover:text-signal hover:border-signal transition-colors text-sm"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied!" : "Copy email"}
                </button>
                <a
                  href={emailComposeUrl(profile.email)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line text-slate hover:text-signal hover:border-signal transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Open in Gmail
                </a>
              </div>
            )}
            <p className="flex items-center gap-2 text-slate">
              <MapPin className="w-4 h-4 text-signal" aria-hidden="true" />
              {profile.location}
            </p>
            {hasEmail ? (
              <Button href="#contact-form" size="lg" className="px-8 py-3 text-lg">
                <Mail className="w-5 h-5" />
                Get in Touch
              </Button>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Button disabled size="lg" className="px-8 py-3 text-lg">
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </Button>
                <p className="font-mono text-xs text-slate">Email address not set yet</p>
              </div>
            )}
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}