import { SITE_URL } from "@/lib/seo";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Trip Chikmagalur",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chikmagalur",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  telephone: "+916363131585",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.3161,
    longitude: 75.772,
  },
  url: SITE_URL,
  priceRange: "₹₹",
};
