import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/data/blog";
import { BUSINESS } from "@/lib/data/business";
import { buildArticleSchema } from "@/lib/schema";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/sections/CTABanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/resources/${post.slug}/` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/resources/${post.slug}/`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = buildArticleSchema({
    slug: post.slug,
    title: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
  });

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="bg-[#1A1B1E] border-b border-[#2E3035] py-12 lg:py-16">
        <div className="container-xl">
          <Breadcrumb
            items={[
              { label: "Resources & Blog", href: "/resources/" },
              { label: post.title, href: `/resources/${post.slug}/` },
            ]}
          />
          <div className="max-w-3xl mt-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-[#C0392B]/10 border border-[#C0392B]/30 rounded text-[#E74C3C] text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-[#9CA3AF] text-xl leading-relaxed mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-[#9CA3AF]">
              <span>By {BUSINESS.name}</span>
              <span>·</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </time>
              <span>·</span>
              <span>{post.readTime}</span>
              {post.updatedAt !== post.publishedAt && (
                <>
                  <span>·</span>
                  <span>Updated <time dateTime={post.updatedAt}>{new Date(post.updatedAt).toLocaleDateString("en-US", { year: "numeric", month: "long" })}</time></span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article content */}
            <article className="lg:col-span-2 prose-dark max-w-none">
              {post.content.split(/\n## /).map((section, i) => {
                if (i === 0) {
                  return renderContent(section, 0);
                }
                const firstNewline = section.indexOf("\n");
                const heading = section.slice(0, firstNewline);
                const body = section.slice(firstNewline + 1);
                return (
                  <div key={i}>
                    <h2 className="text-2xl font-black text-white mt-10 mb-4 first:mt-0">{heading}</h2>
                    {renderContent(body, i)}
                  </div>
                );
              })}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-[#1A1B1E] border border-[#2E3035] rounded-2xl p-6 sticky top-24">
                <h3 className="font-bold text-white text-lg mb-2">Need Auto Body Service?</h3>
                <p className="text-[#9CA3AF] text-sm mb-5">
                  Serving Eugene, Springfield, and all of Lane County, Oregon.
                </p>
                <Link
                  href="/get-a-quote/"
                  className="flex items-center justify-center w-full py-3 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold rounded-xl transition-colors mb-3"
                >
                  Get a Free Estimate
                </Link>
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="flex items-center justify-center gap-2 w-full py-3 border border-[#2E3035] hover:border-[#C0392B] text-white font-semibold rounded-xl transition-colors"
                >
                  <svg className="w-4 h-4 text-[#C0392B]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  {BUSINESS.phone}
                </a>
              </div>

              {otherPosts.length > 0 && (
                <div className="bg-[#1A1B1E] border border-[#2E3035] rounded-2xl p-6">
                  <h3 className="font-bold text-white text-base mb-4">More Resources</h3>
                  <div className="space-y-3">
                    {otherPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/resources/${p.slug}/`}
                        className="block p-3 rounded-lg hover:bg-[#232427] transition-colors"
                      >
                        <p className="text-[#D1D5DB] text-sm font-medium hover:text-white transition-colors line-clamp-2">{p.title}</p>
                        <p className="text-[#9CA3AF] text-xs mt-1">{p.readTime}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

function renderContent(text: string, key: number) {
  return (
    <div key={key}>
      {text.split(/\n### /).map((sub, j) => {
        if (j === 0) {
          return renderParagraphs(sub, j);
        }
        const nl = sub.indexOf("\n");
        return (
          <div key={j}>
            <h3 className="text-xl font-bold text-white mt-6 mb-3">{sub.slice(0, nl)}</h3>
            {renderParagraphs(sub.slice(nl + 1), j)}
          </div>
        );
      })}
    </div>
  );
}

function renderParagraphs(text: string, key: number) {
  return (
    <div key={key}>
      {text.split("\n\n").map((para, k) => {
        if (!para.trim()) return null;
        if (para.startsWith("- ")) {
          return (
            <ul key={k} className="list-disc pl-6 space-y-1.5 mb-4">
              {para.split("\n").filter((l) => l.startsWith("- ")).map((item, li) => (
                <li key={li} className="text-[#D1D5DB]">{item.slice(2)}</li>
              ))}
            </ul>
          );
        }
        if (para.startsWith("| ")) {
          const rows = para.split("\n").filter((r) => r.startsWith("|"));
          return (
            <div key={k} className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                {rows.map((row, ri) => {
                  const cells = row.split("|").filter((c) => c.trim() !== "");
                  const isHeader = ri === 0;
                  const isSep = cells.every((c) => /^-+$/.test(c.trim()));
                  if (isSep) return null;
                  return (
                    <tr key={ri} className={isHeader ? "border-b border-[#2E3035]" : "border-b border-[#1A1B1E]"}>
                      {cells.map((cell, ci) =>
                        isHeader ? (
                          <th key={ci} className="px-4 py-2 text-left text-[#D1D5DB] font-semibold">{cell.trim()}</th>
                        ) : (
                          <td key={ci} className="px-4 py-2 text-[#9CA3AF]">{cell.trim()}</td>
                        )
                      )}
                    </tr>
                  );
                })}
              </table>
            </div>
          );
        }
        const rendered = para
          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.+?)\*/g, "<em>$1</em>");
        return (
          <p key={k} className="text-[#D1D5DB] leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: rendered }} />
        );
      })}
    </div>
  );
}
