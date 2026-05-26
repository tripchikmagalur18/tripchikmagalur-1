import { imageSrc } from "@/lib/image-src";
import { absoluteAssetUrl } from "@/lib/seo";
import { SITE_URL } from "@/lib/seo";
import type { Stay } from "@/data/stays";

export function buildStayLodgingSchema(stay: Stay) {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: stay.name,
    description: stay.description,
    image: absoluteAssetUrl(imageSrc(stay.coverImage)),
    url: `${SITE_URL}/stays/${stay.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chikmagalur",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    priceRange: `₹${stay.pricePerPerson}`,
    amenityFeature: stay.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
  };
}
