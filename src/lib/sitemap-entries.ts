import type { MetadataRoute } from "next";
import { allDestinationSlugs } from "@/data/destinations";
import { staySlugs } from "@/data/stays";
import { itineraries } from "@/data/itineraries";
import { travelInfo } from "@/data/travelInfo";
import { pillarPages } from "@/data/pillarPages";
import { locationPages } from "@/data/location-pages";
import { blogLongSlugs } from "@/data/blog-long-posts";

import { SITE_URL } from "@/lib/seo";

export const SITE_ORIGIN = SITE_URL;

type SitemapEntry = MetadataRoute.Sitemap[number];

const SITE_LAUNCH = new Date("2026-04-28");
const CONTENT_UPDATE = new Date("2026-05-26");

function entry(
  path: string,
  opts: { lastModified?: Date; changeFrequency?: SitemapEntry["changeFrequency"]; priority?: number },
): SitemapEntry {
  const url = path ? `${SITE_ORIGIN}/${path}` : `${SITE_ORIGIN}/`;
  return {
    url,
    lastModified: opts.lastModified ?? CONTENT_UPDATE,
    changeFrequency: opts.changeFrequency ?? "monthly",
    priority: opts.priority ?? 0.7,
  };
}

/** Hub pages only — itineraries, travelInfo, pillarPages, and locationPages add their own slugs */
const extendedStaticPages: Array<{
  path: string;
  priority: number;
  changeFrequency?: SitemapEntry["changeFrequency"];
  lastModified?: Date;
}> = [
  { path: "places", priority: 0.9, changeFrequency: "weekly" },
];

/** Sitemap entries for stays, places, blog articles, itineraries, etc. */
export function buildExtendedSitemapEntries(): MetadataRoute.Sitemap {
  const staticEntries = extendedStaticPages.map((p) =>
    entry(p.path, {
      priority: p.priority,
      changeFrequency: p.changeFrequency,
      lastModified: p.lastModified,
    }),
  );

  const itineraryEntries = Object.values(itineraries)
    .filter((it) => it.slug !== "chikmagalur-2-days-itinerary")
    .map((it) =>
      entry(it.slug, {
        priority: 0.9,
        changeFrequency: "monthly",
        lastModified: new Date(it.lastUpdated),
      }),
    );

  const travelEntries = Object.values(travelInfo).map((t) =>
    entry(t.slug, { priority: 0.85, lastModified: SITE_LAUNCH }),
  );

  const pillarEntries = Object.values(pillarPages).map((p) =>
    entry(p.slug, { priority: 0.85, lastModified: SITE_LAUNCH }),
  );

  const placeEntries = allDestinationSlugs.map((slug) =>
    entry(`places/${slug}`, { priority: 0.85, changeFrequency: "monthly" }),
  );

  const stayEntries = staySlugs.map((slug) =>
    entry(`stays/${slug}`, {
      priority: 0.9,
      changeFrequency: "weekly",
      lastModified: CONTENT_UPDATE,
    }),
  );

  const locationEntries = Object.keys(locationPages).map((slug) =>
    entry(slug, { priority: 0.88, changeFrequency: "monthly" }),
  );

  const blogArticleEntries = blogLongSlugs.map((slug) =>
    entry(`blog/${slug}`, { priority: 0.8, changeFrequency: "monthly" }),
  );

  return [
    ...staticEntries,
    ...locationEntries,
    ...blogArticleEntries,
    ...itineraryEntries,
    ...travelEntries,
    ...pillarEntries,
    ...placeEntries,
    ...stayEntries,
  ];
}

/** @deprecated Use app/sitemap.ts — kept for any legacy imports */
export function buildSitemap(): MetadataRoute.Sitemap {
  return buildExtendedSitemapEntries();
}
