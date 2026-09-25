import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/data/business";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: `${BUSINESS.name} | Collision Repair Springfield & Eugene, OR`,
  description:
    "Blue Rose Auto Body & Collision in Springfield, OR — expert collision repair, custom painting, paintless dent removal, and auto body services for Eugene, Springfield, and Lane County.",
  alternates: { canonical: "/" },
};

const CORE_SERVICES = SERVICES.slice(0, 8);

const TRUST_SIGNALS = [
  { label: "All Insurance Companies", icon: "🏦", desc: "We work directly with every major insurer and handle the paperwork for you." },
  { label: "Precision Paint Matching", icon: "🎯", desc: "Computerized color-matching technology for seamless, factory-accurate results." },
  { label: "Serving Lane County", icon: "📍", desc: "Eugene, Springfield, Cottage Grove, Veneta, and all surrounding communities." },
  { label: "Wheelchair Accessible", icon: "♿", desc: "Accessible entrance, restroom, and parking available at our Springfield location." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
        style={{
          background:
            "linear-gradient(135deg, #0A0A0B 0%, #1A1B1E 50%, #0A0A0B 100%)",
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #C0392B 0%, transparent 50%), radial-gradient(circle at 75% 75%, #C0392B 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="container-xl relative z-10 text-center py-20 lg:py-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C0392B]/10 border border-[#C0392B]/30 text-[#E74C3C] text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E74C3C] animate-pulse" aria-hidden="true" />
            Springfield &amp; Eugene, Oregon
          </div>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6 max-w-4xl mx-auto"
          >
            Expert Collision Repair &amp;{" "}
            <span className="text-[#C0392B]">Auto Body</span> Services
          </h1>
          <p className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-8 leading-relaxed">
            Blue Rose Auto Body &amp; Collision restores your vehicle to pre-accident condition using precision repair
            techniques and factory-matched paint — serving Eugene, Springfield, and all of Lane County, Oregon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-[#C0392B]/25 min-w-[220px] justify-center"
              aria-label={`Call Blue Rose Auto Body at ${BUSINESS.phone}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {BUSINESS.phone}
            </a>
            <Link
              href="/get-a-quote/"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#2E3035] hover:border-[#C0392B] text-white font-bold text-lg rounded-xl transition-colors min-w-[220px] justify-center hover:bg-[#C0392B]/10"
            >
              Get a Free Estimate
            </Link>
          </div>
          {/* Quick info bar */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#9CA3AF]">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#C0392B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Mon–Fri 8 AM–5 PM, Sat 10 AM–5 PM
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#C0392B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              3436 Olympic St, Ste 200, Springfield, OR
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#C0392B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              All Insurance Companies Accepted
            </span>
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="bg-[#1A1B1E] border-y border-[#2E3035] py-12" aria-label="Why choose us">
        <div className="container-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_SIGNALS.map((signal) => (
              <div key={signal.label} className="flex flex-col items-start gap-3 p-5 rounded-xl bg-[#232427] border border-[#2E3035] hover:border-[#C0392B]/40 transition-colors">
                <span className="text-3xl" aria-hidden="true">{signal.icon}</span>
                <h3 className="font-bold text-white text-base">{signal.label}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{signal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-pad" aria-labelledby="services-heading">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
              Auto Body Services in Eugene &amp; Springfield, OR
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
              From collision repair to custom painting and paintless dent removal — Blue Rose Auto Body &amp; Collision
              handles every aspect of vehicle restoration.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {CORE_SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group flex flex-col gap-3 p-5 rounded-xl bg-[#1A1B1E] border border-[#2E3035] hover:border-[#C0392B]/50 hover:bg-[#232427] transition-all"
              >
                <span className="text-2xl" aria-hidden="true">{service.icon}</span>
                <h3 className="font-bold text-white group-hover:text-[#E74C3C] transition-colors">{service.shortName}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed line-clamp-3">{service.intro.slice(0, 100)}…</p>
                <span className="text-[#C0392B] text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#2E3035] hover:border-[#C0392B] text-white font-semibold rounded-xl transition-colors hover:bg-[#C0392B]/10"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── INSURANCE ── */}
      <section className="bg-[#1A1B1E] border-y border-[#2E3035] section-pad" aria-labelledby="insurance-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="insurance-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
                Hassle-Free Insurance Claim Repairs
              </h2>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-6">
                Blue Rose Auto Body &amp; Collision works directly with all major insurance companies. Bring your claim
                number — we handle the documentation, estimates, and insurer communication so you can focus on getting
                back on the road.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "You choose your repair shop — Oregon law protects that right",
                  "We submit estimates and handle supplement negotiations",
                  "Direct insurer billing — just pay your deductible",
                  "We advocate for quality parts and proper repair procedures",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#D1D5DB]">
                    <svg className="w-5 h-5 text-[#C0392B] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services/insurance-claim-repair/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold rounded-xl transition-colors"
              >
                Learn About Insurance Claims →
              </Link>
            </div>
            <div className="bg-[#232427] border border-[#2E3035] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-2">Request a Free Estimate</h3>
              <p className="text-[#9CA3AF] text-sm mb-6">
                Tell us about your vehicle and damage — we&apos;ll get back to you quickly.
              </p>
              <Link
                href="/get-a-quote/"
                className="flex items-center justify-center w-full py-4 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold text-lg rounded-xl transition-colors mb-4"
              >
                Get a Free Online Estimate
              </Link>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="flex items-center justify-center gap-2 w-full py-4 border border-[#2E3035] hover:border-[#C0392B] text-white font-bold text-lg rounded-xl transition-colors hover:bg-[#C0392B]/10"
              >
                <svg className="w-5 h-5 text-[#C0392B]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {BUSINESS.phone}
              </a>
              <p className="text-[#9CA3AF] text-xs text-center mt-3">{BUSINESS.hoursDisplay}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="section-pad" aria-labelledby="locations-heading">
        <div className="container-xl">
          <div className="text-center mb-10">
            <h2 id="locations-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
              Serving Eugene, Springfield &amp; All of Lane County
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
              From Junction City to Cottage Grove and Veneta to Creswell — if you&apos;re in Lane County, you&apos;re
              close to Blue Rose Auto Body &amp; Collision.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}/`}
                className="flex items-center gap-2 p-3 rounded-lg bg-[#1A1B1E] border border-[#2E3035] hover:border-[#C0392B]/50 hover:bg-[#232427] transition-all text-[#D1D5DB] hover:text-white text-sm font-medium"
              >
                <svg className="w-4 h-4 text-[#C0392B] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {loc.city}, {loc.stateAbbr}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/locations/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#2E3035] hover:border-[#C0392B] text-white font-semibold rounded-xl transition-colors hover:bg-[#C0392B]/10"
            >
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner />

      {/* ── CONTACT INFO ── */}
      <section className="section-pad bg-[#1A1B1E] border-t border-[#2E3035]" aria-labelledby="contact-heading">
        <div className="container-xl">
          <h2 id="contact-heading" className="text-3xl font-black text-white mb-8 text-center">
            Visit Blue Rose Auto Body &amp; Collision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#232427] border border-[#2E3035] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#C0392B]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#C0392B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white">Our Location</h3>
              </div>
              <address className="not-italic text-[#9CA3AF] text-sm">
                <a
                  href="https://maps.google.com/?q=3436+Olympic+St+Ste+200+Springfield+OR+97478"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS.address.street}<br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                </a>
              </address>
            </div>
            <div className="bg-[#232427] border border-[#2E3035] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#C0392B]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#C0392B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white">Phone</h3>
              </div>
              <a href={`tel:${BUSINESS.phoneTel}`} className="text-[#D1D5DB] font-semibold text-lg hover:text-white transition-colors">
                {BUSINESS.phone}
              </a>
            </div>
            <div className="bg-[#232427] border border-[#2E3035] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#C0392B]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#C0392B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white">Hours</h3>
              </div>
              <p className="text-[#9CA3AF] text-sm">{BUSINESS.hoursDisplay}</p>
              <p className="text-[#9CA3AF] text-sm mt-1">Sunday: Closed</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold rounded-xl transition-colors"
            >
              Get Directions &amp; Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
