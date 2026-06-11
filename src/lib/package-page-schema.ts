import type { StaticImageData } from "next/image";
import packageBelur from "@/assets/packages/package-belur.webp";
import packageKemmangundi from "@/assets/packages/package-kemmangundi.webp";
import packageMullayanagiri from "@/assets/packages/package-mullayanagiri.webp";
import packageMuthodi from "@/assets/packages/package-muthodi.webp";
import packageSringeri from "@/assets/packages/package-sringeri.webp";
import type { PackageSeoPage } from "@/data/package-seo-pages";
import { packageDetails } from "@/data/package-places";
import { testimonials } from "@/data/testimonials";

export type PackageCartId = keyof typeof packageDetails;
import { BUSINESS_ID } from "@/lib/schemas/business-schema";
import { buildAggregateRatingSchema } from "@/lib/review-schema";
import { absoluteAssetUrl, DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { imageSrc } from "@/lib/image-src";

const PACKAGE_IMAGES: Record<string, StaticImageData> = {
  "pkg-day-1": packageMullayanagiri,
  "pkg-day-2": packageKemmangundi,
  "pkg-day-3": packageMuthodi,
  "pkg-day-4": packageBelur,
  "pkg-day-5": packageSringeri,
};

function buildProductReviews() {
  return testimonials.slice(0, 2).map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    datePublished: t.datePublished,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating),
      bestRating: "5",
    },
    reviewBody: t.review,
  }));
}

export function buildPackagePageSchemas(page: PackageSeoPage) {
  const url = `${SITE_URL}/${page.slug}`;
  const image = PACKAGE_IMAGES[page.cartId];
  const imageUrl = image ? absoluteAssetUrl(imageSrc(image)) : DEFAULT_OG_IMAGE;

  const touristTrip = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${url}#touristtrip`,
    name: page.h1,
    description: page.intro,
    url,
    image: imageUrl,
    touristType: ["Adventure", "Family", "Couples"],
    offers: {
      "@type": "Offer",
      price: String(page.price),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      url,
      seller: { "@id": BUSINESS_ID },
    },
    provider: { "@id": BUSINESS_ID },
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: page.h1,
    description: page.intro,
    url,
    image: imageUrl,
    brand: { "@type": "Brand", name: "Trip Chikmagalur" },
    offers: {
      "@type": "Offer",
      price: String(page.price),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      url,
      seller: { "@id": BUSINESS_ID },
    },
    aggregateRating: buildAggregateRatingSchema(),
    review: buildProductReviews(),
  };

  return [touristTrip, product];
}

const PACKAGE_TOURIST_TYPES: Record<PackageCartId, string[]> = {
  "pkg-day-1": ["Adventure", "Nature", "Sightseeing"],
  "pkg-day-2": ["Nature", "Sightseeing", "Adventure"],
  "pkg-day-3": ["Wildlife", "Nature", "Adventure"],
  "pkg-day-4": ["Cultural", "Heritage", "Religious"],
  "pkg-day-5": ["Trekking", "Adventure", "Nature"],
};

/** Product + TouristTrip for /package/day-N itinerary pages */
export function buildPackageDaySchemas(cartId: PackageCartId) {
  const detail = packageDetails[cartId];
  const url = `${SITE_URL}${detail.packageDayLink}`;
  const image = PACKAGE_IMAGES[cartId];
  const imageUrl = image ? absoluteAssetUrl(imageSrc(image)) : DEFAULT_OG_IMAGE;
  const dayLabel = detail.duration;

  const touristTrip = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${url}#touristtrip`,
    name: `${detail.name} — ${dayLabel} Chikmagalur Tour`,
    description: detail.intro,
    url,
    image: imageUrl,
    touristType: PACKAGE_TOURIST_TYPES[cartId],
    itinerary: detail.places.map((place, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: place.name,
    })),
    offers: {
      "@type": "Offer",
      price: String(detail.price),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      url,
      seller: { "@id": BUSINESS_ID },
    },
    provider: { "@id": BUSINESS_ID },
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${detail.name} — Chikmagalur ${dayLabel} Tour`,
    description: detail.intro,
    url,
    image: imageUrl,
    brand: { "@type": "Brand", name: "Trip Chikmagalur" },
    offers: {
      "@type": "Offer",
      price: String(detail.price),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      url,
      seller: { "@id": BUSINESS_ID },
    },
    aggregateRating: buildAggregateRatingSchema(),
    review: buildProductReviews(),
  };

  return [touristTrip, product];
}
