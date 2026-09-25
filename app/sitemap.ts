import { MetadataRoute } from "next";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";
import { BLOG_POSTS } from "@/lib/data/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://blueroseauto.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const corePages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/services/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/locations/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/reviews/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/gallery/`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/faq/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact/`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/get-a-quote/`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${SITE_URL}/resources/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/privacy-policy/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((l) => ({
    url: `${SITE_URL}/locations/${l.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${SITE_URL}/resources/${p.slug}/`,
    lastModified: p.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...corePages, ...servicePages, ...locationPages, ...blogPages];
}
