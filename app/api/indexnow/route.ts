import { NextResponse } from "next/server";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";
import { BLOG_POSTS } from "@/lib/data/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.blueroseautobodyrepair.com";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "blueroseautobody2025indexnow8f4d";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

// Build the full list of URLs to submit
function getAllUrls(): string[] {
  const core = [
    "/",
    "/services/",
    "/locations/",
    "/about/",
    "/reviews/",
    "/gallery/",
    "/faq/",
    "/contact/",
    "/get-a-quote/",
    "/resources/",
    "/privacy-policy/",
  ];

  const services = SERVICES.map((s) => `/services/${s.slug}/`);
  const locations = LOCATIONS.map((l) => `/locations/${l.slug}/`);
  const blog = BLOG_POSTS.map((p) => `/resources/${p.slug}/`);

  return [...core, ...services, ...locations, ...blog].map(
    (path) => `${SITE_URL}${path}`
  );
}

// POST /api/indexnow — submit all URLs to IndexNow
// Trigger this from Vercel deploy hook or manually after publishing content
export async function POST(request: Request) {
  // Verify secret to prevent unauthorized pings
  const auth = request.headers.get("authorization");
  const secret = process.env.INDEXNOW_SECRET;
  if (secret && auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const urls = getAllUrls();
  const host = new URL(SITE_URL).hostname;

  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    if (res.ok || res.status === 200 || res.status === 202) {
      return NextResponse.json({
        success: true,
        urlsSubmitted: urls.length,
        status: res.status,
      });
    }

    const text = await res.text();
    return NextResponse.json({ success: false, status: res.status, detail: text }, { status: 502 });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}

// GET /api/indexnow — return the list of URLs that would be submitted
export async function GET() {
  const urls = getAllUrls();
  return NextResponse.json({ totalUrls: urls.length, urls });
}
