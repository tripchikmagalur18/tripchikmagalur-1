import type { Metadata } from "next";
import { absoluteAssetUrl, buildMetadata, type SeoInput } from "@/lib/seo";
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
      "Book Chikmagalur tour packages from ₹3,499. Mullayanagiri trek, Kemmangundi, waterfalls & jeep safari. Govt. verified, 500+ travellers. Book via WhatsApp instantly.",
    canonical: "/",
  },
  "/adventure": {
    title: "Chikmagalur Adventure Activities — Zipline, ATV, Trek & Jeep Safari (2026)",
    description:
      "Book adventure in Chikmagalur: ziplining, ATV, jeep safari, Mullayanagiri trek, fishing & camping. Safe gear, local guides, instant WhatsApp booking.",
    canonical: "/adventure",
  },
  "/stays": {
    title: "Stays in Chikmagalur — Resort, Villa, Homestay & Stay SR (2026)",
    description:
      "Book Trip Chikmagalur Resort (₹1,500), Villa (₹1,200), Homestay (₹799) or Stay SR (₹799) per adult/night. Pool, kitchen villa, group rooms, balcony guest house — WhatsApp booking.",
    canonical: "/stays",
  },
  "/food": {
    title: "Chikmagalur Food Guide — Malnad Cuisine, Coffee & Estate Cafés (2026)",
    description:
      "Best food in Chikmagalur: Malnad thali, Akki Rotti, Pandi Curry, Neer Dosa, estate filter coffee & rooftop cafés. Local dishes every traveler should try.",
    canonical: "/food",
  },
  "/faq": {
    title: "Chikmagalur FAQ (2026) — Packages, Resort, Villa, Treks & Costs",
    description:
      "30+ answers on Chikmagalur tour package prices, resort & villa booking, Mullayanagiri trek, Hebbe Falls jeep, honeymoon trips, adventure activities, and weekend plans from Bangalore.",
    canonical: "/faq",
  },
  "/blog": {
    title: "Chikmagalur Travel Blog (2026) — Packages, Stays, Treks & Waterfalls",
    description:
      "27 expert guides: Chikmagalur tour packages from Bangalore, resort with pool, private villa pricing, Mullayanagiri trek, Hebbe Falls, coffee estates, monsoon trips & corporate outings.",
    canonical: "/blog",
  },
  "/package/day-1": {
    title: "Day 1 Chikmagalur Tour — Mullayanagiri, Baba Budangiri & Coffee Estates",
    description:
      "Day 1 Chikmagalur package: Mullayanagiri sunrise, Baba Budangiri, Honnamma Falls, coffee plantation walk & local sightseeing with guided transport.",
    canonical: "/package/day-1",
  },
  "/package/day-2": {
    title: "Day 2 Chikmagalur Tour — Hebbe Falls, Kemmanagundi & Hill Views",
    description:
      "Day 2 Chikmagalur package: Hebbe Falls jeep ride, Kemmanagundi Raj Bhavan, Kalhatti Falls & Western Ghats viewpoints — full guided day trip.",
    canonical: "/package/day-2",
  },
  "/package/day-3": {
    title: "Day 3 Chikmagalur Tour — Lakes, Estate Cafés & Bhadra Wildlife Safari",
    description:
      "Day 3 Chikmagalur package: Hirekolale Lake, Estate Café, Mallandur viewpoint, Muthodi forest safari & offbeat waterfalls near Chikmagalur.",
    canonical: "/package/day-3",
  },
  "/package/day-4": {
    title: "Day 4 Belur & Halebidu Heritage Tour from Chikmagalur (2026)",
    description:
      "Day 4 package: Belur Chennakeshava Temple, Halebidu Hoysaleshwara Temple, Hiremagalur & Belur Dam — Hoysala heritage day trip from Chikmagalur.",
    canonical: "/package/day-4",
  },
  "/package/day-5": {
    title: "Day 5 Sringeri & Trek Tour — Devaramane, Ethina Bhuja & Abbi Falls",
    description:
      "Day 5 Chikmagalur package: Devaramane Betta, Ethina Bhuja trek, Abbi Falls, Siddhartha Hegde Park & Mudigere valley views with local guide.",
    canonical: "/package/day-5",
  },
  "/places": {
    title: "30+ Places to Visit in Chikmagalur — Distances, Timings & Tips (2026)",
    description:
      "Complete Chikmagalur places guide: Mullayanagiri, Hebbe Falls, Baba Budangiri, Jhari Falls, Kemmanagundi, coffee estates & hidden gems with 5-day route plan.",
    canonical: "/places",
  },
  "/chikmagalur-tour-packages": {
    title: "Chikmagalur Tour Packages — Best Deals from ₹3,499 (2026) | Trip Chikmagalur",
    description:
      "Book Chikmagalur tour packages from ₹3,499/group — Mullayanagiri, Kemmangundi, Muthodi safari, Belur & Sringeri treks. Weekend, honeymoon & corporate plans from Bangalore, Mysore & Mangalore.",
    canonical: "/chikmagalur-tour-packages",
  },
  "/places-to-visit-in-chikmagalur": {
    title: "Top 10 Places to Visit in Chikmagalur (2026 Guide)",
    description:
      "Top places in Chikmagalur ranked — Mullayanagiri, Hebbe Falls, Baba Budangiri, Kemmanagundi, Jhari Falls. Entry fees, best season, distances & insider tips.",
    canonical: "/places-to-visit-in-chikmagalur",
  },
  "/2-day-chikmagalur-itinerary": {
    title: "2 Day Chikmagalur Itinerary — Perfect Weekend from Bangalore (2026)",
    description:
      "Best 2 day Chikmagalur plan: Mullayanagiri, Hebbe Falls, Baba Budangiri, coffee estate. Hour-by-hour schedule, ₹3,500 budget, packing list & travel FAQs.",
    canonical: "/2-day-chikmagalur-itinerary",
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
    ogType: "article",
  });
}

export function metadataForPillar(key: keyof typeof pillarPages): Metadata {
  const data = pillarPages[key];
  return buildMetadata({
    title: data.title,
    description: data.description,
    canonical: `/${data.slug}`,
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
    ogType: "website",
  });
}

export function generateStaticParams() {
  return allDestinationSlugs.map((slug) => ({ slug }));
}
