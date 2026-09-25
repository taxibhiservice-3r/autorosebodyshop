import type { NextConfig } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.blueroseautobodyrepair.com";
const hostname = new URL(SITE_URL).hostname; // www.blueroseautobodyrepair.com
const apexDomain = hostname.replace(/^www\./, ""); // blueroseautobodyrepair.com

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
  // Allow search engines to index via IndexNow
  { key: "X-Robots-Tag", value: "index, follow, max-image-preview:large, max-snippet:-1" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 64, 128, 256, 384],
    remotePatterns: [
      { protocol: "https", hostname: "maps.googleapis.com" },
    ],
    minimumCacheTTL: 31536000, // 1 year for images
  },

  async headers() {
    return [
      // Security + crawl directives on all pages
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Immutable cache for hashed static assets
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Long-lived cache for public assets (images, fonts, icons)
      {
        source: "/(.*\\.(?:png|jpg|jpeg|webp|avif|svg|ico|woff2|woff|ttf))",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Web manifest + sitemap: short cache so updates propagate
      {
        source: "/(sitemap\\.xml|robots\\.txt|site\\.webmanifest)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // ── Non-www → www canonical redirect (301) ──
      {
        source: "/(.*)",
        has: [{ type: "host", value: apexDomain }],
        destination: `https://${hostname}/:path*`,
        permanent: true,
      },
      // ── Legacy URL redirects (preserve link equity) ──
      {
        source: "/collision-repair-eugene-or",
        destination: "/services/collision-repair/",
        permanent: true,
      },
      {
        source: "/collision-repair-eugene-or/",
        destination: "/services/collision-repair/",
        permanent: true,
      },
      // Generic trailing-slash normalisation handled by Next.js automatically
    ];
  },

  experimental: {
    optimizeCss: true,
  },

  // Trailing slash: consistent canonical URLs
  trailingSlash: true,

  // Compress: Vercel handles gzip/br, but good for self-hosted
  compress: true,
};

export default nextConfig;
