import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 64, 128, 256, 384],
    remotePatterns: [
      { protocol: "https", hostname: "maps.googleapis.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/(.*)\\.(js|css|woff2|png|jpg|webp|avif|svg|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // redirect old collision-repair URL pattern if needed
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
    ];
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
