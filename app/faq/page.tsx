import type { Metadata } from "next";
import { BUSINESS } from "@/lib/data/business";
import { buildFAQSchema } from "@/lib/schema";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Auto Body FAQ — Springfield & Eugene, OR",
  description:
    "Frequently asked questions about collision repair, insurance claims, paintless dent repair, paint matching, and auto body services in Eugene and Springfield, Oregon.",
  alternates: { canonical: "/faq/" },
};

const ALL_FAQS = [
  {
    question: "How long does collision repair take?",
    answer:
      "Collision repair time depends on the extent of damage. Minor repairs may take 1–3 business days, while significant structural damage or full repaints can take 1–2 weeks. After your damage assessment, we provide a specific timeline estimate and keep you updated throughout the process.",
  },
  {
    question: "Do I have to use the repair shop my insurance recommends?",
    answer:
      "No. Oregon law protects your right to choose any licensed auto body shop for insurance-covered repairs — you are not required to use your insurer's 'preferred' or 'recommended' shop, and your coverage cannot be denied for choosing your own shop.",
  },
  {
    question: "Do you work with all insurance companies?",
    answer:
      "Yes. Blue Rose Auto Body & Collision works with all major insurance providers. We handle direct communication with your insurer, submit estimates, and manage supplement negotiations for any additional damage discovered during repairs.",
  },
  {
    question: "What is paintless dent repair (PDR) and is it right for my vehicle?",
    answer:
      "Paintless dent repair (PDR) uses specialized tools to massage dented metal back to its original shape from behind the panel — without grinding, filler, or repainting. PDR works best on shallow dents where the paint is still intact and the metal hasn't been creased. We assess every dent and recommend PDR when it will deliver a perfect result.",
  },
  {
    question: "Will my repaired vehicle look exactly the same as before?",
    answer:
      "Our goal is a seamless, invisible repair. We use computerized paint-matching technology to blend factory colors precisely with your vehicle's actual current finish. Minor variation can occur on heavily faded older vehicles, but we discuss color-matching expectations with every customer before beginning.",
  },
  {
    question: "How much does collision repair cost?",
    answer:
      "Collision repair costs vary widely based on the extent of damage, parts required, and labor time. Minor repairs (small dents, scratches) may range from $150–$600. Moderate panel damage typically runs $600–$2,500. Major collision repair requiring structural work can be $2,500–$10,000+. We provide a written estimate after assessing your vehicle, with no obligation.",
  },
  {
    question: "Can you match the paint on my older vehicle?",
    answer:
      "Yes — our computerized paint-mixing system reads your vehicle's color code and measures the actual current finish with a spectrophotometer to account for fading and weathering. For significantly faded vehicles, we blend paint at panel edges to create a seamless transition. We discuss realistic expectations before starting.",
  },
  {
    question: "What should I do immediately after a car accident in Oregon?",
    answer:
      "First, ensure everyone is safe and call 911 if there are injuries. Exchange information with the other driver (name, insurance, license plate). Document the scene with photos. File a police report if required. Notify your insurance company. Do not admit fault. Contact an auto body shop for a damage assessment — you are not required to use your insurer's recommended shop.",
  },
  {
    question: "Does insurance cover paintless dent repair for hail damage?",
    answer:
      "Hail damage is typically covered under the comprehensive portion of your auto insurance policy (subject to your deductible). We work directly with your insurer and can assist with the claim process.",
  },
  {
    question: "Do you provide a warranty on repairs?",
    answer:
      "Please contact us directly to discuss our warranty terms — (541) 641-8877. We stand behind our work and our technicians are committed to quality on every repair.",
  },
  {
    question: "How do I pay my insurance deductible?",
    answer:
      "Your deductible is paid directly to Blue Rose Auto Body & Collision when you pick up your vehicle. The insurance company pays the remaining covered repair cost directly to us.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. We provide free, no-obligation damage assessments and written repair estimates. Call (541) 641-8877 or use our online estimate request form to get started.",
  },
  {
    question: "Where is Blue Rose Auto Body located and what are your hours?",
    answer:
      `Blue Rose Auto Body & Collision is located at 3436 Olympic St, Ste 200 in Springfield, OR 97478. We are open Monday–Friday 8:00 AM–5:00 PM and Saturday 10:00 AM–5:00 PM. Closed Sunday. Phone: ${BUSINESS.phone}.`,
  },
];

export default function FAQPage() {
  const schema = buildFAQSchema(ALL_FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-[#1A1B1E] border-b border-[#2E3035] py-12 lg:py-16">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "FAQ", href: "/faq/" }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 mt-2">
            Frequently Asked Questions
          </h1>
          <p className="text-[#9CA3AF] text-xl max-w-3xl leading-relaxed">
            Common questions about auto body repair, collision repair, insurance claims, paintless dent repair, and
            our services in Springfield and Eugene, Oregon — answered directly.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <div className="max-w-3xl">
            <FAQAccordion faqs={ALL_FAQS} includeSchema={false} />
          </div>
        </div>
      </section>

      <section className="bg-[#1A1B1E] border-y border-[#2E3035] py-12">
        <div className="container-xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Still Have Questions?</h2>
          <p className="text-[#9CA3AF] mb-6 max-w-xl mx-auto">
            Call us directly — our team is happy to discuss your vehicle and answer any questions before you schedule.
          </p>
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="inline-flex items-center gap-2 px-7 py-4 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold text-lg rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            {BUSINESS.phone}
          </a>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
