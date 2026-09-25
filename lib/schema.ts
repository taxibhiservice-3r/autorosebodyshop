import { BUSINESS, SERVICE_AREA_CITIES } from "./data/business";
import type { Service } from "./data/services";
import type { Location } from "./data/locations";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://blueroseauto.com";
const ORG_ID = `${SITE_URL}/#organization`;

// ─── Core Organization / LocalBusiness entity ────────────────────────────────
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoBodyShop", "LocalBusiness"],
    "@id": ORG_ID,
    name: BUSINESS.name,
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
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "17:00" },
    ],
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
    image: `${SITE_URL}/og-image.jpg`,
    priceRange: "$$",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Wheelchair accessible entrance", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wheelchair accessible restroom", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wheelchair accessible parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "On-site mechanic", value: true },
      { "@type": "LocationFeatureSpecification", name: "Restroom on site", value: true },
    ],
    paymentAccepted: "Credit Card, Debit Card",
  };
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
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
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Services hub ItemList ────────────────────────────────────────────────────
export function buildServiceListSchema(services: { name: string; slug: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Auto Body Services — Blue Rose Auto Body & Collision",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${SITE_URL}/services/${s.slug}/`,
    })),
  };
}

// ─── WebPage / WebSite ────────────────────────────────────────────────────────
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BUSINESS.name,
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?s={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─── JSON-LD script tag helper ────────────────────────────────────────────────
export function schemaScript(data: object | object[]): string {
  const schemas = Array.isArray(data) ? data : [data];
  return JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
}
