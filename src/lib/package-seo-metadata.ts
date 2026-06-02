import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { packageSeoPages } from "@/data/package-seo-pages";

export async function generateMetadataForPackageSeo(slug: string): Promise<Metadata> {
  return metadataForPackageSeo(slug);
}

export function metadataForPackageSeo(slug: string): Metadata {
  const page = packageSeoPages[slug];
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
    ogType: "website",
  });
}
