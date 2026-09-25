import type { Metadata } from "next";
import { BUSINESS } from "@/lib/data/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Blue Rose Auto Body & Collision — Springfield, OR",
  description:
    "Learn about Blue Rose Auto Body & Collision in Springfield, OR — our team, shop, and commitment to expert collision repair and custom painting for Eugene and Lane County.",
  alternates: { canonical: "/about/" },
};

const SERVICES_LIST = [
  "Collision Repair", "Auto Body Repair", "Custom Paint & Refinishing",
  "Paintless Dent Repair (PDR)", "Bumper Repair", "Panel Replacement",
  "Paint Matching", "Paint Correction", "Scratch Repair",
  "Bedliner", "Fabrication", "Undercoating", "Insurance Claim Repairs",
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
            Blue Rose Auto Body &amp; Collision is Springfield, Oregon&apos;s full-service auto body and collision
            repair shop, serving drivers throughout Eugene, Springfield, and all of Lane County with expert repairs and
            a commitment to quality craftsmanship.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Professional Auto Body Services in Springfield, Oregon
              </h2>
              <div className="space-y-4 text-[#9CA3AF] leading-relaxed">
                <p>
                  Blue Rose Auto Body &amp; Collision is located at 3436 Olympic St, Ste 200 in Springfield, Oregon —
                  a convenient location that serves drivers from Eugene, Springfield, and all surrounding Lane County
                  communities including Cottage Grove, Veneta, Junction City, and Harrisburg.
                </p>
                <p>
                  We provide the full range of professional auto body services — from collision repair and custom
                  painting to paintless dent removal and insurance claim management. Our team of skilled technicians
                  is equipped with modern tools and technology, including computerized paint-mixing and color-matching
                  systems, to deliver repairs that meet factory standards.
                </p>
                <p>
                  At Blue Rose Auto Body &amp; Collision, we believe in transparent communication and honest estimates.
                  Before any work begins, we assess the damage thoroughly, explain our recommended approach, and
                  provide a written estimate. We work directly with all major insurance companies and handle the
                  paperwork so you can focus on getting back on the road.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {/* Key facts */}
              <div className="bg-[#1A1B1E] border border-[#2E3035] rounded-2xl p-6">
                <h3 className="font-bold text-white text-lg mb-4">Shop Details</h3>
                <dl className="space-y-3 text-sm">
                  {[
                    { dt: "Address", dd: <a href="https://maps.google.com/?q=3436+Olympic+St+Ste+200+Springfield+OR+97478" target="_blank" rel="noopener noreferrer" className="text-[#C0392B] hover:text-[#E74C3C] transition-colors">{BUSINESS.address.full}</a> },
                    { dt: "Phone", dd: <a href={`tel:${BUSINESS.phoneTel}`} className="text-[#C0392B] hover:text-[#E74C3C] transition-colors font-semibold">{BUSINESS.phone}</a> },
                    { dt: "Hours", dd: <span className="text-[#9CA3AF]">{BUSINESS.hoursDisplay}</span> },
                    { dt: "Category", dd: <span className="text-[#9CA3AF]">Auto Body Shop, Collision Repair, Custom Painting</span> },
                    { dt: "Accessibility", dd: <span className="text-[#9CA3AF]">Wheelchair-accessible entrance, restroom &amp; parking</span> },
                    { dt: "Payment", dd: <span className="text-[#9CA3AF]">Credit cards, debit cards accepted</span> },
                    { dt: "Languages", dd: <span className="text-[#9CA3AF]">Multiple language assistance available</span> },
                  ].map(({ dt, dd }) => (
                    <div key={dt} className="flex gap-4">
                      <dt className="font-semibold text-[#D1D5DB] w-28 flex-shrink-0">{dt}</dt>
                      <dd>{dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services offered */}
      <section className="bg-[#1A1B1E] border-y border-[#2E3035] section-pad">
        <div className="container-xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
            Services We Provide
          </h2>
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

      {/* Team placeholder */}
      <section className="section-pad">
        <div className="container-xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Our Team
          </h2>
          <div className="bg-[#1A1B1E] border border-[#2E3035] border-dashed rounded-2xl p-10 text-center">
            <p className="text-[#9CA3AF] text-lg mb-2">
              Team bios and photos coming soon.
            </p>
            <p className="text-[#9CA3AF] text-sm max-w-lg mx-auto">
              We&apos;re proud of our skilled technicians. Detailed team profiles with photos and certifications will
              be added here — please contact us for information about our team&apos;s qualifications.
            </p>
          </div>
        </div>
      </section>

      <CTABanner heading="Meet the Team — Come Visit Us" subtext="Our Springfield shop is open Mon–Fri 8 AM–5 PM and Sat 10 AM–5 PM. Call or stop by for a free estimate." />
    </>
  );
}
