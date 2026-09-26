"use client";

import { FormEvent, useState } from "react";
import { BUSINESS } from "@/lib/data/business";

type FormStatus = "idle" | "loading" | "success" | "error";

const SERVICES = [
  "Collision Repair",
  "Auto Body Repair",
  "Custom Paint & Refinishing",
  "Paintless Dent Repair (PDR)",
  "Dent Repair",
  "Bumper Repair",
  "Panel Replacement",
  "Paint Matching",
  "Paint Correction",
  "Scratch Repair",
  "Bedliner",
  "Fabrication",
  "Undercoating",
  "Insurance Claim Repair",
  "Other / Not Sure",
];

export default function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const today = new Date().toISOString().split("T")[0];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/quote", {
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
        <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
        <p className="text-[#9CA3AF] mb-6 max-w-sm">
          We&apos;ll review your request and reach out promptly. If you need faster service, call us directly.
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
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="q-name" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">
            Full Name <span className="text-[#E74C3C]">*</span>
          </label>
          <input
            id="q-name" name="name" type="text" required autoComplete="name"
            className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="q-phone" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">
            Phone Number <span className="text-[#E74C3C]">*</span>
          </label>
          <input
            id="q-phone" name="phone" type="tel" required autoComplete="tel"
            className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm"
            placeholder="(541) 555-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="q-email" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Email Address</label>
        <input
          id="q-email" name="email" type="email" autoComplete="email"
          className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="q-year" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Vehicle Year</label>
          <input
            id="q-year" name="vehicle_year" type="text"
            className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm"
            placeholder="2020"
          />
        </div>
        <div>
          <label htmlFor="q-make" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Make</label>
          <input
            id="q-make" name="vehicle_make" type="text"
            className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm"
            placeholder="Toyota"
          />
        </div>
        <div>
          <label htmlFor="q-model" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Model</label>
          <input
            id="q-model" name="vehicle_model" type="text"
            className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm"
            placeholder="Camry"
          />
        </div>
      </div>

      <div>
        <label htmlFor="q-service" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Service Needed</label>
        <select
          id="q-service" name="service"
          className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white focus:outline-none focus:border-[#C0392B] transition-colors text-sm"
        >
          <option value="">Select a service…</option>
          {SERVICES.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="q-insurance" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Insurance Claim?</label>
          <select
            id="q-insurance" name="insurance_claim"
            className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white focus:outline-none focus:border-[#C0392B] transition-colors text-sm"
          >
            <option value="">Select…</option>
            <option value="yes">Yes — I have a claim number</option>
            <option value="no">No — paying out of pocket</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="q-date" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Preferred Drop-Off Date</label>
          <input
            id="q-date" name="preferred_date" type="date" min={today}
            className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white focus:outline-none focus:border-[#C0392B] transition-colors text-sm [color-scheme:dark]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="q-description" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">
          Describe the Damage <span className="text-[#E74C3C]">*</span>
        </label>
        <textarea
          id="q-description" name="description" required rows={4}
          className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm resize-none"
          placeholder="Describe what happened and which panels/areas are damaged. More detail = more accurate estimate."
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
        {status === "loading" ? "Sending…" : "Request Free Estimate"}
      </button>
      <p className="text-[#9CA3AF] text-xs text-center">No spam. We&apos;ll only contact you about your estimate request.</p>
    </form>
  );
}
