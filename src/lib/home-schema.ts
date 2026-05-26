import { homeFaqItems, homePackages } from "@/data/home-packages";
import { buildTravelAgencyReviewsField } from "@/lib/review-schema";
import { SITE_URL } from "@/lib/seo";

const travelAgency = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Trip Chikmagalur",
  alternateName: "Wanderlust_ckm",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.webp`,
  image: `${SITE_URL}/og-image.webp`,
  description:
    "Chikmagalur tour packages, resort and villa stays, adventure activities, and local travel guides in Karnataka's coffee country.",
  telephone: "+91-9008000000",
  email: "tripchikmagalur@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chikmagalur",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.3161,
    longitude: 75.772,
  },
  areaServed: [
    { "@type": "City", name: "Chikmagalur" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Mangalore" },
    { "@type": "City", name: "Mysore" },
  ],
  priceRange: "₹₹",
  sameAs: [
    "https://www.instagram.com/tripchikmagalur",
    "https://www.facebook.com/tripchikmagalur",
  ],
  ...buildTravelAgencyReviewsField(),
};

const tourPackages = homePackages.map((pkg) => ({
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: pkg.name,
  description: pkg.description,
  url: `${SITE_URL}${pkg.link}`,
  touristType: ["Adventure", "Family", "Couples", "Friends"],
  itinerary: {
    "@type": "ItemList",
    name: pkg.duration,
  },
  offers: {
    "@type": "Offer",
    price: String(pkg.price),
    priceCurrency: pkg.priceCurrency,
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}${pkg.link}`,
    validFrom: "2026-01-01",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Trip Chikmagalur",
    url: SITE_URL,
  },
}));

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const webPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Best Chikmagalur Tour Packages — Trip Chikmagalur",
  description:
    "Book Chikmagalur tour packages from ₹3,499. Mullayanagiri trek, Kemmangundi, waterfalls & jeep safari. Govt. verified, 5000+ travelers.",
  url: SITE_URL,
  isPartOf: {
    "@type": "WebSite",
    name: "Trip Chikmagalur",
    url: SITE_URL,
  },
  about: {
    "@type": "Place",
    name: "Chikmagalur, Karnataka, India",
  },
  mainEntity: {
    "@type": "TravelAgency",
    name: "Trip Chikmagalur",
  },
};

export const homePageSchema = [travelAgency, ...tourPackages, faqPage, webPage];
