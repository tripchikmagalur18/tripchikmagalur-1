import type { MetadataRoute } from "next";
import { packageSeoSlugs } from "@/data/package-seo-pages";
import { buildExtendedSitemapEntries, SITE_ORIGIN } from "@/lib/sitemap-entries";

type SitemapEntry = MetadataRoute.Sitemap[number];

const CONTENT_UPDATE = new Date("2026-05-26");

function sitemapEntry(
  path: string,
  opts: {
    priority?: number;
    changeFrequency?: SitemapEntry["changeFrequency"];
    lastModified?: Date;
  } = {},
): SitemapEntry {
  const url = path ? `${SITE_ORIGIN}/${path}` : `${SITE_ORIGIN}/`;
  return {
    url,
    lastModified: opts.lastModified ?? CONTENT_UPDATE,
    changeFrequency: opts.changeFrequency ?? "monthly",
    priority: opts.priority ?? 0.7,
  };
}

/** Primary static pages (core SEO routes) */
const CORE_STATIC_PAGES: Array<{
  path: string;
  priority: number;
  changeFrequency?: SitemapEntry["changeFrequency"];
}> = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "chikmagalur-tour-packages", priority: 0.95, changeFrequency: "weekly" },
  { path: "places-to-visit-in-chikmagalur", priority: 0.9 },
  { path: "2-day-chikmagalur-itinerary", priority: 0.95, changeFrequency: "weekly" },
  { path: "best-time-to-visit-chikmagalur", priority: 0.85 },
  { path: "how-to-reach-chikmagalur", priority: 0.85 },
  { path: "blog", priority: 0.8 },
  { path: "faq", priority: 0.8 },
  { path: "contact", priority: 0.85 },
  { path: "food", priority: 0.85 },
  { path: "adventure", priority: 0.9, changeFrequency: "weekly" },
  { path: "stays", priority: 0.95, changeFrequency: "weekly" },
];

/** Day-wise package detail routes (/package/day-1 … day-5) */
const PACKAGE_DAY_ROUTES = [
  "package/day-1",
  "package/day-2",
  "package/day-3",
  "package/day-4",
  "package/day-5",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const coreStatic = CORE_STATIC_PAGES.map((p) =>
    sitemapEntry(p.path, { priority: p.priority, changeFrequency: p.changeFrequency }),
  );

  const packageLandingPages = packageSeoSlugs.map((slug) =>
    sitemapEntry(slug, { priority: 0.92, changeFrequency: "weekly" }),
  );

  const packageDayPages = PACKAGE_DAY_ROUTES.map((path) =>
    sitemapEntry(path, { priority: 0.85, changeFrequency: "monthly" }),
  );

  const extended = buildExtendedSitemapEntries();

  return [...coreStatic, ...packageLandingPages, ...packageDayPages, ...extended];
}
