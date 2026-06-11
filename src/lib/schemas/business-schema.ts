import { AGGREGATE_RATING } from "@/data/testimonials";
import { publicAssetUrl, SITE_URL } from "@/lib/seo";

export const BUSINESS_ID = `${SITE_URL}/#business`;

/** LocalBusiness + TravelAgency — site-wide entity (Knowledge Panel, Maps) */
export function buildBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TravelAgency"],
    "@id": BUSINESS_ID,
    name: "Trip Chikmagalur",
    alternateName: "Wanderlust CKM",
    description:
      "Government-verified local tour operator in Chikmagalur offering day packages, treks, jeep safaris, adventure activities, and stays in the Western Ghats. Trusted by 500+ travellers.",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: publicAssetUrl("/og/default.webp"),
      width: 1200,
      height: 630,
    },
    image: publicAssetUrl("/og/default.webp"),
    telephone: "+916363131585",
    email: "tripchikmagalur18@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chikmagalur",
      addressRegion: "Karnataka",
      addressCountry: "IN",
      postalCode: "577101",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.3161,
      longitude: 75.772,
    },
    areaServed: [
      { "@type": "Place", name: "Chikmagalur, Karnataka, India" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Mangalore" },
      { "@type": "City", name: "Mysore" },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    sameAs: [
      "https://wa.me/916363131585",
      "https://instagram.com/trip_chikmagalur",
      "https://www.facebook.com/wanderlustckm",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(AGGREGATE_RATING.ratingValue),
      bestRating: String(AGGREGATE_RATING.bestRating),
      worstRating: String(AGGREGATE_RATING.worstRating),
      ratingCount: String(AGGREGATE_RATING.reviewCount),
      reviewCount: String(AGGREGATE_RATING.reviewCount),
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+916363131585",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Kannada", "Hindi"],
    },
  };
}
