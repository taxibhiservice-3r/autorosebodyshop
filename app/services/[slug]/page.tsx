import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, getServiceBySlug, getRelatedServices } from "@/lib/data/services";
import { BUSINESS } from "@/lib/data/business";
import { buildServiceSchema } from "@/lib/schema";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}/`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = getRelatedServices(service.relatedServices);
  const schema = buildServiceSchema(service);

  // Parse markdown-style body to display sections
  const sections = service.body.split(/\n## /).map((section, i) => {
    if (i === 0) return { heading: null, content: section };
    const firstNewline = section.indexOf("\n");
    return {
      heading: section.slice(0, firstNewline),
      content: section.slice(firstNewline + 1),
    };
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-[#1A1B1E] border-b border-[#2E3035] py-12 lg:py-16">
        <div className="container-xl">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services/" },
              { label: service.name, href: `/services/${service.slug}/` },
            ]}
          />
          <div className="flex items-start gap-4 mt-2">
            <span className="text-4xl hidden sm:block" aria-hidden="true">{service.icon}</span>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                {service.headline}
              </h1>
              <p className="text-[#9CA3AF] text-lg max-w-3xl leading-relaxed">
                {service.intro}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold text-lg rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/get-a-quote/"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-[#2E3035] hover:border-[#C0392B] text-white font-bold text-lg rounded-xl transition-colors hover:bg-[#C0392B]/10"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Body content */}
      <section className="section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 prose-dark">
              {sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="text-2xl font-black text-white mt-8 mb-4 first:mt-0">
                      {section.heading}
                    </h2>
                  )}
                  {section.content.split(/\n### /).map((sub, j) => {
                    if (j === 0) {
                      return (
                        <div key={j}>
                          {sub.split("\n\n").map((para, k) => {
                            if (para.startsWith("- ")) {
                              const items = para.split("\n").filter((l) => l.startsWith("- "));
                              return (
                                <ul key={k} className="list-disc pl-6 space-y-1.5 mb-4">
                                  {items.map((item, li) => (
                                    <li key={li} className="text-[#D1D5DB]">{item.slice(2)}</li>
                                  ))}
                                </ul>
                              );
                            }
                            if (para.startsWith("**") && para.includes("\n")) {
                              const lines = para.split("\n");
                              return (
                                <div key={k} className="mb-4">
                                  <p className="font-bold text-white">{lines[0].replace(/\*\*/g, "")}</p>
                                  <p className="text-[#9CA3AF]">{lines.slice(1).join(" ")}</p>
                                </div>
                              );
                            }
                            if (para.trim()) {
                              // Handle **bold** inline
                              const rendered = para.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
                              return (
                                <p
                                  key={k}
                                  className="text-[#D1D5DB] leading-relaxed mb-4"
                                  dangerouslySetInnerHTML={{ __html: rendered }}
                                />
                              );
                            }
                            return null;
                          })}
                        </div>
                      );
                    }
                    const subNewline = sub.indexOf("\n");
                    const subHeading = sub.slice(0, subNewline);
                    const subContent = sub.slice(subNewline + 1);
                    return (
                      <div key={j}>
                        <h3 className="text-xl font-bold text-white mt-6 mb-3">{subHeading}</h3>
                        {subContent.split("\n\n").map((para, k) => {
                          if (para.trim()) {
                            const rendered = para.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
                            return (
                              <p
                                key={k}
                                className="text-[#D1D5DB] leading-relaxed mb-4"
                                dangerouslySetInnerHTML={{ __html: rendered }}
                              />
                            );
                          }
                          return null;
                        })}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Contact card */}
              <div className="bg-[#1A1B1E] border border-[#2E3035] rounded-2xl p-6 sticky top-24">
                <h3 className="font-bold text-white text-lg mb-2">
                  Get a Free {service.shortName} Estimate
                </h3>
                <p className="text-[#9CA3AF] text-sm mb-5">
                  Serving Springfield, Eugene, and all of Lane County.
                </p>
                <Link
                  href="/get-a-quote/"
                  className="flex items-center justify-center w-full py-3 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold rounded-xl transition-colors mb-3"
                >
                  Request an Estimate
                </Link>
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="flex items-center justify-center gap-2 w-full py-3 border border-[#2E3035] hover:border-[#C0392B] text-white font-semibold rounded-xl transition-colors hover:bg-[#C0392B]/10"
                >
                  <svg className="w-4 h-4 text-[#C0392B]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  {BUSINESS.phone}
                </a>
                <p className="text-[#9CA3AF] text-xs text-center mt-3">{BUSINESS.hoursDisplay}</p>
              </div>

              {/* Related services */}
              {relatedServices.length > 0 && (
                <div className="bg-[#1A1B1E] border border-[#2E3035] rounded-2xl p-6">
                  <h3 className="font-bold text-white text-base mb-4">Related Services</h3>
                  <div className="space-y-2">
                    {relatedServices.map((rs) => (
                      <Link
                        key={rs.slug}
                        href={`/services/${rs.slug}/`}
                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-[#232427] transition-colors text-[#D1D5DB] hover:text-white text-sm"
                      >
                        <span>{rs.icon}</span>
                        {rs.shortName}
                        <svg className="w-4 h-4 ml-auto text-[#9CA3AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="bg-[#1A1B1E] border-y border-[#2E3035] section-pad">
          <div className="container-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">
              Frequently Asked Questions — {service.name}
            </h2>
            <div className="max-w-3xl">
              <FAQAccordion faqs={service.faqs} />
            </div>
          </div>
        </section>
      )}

      <CTABanner heading={`Ready to Get Your ${service.shortName} Handled?`} />
    </>
  );
}
