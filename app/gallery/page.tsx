import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Before & After Gallery — Blue Rose Auto Body Springfield, OR",
  description:
    "View before and after photos of collision repair, custom paint, and auto body work completed by Blue Rose Auto Body & Collision in Springfield, Oregon.",
  alternates: { canonical: "/gallery/" },
};

// Placeholder projects — replace with real before/after photos from client
const GALLERY_PLACEHOLDERS = [
  { title: "Collision Repair — Front End Damage", category: "Collision Repair" },
  { title: "Custom Paint — Full Repaint", category: "Custom Paint" },
  { title: "Paintless Dent Repair — Hail Damage", category: "PDR" },
  { title: "Bumper Repair — Rear Impact", category: "Bumper Repair" },
  { title: "Panel Replacement — Driver Door", category: "Panel Replacement" },
  { title: "Scratch Repair — Quarter Panel", category: "Scratch Repair" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-[#1A1B1E] border-b border-[#2E3035] py-12 lg:py-16">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Gallery", href: "/gallery/" }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 mt-2">
            Before &amp; After Gallery
          </h1>
          <p className="text-[#9CA3AF] text-xl max-w-3xl leading-relaxed">
            See the quality of our work — collision repair, custom painting, paintless dent repair, and more.
            Real results from real vehicles repaired at our Springfield, Oregon shop.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          {/* Photo gallery notice */}
          <div className="bg-[#1A1B1E] border border-[#2E3035] border-dashed rounded-2xl p-10 text-center mb-12">
            <span className="text-4xl mb-4 block">📸</span>
            <h2 className="text-xl font-bold text-white mb-2">Photos Coming Soon</h2>
            <p className="text-[#9CA3AF] max-w-xl mx-auto">
              Real before &amp; after project photos will be added here. Follow us on{" "}
              <a
                href="https://www.instagram.com/blueroseauto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0392B] hover:text-[#E74C3C] font-semibold transition-colors"
              >
                Instagram (@blueroseauto)
              </a>{" "}
              and{" "}
              <a
                href="https://www.youtube.com/@BLUEROSEAUTO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0392B] hover:text-[#E74C3C] font-semibold transition-colors"
              >
                YouTube (@BLUEROSEAUTO)
              </a>{" "}
              to see our latest work.
            </p>
          </div>

          {/* Project placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_PLACEHOLDERS.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-[#2E3035] overflow-hidden"
                role="img"
                aria-label={project.title}
              >
                <div className="bg-[#1A1B1E] h-48 flex items-center justify-center">
                  <p className="text-[#4B5563] text-sm text-center px-4">
                    [Before &amp; After Photo: {project.title}]
                  </p>
                </div>
                <div className="bg-[#232427] px-4 py-3">
                  <span className="text-xs font-semibold text-[#C0392B] uppercase tracking-wider">{project.category}</span>
                  <p className="font-semibold text-white text-sm mt-0.5">{project.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Ready for Results Like These?" subtext="Call us or request a free estimate — we'll restore your vehicle to pre-accident condition." />
    </>
  );
}
