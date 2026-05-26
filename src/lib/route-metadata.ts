import type { Metadata } from "next";
import { absoluteAssetUrl, buildMetadata, type SeoInput } from "@/lib/seo";
import {
  ADVENTURE_KEYWORDS,
  FOOD_KEYWORDS,
  HOME_KEYWORDS,
  PACKAGES_KEYWORDS,
  PACKAGE_DAY_KEYWORDS,
  PLACES_KEYWORDS,
  STAYS_KEYWORDS,
  STAY_KEYWORDS,
  pageKeywords,
} from "@/lib/seo-keywords";
import { blogKeywords } from "@/data/blog-posts";
import { faqKeywords } from "@/data/faq-content";
import { imageSrc } from "@/lib/image-src";
import { getStayBySlug } from "@/data/stays";
import { travelInfo } from "@/data/travelInfo";
import { pillarPages } from "@/data/pillarPages";
import { destinations, allDestinationSlugs } from "@/data/destinations";
import { itineraries } from "@/data/itineraries";

const staticMeta: Record<string, SeoInput> = {
  "/": {
    title: "Chikmagalur Tour Packages 2026 | Stays, Treks & Adventures — Trip Chikmagalur",
    description:
      "Book Chikmagalur tour packages from ₹3,499. Mullayanagiri trek, Kemmangundi, waterfalls & jeep safari. Govt. verified, 5000+ travelers. Book via WhatsApp instantly.",
    canonical: "/",
    keywords: HOME_KEYWORDS,
    subject: "Chikmagalur tour packages and travel planning",
  },
  "/adventure": {
    title: "Chikmagalur Adventure Activities — Zipline, ATV, Trek & Jeep Safari (2026)",
    description:
      "Book adventure in Chikmagalur: ziplining, ATV, jeep safari, Mullayanagiri trek, fishing & camping. Safe gear, local guides, instant WhatsApp booking.",
    canonical: "/adventure",
    keywords: ADVENTURE_KEYWORDS,
    subject: "Chikmagalur adventure and outdoor activities",
  },
  "/stays": {
    title: "Stays in Chikmagalur — Resort with Pool & Private Villa (2026)",
    description:
      "Book Trip Chikmagalur Resort (₹1,500/adult/night) or Private Villa (₹1,200/adult/night). Pool, AC rooms, kitchen villa — pick dates & adults, checkout on WhatsApp.",
    canonical: "/stays",
    keywords: STAYS_KEYWORDS,
    subject: "Chikmagalur resort and villa accommodation",
  },
  "/food": {
    title: "Chikmagalur Food Guide — Malnad Cuisine, Coffee & Estate Cafés (2026)",
    description:
      "Best food in Chikmagalur: Malnad thali, Akki Rotti, Pandi Curry, Neer Dosa, estate filter coffee & rooftop cafés. Local dishes every traveler should try.",
    canonical: "/food",
    keywords: FOOD_KEYWORDS,
    subject: "Chikmagalur food and Malnad cuisine",
  },
  "/faq": {
    title: "Chikmagalur FAQ (2026) — Packages, Resort, Villa, Treks & Costs",
    description:
      "30+ answers on Chikmagalur tour package prices, resort & villa booking, Mullayanagiri trek, Hebbe Falls jeep, honeymoon trips, adventure activities, and weekend plans from Bangalore.",
    canonical: "/faq",
    keywords: faqKeywords,
    subject: "Chikmagalur travel frequently asked questions",
  },
  "/blog": {
    title: "Chikmagalur Travel Blog (2026) — Packages, Stays, Treks & Waterfalls",
    description:
      "27 expert guides: Chikmagalur tour packages from Bangalore, resort with pool, private villa pricing, Mullayanagiri trek, Hebbe Falls, coffee estates, monsoon trips & corporate outings.",
    canonical: "/blog",
    keywords: blogKeywords,
    subject: "Chikmagalur travel blog and guides",
  },
  "/package/day-1": {
    title: "Day 1 Chikmagalur Tour — Mullayanagiri, Baba Budangiri & Coffee Estates",
    description:
      "Day 1 Chikmagalur package: Mullayanagiri sunrise, Baba Budangiri, Honnamma Falls, coffee plantation walk & local sightseeing with guided transport.",
    canonical: "/package/day-1",
    keywords: PACKAGE_DAY_KEYWORDS["/package/day-1"],
    subject: "Chikmagalur day 1 tour itinerary",
  },
  "/package/day-2": {
    title: "Day 2 Chikmagalur Tour — Hebbe Falls, Kemmanagundi & Hill Views",
    description:
      "Day 2 Chikmagalur package: Hebbe Falls jeep ride, Kemmanagundi Raj Bhavan, Kalhatti Falls & Western Ghats viewpoints — full guided day trip.",
    canonical: "/package/day-2",
    keywords: PACKAGE_DAY_KEYWORDS["/package/day-2"],
    subject: "Chikmagalur day 2 waterfalls tour",
  },
  "/package/day-3": {
    title: "Day 3 Chikmagalur Tour — Lakes, Estate Cafés & Bhadra Wildlife Safari",
    description:
      "Day 3 Chikmagalur package: Hirekolale Lake, Estate Café, Mallandur viewpoint, Muthodi forest safari & offbeat waterfalls near Chikmagalur.",
    canonical: "/package/day-3",
    keywords: PACKAGE_DAY_KEYWORDS["/package/day-3"],
    subject: "Chikmagalur day 3 nature and safari tour",
  },
  "/package/day-4": {
    title: "Day 4 Belur & Halebidu Heritage Tour from Chikmagalur (2026)",
    description:
      "Day 4 package: Belur Chennakeshava Temple, Halebidu Hoysaleshwara Temple, Hiremagalur & Belur Dam — Hoysala heritage day trip from Chikmagalur.",
    canonical: "/package/day-4",
    keywords: PACKAGE_DAY_KEYWORDS["/package/day-4"],
    subject: "Belur Halebidu tour from Chikmagalur",
  },
  "/package/day-5": {
    title: "Day 5 Sringeri & Trek Tour — Devaramane, Ethina Bhuja & Abbi Falls",
    description:
      "Day 5 Chikmagalur package: Devaramane Betta, Ethina Bhuja trek, Abbi Falls, Siddhartha Hegde Park & Mudigere valley views with local guide.",
    canonical: "/package/day-5",
    keywords: PACKAGE_DAY_KEYWORDS["/package/day-5"],
    subject: "Chikmagalur day 5 trekking tour",
  },
  "/places": {
    title: "30+ Places to Visit in Chikmagalur — Distances, Timings & Tips (2026)",
    description:
      "Complete Chikmagalur places guide: Mullayanagiri, Hebbe Falls, Baba Budangiri, Jhari Falls, Kemmanagundi, coffee estates & hidden gems with 5-day route plan.",
    canonical: "/places",
    keywords: PLACES_KEYWORDS,
    subject: "Places to visit in Chikmagalur",
  },
  "/chikmagalur-tour-packages": {
    title: "Chikmagalur Tour Packages — Best Deals from ₹2,999 (2026)",
    description:
      "Book Chikmagalur tour packages from ₹2,999 — 1, 2 & 3-day plans with Mullayanagiri, Hebbe Falls, stays & jeep rides. Customisable trips from Bangalore & Mysore.",
    canonical: "/chikmagalur-tour-packages",
    keywords: PACKAGES_KEYWORDS,
    subject: "Chikmagalur tour packages and pricing",
  },
  "/places-to-visit-in-chikmagalur": {
    title: "Top 10 Places to Visit in Chikmagalur (2026 Guide)",
    description:
      "Top places in Chikmagalur ranked — Mullayanagiri, Hebbe Falls, Baba Budangiri, Kemmanagundi, Jhari Falls. Entry fees, best season, distances & insider tips.",
    canonical: "/places-to-visit-in-chikmagalur",
    keywords: pageKeywords(
      "places to visit in Chikmagalur",
      "top attractions Chikmagalur",
      "Chikmagalur sightseeing list",
    ),
    subject: "Top places to visit in Chikmagalur",
  },
  "/2-day-chikmagalur-itinerary": {
    title: "2 Day Chikmagalur Itinerary — Perfect Weekend from Bangalore (2026)",
    description:
      "Best 2 day Chikmagalur plan: Mullayanagiri, Hebbe Falls, Baba Budangiri, coffee estate. Hour-by-hour schedule, ₹3,500 budget, packing list & travel FAQs.",
    canonical: "/2-day-chikmagalur-itinerary",
    keywords: pageKeywords(
      "2 day Chikmagalur itinerary",
      "Chikmagalur weekend trip",
      "Chikmagalur 2 nights plan",
    ),
    subject: "2 day Chikmagalur weekend itinerary",
  },
  "/404": {
    title: "Page Not Found — Trip Chikmagalur",
    description:
      "Sorry, this page doesn't exist. Explore our Chikmagalur travel guide — places to visit, adventure activities, stays, and itineraries.",
    canonical: "/404",
    noindex: true,
  },
};

export function metadataForPath(canonical: string): Metadata {
  const entry = staticMeta[canonical];
  if (entry) return buildMetadata(entry);
  return buildMetadata({
    title: "Page Not Found — Trip Chikmagalur",
    description: "The page you requested could not be found.",
    canonical: "/404",
    noindex: true,
  });
}

/** App Router `generateMetadata` — self-referencing canonical at https://tripchikmagalur.com */
export async function generateMetadataForPath(canonical: string): Promise<Metadata> {
  return metadataForPath(canonical);
}

export function metadataForTravelInfo(key: keyof typeof travelInfo): Metadata {
  const data = travelInfo[key];
  return buildMetadata({
    title: data.title,
    description: data.description,
    canonical: `/${data.slug}`,
    keywords: pageKeywords(data.primaryKeyword, `${data.primaryKeyword} 2026`, "Chikmagalur Karnataka"),
    subject: data.primaryKeyword,
    ogType: "article",
  });
}

export function metadataForPillar(key: keyof typeof pillarPages): Metadata {
  const data = pillarPages[key];
  return buildMetadata({
    title: data.title,
    description: data.description,
    canonical: `/${data.slug}`,
    keywords: pageKeywords(data.primaryKeyword, `${data.slug.replace(/-/g, " ")} guide`),
    subject: data.primaryKeyword,
    ogType: "article",
  });
}

export function metadataForItinerary(slug: string): Metadata {
  const it = itineraries[slug];
  if (!it) {
    return buildMetadata({
      title: "Page Not Found — Trip Chikmagalur",
      description: "The page you requested could not be found.",
      canonical: "/404",
      noindex: true,
    });
  }
  return buildMetadata({
    title: it.title,
    description: it.description,
    canonical: `/${it.slug}`,
    keywords: pageKeywords(it.primaryKeyword, "Chikmagalur itinerary 2026", "weekend trip Chikmagalur"),
    subject: it.primaryKeyword,
    ogType: "article",
  });
}

export async function metadataForDestination(slug: string): Promise<Metadata> {
  const d = destinations[slug];
  if (!d) {
    return buildMetadata({
      title: "Page Not Found — Trip Chikmagalur",
      description: "The page you requested could not be found.",
      canonical: "/404",
      noindex: true,
    });
  }
  return buildMetadata({
    title: d.title,
    description: d.description,
    canonical: `/places/${d.slug}`,
    ogImage: absoluteAssetUrl(imageSrc(d.hero.image)),
    keywords: pageKeywords(
      d.primaryKeyword,
      "places to visit in Chikmagalur",
      `${d.h1.split("—")[0].trim()}`,
    ),
    subject: d.primaryKeyword,
    ogType: "article",
  });
}

export function metadataForStay(slug: string): Metadata {
  const stay = getStayBySlug(slug);
  if (!stay) {
    return buildMetadata({
      title: "Page Not Found — Trip Chikmagalur",
      description: "The page you requested could not be found.",
      canonical: "/404",
      noindex: true,
    });
  }
  const price = stay.pricePerPerson.toLocaleString("en-IN");
  const isResort = stay.slug.includes("resort");
  return buildMetadata({
    title: `${stay.name} — Book ${isResort ? "Resort" : "Villa"} in Chikmagalur (2026)`,
    description: `${stay.tagline}. ${stay.description.slice(0, 120)}… From ₹${price}/adult/night. Book dates on WhatsApp.`,
    canonical: `/stays/${stay.slug}`,
    ogImage: absoluteAssetUrl(imageSrc(stay.coverImage)),
    keywords: STAY_KEYWORDS[stay.slug] ?? pageKeywords(stay.name, "book stay Chikmagalur"),
    subject: `${stay.name} booking Chikmagalur`,
    ogType: "website",
  });
}

export function generateStaticParams() {
  return allDestinationSlugs.map((slug) => ({ slug }));
}
