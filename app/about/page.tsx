import type { Metadata } from "next";
import { BUSINESS } from "@/lib/data/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Blue Rose Auto Body & Collision — Springfield, OR Since 1994",
  description:
    "Blue Rose Auto Body & Collision has served Springfield and Eugene, OR since 1994. 32 years of Lane County collision repair, custom painting, and auto body work from our Olympic Street shop.",
  alternates: { canonical: "/about/" },
};

const SERVICES_LIST = [
  "Collision Repair", "Auto Body Repair", "Custom Paint & Refinishing",
  "Paintless Dent Repair (PDR)", "Bumper Repair", "Panel Replacement",
  "Paint Matching", "Paint Correction", "Scratch Repair",
  "Bedliner", "Fabrication", "Undercoating", "Insurance Claim Repairs",
];

const HOW_WE_WORK = [
  { step: "1", title: "Written estimate before any work begins", desc: "We document the damage with photos, explain the repair approach in plain language, and give you a written price. No work starts without your approval — no surprise charges at pickup." },
  { step: "2", title: "We handle the insurance paperwork", desc: "Bring your claim number. We contact your insurer, prepare the estimate, handle adjuster communications, and negotiate supplements if additional damage turns up during repairs." },
  { step: "3", title: "Computerized color matching", desc: "We read your vehicle's actual current paint color with a spectrophotometer — not just the factory code. Oregon sun and rain fade paint differently on every car. We measure what's actually there and mix to match it." },
  { step: "4", title: "Walk-through before delivery", desc: "When repairs are complete, we walk through the work with you. If anything doesn't meet your expectations, we address it before you drive away." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#1A1B1E] border-b border-[#2E3035] py-12 lg:py-16">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "About", href: "/about/" }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 mt-2">
            About Blue Rose Auto Body &amp; Collision
          </h1>
          <p className="text-[#9CA3AF] text-xl max-w-3xl leading-relaxed">
            Springfield&apos;s collision repair and auto body shop since 1994 — 32 years serving Eugene,
            Springfield, and all of Lane County from our Olympic Street location.
          </p>
        </div>
      </section>

      {/* ── FOUNDING STORY ── */}
      <section className="section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Thirty-Two Years in Springfield — Built on Repeat Customers and Word of Mouth
              </h2>
              <div className="space-y-4 text-[#9CA3AF] leading-relaxed">
                <p>
                  When Blue Rose Auto Body &amp; Collision opened in Springfield in 1994, Olympic Street looked
                  different. Eugene–Springfield was a smaller metro, and most shops earned their customers the
                  old-fashioned way — by doing the work right, communicating honestly, and making sure drivers
                  had a reason to come back. That&apos;s still how we operate.
                </p>
                <p>
                  Over three decades, we&apos;ve repaired vehicles for parents who now bring in their kids&apos; cars.
                  We&apos;ve handled collision repairs for drivers who moved to Cottage Grove, Veneta, and Junction
                  City but still make the drive to Springfield because they know what to expect here. That kind
                  of long-term relationship doesn&apos;t happen with advertising — it happens by fixing cars the
                  right way every time.
                </p>
                <p>
                  Our shop at 3436 Olympic St, Ste 200 handles the full range of auto body work: collision repair,
                  custom painting, paintless dent removal, bumper repair, panel replacement, scratch repair,
                  paint matching, bedliner, fabrication, and undercoating. Insurance claim repairs are a significant
                  part of what we do, and after 30-plus years working with Oregon insurers, we know exactly how
                  to write an estimate, negotiate supplements, and get repairs authorized properly.
                </p>
                <p>
                  Oregon law gives you the right to take your vehicle to any licensed body shop after an
                  accident — your insurer cannot force you to use their preferred shop. We mention this to every
                  customer who comes in with a claim, because not everyone knows it. We&apos;ve been advocating
                  for proper repair authorization and OEM parts since before most of today&apos;s insurance apps
                  existed.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {/* Key facts */}
              <div className="bg-[#1A1B1E] border border-[#2E3035] rounded-2xl p-6">
                <h3 className="font-bold text-white text-lg mb-4">Shop Details</h3>
                <dl className="space-y-3 text-sm">
                  {[
                    { dt: "Established", dd: <span className="text-[#9CA3AF]">1994 — serving Lane County for 32 years</span> },
                    { dt: "Address", dd: <a href="https://maps.google.com/?q=3436+Olympic+St+Ste+200+Springfield+OR+97478" target="_blank" rel="noopener noreferrer" className="text-[#C0392B] hover:text-[#E74C3C] transition-colors">{BUSINESS.address.full}</a> },
                    { dt: "Phone", dd: <a href={`tel:${BUSINESS.phoneTel}`} className="text-[#C0392B] hover:text-[#E74C3C] transition-colors font-semibold">{BUSINESS.phone}</a> },
                    { dt: "Hours", dd: <span className="text-[#9CA3AF]">{BUSINESS.hoursDisplay}</span> },
                    { dt: "Accessibility", dd: <span className="text-[#9CA3AF]">Wheelchair-accessible entrance, restroom &amp; parking</span> },
                    { dt: "Payment", dd: <span className="text-[#9CA3AF]">Credit card, debit card, cash</span> },
                  ].map(({ dt, dd }) => (
                    <div key={dt} className="flex gap-4">
                      <dt className="font-semibold text-[#D1D5DB] w-28 flex-shrink-0">{dt}</dt>
                      <dd>{dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Paint matching callout */}
              <div className="bg-[#232427] border border-[#C0392B]/30 rounded-2xl p-6">
                <h3 className="font-bold text-white text-base mb-2">Computerized Paint Matching</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  We use a spectrophotometer to read your vehicle&apos;s actual current paint color — not just the
                  factory formula. Sun exposure and Oregon rain fade every car differently. Measuring what&apos;s
                  actually on the panels is the only way to get a repair that disappears instead of standing out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="bg-[#1A1B1E] border-y border-[#2E3035] section-pad">
        <div className="container-xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
            What to Expect When You Bring Your Vehicle In
          </h2>
          <p className="text-[#9CA3AF] text-lg mb-8 max-w-2xl">
            The same process we&apos;ve used since 1994 — honest assessment, written estimate, proper repair.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HOW_WE_WORK.map((item) => (
              <div key={item.step} className="flex gap-4 p-5 rounded-xl bg-[#232427] border border-[#2E3035]">
                <div className="w-8 h-8 rounded-full bg-[#C0392B] flex items-center justify-center flex-shrink-0 font-black text-white text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">{item.title}</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OFFERED ── */}
      <section className="section-pad">
        <div className="container-xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
            Services We Provide
          </h2>
          <p className="text-[#9CA3AF] text-lg mb-6 max-w-2xl">
            From a scuffed bumper to structural collision damage — 13 services, all under one roof in Springfield.
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {SERVICES_LIST.map((s) => (
              <li key={s} className="flex items-center gap-2 text-[#D1D5DB] text-sm">
                <svg className="w-4 h-4 text-[#C0392B] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── LANE COUNTY CONTEXT ── */}
      <section className="bg-[#1A1B1E] border-y border-[#2E3035] section-pad">
        <div className="container-xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Why Drivers Across Lane County Choose Blue Rose
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                heading: "We know Oregon's insurance rules",
                body: "Thirty-plus years dealing with Oregon insurers means we know every tactic they use to steer you to a cheaper repair. We write thorough estimates, document damage properly, and push back when supplements are warranted. You pay your deductible — we handle everything else.",
              },
              {
                heading: "Oregon's climate, understood",
                body: "Willamette Valley rain doesn't just make roads slick — it gets into unrepaired scratches and turns them into rust. We seal every repair properly and treat bare metal before painting. The same attention to moisture that matters in Oregon's wet climate has been standard practice here since the mid-90s.",
              },
              {
                heading: "Accessible from anywhere in Lane County",
                body: "Our Olympic Street location is about 10 minutes from downtown Eugene via I-105, 20-30 minutes from Junction City on 99W, 25-35 minutes from Cottage Grove on I-5, and 30-40 minutes from Veneta on Hwy 126. If you're in Lane County, the drive is manageable.",
              },
            ].map((card) => (
              <div key={card.heading} className="p-6 rounded-xl bg-[#232427] border border-[#2E3035]">
                <h3 className="font-bold text-white text-base mb-2">{card.heading}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Free Estimates — Call or Stop By" subtext="Mon–Fri 8 AM–5 PM, Sat 10 AM–5 PM. 3436 Olympic St, Ste 200, Springfield, OR. No appointment needed for an estimate." />
    </>
  );
}
