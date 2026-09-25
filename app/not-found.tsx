import Link from "next/link";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";
import { BUSINESS } from "@/lib/data/business";

export default function NotFound() {
  return (
    <div className="section-pad">
      <div className="container-xl text-center max-w-2xl mx-auto">
        <p className="text-7xl font-black text-[#C0392B] mb-4">404</p>
        <h1 className="text-3xl font-black text-white mb-4">Page Not Found</h1>
        <p className="text-[#9CA3AF] text-lg mb-10">
          The page you&apos;re looking for doesn&apos;t exist. Try one of the links below or call us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/" className="px-7 py-4 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold rounded-xl transition-colors">
            Go to Home
          </Link>
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="px-7 py-4 border border-[#2E3035] hover:border-[#C0392B] text-white font-bold rounded-xl transition-colors"
          >
            Call {BUSINESS.phone}
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          <div>
            <h2 className="font-bold text-white mb-3">Services</h2>
            <ul className="space-y-1">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="text-[#9CA3AF] hover:text-[#C0392B] text-sm transition-colors">
                    {s.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/" className="text-[#C0392B] hover:text-[#E74C3C] text-sm font-semibold">
                  All services →
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-white mb-3">Service Areas</h2>
            <ul className="space-y-1">
              {LOCATIONS.slice(0, 6).map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}/`} className="text-[#9CA3AF] hover:text-[#C0392B] text-sm transition-colors">
                    {l.city}, {l.stateAbbr}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations/" className="text-[#C0392B] hover:text-[#E74C3C] text-sm font-semibold">
                  All locations →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
