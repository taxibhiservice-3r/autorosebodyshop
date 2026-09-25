import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/data/business";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://blueroseauto.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} | Collision Repair Springfield & Eugene, OR`,
    template: `%s | ${BUSINESS.shortName}`,
  },
  description:
    "Blue Rose Auto Body & Collision in Springfield, OR provides expert collision repair, custom painting, paintless dent removal, and full auto body services for Eugene, Springfield, and all of Lane County.",
  keywords: [
    "collision repair Eugene OR",
    "auto body shop Springfield OR",
    "paintless dent repair Eugene",
    "custom auto paint Springfield OR",
    "insurance claim repair Eugene Oregon",
  ],
  authors: [{ name: BUSINESS.name, url: SITE_URL }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
        alt: `${BUSINESS.name} — Springfield, Oregon`,
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
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = buildOrganizationSchema();
  const siteSchema = buildWebSiteSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#C0392B" />
        <meta name="msapplication-TileColor" content="#C0392B" />
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
