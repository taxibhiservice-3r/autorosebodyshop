import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data/blog";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Auto Body Resources & Blog — Eugene & Springfield, OR",
  description:
    "Helpful articles about collision repair costs, insurance claims, paintless dent repair, and choosing an auto body shop in Eugene and Springfield, Oregon.",
  alternates: { canonical: "/resources/" },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-[#1A1B1E] border-b border-[#2E3035] py-12 lg:py-16">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Resources & Blog", href: "/resources/" }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 mt-2">
            Auto Body Resources &amp; Blog
          </h1>
          <p className="text-[#9CA3AF] text-xl max-w-3xl leading-relaxed">
            Practical guides and answers to common questions about collision repair, insurance claims, and auto body
            services in Eugene and Springfield, Oregon.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}/`}
                className="group flex flex-col rounded-2xl bg-[#1A1B1E] border border-[#2E3035] hover:border-[#C0392B]/50 hover:bg-[#232427] transition-all overflow-hidden"
              >
                <div className="bg-gradient-to-br from-[#C0392B]/10 to-[#232427] h-36 flex items-center justify-center px-6">
                  <span className="text-5xl">📝</span>
                </div>
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-[#232427] border border-[#2E3035] rounded text-[#9CA3AF] text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-bold text-white text-lg leading-snug group-hover:text-[#E74C3C] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#2E3035] text-xs text-[#9CA3AF]">
                    <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
