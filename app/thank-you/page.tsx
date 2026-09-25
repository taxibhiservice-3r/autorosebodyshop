import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/data/business";

export const metadata: Metadata = {
  title: "Thank You — Blue Rose Auto Body",
  description: "Thank you for contacting Blue Rose Auto Body & Collision.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center section-pad">
      <div className="container-xl text-center max-w-lg">
        <div className="w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-black text-white mb-4">Message Sent!</h1>
        <p className="text-[#9CA3AF] text-lg mb-8">
          Thank you for reaching out. We&apos;ll get back to you as soon as possible during business hours.
        </p>
        <p className="text-[#9CA3AF] mb-2">
          Need to speak with us immediately?
        </p>
        <a
          href={`tel:${BUSINESS.phoneTel}`}
          className="inline-flex items-center gap-2 px-7 py-4 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold text-lg rounded-xl transition-colors mb-6"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          {BUSINESS.phone}
        </a>
        <div>
          <Link href="/" className="text-[#C0392B] hover:text-[#E74C3C] font-semibold transition-colors">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
