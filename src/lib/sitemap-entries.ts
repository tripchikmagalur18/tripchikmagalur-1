import type { MetadataRoute } from "next";
import { allDestinationSlugs } from "@/data/destinations";
import { staySlugs } from "@/data/stays";
import { itineraries } from "@/data/itineraries";
import { travelInfo } from "@/data/travelInfo";
import { pillarPages } from "@/data/pillarPages";

export const SITE_ORIGIN = "https://tripchikmagalur.com";

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

const staticPages: Array<{
  path: string;
  priority: number;
  changeFrequency?: SitemapEntry["changeFrequency"];
  lastModified?: Date;
}> = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "chikmagalur-tour-packages", priority: 0.95, changeFrequency: "weekly" },
  { path: "stays", priority: 0.95, changeFrequency: "weekly", lastModified: CONTENT_UPDATE },
  { path: "adventure", priority: 0.9, changeFrequency: "weekly" },
  { path: "places", priority: 0.9, changeFrequency: "weekly" },
  { path: "food", priority: 0.85 },
  { path: "faq", priority: 0.8 },
  { path: "blog", priority: 0.75 },
  { path: "2-day-chikmagalur-itinerary", priority: 0.95, changeFrequency: "weekly" },
  { path: "places-to-visit-in-chikmagalur", priority: 0.9 },
  { path: "resorts-in-chikmagalur", priority: 0.85 },
  { path: "package/day-1", priority: 0.85, changeFrequency: "monthly" },
  { path: "package/day-2", priority: 0.85, changeFrequency: "monthly" },
  { path: "package/day-3", priority: 0.85, changeFrequency: "monthly" },
  { path: "package/day-4", priority: 0.85, changeFrequency: "monthly" },
  { path: "package/day-5", priority: 0.85, changeFrequency: "monthly" },
  { path: "chikmagalur-itinerary", priority: 0.9 },
  { path: "chikmagalur-itinerary-from-bangalore", priority: 0.9 },
  { path: "best-time-to-visit-chikmagalur", priority: 0.85 },
  { path: "how-to-reach-chikmagalur", priority: 0.85 },
  { path: "chikmagalur-weather", priority: 0.8 },
  { path: "things-to-do-in-chikmagalur", priority: 0.85 },
  { path: "chikmagalur-travel-tips", priority: 0.8 },
  { path: "chikmagalur-local-food", priority: 0.8 },
  { path: "trekking-in-chikmagalur", priority: 0.85 },
  { path: "waterfalls-in-chikmagalur", priority: 0.85 },
  { path: "chikmagalur-trip-budget", priority: 0.8 },
];

export function buildSitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.map((p) =>
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

  return [
    ...staticEntries,
    ...itineraryEntries,
    ...travelEntries,
    ...pillarEntries,
    ...placeEntries,
    ...stayEntries,
  ];
}
