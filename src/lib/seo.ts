import type { Metadata } from "next";

export const SITE_URL = "https://tripchikmagalur.com";

export const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/qoN8gF9Ct6Rzz2WPb28F0WvdTdc2/social-images/social-1770538726089-Mullayanagiri_–_Karnataka’s_Highest_Peak_Hidden_in_the_Clouds.jpeg";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface SeoInput {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  breadcrumbs?: BreadcrumbItem[];
  noindex?: boolean;
}

export const normalizePath = (path: string): string => {
  if (!path) return "/";
  let p = path.split("?")[0].split("#")[0];
  if (!p.startsWith("/")) p = "/" + p;
  p = p.toLowerCase();
  if (p.length > 1 && p.endsWith("/")) p = p.replace(/\/+$/, "");
  return p || "/";
};

export const buildMetadata = ({
  title,
  description,
  canonical = "/",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noindex = false,
}: SeoInput): Metadata => {
  const path = normalizePath(canonical);
  const fullCanonical = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    robots: noindex ? { index: false, follow: false } : undefined,
    alternates: {
      canonical: fullCanonical,
      languages: {
        "en-IN": fullCanonical,
        "x-default": fullCanonical,
      },
    },
    openGraph: {
      type: ogType,
      locale: "en_IN",
      siteName: "Trip Chikmagalur",
      url: fullCanonical,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@tripchikmagalur",
      title,
      description,
      images: [ogImage],
    },
  };
};

export const buildBreadcrumbSchema = (breadcrumbs: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((b, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: b.name,
    item: `${SITE_URL}${b.path === "/" ? "" : b.path}`,
  })),
});
