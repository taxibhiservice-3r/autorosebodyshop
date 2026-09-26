"use client";

import { FormEvent, useState } from "react";
import { BUSINESS } from "@/lib/data/business";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(body.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-[#9CA3AF] mb-6 max-w-sm">
          We&apos;ll get back to you as soon as possible. For urgent help, call us directly.
        </p>
        <a
          href={`tel:${BUSINESS.phoneTel}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold rounded-xl transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          {BUSINESS.phone}
        </a>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-[#9CA3AF] hover:text-white underline transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">
            Name <span className="text-[#E74C3C]">*</span>
          </label>
          <input
            id="contact-name" name="name" type="text" required autoComplete="name"
            className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">
            Phone <span className="text-[#E74C3C]">*</span>
          </label>
          <input
            id="contact-phone" name="phone" type="tel" required autoComplete="tel"
            className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm"
            placeholder="(541) 555-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Email</label>
        <input
          id="contact-email" name="email" type="email" autoComplete="email"
          className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="contact-vehicle" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">
          Vehicle (Year / Make / Model)
        </label>
        <input
          id="contact-vehicle" name="vehicle" type="text"
          className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm"
          placeholder="e.g. 2019 Toyota Camry"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">
          Message <span className="text-[#E74C3C]">*</span>
        </label>
        <textarea
          id="contact-message" name="message" required rows={4}
          className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm resize-none"
          placeholder="Describe your vehicle damage or question…"
        />
      </div>

      {status === "error" && (
        <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-[#C0392B] hover:bg-[#E74C3C] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#C0392B] focus:ring-offset-2 focus:ring-offset-[#1A1B1E]"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
      <p className="text-[#9CA3AF] text-xs text-center">
        Or call us directly at{" "}
        <a href={`tel:${BUSINESS.phoneTel}`} className="text-[#C0392B] hover:text-[#E74C3C] font-semibold">
          {BUSINESS.phone}
        </a>
      </p>
    </form>
  );
}
