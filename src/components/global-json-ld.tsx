import { JsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Trip Chikmagalur",
  alternateName: "Wanderlust_ckm",
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  description:
    "Leading travel agency offering Chikmagalur tour packages, adventure activities, coffee plantation tours, and homestay experiences in Karnataka's coffee country.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chikmagalur",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.3161",
    longitude: "75.7720",
  },
  telephone: "+91-6363131585",
  email: "tripchikmagalur18@gmail.com",
  priceRange: "₹₹",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "22:00",
  },
  sameAs: [
    "https://wa.me/916363131585",
    "https://www.instagram.com/wanderlust_ckm",
    "https://www.facebook.com/wanderlustckm",
  ],
  areaServed: {
    "@type": "Place",
    name: "Chikmagalur, Karnataka, India",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Trip Chikmagalur",
  url: SITE_URL,
  description: "Chikmagalur tour packages, stays, adventure activities and travel guides",
  publisher: {
    "@type": "Organization",
    name: "Trip Chikmagalur",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Trip Chikmagalur",
  image: `${SITE_URL}/og-image.webp`,
  url: SITE_URL,
  telephone: "+91-6363131585",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chikmagalur",
    addressRegion: "Karnataka",
    postalCode: "577101",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: "13.3161", longitude: "75.7720" },
};

export function GlobalJsonLd() {
  return <JsonLd data={[organizationSchema, websiteSchema, localBusinessSchema]} />;
}
