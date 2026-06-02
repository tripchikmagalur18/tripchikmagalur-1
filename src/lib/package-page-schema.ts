import type { PackageSeoPage } from "@/data/package-seo-pages";
import { buildAggregateRatingSchema } from "@/lib/review-schema";
import { SITE_URL } from "@/lib/seo";

export function buildPackagePageSchemas(page: PackageSeoPage) {
  const url = `${SITE_URL}/${page.slug}`;

  const touristTrip = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: page.h1,
    description: page.intro,
    url,
    touristType: ["Adventure", "Family", "Couples"],
    offers: {
      "@type": "Offer",
      price: String(page.price),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url,
    },
    provider: { "@type": "TravelAgency", name: "Trip Chikmagalur", url: SITE_URL },
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: page.h1,
    description: page.intro,
    url,
    brand: { "@type": "Brand", name: "Trip Chikmagalur" },
    offers: {
      "@type": "Offer",
      price: String(page.price),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url,
    },
    aggregateRating: buildAggregateRatingSchema(),
  };

  return [touristTrip, product];
}
