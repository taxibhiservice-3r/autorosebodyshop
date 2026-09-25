import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/data/business";

// Self-hosted via next/font — zero render-blocking CDN request
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.blueroseautobodyrepair.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${BUSINESS.name} | Collision Repair Springfield & Eugene, OR`,
    template: `%s | ${BUSINESS.shortName}`,
  },
  description:
    "Blue Rose Auto Body & Collision in Springfield, OR — expert collision repair, custom painting, paintless dent removal, and auto body services for Eugene, Springfield, and all of Lane County, Oregon.",

  keywords: [
    "collision repair Eugene OR",
    "auto body shop Springfield OR",
    "collision repair Springfield Oregon",
    "paintless dent repair Eugene",
    "custom auto paint Springfield OR",
    "insurance claim repair Eugene Oregon",
    "auto body repair Lane County",
    "bumper repair Eugene Oregon",
    "Blue Rose Auto Body Collision",
  ],

  applicationName: BUSINESS.name,
  category: "Automotive",
  classification: "Auto Body Shop",
  authors: [{ name: BUSINESS.name, url: SITE_URL }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Collision Repair Springfield & Eugene, OR`,
    description:
      "Expert collision repair, custom painting, PDR, and auto body services in Springfield & Eugene, Oregon.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} — 3436 Olympic St, Springfield, Oregon`,
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Collision Repair Springfield & Eugene, OR`,
    description:
      "Expert collision repair, custom painting, PDR, and auto body services in Springfield & Eugene, Oregon.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",

  // ── Verification tokens ──────────────────────────────────────────────────
  // Add these once you verify ownership in the respective tools:
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",  // from GSC → HTML tag method
    // bing: process.env.BING_SITE_VERIFICATION || "",   // from Bing Webmaster Tools
    // yandex: process.env.YANDEX_VERIFICATION || "",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = buildOrganizationSchema();
  const siteSchema = buildWebSiteSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* ── Brand / PWA ── */}
        <meta name="theme-color" content="#C0392B" />
        <meta name="msapplication-TileColor" content="#C0392B" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* ── Geo signals for local SEO ── */}
        <meta name="geo.region" content="US-OR" />
        <meta name="geo.placename" content="Springfield, Oregon" />
        <meta name="geo.position" content={`${BUSINESS.geo.latitude};${BUSINESS.geo.longitude}`} />
        <meta name="ICBM" content={`${BUSINESS.geo.latitude}, ${BUSINESS.geo.longitude}`} />

        {/* ── Business contact card (helps AI/assistant engines) ── */}
        <meta name="business:contact_data:street_address" content={BUSINESS.address.street} />
        <meta name="business:contact_data:locality" content={BUSINESS.address.city} />
        <meta name="business:contact_data:region" content={BUSINESS.address.state} />
        <meta name="business:contact_data:postal_code" content={BUSINESS.address.zip} />
        <meta name="business:contact_data:country_name" content="United States" />
        <meta name="business:contact_data:phone_number" content={BUSINESS.phone} />
        <meta name="business:contact_data:website" content={SITE_URL} />

        {/* ── Bing IndexNow key (fast indexing on Bing/partner engines) ── */}
        <meta name="msvalidate.01" content={process.env.BING_SITE_VERIFICATION || ""} />

        {/* ── Structured data (site-wide) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body
        className="min-h-screen bg-[#0A0A0B] text-[#F5F5F5]"
        style={{ paddingBottom: "var(--mobile-cta-height)" }}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" style={{ paddingTop: "var(--header-height)" }}>
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
