"use client";

import Link from "next/link";
import { BUSINESS } from "@/lib/data/business";
import { usePathname } from "next/navigation";

const HIDDEN_ON = ["/thank-you", "/get-a-quote"];

export default function StickyMobileCTA() {
  const pathname = usePathname();
  if (HIDDEN_ON.some((p) => pathname.startsWith(p))) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#0D0D0F] border-t border-[#2E3035] shadow-2xl"
      style={{
        height: "var(--mobile-cta-height)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-2 h-full">
        <a
          href={`tel:${BUSINESS.phoneTel}`}
          className="flex items-center justify-center gap-2 h-full bg-[#1A1B1E] hover:bg-[#232427] active:bg-[#2E3035] transition-colors text-white font-bold text-sm border-r border-[#2E3035]"
          aria-label={`Call Blue Rose Auto Body at ${BUSINESS.phone}`}
        >
          <svg className="w-5 h-5 text-[--color-accent]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Call Now
        </a>
        <Link
          href="/get-a-quote/"
          className="flex items-center justify-center gap-2 h-full bg-[--color-accent] hover:bg-[--color-accent-hover] active:opacity-90 transition-colors text-white font-bold text-sm"
          aria-label="Get a free auto body repair estimate"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Free Quote
        </Link>
      </div>
    </div>
  );
}
