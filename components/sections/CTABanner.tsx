import Link from "next/link";
import { BUSINESS } from "@/lib/data/business";

interface Props {
  heading?: string;
  subtext?: string;
}

export default function CTABanner({
  heading = "Ready to Restore Your Vehicle?",
  subtext = "Call us or get a free online estimate. We work with all insurance companies and serve all of Lane County.",
}: Props) {
  return (
    <section className="bg-[--color-accent] py-14 px-4" aria-label="Call to action">
      <div className="container-xl text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
          {heading}
        </h2>
        <p className="text-white/85 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[--color-accent] font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors min-w-[200px] justify-center"
            aria-label={`Call Blue Rose Auto Body at ${BUSINESS.phone}`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {BUSINESS.phone}
          </a>
          <Link
            href="/get-a-quote/"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors min-w-[200px] justify-center"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
