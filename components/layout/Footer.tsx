import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/data/business";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0F] border-t border-[#2E3035]" aria-label="Site footer">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand + NAP */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-4">
              <Image
                src="/Blue-Rose-Auto-logo.webp"
                alt="Blue Rose Auto Body & Collision logo"
                width={160}
                height={52}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <address className="not-italic text-sm text-[#9CA3AF] space-y-2">
              <p>
                <a
                  href="https://maps.google.com/?q=3436+Olympic+St+Ste+200+Springfield+OR+97478"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS.address.street}<br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                </a>
              </p>
              <p>
                <a href={`tel:${BUSINESS.phoneTel}`} className="hover:text-white transition-colors font-semibold text-[#D1D5DB]">
                  {BUSINESS.phone}
                </a>
              </p>
              <p className="text-xs">{BUSINESS.hoursDisplay}</p>
            </address>
            <div className="flex gap-4 mt-5">
              <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Blue Rose Auto Body on Facebook" className="text-[#9CA3AF] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Blue Rose Auto Body on Instagram" className="text-[#9CA3AF] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={BUSINESS.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="Blue Rose Auto Body on YouTube" className="text-[#9CA3AF] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="text-[#9CA3AF] hover:text-white text-sm transition-colors">
                    {s.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/" className="text-[--color-accent] hover:text-[--color-accent-hover] text-sm font-semibold transition-colors">
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}/`} className="text-[#9CA3AF] hover:text-white text-sm transition-colors">
                    {l.city}, {l.stateAbbr}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations/" className="text-[--color-accent] hover:text-[--color-accent-hover] text-sm font-semibold transition-colors">
                  All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about/" },
                { label: "Reviews", href: "/reviews/" },
                { label: "Gallery", href: "/gallery/" },
                { label: "FAQ", href: "/faq/" },
                { label: "Blog / Resources", href: "/resources/" },
                { label: "Insurance Claims", href: "/services/insurance-claim-repair/" },
                { label: "Get a Quote", href: "/get-a-quote/" },
                { label: "Contact", href: "/contact/" },
                { label: "Privacy Policy", href: "/privacy-policy/" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#9CA3AF] hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2E3035]">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9CA3AF]">
          <p>© {currentYear} {BUSINESS.name}. All rights reserved. {BUSINESS.address.city}, {BUSINESS.address.state}.</p>
          <p>
            Serving Eugene, Springfield & Lane County, Oregon.{" "}
            <a href={`tel:${BUSINESS.phoneTel}`} className="hover:text-white transition-colors font-medium">{BUSINESS.phone}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
