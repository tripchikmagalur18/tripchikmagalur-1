import type { Metadata } from "next";
import { buildMetadata, SITE_URL, type SeoInput } from "@/lib/seo";
import { travelInfo } from "@/data/travelInfo";
import { pillarPages } from "@/data/pillarPages";
import { destinations, allDestinationSlugs } from "@/data/destinations";
import { itineraries } from "@/data/itineraries";

const staticMeta: Record<string, SeoInput> = {
  "/": {
    title: "Best Chikmagalur Tour Packages | Trip Chikmagalur",
    description:
      "Explore affordable Chikmagalur tour packages with stays, sightseeing, trekking, waterfalls and adventure activities.",
    canonical: "/",
  },
  "/adventure": {
    title: "Chikmagalur Adventure Activities — Ziplining, ATV, Trek & Jeep Safari",
    description:
      "Book the best adventure activities in Chikmagalur: ziplining, ATV rides, jeep safaris, Mullayanagiri trekking, fishing, camping & sightseeing. Expert guides, safe gear, best prices.",
    canonical: "/adventure",
  },
  "/stays": {
    title: "Stays in Chikmagalur — Resort & Private Villa | Trip Chikmagalur",
    description:
      "Choose Trip Chikmagalur Resort or Trip Chikmagalur Villa. Book with your check-in date and number of adults — checkout on WhatsApp.",
    canonical: "/stays",
  },
  "/food": {
    title: "Authentic Chikmagalur Food & Malnad Cuisine Guide",
    description:
      "Taste the best of Chikmagalur: Malnad thali, Akki Rotti, Pandi Curry, Neer Dosa, filter coffee & estate cafés. Curated food experiences for travelers.",
    canonical: "/food",
  },
  "/faq": {
    title: "Chikmagalur Travel FAQ — Best Time, Places, Treks & Tips",
    description:
      "Answers to common Chikmagalur travel questions: best time to visit, top places, treks, family trips, solo travel safety, food, and itineraries.",
    canonical: "/faq",
  },
  "/blog": {
    title: "Chikmagalur Travel Blog — Itineraries, Tips & Hidden Gems",
    description:
      "Expert Chikmagalur travel guides: 2-day & 3-day itineraries from Bangalore, monsoon trips, offbeat treks, coffee plantation stays under ₹2000, packing lists & local food tips.",
    canonical: "/blog",
  },
  "/package/day-1": {
    title: "Day 1 Chikmagalur Tour Package | Trip Chikmagalur",
    description:
      "Day 1 Chikmagalur tour package itinerary covering top sights, coffee estates, and adventure activities.",
    canonical: "/package/day-1",
  },
  "/package/day-2": {
    title: "Day 2 Chikmagalur Tour Package | Trip Chikmagalur",
    description:
      "Day 2 Chikmagalur tour package itinerary featuring waterfalls, hill stations, and curated local experiences.",
    canonical: "/package/day-2",
  },
  "/package/day-3": {
    title: "Day 3 Chikmagalur Tour Package | Trip Chikmagalur",
    description:
      "Day 3 Chikmagalur tour package itinerary with lakes, plantation cafes, and Bhadra wildlife experiences.",
    canonical: "/package/day-3",
  },
  "/places": {
    title: "Top Places to Visit in Chikmagalur — 30+ Destinations | Trip Chikmagalur",
    description:
      "Explore 30+ best places to visit in Chikmagalur including Mullayanagiri, Hebbe Falls, Baba Budangiri, Jhari Falls, coffee estates & hidden gems. 5-day complete itinerary with distances, timings & tips.",
    canonical: "/places",
  },
  "/chikmagalur-tour-packages": {
    title: "Chikmagalur Tour Packages — Best Deals from ₹2,999 (2026)",
    description:
      "Book Chikmagalur tour packages from ₹2,999. 1, 2 & 3-day plans covering Mullayanagiri, Hebbe Falls, coffee estates. Customisable, govt-approved, 4.9★ rated.",
    canonical: "/chikmagalur-tour-packages",
  },
  "/places-to-visit-in-chikmagalur": {
    title: "Top 10 Places to Visit in Chikmagalur (2026 Guide)",
    description:
      "Top places to visit in Chikmagalur — Mullayanagiri, Hebbe Falls, Baba Budangiri, Kemmanagundi & more. Distances, timings, entry fees & insider tips.",
    canonical: "/places-to-visit-in-chikmagalur",
  },
  "/2-day-chikmagalur-itinerary": {
    title: "2 Day Chikmagalur Itinerary — Perfect Weekend Plan (2026)",
    description:
      "The best 2 day Chikmagalur itinerary — Mullayanagiri, Hebbe Falls, Baba Budangiri, coffee estate. Hour-by-hour plan, ₹3,500 budget, packing list & FAQs.",
    canonical: "/2-day-chikmagalur-itinerary",
  },
  "/404": {
    title: "Page Not Found — Trip Chikmagalur",
    description:
      "Sorry, this page doesn't exist. Explore our Chikmagalur travel guide instead — places to visit, adventure activities, stays, and itineraries.",
    canonical: "/404",
    noindex: true,
  },
};

export function metadataForPath(canonical: string): Metadata {
  const entry = staticMeta[canonical];
  if (entry) return buildMetadata(entry);
  return buildMetadata({ title: "Trip Chikmagalur", canonical: "/" });
}

export function metadataForTravelInfo(key: keyof typeof travelInfo): Metadata {
  const data = travelInfo[key];
  return buildMetadata({
    title: data.title,
    description: data.description,
    canonical: `/${data.slug}`,
  });
}

export function metadataForPillar(key: keyof typeof pillarPages): Metadata {
  const data = pillarPages[key];
  return buildMetadata({
    title: data.title,
    description: data.description,
    canonical: `/${data.slug}`,
  });
}

export function metadataForItinerary(slug: string): Metadata {
  const it = itineraries[slug];
  if (!it) return metadataForPath("/");
  return buildMetadata({
    title: it.title,
    description: it.description,
    canonical: `/${it.slug}`,
    ogType: "article",
  });
}

export async function metadataForDestination(slug: string): Promise<Metadata> {
  const d = destinations[slug];
  if (!d) return metadataForPath("/404");
  return buildMetadata({
    title: d.title,
    description: d.description,
    canonical: `/places/${d.slug}`,
    ogImage: `${SITE_URL}${d.hero.image}`,
    ogType: "article",
  });
}

export function generateStaticParams() {
  return allDestinationSlugs.map((slug) => ({ slug }));
}
