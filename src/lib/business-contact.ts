import { LEAD_EMAIL } from "@/lib/lead-enquiry";
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from "@/lib/whatsapp";

export type BusinessHoursRow = {
  days: string;
  time: string;
  note?: string;
};

/** Single source of truth for contact page, footer, and structured data. */
export const BUSINESS_CONTACT = {
  name: "Trip Chikmagalur",
  alternateName: "Wanderlust CKM",
  email: LEAD_EMAIL,
  phoneDisplay: PHONE_DISPLAY,
  phoneLink: PHONE_LINK,
  whatsappLink: WHATSAPP_LINK,
  address: {
    line1: "Chikmagalur Town",
    line2: "Chikmagalur, Karnataka 577101",
    country: "India",
    /** Full single-line address for maps and schema */
    formatted: "Chikmagalur, Karnataka 577101, India",
  },
  geo: {
    latitude: 13.3161,
    longitude: 75.772,
  },
  /** Google Maps embed — Chikmagalur town (no API key required) */
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Chikmagalur,+Karnataka+577101&z=14&hl=en&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Chikmagalur,Karnataka,577101,India",
  mapViewUrl: "https://www.google.com/maps/search/?api=1&query=Chikmagalur,Karnataka,577101,India",
  hours: [
    { days: "Monday – Sunday", time: "7:00 AM – 9:00 PM IST" },
    {
      days: "WhatsApp enquiries",
      time: "Usually within minutes",
      note: "Fastest way to reach us for bookings and custom itineraries.",
    },
  ] satisfies BusinessHoursRow[],
  social: {
    instagram: "https://instagram.com/trip_chikmagalur",
    facebook: "https://www.facebook.com/wanderlustckm",
    twitter: "https://twitter.com/wanderlustckm",
  },
} as const;

export function buildContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${BUSINESS_CONTACT.name}`,
    url: "https://tripchikmagalur.com/contact",
    mainEntity: {
      "@type": ["LocalBusiness", "TravelAgency"],
      name: BUSINESS_CONTACT.name,
      alternateName: BUSINESS_CONTACT.alternateName,
      telephone: BUSINESS_CONTACT.phoneLink.replace("tel:", ""),
      email: BUSINESS_CONTACT.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chikmagalur",
        addressRegion: "Karnataka",
        addressCountry: "IN",
        postalCode: "577101",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS_CONTACT.geo.latitude,
        longitude: BUSINESS_CONTACT.geo.longitude,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "07:00",
          closes: "21:00",
        },
      ],
    },
  };
}
