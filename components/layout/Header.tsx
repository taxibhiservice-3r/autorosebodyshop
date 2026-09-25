"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { BUSINESS } from "@/lib/data/business";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Blog", href: "/resources/" },
  { label: "Contact", href: "/contact/" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setServicesOpen(false);
        setLocationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0B]/95 backdrop-blur-md border-b border-[#2E3035] shadow-lg"
          : "bg-transparent"
      }`}
      style={{ height: "var(--header-height)" }}
      ref={menuRef}
    >
      <div className="container-xl h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeAll}
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] rounded"
          aria-label="Blue Rose Auto Body & Collision — Home"
        >
          <Image
            src="/Blue-Rose-Auto-logo.webp"
            alt="Blue Rose Auto Body & Collision logo"
            width={160}
            height={52}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
          {/* Services mega-dropdown */}
          <div className="relative">
            <button
              onClick={() => { setServicesOpen((p) => !p); setLocationsOpen(false); }}
              onKeyDown={(e) => e.key === "Escape" && setServicesOpen(false)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 px-3 py-2 text-[#D1D5DB] hover:text-white transition-colors text-sm font-medium rounded hover:bg-[#1A1B1E]"
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-[#1A1B1E] border border-[#2E3035] rounded-xl shadow-2xl p-5 grid grid-cols-2 gap-1" role="menu">
                <div className="col-span-2 mb-2 pb-2 border-b border-[#2E3035]">
                  <Link href="/services/" onClick={closeAll} className="text-xs font-semibold uppercase tracking-wider text-[--color-accent] hover:text-[--color-accent-hover]" role="menuitem">
                    All Services →
                  </Link>
                </div>
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}/`}
                    onClick={closeAll}
                    role="menuitem"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#D1D5DB] hover:text-white hover:bg-[#232427] transition-colors"
                  >
                    <span className="text-base">{s.icon}</span>
                    {s.shortName}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations mega-dropdown */}
          <div className="relative">
            <button
              onClick={() => { setLocationsOpen((p) => !p); setServicesOpen(false); }}
              onKeyDown={(e) => e.key === "Escape" && setLocationsOpen(false)}
              aria-expanded={locationsOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 px-3 py-2 text-[#D1D5DB] hover:text-white transition-colors text-sm font-medium rounded hover:bg-[#1A1B1E]"
            >
              Locations
              <svg className={`w-4 h-4 transition-transform ${locationsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {locationsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-[#1A1B1E] border border-[#2E3035] rounded-xl shadow-2xl p-5" role="menu">
                <div className="mb-2 pb-2 border-b border-[#2E3035]">
                  <Link href="/locations/" onClick={closeAll} className="text-xs font-semibold uppercase tracking-wider text-[--color-accent] hover:text-[--color-accent-hover]" role="menuitem">
                    All Service Areas →
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {LOCATIONS.map((l) => (
                    <Link
                      key={l.slug}
                      href={`/locations/${l.slug}/`}
                      onClick={closeAll}
                      role="menuitem"
                      className="px-3 py-2 rounded-lg text-sm text-[#D1D5DB] hover:text-white hover:bg-[#232427] transition-colors"
                    >
                      {l.city}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {NAV_LINKS.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-[#D1D5DB] hover:text-white transition-colors text-sm font-medium rounded hover:bg-[#1A1B1E]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="flex items-center gap-2 text-sm font-semibold text-[--color-text] hover:text-[--color-accent-hover] transition-colors"
            aria-label={`Call Blue Rose Auto Body at ${BUSINESS.phone}`}
          >
            <svg className="w-4 h-4 text-[--color-accent]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            {BUSINESS.phone}
          </a>
          <Link
            href="/get-a-quote/"
            className="px-4 py-2 bg-[--color-accent] hover:bg-[--color-accent-hover] text-white text-sm font-bold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
          >
            Free Estimate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 rounded-lg hover:bg-[#1A1B1E] transition-colors"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-[#0A0A0B] overflow-y-auto z-40"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="container-xl py-6 space-y-1">
            {/* Services accordion */}
            <div>
              <button
                onClick={() => setServicesOpen((p) => !p)}
                className="w-full flex items-center justify-between px-4 py-3 text-left text-white font-semibold text-base rounded-lg hover:bg-[#1A1B1E]"
                aria-expanded={servicesOpen}
              >
                Services
                <svg className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {servicesOpen && (
                <div className="mt-1 ml-4 space-y-1">
                  <Link href="/services/" onClick={closeAll} className="block px-4 py-2 text-[--color-accent] font-semibold text-sm rounded-lg hover:bg-[#1A1B1E]">
                    All Services
                  </Link>
                  {SERVICES.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}/`} onClick={closeAll} className="flex items-center gap-2 px-4 py-2 text-[#D1D5DB] text-sm rounded-lg hover:bg-[#1A1B1E] hover:text-white">
                      <span>{s.icon}</span>{s.shortName}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations accordion */}
            <div>
              <button
                onClick={() => setLocationsOpen((p) => !p)}
                className="w-full flex items-center justify-between px-4 py-3 text-left text-white font-semibold text-base rounded-lg hover:bg-[#1A1B1E]"
                aria-expanded={locationsOpen}
              >
                Service Areas
                <svg className={`w-5 h-5 transition-transform ${locationsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {locationsOpen && (
                <div className="mt-1 ml-4 grid grid-cols-2 gap-1">
                  <Link href="/locations/" onClick={closeAll} className="col-span-2 px-4 py-2 text-[--color-accent] font-semibold text-sm rounded-lg hover:bg-[#1A1B1E]">
                    All Service Areas
                  </Link>
                  {LOCATIONS.map((l) => (
                    <Link key={l.slug} href={`/locations/${l.slug}/`} onClick={closeAll} className="px-4 py-2 text-[#D1D5DB] text-sm rounded-lg hover:bg-[#1A1B1E] hover:text-white">
                      {l.city}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.slice(1).map((link) => (
              <Link key={link.href} href={link.href} onClick={closeAll} className="block px-4 py-3 text-white font-semibold text-base rounded-lg hover:bg-[#1A1B1E]">
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA block */}
            <div className="pt-4 border-t border-[#2E3035] mt-4 space-y-3">
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#1A1B1E] border border-[#2E3035] text-white font-bold text-lg rounded-xl hover:bg-[#232427] transition-colors"
                aria-label={`Call us at ${BUSINESS.phone}`}
              >
                <svg className="w-5 h-5 text-[--color-accent]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                {BUSINESS.phone}
              </a>
              <Link
                href="/get-a-quote/"
                onClick={closeAll}
                className="flex items-center justify-center w-full py-4 bg-[--color-accent] hover:bg-[--color-accent-hover] text-white font-bold text-lg rounded-xl transition-colors"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
