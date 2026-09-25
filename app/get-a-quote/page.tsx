import type { Metadata } from "next";
import { BUSINESS } from "@/lib/data/business";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Free Auto Body Repair Estimate — Blue Rose Auto Body",
  description:
    "Request a free auto body repair estimate from Blue Rose Auto Body & Collision in Springfield, OR. Collision repair, PDR, custom paint, and more. Call (541) 641-8877.",
  alternates: { canonical: "/get-a-quote/" },
};

export default function GetAQuotePage() {
  return (
    <>
      <section className="bg-[#1A1B1E] border-b border-[#2E3035] py-12 lg:py-16">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Get a Quote", href: "/get-a-quote/" }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 mt-2">
            Get a Free Auto Body Repair Estimate
          </h1>
          <p className="text-[#9CA3AF] text-xl max-w-2xl">
            Tell us about your vehicle and the damage — we&apos;ll get back to you promptly with an estimate. No
            obligation, no pressure.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2 bg-[#1A1B1E] border border-[#2E3035] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Vehicle &amp; Damage Information</h2>
              <QuoteForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#1A1B1E] border border-[#2E3035] rounded-2xl p-6">
                <h3 className="font-bold text-white text-lg mb-4">Prefer to Call?</h3>
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold text-lg rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  {BUSINESS.phone}
                </a>
                <p className="text-[#9CA3AF] text-xs text-center mt-3">{BUSINESS.hoursDisplay}</p>
              </div>

              <div className="bg-[#1A1B1E] border border-[#2E3035] rounded-2xl p-6 space-y-4">
                <h3 className="font-bold text-white text-base">What to Expect</h3>
                {[
                  { step: "1", text: "Submit your info and damage description" },
                  { step: "2", text: "We review and follow up promptly" },
                  { step: "3", text: "Bring your vehicle in for a full assessment" },
                  { step: "4", text: "We provide a written estimate before any work begins" },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#C0392B] text-white text-sm font-bold flex items-center justify-center">{step}</span>
                    <p className="text-[#9CA3AF] text-sm pt-1">{text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#1A1B1E] border border-[#2E3035] rounded-2xl p-6">
                <h3 className="font-bold text-white text-base mb-3">We Work With All Insurers</h3>
                <p className="text-[#9CA3AF] text-sm">
                  Have an insurance claim? Bring your claim number — we handle the paperwork and communicate directly
                  with your insurance company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function QuoteForm() {
  return (
    <form action="/api/quote" method="POST" className="space-y-5">
      {/* Honeypot */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="q-name" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Full Name *</label>
          <input id="q-name" name="name" type="text" required autoComplete="name" className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="q-phone" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Phone Number *</label>
          <input id="q-phone" name="phone" type="tel" required autoComplete="tel" className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm" placeholder="(541) 555-0000" />
        </div>
      </div>

      <div>
        <label htmlFor="q-email" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Email Address</label>
        <input id="q-email" name="email" type="email" autoComplete="email" className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm" placeholder="you@example.com" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="q-year" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Vehicle Year</label>
          <input id="q-year" name="vehicle_year" type="text" className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm" placeholder="2020" />
        </div>
        <div>
          <label htmlFor="q-make" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Make</label>
          <input id="q-make" name="vehicle_make" type="text" className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm" placeholder="Toyota" />
        </div>
        <div>
          <label htmlFor="q-model" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Model</label>
          <input id="q-model" name="vehicle_model" type="text" className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm" placeholder="Camry" />
        </div>
      </div>

      <div>
        <label htmlFor="q-service" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Service Needed</label>
        <select id="q-service" name="service" className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white focus:outline-none focus:border-[#C0392B] transition-colors text-sm">
          <option value="">Select a service…</option>
          <option>Collision Repair</option>
          <option>Auto Body Repair</option>
          <option>Custom Paint & Refinishing</option>
          <option>Paintless Dent Repair (PDR)</option>
          <option>Dent Repair</option>
          <option>Bumper Repair</option>
          <option>Panel Replacement</option>
          <option>Paint Matching</option>
          <option>Paint Correction</option>
          <option>Scratch Repair</option>
          <option>Bedliner</option>
          <option>Fabrication</option>
          <option>Undercoating</option>
          <option>Insurance Claim Repair</option>
          <option>Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="q-insurance" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Insurance Claim?</label>
        <select id="q-insurance" name="insurance_claim" className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white focus:outline-none focus:border-[#C0392B] transition-colors text-sm">
          <option value="">Select…</option>
          <option value="yes">Yes — I have a claim number</option>
          <option value="no">No — paying out of pocket</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="q-description" className="block text-sm font-semibold text-[#D1D5DB] mb-1.5">Describe the Damage *</label>
        <textarea id="q-description" name="description" required rows={4} className="w-full px-4 py-3 bg-[#232427] border border-[#2E3035] rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#C0392B] transition-colors text-sm resize-none" placeholder="Describe what happened and what panels or areas are damaged. More detail helps us provide a more accurate estimate." />
      </div>

      <button type="submit" className="w-full py-4 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold text-lg rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#C0392B] focus:ring-offset-2 focus:ring-offset-[#1A1B1E]">
        Request Free Estimate
      </button>
      <p className="text-[#9CA3AF] text-xs text-center">No spam. We&apos;ll only contact you about your estimate request.</p>
    </form>
  );
}
