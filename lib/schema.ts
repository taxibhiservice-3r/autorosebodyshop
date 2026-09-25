import { BUSINESS, SERVICE_AREA_CITIES } from "./data/business";
import type { Service } from "./data/services";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.blueroseautobodyrepair.com";
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// ─── Opening hours array (reused in schema) ───────────────────────────────────
const OPENING_HOURS = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "17:00" },
];

// ─── Core Organization / AutoBodyShop entity ─────────────────────────────────
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoBodyShop", "LocalBusiness"],
    "@id": ORG_ID,
    name: BUSINESS.name,
    alternateName: [BUSINESS.shortName, "Blue Rose Auto", "Blue Rose Body Shop"],
    description: BUSINESS.description,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`,
    openingHoursSpecification: OPENING_HOURS,
    openingHours: ["Mo-Fr 08:00-17:00", "Sa 10:00-17:00"],
    areaServed: SERVICE_AREA_CITIES.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: "Oregon" },
    })),
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.instagram,
      BUSINESS.social.youtube,
    ],
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/Blue-Rose-Auto-logo.webp`,
      width: 320,
      height: 104,
    },
    image: [
      `${SITE_URL}/Blue-Rose-Auto-logo.webp`,
      `${SITE_URL}/og-image.jpg`,
    ],
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Credit Card, Debit Card, Cash",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Wheelchair accessible entrance", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wheelchair accessible restroom", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wheelchair accessible parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "On-site mechanic", value: true },
      { "@type": "LocationFeatureSpecification", name: "Restroom on site", value: true },
      { "@type": "LocationFeatureSpecification", name: "Multiple language assistance", value: true },
    ],
    knowsLanguage: ["en"],
    makesOffer: [
      "Collision Repair", "Auto Body Repair", "Custom Paint & Refinishing",
      "Paintless Dent Repair", "Bumper Repair", "Panel Replacement",
      "Paint Matching", "Paint Correction", "Scratch Repair",
      "Bedliner", "Fabrication", "Undercoating", "Insurance Claim Repair",
    ].map((svc) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: svc, provider: { "@id": ORG_ID } },
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.latitude,
        longitude: BUSINESS.geo.longitude,
      },
      geoRadius: "48280", // ~30 miles in meters
    },
    parentOrganization: { "@id": ORG_ID },
  };
}

// ─── WebSite ──────────────────────────────────────────────────────────────────
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: BUSINESS.name,
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?s={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─── WebPage (use on every page for passage-level indexing) ───────────────────
export function buildWebPageSchema({
  url, title, description, datePublished, dateModified, breadcrumbs,
}: {
  url: string;
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${url}#webpage`,
    url: `${SITE_URL}${url}`,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-US",
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(breadcrumbs && {
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [{ name: "Home", url: SITE_URL }, ...breadcrumbs.map((b) => ({
          ...b, url: `${SITE_URL}${b.url}`,
        }))].map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      },
    }),
  };
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  const all = [{ name: "Home", url: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

// ─── Service page schema ──────────────────────────────────────────────────────
export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}/#service`,
    name: service.name,
    description: service.metaDescription,
    serviceType: service.name,
    provider: { "@id": ORG_ID },
    areaServed: SERVICE_AREA_CITIES.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: "Oregon" },
    })),
    url: `${SITE_URL}/services/${service.slug}/`,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}/get-a-quote/`,
      servicePhone: { "@type": "ContactPoint", telephone: BUSINESS.phone, contactType: "customer service" },
    },
  };
}

// ─── FAQ schema ───────────────────────────────────────────────────────────────
export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

// ─── Services hub ItemList ────────────────────────────────────────────────────
export function buildServiceListSchema(services: { name: string; slug: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/services/#itemlist`,
    name: "Auto Body Services — Blue Rose Auto Body & Collision",
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${SITE_URL}/services/${s.slug}/`,
    })),
  };
}

// ─── Article / Blog post ──────────────────────────────────────────────────────
export function buildArticleSchema({
  slug, title, description, datePublished, dateModified,
}: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/resources/${slug}/#article`,
    headline: title,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: BUSINESS.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: BUSINESS.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/Blue-Rose-Auto-logo.webp` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/resources/${slug}/` },
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
  };
}
