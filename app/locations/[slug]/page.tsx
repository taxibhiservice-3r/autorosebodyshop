import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LOCATIONS, getLocationBySlug } from "@/lib/data/locations";
import { SERVICES, getServiceBySlug } from "@/lib/data/services";
import { BUSINESS } from "@/lib/data/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `/locations/${loc.slug}/` },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `/locations/${loc.slug}/`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) notFound();

  const topServices = loc.topServices
    .map((s) => getServiceBySlug(s))
    .filter(Boolean) as ReturnType<typeof getServiceBySlug>[];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1B1E] border-b border-[#2E3035] py-12 lg:py-16">
        <div className="container-xl">
          <Breadcrumb
            items={[
              { label: "Service Areas", href: "/locations/" },
              { label: `${loc.city}, ${loc.stateAbbr}`, href: `/locations/${loc.slug}/` },
            ]}
          />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 mt-2">
            Auto Body Repair in {loc.city}, {loc.state}
          </h1>
          <p className="text-[#9CA3AF] text-xl max-w-3xl leading-relaxed mb-8">
            {loc.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold text-lg rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/get-a-quote/"
              className="inline-flex items-center justify-center px-7 py-4 border-2 border-[#2E3035] hover:border-[#C0392B] text-white font-bold text-lg rounded-xl transition-colors hover:bg-[#C0392B]/10"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Drive time + local context */}
      <section className="section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              {/* Getting here */}
              <div>
                <h2 className="text-2xl font-black text-white mb-4">
                  Getting to Our Springfield Shop from {loc.city}
                </h2>
                <div className="bg-[#1A1B1E] border border-[#2E3035] rounded-xl p-5 flex items-start gap-4">
                  <svg className="w-8 h-8 text-[#C0392B] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-[#D1D5DB] font-semibold mb-1">{loc.driveTime}</p>
                    <address className="not-italic text-[#9CA3AF] text-sm">
                      {BUSINESS.name}<br />
                      {BUSINESS.address.street}<br />
                      {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                    </address>
                    <a
                      href="https://maps.google.com/?q=3436+Olympic+St+Ste+200+Springfield+OR+97478"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-[#C0392B] text-sm font-semibold hover:text-[#E74C3C] transition-colors"
                    >
                      Get directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Local context */}
              <div>
                <h2 className="text-2xl font-black text-white mb-4">
                  Serving {loc.city} Drivers
                </h2>
                <p className="text-[#9CA3AF] leading-relaxed">{loc.localContext}</p>
              </div>

              {/* Top services for this area */}
              <div>
                <h2 className="text-2xl font-black text-white mb-4">
                  Most Requested Services from {loc.city}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {topServices.filter(Boolean).map((s) => s && (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}/`}
                      className="group flex items-center gap-3 p-4 rounded-xl bg-[#1A1B1E] border border-[#2E3035] hover:border-[#C0392B]/50 hover:bg-[#232427] transition-all"
                    >
                      <span className="text-2xl flex-shrink-0" aria-hidden="true">{s.icon}</span>
                      <div>
                        <p className="font-bold text-white text-sm group-hover:text-[#E74C3C] transition-colors">{s.shortName}</p>
                        <p className="text-[#9CA3AF] text-xs">Learn more →</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* All services */}
              <div>
                <h2 className="text-2xl font-black text-white mb-4">
                  All Auto Body Services Available Near {loc.city}
                </h2>
                <p className="text-[#9CA3AF] mb-5">
                  Blue Rose Auto Body &amp; Collision offers a complete range of auto body services from our Springfield
                  location, available to all {loc.city}, {loc.stateAbbr} residents:
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}/`}
                        className="flex items-center gap-2 text-[#D1D5DB] hover:text-[#C0392B] transition-colors text-sm"
                      >
                        <span>{s.icon}</span>{s.shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-[#1A1B1E] border border-[#2E3035] rounded-2xl p-6 sticky top-24">
                <h3 className="font-bold text-white text-lg mb-2">
                  Serving {loc.city}, {loc.stateAbbr}
                </h3>
                <p className="text-[#9CA3AF] text-sm mb-5">
                  Schedule your free estimate today — no commitment required.
                </p>
                <Link
                  href="/get-a-quote/"
                  className="flex items-center justify-center w-full py-3 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold rounded-xl transition-colors mb-3"
                >
                  Request a Free Estimate
                </Link>
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="flex items-center justify-center gap-2 w-full py-3 border border-[#2E3035] hover:border-[#C0392B] text-white font-semibold rounded-xl transition-colors"
                >
                  <svg className="w-4 h-4 text-[#C0392B]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  {BUSINESS.phone}
                </a>
                <div className="mt-4 pt-4 border-t border-[#2E3035] text-xs text-[#9CA3AF] space-y-1">
                  <p className="font-semibold text-[#D1D5DB]">Hours</p>
                  <p>{BUSINESS.hoursDisplay}</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Other cities nearby */}
              <div className="bg-[#1A1B1E] border border-[#2E3035] rounded-2xl p-6">
                <h3 className="font-bold text-white text-base mb-4">Other Service Areas</h3>
                <div className="space-y-1">
                  {LOCATIONS.filter((l) => l.slug !== loc.slug).slice(0, 6).map((l) => (
                    <Link
                      key={l.slug}
                      href={`/locations/${l.slug}/`}
                      className="flex items-center gap-2 p-2 rounded-lg text-[#9CA3AF] hover:text-white hover:bg-[#232427] transition-colors text-sm"
                    >
                      <svg className="w-3 h-3 text-[#C0392B]" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/></svg>
                      {l.city}, {l.stateAbbr}
                    </Link>
                  ))}
                  <Link href="/locations/" className="flex items-center gap-1 p-2 text-[#C0392B] hover:text-[#E74C3C] text-sm font-semibold transition-colors">
                    All service areas →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {loc.faqs.length > 0 && (
        <section className="bg-[#1A1B1E] border-y border-[#2E3035] section-pad">
          <div className="container-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">
              FAQs — Auto Body Repair in {loc.city}, {loc.stateAbbr}
            </h2>
            <div className="max-w-3xl">
              <FAQAccordion faqs={loc.faqs} />
            </div>
          </div>
        </section>
      )}

      <CTABanner heading={`Serving ${loc.city}, Oregon`} subtext={`Blue Rose Auto Body & Collision is your local auto body shop serving ${loc.city} and all of Lane County. ${loc.driveTime}`} />
    </>
  );
}
