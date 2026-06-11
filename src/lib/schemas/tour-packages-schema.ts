import type { StaticImageData } from "next/image";
import packageBelur from "@/assets/packages/package-belur.webp";
import packageKemmangundi from "@/assets/packages/package-kemmangundi.webp";
import packageMullayanagiri from "@/assets/packages/package-mullayanagiri.webp";
import packageMuthodi from "@/assets/packages/package-muthodi.webp";
import packageSringeri from "@/assets/packages/package-sringeri.webp";
import { homePackages } from "@/data/home-packages";
import { packageDetails } from "@/data/package-places";
import { BUSINESS_ID } from "@/lib/schemas/business-schema";
import { absoluteAssetUrl, SITE_URL } from "@/lib/seo";
import { imageSrc } from "@/lib/image-src";

const PACKAGE_IMAGES: Record<string, StaticImageData> = {
  "pkg-day-1": packageMullayanagiri,
  "pkg-day-2": packageKemmangundi,
  "pkg-day-3": packageMuthodi,
  "pkg-day-4": packageBelur,
  "pkg-day-5": packageSringeri,
};

const PACKAGE_TOURIST_TYPES: Record<string, string[]> = {
  "pkg-day-1": ["Adventure", "Nature", "Sightseeing"],
  "pkg-day-2": ["Nature", "Sightseeing", "Adventure"],
  "pkg-day-3": ["Wildlife", "Nature", "Adventure"],
  "pkg-day-4": ["Cultural", "Heritage", "Religious"],
  "pkg-day-5": ["Trekking", "Adventure", "Nature"],
};

const CART_IDS = ["pkg-day-1", "pkg-day-2", "pkg-day-3", "pkg-day-4", "pkg-day-5"] as const;

const PACKAGE_FRAGMENTS: Record<(typeof CART_IDS)[number], string> = {
  "pkg-day-1": "mullayanagiri",
  "pkg-day-2": "kemmangundi",
  "pkg-day-3": "muthodi",
  "pkg-day-4": "belur",
  "pkg-day-5": "sringeri",
};

function buildTouristTripItem(position: number, cartId: (typeof CART_IDS)[number]) {
  const pkg = homePackages[position];
  const detail = packageDetails[cartId];
  const image = PACKAGE_IMAGES[cartId];
  const pageUrl = `${SITE_URL}${pkg.link}`;
  const fragment = PACKAGE_FRAGMENTS[cartId];

  return {
    "@type": "ListItem",
    position: position + 1,
    item: {
      "@type": "TouristTrip",
      "@id": `${SITE_URL}/chikmagalur-tour-packages#${fragment}`,
      name: pkg.name,
      description: pkg.description,
      url: pageUrl,
      image: absoluteAssetUrl(imageSrc(image)),
      touristType: PACKAGE_TOURIST_TYPES[cartId],
      itinerary: {
        "@type": "ItemList",
        itemListElement: detail.places.map((place, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: place.name,
        })),
      },
      offers: {
        "@type": "Offer",
        name: pkg.name,
        price: String(pkg.price),
        priceCurrency: pkg.priceCurrency,
        availability: "https://schema.org/InStock",
        validFrom: "2026-01-01",
        url: pageUrl,
        seller: { "@id": BUSINESS_ID },
      },
      provider: { "@id": BUSINESS_ID },
    },
  };
}

/** ItemList of all 5 day packages — homepage & /chikmagalur-tour-packages */
export function buildTourPackagesItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Chikmagalur Tour Packages 2026",
    description:
      "Day-wise guided tour packages in Chikmagalur covering Mullayanagiri, Kemmangundi, Muthodi, Belur, and Sringeri.",
    url: `${SITE_URL}/chikmagalur-tour-packages`,
    numberOfItems: homePackages.length,
    itemListElement: CART_IDS.map((cartId, index) => buildTouristTripItem(index, cartId)),
  };
}
