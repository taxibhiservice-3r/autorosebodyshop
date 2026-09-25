import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS } from "@/lib/data/locations";
import { BUSINESS } from "@/lib/data/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Auto Body Shop Service Areas — Lane County, OR",
  description:
    "Blue Rose Auto Body & Collision serves Eugene, Springfield, Cottage Grove, Veneta, Junction City, and all of Lane County, Oregon. Find your city for local auto body service info.",
  alternates: { canonical: "/locations/" },
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1B1E] border-b border-[#2E3035] py-12 lg:py-16">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Service Areas", href: "/locations/" }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 mt-2">
            Auto Body Services Across Lane County, Oregon
          </h1>
          <p className="text-[#9CA3AF] text-xl max-w-3xl leading-relaxed">
            Blue Rose Auto Body &amp; Collision is located in Springfield, Oregon and serves drivers throughout all of
            Lane County — from Eugene and Junction City in the north to Cottage Grove in the south, and from Veneta in
            the west to Lowell in the east. Select your city below.
          </p>
        </div>
      </section>

      {/* Locations grid */}
      <section className="section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}/`}
                className="group flex flex-col gap-4 p-6 rounded-2xl bg-[#1A1B1E] border border-[#2E3035] hover:border-[#C0392B]/50 hover:bg-[#232427] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C0392B]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#C0392B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="font-bold text-white text-xl group-hover:text-[#E74C3C] transition-colors">
                    {loc.city}, {loc.stateAbbr}
                  </h2>
                </div>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {loc.driveTime}
                </p>
                <div className="flex flex-wrap gap-2">
                  {loc.topServices.slice(0, 3).map((serviceSlug) => (
                    <span key={serviceSlug} className="px-2 py-1 bg-[#232427] border border-[#2E3035] rounded text-[#9CA3AF] text-xs capitalize">
                      {serviceSlug.replace(/-/g, " ")}
                    </span>
                  ))}
                </div>
                <span className="text-[#C0392B] text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block mt-auto">
                  {loc.city} auto body info →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shop info */}
      <section className="bg-[#1A1B1E] border-y border-[#2E3035] py-12">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
                One Convenient Location, All of Lane County Served
              </h2>
              <p className="text-[#9CA3AF] leading-relaxed mb-6">
                Our Springfield shop is strategically located at 3436 Olympic St, Ste 200 — easy access from I-105,
                Hwy 126, and I-5. Most Lane County communities are within a 30-minute drive.
              </p>
              <address className="not-italic text-[#D1D5DB] space-y-1">
                <p className="font-semibold">{BUSINESS.name}</p>
                <p>{BUSINESS.address.street}</p>
                <p>{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
                <a href={`tel:${BUSINESS.phoneTel}`} className="text-[#C0392B] font-semibold hover:text-[#E74C3C] transition-colors">
                  {BUSINESS.phone}
                </a>
              </address>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Hours</h3>
              <ul className="space-y-2 text-sm">
                {BUSINESS.hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-[#9CA3AF]">
                    <span>{h.day}</span>
                    <span>{h.open === "08:00" ? "8:00 AM" : "10:00 AM"} – 5:00 PM</span>
                  </li>
                ))}
                <li className="flex justify-between text-[#9CA3AF]">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Serving All of Lane County" subtext="No matter where you are in the Eugene–Springfield metro, Blue Rose Auto Body & Collision is your local body shop for expert repairs." />
    </>
  );
}
