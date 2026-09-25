"use client";

import { useState } from "react";
import { buildFAQSchema } from "@/lib/schema";

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
  includeSchema?: boolean;
}

export default function FAQAccordion({ faqs, includeSchema = true }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const schema = buildFAQSchema(faqs);

  return (
    <>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-[#2E3035] rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#1A1B1E] transition-colors"
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
            >
              <span className="font-semibold text-[#F5F5F5] pr-4 text-sm sm:text-base">
                {faq.question}
              </span>
              <span
                className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-[#2E3035] text-[--color-accent] transition-transform ${
                  openIndex === i ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            {openIndex === i && (
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className="px-5 pb-5"
              >
                <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
