import type { Metadata } from "next";
import { BUSINESS } from "@/lib/data/business";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Customer Reviews — Blue Rose Auto Body Springfield, OR",
  description:
    "Read customer reviews for Blue Rose Auto Body & Collision in Springfield, Oregon. See what our customers say about our collision repair, painting, and auto body services.",
  alternates: { canonical: "/reviews/" },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-[#1A1B1E] border-b border-[#2E3035] py-12 lg:py-16">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Reviews", href: "/reviews/" }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 mt-2">
            Customer Reviews
          </h1>
          <p className="text-[#9CA3AF] text-xl max-w-3xl leading-relaxed">
            See what drivers from Eugene, Springfield, and Lane County say about their experience with Blue Rose Auto
            Body &amp; Collision.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          {/* Review sources */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(BUSINESS.name + " " + BUSINESS.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-[#1A1B1E] border border-[#2E3035] rounded-2xl hover:border-[#C0392B]/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-white text-base">Google Reviews</p>
                <p className="text-[#9CA3AF] text-sm">View our Google reviews</p>
              </div>
              <svg className="w-5 h-5 text-[#9CA3AF] ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
            <a
              href={BUSINESS.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-[#1A1B1E] border border-[#2E3035] rounded-2xl hover:border-[#C0392B]/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
              <div>
                <p className="font-bold text-white text-base">Facebook Reviews</p>
                <p className="text-[#9CA3AF] text-sm">View our Facebook page</p>
              </div>
              <svg className="w-5 h-5 text-[#9CA3AF] ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>

          {/* Review placeholder */}
          <div className="bg-[#1A1B1E] border border-[#2E3035] border-dashed rounded-2xl p-10 text-center">
            <span className="text-4xl mb-4 block">⭐</span>
            <h2 className="text-xl font-bold text-white mb-2">Real Customer Reviews</h2>
            <p className="text-[#9CA3AF] max-w-xl mx-auto">
              Customer review quotes and aggregate ratings will be added here once verified. We never publish
              fabricated or unverified reviews — all reviews are sourced from Google and Facebook.
            </p>
            <p className="text-[#9CA3AF] text-sm mt-3 max-w-xl mx-auto">
              <strong className="text-[#D1D5DB]">Shop owners:</strong> Supply 5–10 real review quotes with
              reviewer first name + last initial to activate this section with proper{" "}
              <code className="text-[#C0392B]">Review</code> and{" "}
              <code className="text-[#C0392B]">AggregateRating</code> schema markup.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1B1E] border-y border-[#2E3035] py-12">
        <div className="container-xl text-center">
          <h2 className="text-2xl font-black text-white mb-4">Leave Us a Review</h2>
          <p className="text-[#9CA3AF] mb-6 max-w-xl mx-auto">
            Happy with your repair? We&apos;d love to hear from you. Your review helps other Lane County drivers
            find trusted auto body service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(BUSINESS.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1A1A1A] font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Review on Google
            </a>
            <a
              href={BUSINESS.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white font-bold rounded-xl hover:bg-[#1565C0] transition-colors"
            >
              Review on Facebook
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
