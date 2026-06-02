import type { Metadata } from "next";

export const SITE_URL = "https://tripchikmagalur.com";
export const SITE_NAME = "Trip Chikmagalur";
export const SITE_TAGLINE = "Chikmagalur Tour Packages, Stays & Adventures";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.webp`;

export const GEO_META = {
  "geo.region": "IN-KA",
  "geo.placename": "Chikmagalur, Karnataka, India",
  "geo.position": "13.3161;75.7720",
} as const;

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

export function absoluteAssetUrl(src: string): string {
  if (src.startsWith("http")) return src;
  return `${SITE_URL}${src.startsWith("/") ? src : `/${src}`}`;
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
    applicationName: SITE_NAME,
    authors: [{ name: "Trip Chikmagalur — Wanderlust_ckm", url: SITE_URL }],
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
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
      alternateLocale: ["en_US"],
      siteName: SITE_NAME,
      url: fullCanonical,
      title,
      description,
      countryName: "India",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title ?? SITE_NAME} — Chikmagalur tour packages & travel guide`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@tripchikmagalur",
      creator: "@tripchikmagalur",
      title,
      description,
      images: [ogImage],
    },
    other: {
      ...GEO_META,
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
