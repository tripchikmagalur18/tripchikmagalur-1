import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { locationPages } from "@/data/location-pages";

export async function generateMetadataForLocation(slug: string): Promise<Metadata> {
  return metadataForLocation(slug);
}

export function metadataForLocation(slug: string): Metadata {
  const page = locationPages[slug];
  if (!page) {
    return buildMetadata({
      title: "Page Not Found — Trip Chikmagalur",
      description: "The page you requested could not be found.",
      canonical: "/404",
      noindex: true,
    });
  }
  return buildMetadata({
    title: page.title,
    description: page.metaDescription,
    canonical: `/${page.slug}`,
  });
}
