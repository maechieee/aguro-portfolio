"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "./Button";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink placeholder:text-slate/70 focus:outline-none focus:border-signal focus:ring-2 focus:ring-signal/20 transition";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={onSubmit}
      className="scroll-mt-24 space-y-4 rounded-2xl border border-line bg-paper-raised p-6 sm:p-8"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-slate">
            Name
          </label>
          <input id="cf-name" name="name" required maxLength={100} autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-slate">
            Your email
          </label>
          <input id="cf-email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-slate">
          Message
        </label>
        <textarea id="cf-message" name="message" required rows={5} maxLength={5000} className={`${field} resize-y`} />
      </div>

      {/* Honeypot — hidden from people, tempting to bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "sending"} className="gap-2">
          {status === "sending" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          {status === "sending" ? "Sending…" : "Send Message"}
        </Button>
        <p role="status" aria-live="polite" className="text-sm">
          {status === "success" && (
            <span className="inline-flex items-center gap-2 text-live">
              <CheckCircle2 className="w-4 h-4" /> Message sent. Thank you, I&apos;ll get back to you soon.
            </span>
          )}
          {status === "error" && (
            <span className="inline-flex items-center gap-2 text-ink">
              <AlertCircle className="w-4 h-4 text-signal" /> {error}
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
