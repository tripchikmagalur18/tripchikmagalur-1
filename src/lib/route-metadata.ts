import type { Metadata } from "next";
import { absoluteAssetUrl, buildMetadata, metaDescription, type SeoInput } from "@/lib/seo";
import { imageSrc } from "@/lib/image-src";
import { getStayBySlug } from "@/data/stays";
import { travelInfo } from "@/data/travelInfo";
import { pillarPages } from "@/data/pillarPages";
import { destinations, allDestinationSlugs } from "@/data/destinations";
import { itineraries } from "@/data/itineraries";

const staticMeta: Record<string, SeoInput> = {
  "/": {
    title: "Chikmagalur Tour Packages, Stays & Treks | Trip Chikmagalur",
    description:
      "Book Chikmagalur tour packages from ₹3,499 — Mullayanagiri trek, Kemmangundi, waterfalls & jeep safari. Govt. verified, 500+ travellers. Book on WhatsApp.",
    canonical: "/",
  },
  "/adventure": {
    title: "Chikmagalur Adventure — ATV & Trek | Trip Chikmagalur",
    description:
      "Book Chikmagalur adventure — ziplining, ATV, jeep safari, Mullayanagiri trek, fishing & camping. Safe gear, expert guides. Book instantly on WhatsApp.",
    canonical: "/adventure",
  },
  "/stays": {
    title: "Chikmagalur Stays — Resort & Villa | Trip Chikmagalur",
    description:
      "Book Trip Chikmagalur stays from ₹799/person — resort with pool, forest Resort P2, villa & homestay. Group rooms available. Book your dates on WhatsApp.",
    canonical: "/stays",
  },
  "/food": {
    title: "Chikmagalur Food Guide — Malnad & Coffee | Trip Chikmagalur",
    description:
      "Taste Chikmagalur — Malnad thali, Akki Rotti, Pandi Curry, Neer Dosa & estate filter coffee. Top local dishes & cafés. Plan your food trail on WhatsApp.",
    canonical: "/food",
  },
  "/faq": {
    title: "Chikmagalur FAQ — Packages, Stays & Treks | Trip Chikmagalur",
    description:
      "30+ Chikmagalur FAQs on tour prices, stays, Mullayanagiri trek, Hebbe Falls jeep, honeymoon trips & weekend plans from Bangalore. Get answers & book on WhatsApp.",
    canonical: "/faq",
  },
  "/contact": {
    title: "Contact Trip Chikmagalur — Phone & WhatsApp | Trip Chikmagalur",
    description:
      "Contact Trip Chikmagalur — call +91 6363131585, email tripchikmagalur18@gmail.com, or WhatsApp for tour packages, stays & treks. Open daily 7 AM–9 PM IST.",
    canonical: "/contact",
  },
  "/blog": {
    title: "Chikmagalur Travel Blog — Tips & Guides | Trip Chikmagalur",
    description:
      "Chikmagalur travel guides — packages from Bangalore, pool resort, villa stays, Mullayanagiri trek, Hebbe Falls & coffee estates. Read tips & book on WhatsApp.",
    canonical: "/blog",
  },
  "/package/day-1": {
    title: "Day 1 Chikmagalur — Mullayanagiri Tour | Trip Chikmagalur",
    description:
      "Day 1 Chikmagalur package — Mullayanagiri sunrise, Baba Budangiri, Honnamma Falls & coffee plantation walk. Private cab & guide. Book on WhatsApp.",
    canonical: "/package/day-1",
  },
  "/package/day-2": {
    title: "Day 2 Chikmagalur — Hebbe Falls Tour | Trip Chikmagalur",
    description:
      "Day 2 Chikmagalur package — Hebbe Falls jeep, Kemmangundi Raj Bhavan, Kalhatti Falls & hill viewpoints. Full guided day trip. Book on WhatsApp.",
    canonical: "/package/day-2",
  },
  "/package/day-3": {
    title: "Day 3 Chikmagalur — Bhadra Safari & Lakes | Trip Chikmagalur",
    description:
      "Day 3 Chikmagalur package — Hirekolale Lake, Estate Café, Mallandur viewpoint & Muthodi forest safari. Nature day tour with guide. Book on WhatsApp.",
    canonical: "/package/day-3",
  },
  "/package/day-4": {
    title: "Day 4 Belur Halebidu Heritage Tour | Trip Chikmagalur",
    description:
      "Day 4 Belur & Halebidu tour — Chennakeshava & Hoysaleshwara temples, Hiremagalur & Belur Dam. Heritage day trip from Chikmagalur. Book on WhatsApp.",
    canonical: "/package/day-4",
  },
  "/package/day-5": {
    title: "Day 5 Sringeri Trek Package Tour | Trip Chikmagalur",
    description:
      "Day 5 Sringeri trek tour from Chikmagalur — Devaramane Betta, Ethina Bhuja trek, Abbi Falls & Mudigere views. Guided adventure. Book on WhatsApp.",
    canonical: "/package/day-5",
  },
  "/places": {
    title: "Best Places to Visit in Chikmagalur | Trip Chikmagalur",
    description:
      "Chikmagalur places guide — Mullayanagiri, Hebbe Falls, Baba Budangiri, Jhari Falls, Kemmangundi & coffee estates. Distances, timings & routes. Book on WhatsApp.",
    canonical: "/places",
  },
  "/chikmagalur-tour-packages": {
    title: "Chikmagalur Tour Packages from ₹3,499 | Trip Chikmagalur",
    description:
      "Chikmagalur tour packages from ₹3,499/group — Mullayanagiri, Kemmangundi, Muthodi safari, Belur & Sringeri treks. Weekend & honeymoon plans. Book on WhatsApp.",
    canonical: "/chikmagalur-tour-packages",
  },
  "/places-to-visit-in-chikmagalur": {
    title: "Top 10 Places to Visit in Chikmagalur | Trip Chikmagalur",
    description:
      "Top 10 places in Chikmagalur — Mullayanagiri, Hebbe Falls, Baba Budangiri, Kemmangundi & Jhari Falls. Entry fees, best season & tips. Book tours on WhatsApp.",
    canonical: "/places-to-visit-in-chikmagalur",
  },
  "/2-day-chikmagalur-itinerary": {
    title: "2 Day Chikmagalur Weekend Itinerary | Trip Chikmagalur",
    description:
      "Best 2-day Chikmagalur plan — Mullayanagiri, Hebbe Falls, Baba Budangiri & coffee estate. Hour-by-hour schedule, budget tips & FAQs. Book packages on WhatsApp.",
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
  return buildMetadata({
    title: `${stay.name} — ₹${price}/person | Trip Chikmagalur`,
    description: metaDescription(
      `${stay.tagline} From ₹${price}/person/night. ${stay.highlights[0]}. Book on WhatsApp.`,
    ),
    canonical: `/stays/${stay.slug}`,
    ogImage: absoluteAssetUrl(imageSrc(stay.coverImage)),
    ogType: "website",
  });
}

export function generateStaticParams() {
  return allDestinationSlugs.map((slug) => ({ slug }));
}
