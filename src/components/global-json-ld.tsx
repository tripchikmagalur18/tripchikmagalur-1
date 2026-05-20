import { JsonLd } from "@/components/json-ld";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Trip Chikmagalur",
  alternateName: "Wanderlust_ckm",
  url: "https://tripchikmagalur.com",
  logo: "https://tripchikmagalur.com/favicon.ico",
  description:
    "Leading travel agency offering the best Chikmagalur tour packages, adventure activities, coffee plantation tours, and homestay experiences in Karnataka's coffee country.",
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
  email: "wanderlustckm@gmail.com",
  priceRange: "₹₹",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "22:00",
  },
  sameAs: ["https://wa.me/916363131585"],
  areaServed: {
    "@type": "Place",
    name: "Chikmagalur, Karnataka, India",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "5000",
    bestRating: "5",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Trip Chikmagalur",
  url: "https://tripchikmagalur.com",
  description: "Best Chikmagalur tour packages, trips, homestays and adventure activities",
  publisher: {
    "@type": "Organization",
    name: "Trip Chikmagalur",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://tripchikmagalur.com/#localbusiness",
  name: "Trip Chikmagalur",
  image:
    "https://storage.googleapis.com/gpt-engineer-file-uploads/qoN8gF9Ct6Rzz2WPb28F0WvdTdc2/uploads/1770538588035-trip_chikmagalur.png",
  url: "https://tripchikmagalur.com",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "5000",
    bestRating: "5",
  },
};

export function GlobalJsonLd() {
  return <JsonLd data={[organizationSchema, websiteSchema, localBusinessSchema]} />;
}
