export type LocationPageData = {
  slug: string;
  title: string;
  metaDescription: string;
  keyword: string;
  h1: string;
  intro: string;
  sections: { h2: string; paragraphs: string[] }[];
  packageLinks: { label: string; href: string }[];
};

export const locationPages: Record<string, LocationPageData> = {
  "chikmagalur-tour-packages-from-bangalore": {
    slug: "chikmagalur-tour-packages-from-bangalore",
    title: "Chikmagalur Tour Packages from Bangalore — Weekend Deals (2026)",
    metaDescription:
      "Chikmagalur tour packages from Bangalore from ₹3,499. 245 km drive, 2-day itineraries, Mullayanagiri & Hebbe Falls. Book cab + guide on WhatsApp.",
    keyword: "Chikmagalur tour packages from Bangalore",
    h1: "Chikmagalur Tour Packages from Bangalore",
    intro:
      "Bangalore travellers account for most weekend demand in Chikmagalur — roughly 245 km via Hassan and Belur on NH75, about five to six hours by car. Leaving Friday night or Saturday before dawn lets you fit Mullayanagiri sunrise, Baba Budangiri, and Hebbe Falls across two days without rushing back Sunday night.",
    sections: [
      {
        h2: "Best package combo from Bangalore",
        paragraphs: [
          "Day 1: Book the Mullayanagiri trek package (₹3,499/group) for peaks, Jhari jeep ride, and Z Point. Stay at Trip Chikmagalur Resort or Villa. Day 2: Kemmangundi tour package (₹4,499/group) for Hebbe Falls and hill views. Total driving from Bangalore plus local loops is manageable with an early start.",
          "Sleeper buses and self-drive convoys are common — we coordinate pickup points in Chikmagalur town if you do not need Bangalore pickup (ask on WhatsApp).",
        ],
      },
      {
        h2: "Budget and timing from Bengaluru",
        paragraphs: [
          "DIY fuel share often runs ₹1,200–2,000 per person round trip; guided packages save planning time and include local entry coordination. Peak season is December–January — book stays three weeks ahead. See our 2-day itinerary and Bangalore route guide for toll and breakfast stop tips.",
        ],
      },
    ],
    packageLinks: [
      { label: "Mullayanagiri trek package", href: "/mullayanagiri-trek-package" },
      { label: "2-day itinerary", href: "/2-day-chikmagalur-itinerary" },
      { label: "How to reach Chikmagalur", href: "/how-to-reach-chikmagalur" },
    ],
  },
  "chikmagalur-tour-packages-from-mangalore": {
    slug: "chikmagalur-tour-packages-from-mangalore",
    title: "Chikmagalur Tour Packages from Mangalore — Coastal Weekend (2026)",
    metaDescription:
      "Chikmagalur packages from Mangalore — shorter drive, hill station tours, waterfalls & stays. From ₹3,499/group. WhatsApp booking.",
    keyword: "Chikmagalur tour packages from Mangalore",
    h1: "Chikmagalur Tour Packages from Mangalore",
    intro:
      "Mangalore is the nearest major airport and port city to Chikmagalur — about 150 km inland, typically three to four hours through Kadur or Charmadi ghat routes depending on road conditions. Coastal families often prefer a cooler hill break without the long Bangalore haul.",
    sections: [
      {
        h2: "Why Mangalore travellers choose Chikmagalur",
        paragraphs: [
          "Shorter transfer time means you can start sightseeing the same morning you arrive. Focus on Mullayanagiri and Baba Budangiri on day one, Muthodi wildlife safari on day two if you want nature over heritage temples.",
        ],
      },
      {
        h2: "Suggested packages",
        paragraphs: [
          "Mullayanagiri trek package and Muthodi safari package pair well for a nature-first trip from Mangalore. Add villa stay for groups of six or more splitting per-person night rates from ₹1,200. Monsoon visitors get lush estates but should plan waterfall days carefully.",
        ],
      },
    ],
    packageLinks: [
      { label: "Muthodi safari package", href: "/muthodi-safari-package" },
      { label: "Stays in Chikmagalur", href: "/stays" },
      { label: "Best time to visit", href: "/best-time-to-visit-chikmagalur" },
    ],
  },
  "chikmagalur-weekend-packages": {
    slug: "chikmagalur-weekend-packages",
    title: "Chikmagalur Weekend Packages — 2-Day Tours & Stays (2026)",
    metaDescription:
      "Chikmagalur weekend packages: 2-day Mullayanagiri + Hebbe Falls, resort stay, ₹3,499+ tours. Perfect Fri–Sun escape. Book on WhatsApp.",
    keyword: "Chikmagalur weekend packages",
    h1: "Chikmagalur Weekend Packages",
    intro:
      "Weekend packages bundle the two most requested sightseeing days — Mullayanagiri circuit and Kemmangundi–Hebbe circuit — with optional resort or villa stays. Designed for Friday-to-Sunday travellers from Bangalore, Mysore, and Mangalore who want a turnkey plan.",
    sections: [
      {
        h2: "Typical weekend structure",
        paragraphs: [
          "Friday: Arrive and check in. Saturday: Mullayanagiri trek package at sunrise, Baba Budangiri, Jhari Falls, sunset viewpoint. Sunday: Kemmangundi tour package with Hebbe Falls jeep, depart by evening. This mirrors our 2-day Chikmagalur itinerary with cart-bookable day tours.",
        ],
      },
      {
        h2: "Pricing overview",
        paragraphs: [
          "Tours: ₹3,499 + ₹4,499 per group for the two days (not per person). Stays: resort from ₹1,500/adult/night, villa from ₹1,200/adult/night. Adventure add-ons like ziplining and ATV are booked separately on the Adventure page.",
        ],
      },
    ],
    packageLinks: [
      { label: "Weekend 2-day itinerary", href: "/2-day-chikmagalur-itinerary" },
      { label: "Tour packages hub", href: "/chikmagalur-tour-packages" },
      { label: "Packages from Bangalore", href: "/chikmagalur-tour-packages-from-bangalore" },
    ],
  },
};
