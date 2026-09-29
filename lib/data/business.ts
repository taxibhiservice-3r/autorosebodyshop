export const BUSINESS = {
  name: "Blue Rose Auto Body & Collision",
  shortName: "Blue Rose Auto",
  tagline: "Serving Lane County Since 1994 — Collision Repair & Auto Body, Springfield, OR",
  description:
    "Blue Rose Auto Body & Collision has served Springfield and Eugene, Oregon since 1994. Over 30 years of collision repair, custom painting, paintless dent removal, and full auto body services for all of Lane County.",
  address: {
    street: "3436 Olympic St, Ste 200",
    city: "Springfield",
    state: "OR",
    zip: "97478",
    country: "US",
    full: "3436 Olympic St, Ste 200, Springfield, OR 97478",
  },
  phone: "(541) 641-8877",
  phoneTel: "+15416418877",
  email: "", // TODO: confirm with client
  website: "https://www.blueroseautobodyrepair.com",
  social: {
    facebook: "https://www.facebook.com/BlueRoseAuto",
    instagram: "https://www.instagram.com/blueroseauto",
    youtube: "https://www.youtube.com/@BLUEROSEAUTO",
  },
  hours: [
    { day: "Monday", open: "08:00", close: "17:00" },
    { day: "Tuesday", open: "08:00", close: "17:00" },
    { day: "Wednesday", open: "08:00", close: "17:00" },
    { day: "Thursday", open: "08:00", close: "17:00" },
    { day: "Friday", open: "08:00", close: "17:00" },
    { day: "Saturday", open: "10:00", close: "17:00" },
  ],
  hoursDisplay: "Mon–Fri 8:00 AM–5:00 PM, Sat 10:00 AM–5:00 PM",
  geo: {
    latitude: 44.0462,
    longitude: -123.0236,
  },
  yearsInBusiness: 32,
  foundedYear: 1994,
  numTechnicians: null as number | null,
  certifications: [] as string[], // e.g. ["I-CAR Gold Class", "ASE Certified"]
  warrantyTerms: "", // TODO: confirm with client
  insurancePartners: [] as string[], // TODO: confirm with client
  // Equipment — confirm actual brands with client before publishing
  equipment: [] as string[],
} as const;

export const SERVICE_AREA_CITIES = [
  "Eugene",
  "Springfield",
  "Santa Clara",
  "Coburg",
  "Lowell",
  "Veneta",
  "Creswell",
  "Harrisburg",
  "Cottage Grove",
  "Junction City",
  "North Springfield",
] as const;
