import type { MetadataRoute } from "next";
import { allDestinationSlugs } from "@/data/destinations";
import { staySlugs } from "@/data/stays";

const BASE = "https://tripchikmagalur.com";

const staticPaths = [
  "",
  "places",
  "adventure",
  "stays",
  "food",
  "blog",
  "faq",
  "package/day-1",
  "package/day-2",
  "package/day-3",
  "chikmagalur-itinerary",
  "chikmagalur-2-days-itinerary",
  "chikmagalur-itinerary-from-bangalore",
  "best-time-to-visit-chikmagalur",
  "how-to-reach-chikmagalur",
  "chikmagalur-weather",
  "things-to-do-in-chikmagalur",
  "chikmagalur-travel-tips",
  "chikmagalur-local-food",
  "trekking-in-chikmagalur",
  "waterfalls-in-chikmagalur",
  "resorts-in-chikmagalur",
  "chikmagalur-trip-budget",
  "chikmagalur-tour-packages",
  "places-to-visit-in-chikmagalur",
  "2-day-chikmagalur-itinerary",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-04-28");
  const staticEntries = staticPaths.map((p) => ({
    url: p ? `${BASE}/${p}` : BASE + "/",
    lastModified,
  }));
  const placeEntries = allDestinationSlugs.map((slug) => ({
    url: `${BASE}/places/${slug}`,
    lastModified,
  }));
  const stayEntries = staySlugs.map((slug) => ({
    url: `${BASE}/stays/${slug}`,
    lastModified,
  }));
  return [...staticEntries, ...placeEntries, ...stayEntries];
}
