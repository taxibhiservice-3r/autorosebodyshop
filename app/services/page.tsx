import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/data/services";
import { BUSINESS } from "@/lib/data/business";
import { buildServiceListSchema } from "@/lib/schema";
import CTABanner from "@/components/sections/CTABanner";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Auto Body Services Springfield & Eugene, OR",
  description:
    "Complete auto body and collision repair services in Springfield & Eugene, OR. Collision repair, custom paint, PDR, bumper repair, panel replacement, insurance claims, and more.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  const schema = buildServiceListSchema(SERVICES.map((s) => ({ name: s.name, slug: s.slug })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-[#1A1B1E] border-b border-[#2E3035] py-12 lg:py-16">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Services", href: "/services/" }]} />
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 mt-2">
            Auto Body Services in Springfield &amp; Eugene, OR
          </h1>
          <p className="text-[#9CA3AF] text-xl max-w-3xl leading-relaxed">
            Blue Rose Auto Body &amp; Collision provides the full range of professional auto body services — from
            collision repair and custom painting to paintless dent removal and insurance claim management — for drivers
            throughout Lane County, Oregon.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group flex flex-col gap-4 p-6 rounded-2xl bg-[#1A1B1E] border border-[#2E3035] hover:border-[#C0392B]/50 hover:bg-[#232427] transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0" aria-hidden="true">{service.icon}</span>
                  <div>
                    <h2 className="font-bold text-white text-lg group-hover:text-[#E74C3C] transition-colors mb-1">
                      {service.name}
                    </h2>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed line-clamp-3">
                      {service.intro.split(".")[0]}.
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-2 border-t border-[#2E3035]">
                  <span className="text-[#C0392B] text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary info */}
      <section className="bg-[#1A1B1E] border-y border-[#2E3035] py-12">
        <div className="container-xl text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto mb-8">
            Call us or bring your vehicle in for a no-obligation damage assessment. Our technicians will explain exactly
            what your vehicle needs and provide a transparent written estimate before any work begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold text-lg rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              {BUSINESS.phone}
            </a>
            <Link
              href="/get-a-quote/"
              className="inline-flex items-center gap-2 px-7 py-4 border-2 border-[#2E3035] hover:border-[#C0392B] text-white font-bold text-lg rounded-xl transition-colors hover:bg-[#C0392B]/10"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
