import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://tripchikmagalur.com";

/** Canonical origin — set NEXT_PUBLIC_SITE_URL in Vercel / .env.local */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? DEFAULT_SITE_URL;

export const SITE_NAME = "Trip Chikmagalur";
export const SITE_TAGLINE = "Hills are calling";

/** Static OG images live under /public/og/ */
export function publicAssetUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export const DEFAULT_OG_IMAGE = publicAssetUrl("/og/default.webp");

export const OG_IMAGES = {
  default: DEFAULT_OG_IMAGE,
  legacy: publicAssetUrl("/og-image.webp"),
} as const;

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
  return publicAssetUrl(src);
}

/** Trims meta descriptions to SERP-friendly length (default max 160). */
export function metaDescription(text: string, max = 160): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;

  const cut = normalized.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  const trimmed = (lastSpace > 100 ? cut.slice(0, lastSpace) : cut).replace(/[,;:\s]+$/, "");
  return trimmed.endsWith(".") ? trimmed : `${trimmed}.`;
}

/** Keeps title tags within typical SERP display range (default max 60). */
export function metaTitle(text: string, max = 60): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;

  const cut = normalized.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 24 ? cut.slice(0, lastSpace) : cut).replace(/[\s|—,-]+$/, "");
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
  const metaDesc = description ? metaDescription(description) : undefined;
  const metaTitleText = title ? metaTitle(title) : undefined;

  return {
    title: metaTitleText,
    description: metaDesc,
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
      title: metaTitleText,
      description: metaDesc,
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
      title: metaTitleText,
      description: metaDesc,
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
