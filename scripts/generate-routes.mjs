import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(__dirname, "..", "src", "app");

const staticRoutes = [
  { path: "", component: "Index", meta: 'metadataForPath("/")' },
  { path: "adventure", component: "AdventurePage", meta: 'metadataForPath("/adventure")' },
  { path: "stays", component: "StaysPage", meta: 'metadataForPath("/stays")' },
  { path: "food", component: "FoodPage", meta: 'metadataForPath("/food")' },
  { path: "faq", component: "FAQPage", meta: 'metadataForPath("/faq")' },
  { path: "blog", component: "BlogPage", meta: 'metadataForPath("/blog")' },
  { path: "package/day-1", component: "PackageDayOne", meta: 'metadataForPath("/package/day-1")' },
  { path: "package/day-2", component: "PackageDayTwo", meta: 'metadataForPath("/package/day-2")' },
  { path: "package/day-3", component: "PackageDayThree", meta: 'metadataForPath("/package/day-3")' },
  { path: "places", component: "PlacesPage", meta: 'metadataForPath("/places")' },
  {
    path: "chikmagalur-itinerary",
    component: "ItineraryPage",
    props: 'slug="chikmagalur-itinerary"',
    meta: 'metadataForItinerary("chikmagalur-itinerary")',
  },
  {
    path: "chikmagalur-2-days-itinerary",
    component: "ItineraryPage",
    props: 'slug="chikmagalur-2-days-itinerary"',
    meta: 'metadataForItinerary("chikmagalur-2-days-itinerary")',
  },
  {
    path: "chikmagalur-itinerary-from-bangalore",
    component: "ItineraryPage",
    props: 'slug="chikmagalur-itinerary-from-bangalore"',
    meta: 'metadataForItinerary("chikmagalur-itinerary-from-bangalore")',
  },
  {
    path: "best-time-to-visit-chikmagalur",
    component: "TravelInfoPage",
    props: 'dataKey="best-time-to-visit-chikmagalur"',
    meta: 'metadataForTravelInfo("best-time-to-visit-chikmagalur")',
  },
  {
    path: "how-to-reach-chikmagalur",
    component: "TravelInfoPage",
    props: 'dataKey="how-to-reach-chikmagalur"',
    meta: 'metadataForTravelInfo("how-to-reach-chikmagalur")',
  },
  {
    path: "chikmagalur-weather",
    component: "TravelInfoPage",
    props: 'dataKey="chikmagalur-weather"',
    meta: 'metadataForTravelInfo("chikmagalur-weather")',
  },
  {
    path: "things-to-do-in-chikmagalur",
    component: "TravelInfoPage",
    props: 'dataKey="things-to-do-in-chikmagalur"',
    meta: 'metadataForTravelInfo("things-to-do-in-chikmagalur")',
  },
  {
    path: "chikmagalur-travel-tips",
    component: "TravelInfoPage",
    props: 'dataKey="chikmagalur-travel-tips"',
    meta: 'metadataForTravelInfo("chikmagalur-travel-tips")',
  },
  {
    path: "chikmagalur-local-food",
    component: "TravelInfoPage",
    props: 'dataKey="chikmagalur-local-food"',
    meta: 'metadataForTravelInfo("chikmagalur-local-food")',
  },
  {
    path: "chikmagalur-tour-packages",
    component: "TourPackagesPage",
    meta: 'metadataForPath("/chikmagalur-tour-packages")',
  },
  {
    path: "places-to-visit-in-chikmagalur",
    component: "PlacesToVisitPage",
    meta: 'metadataForPath("/places-to-visit-in-chikmagalur")',
  },
  {
    path: "2-day-chikmagalur-itinerary",
    component: "TwoDayItineraryPage",
    meta: 'metadataForPath("/2-day-chikmagalur-itinerary")',
  },
  {
    path: "trekking-in-chikmagalur",
    component: "PillarPage",
    props: 'dataKey="trekking-in-chikmagalur"',
    meta: 'metadataForPillar("trekking-in-chikmagalur")',
  },
  {
    path: "waterfalls-in-chikmagalur",
    component: "PillarPage",
    props: 'dataKey="waterfalls-in-chikmagalur"',
    meta: 'metadataForPillar("waterfalls-in-chikmagalur")',
  },
  {
    path: "resorts-in-chikmagalur",
    component: "PillarPage",
    props: 'dataKey="resorts-in-chikmagalur"',
    meta: 'metadataForPillar("resorts-in-chikmagalur")',
  },
  {
    path: "chikmagalur-trip-budget",
    component: "PillarPage",
    props: 'dataKey="chikmagalur-trip-budget"',
    meta: 'metadataForPillar("chikmagalur-trip-budget")',
  },
];

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

// Remove default next page if exists
const defaultPage = path.join(appDir, "page.tsx");
if (fs.existsSync(defaultPage)) {
  // will overwrite home
}

for (const route of staticRoutes) {
  const dir = route.path ? path.join(appDir, route.path) : appDir;
  ensureDir(dir);
  const props = route.props ? ` ${route.props}` : "";
  const content = `import ${route.component} from "@/page-views/${route.component}";
import { ${route.meta.split("(")[0]} } from "@/lib/route-metadata";

export const metadata = ${route.meta};

export default function Page() {
  return <${route.component}${props} />;
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), content);
}

const placesSlugDir = path.join(appDir, "places", "[slug]");
ensureDir(placesSlugDir);
fs.writeFileSync(
  path.join(placesSlugDir, "page.tsx"),
  `import DestinationPage from "@/page-views/DestinationPage";
import { metadataForDestination, generateStaticParams } from "@/lib/route-metadata";

export { generateStaticParams };

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return metadataForDestination(slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <DestinationPage slug={slug} />;
}
`,
);

fs.writeFileSync(
  path.join(appDir, "not-found.tsx"),
  `import NotFound from "@/page-views/NotFound";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/404");

export default function NotFoundPage() {
  return <NotFound />;
}
`,
);

fs.writeFileSync(
  path.join(__dirname, "..", "src", "app", "sitemap.ts"),
  `import type { MetadataRoute } from "next";
import { allDestinationSlugs } from "@/data/destinations";

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
    url: p ? \`\${BASE}/\${p}\` : BASE + "/",
    lastModified,
  }));
  const placeEntries = allDestinationSlugs.map((slug) => ({
    url: \`\${BASE}/places/\${slug}\`,
    lastModified,
  }));
  return [...staticEntries, ...placeEntries];
}
`,
);

fs.writeFileSync(
  path.join(__dirname, "..", "src", "app", "robots.ts"),
  `import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://tripchikmagalur.com/sitemap.xml",
  };
}
`,
);

console.log("Generated routes");
