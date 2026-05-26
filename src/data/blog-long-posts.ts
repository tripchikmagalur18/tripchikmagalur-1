export type BlogSection = {
  h2: string;
  paragraphs: string[];
  h3?: { title: string; paragraphs: string[] }[];
};

export type BlogLongPost = {
  slug: string;
  keyword: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  readTime: string;
  category: string;
  intro: string;
  sections: BlogSection[];
  relatedLinks: { label: string; href: string }[];
};

export const blogLongPosts: Record<string, BlogLongPost> = {
  "chikmagalur-itinerary-2-days": {
    slug: "chikmagalur-itinerary-2-days",
    keyword: "Chikmagalur itinerary 2 days",
    title: "Chikmagalur Itinerary 2 Days — Complete Weekend Plan (2026)",
    metaDescription:
      "Chikmagalur 2-day itinerary: Mullayanagiri sunrise, Hebbe Falls, Baba Budangiri, stays & costs. Hour-by-hour plan from Bangalore.",
    excerpt: "Hour-by-hour 2-day plan with Mullayanagiri, Hebbe Falls, budgets & booking links",
    readTime: "12 min read",
    category: "Itinerary",
    intro:
      "A [Chikmagalur itinerary for 2 days](/2-day-chikmagalur-itinerary) is the sweet spot for most travellers — long enough for Mullayanagiri, Baba Budangiri, and Hebbe Falls, short enough for a Friday-to-Sunday run from Bangalore. This guide maps each day to our [Mullayanagiri trek package](/mullayanagiri-trek-package) and [Kemmangundi tour package](/kemmangundi-tour-package).",
    relatedLinks: [
      { label: "Mullayanagiri trek package", href: "/mullayanagiri-trek-package" },
      { label: "Kemmangundi tour package", href: "/kemmangundi-tour-package" },
      { label: "2-day itinerary page", href: "/2-day-chikmagalur-itinerary" },
      { label: "Weekend packages", href: "/chikmagalur-weekend-packages" },
    ],
    sections: [
      {
        h2: "Day 1 — Mullayanagiri, Baba Budangiri & sunset",
        paragraphs: [
          "Leave your stay by 5:30 AM for Mullayanagiri (26 km, ~45 min). Sunrise from the summit temple is the headline experience — carry a torch for the final steps. Back down by 8:30 AM, breakfast in town or packed from homestay.",
          "Late morning: Baba Budangiri dargah and cave temple (30 km loop). Honnamana Falls is a quick photo stop en route. Afternoon: Jhari (Butter) Falls needs estate jeep — budget 2–3 hours including queue. Evening: Z Point or Hirekolale Lake for sunset.",
        ],
        h3: [
          {
            title: "Book Day 1 as a package",
            paragraphs: [
              "The [Mullayanagiri trek package](/mullayanagiri-trek-package) (₹3,499/group) sequences these stops with a local driver who knows parking and jeep timings. Add to cart and confirm on WhatsApp.",
            ],
          },
        ],
      },
      {
        h2: "Day 2 — Kemmangundi, Hebbe Falls & return",
        paragraphs: [
          "Start 7:00 AM toward Kemmangundi (60+ km). Kalhatti Falls and Raj Bhavan roses are morning stops. Hebbe Falls jeep from Kemmangundi base is the anchor — monsoon flow peaks July–September; winter is safer for families.",
          "Depart Chikmagalur by 5–7 PM depending on Bangalore distance. Sunday night traffic on NH75 can add an hour — plan buffer.",
        ],
      },
      {
        h2: "Budget for 2 days",
        paragraphs: [
          "Guided day tours: ₹3,499 + ₹4,499 per group via our [Chikmagalur tour packages](/chikmagalur-tour-packages). Stay: resort ₹1,500/adult/night, villa ₹1,200/adult/night. DIY fuel from Bangalore: often ₹1,200–2,000 per person share. Packages reduce wrong turns on ghat loops and save roughly half a day of map time.",
        ],
      },
      {
        h2: "Packing and season",
        paragraphs: [
          "Layers for 10°C morning at Mullayanagiri, grippy shoes, rain shell in monsoon, power bank, offline maps. Best months: October–March. December–January books out — reserve stays early.",
        ],
      },
      {
        h2: "Common mistakes on a 2-day Chikmagalur itinerary",
        paragraphs: [
          "Trying Hebbe Falls and Mullayanagiri sunrise on the same day leaves groups exhausted — split across our Day 1 and Day 2 packages instead. Underestimating jeep wait times at Jhari and Hebbe can cost two hours each in peak season; start waterfalls before lunch.",
          "Booking stays far from town adds 30–45 minutes to your 5 AM Mullayanagiri departure. A homestay or resort within 10 km of Chikmagalur town works best for first-time visitors. Forgetting cash for small shops and jeep operators is common — ATMs exist in town but not at every gate.",
          "If you drive from Bangalore, NH75 via Hassan is the standard route — plan one fuel stop and avoid late-night ghat driving in heavy rain. Groups of four or more often save money with packaged cabs versus two cars plus separate guides.",
        ],
      },
    ],
  },
  "best-time-to-visit-chikmagalur": {
    slug: "best-time-to-visit-chikmagalur",
    keyword: "best time to visit Chikmagalur",
    title: "Best Time to Visit Chikmagalur — Month-by-Month Guide (2026)",
    metaDescription:
      "Best time to visit Chikmagalur: weather by month, trekking, waterfalls, monsoon vs winter. Plan Mullayanagiri & Hebbe Falls smart.",
    excerpt: "October–March peak season, monsoon greens, summer tips & festival windows",
    readTime: "11 min read",
    category: "Planning",
    intro:
      "Choosing the best time to visit Chikmagalur depends on whether you prioritise trekking clarity, waterfall volume, coffee-harvest culture, or budget. This month-by-month breakdown helps you match season to activities — and avoid booking peaks without a stay.",
    relatedLinks: [
      { label: "Best time travel info page", href: "/best-time-to-visit-chikmagalur" },
      { label: "Weather guide", href: "/chikmagalur-weather" },
      { label: "Tour packages", href: "/chikmagalur-tour-packages" },
    ],
    sections: [
      {
        h2: "October to February — peak season",
        paragraphs: [
          "Post-monsoon clarity makes Mullayanagiri sunrises reliable. Day temperatures 18–28°C, nights 10–15°C. Waterfalls still run strong through November. Coffee harvest Nov–Feb adds estate tour value. Book resorts and packages 2–4 weeks ahead for December long weekends.",
        ],
      },
      {
        h2: "June to September — monsoon",
        paragraphs: [
          "Western Ghats turn deep green; Hebbe and Jhari are dramatic. Trekking Mullayanagiri steps is risky when wet. Estate stays drop 20–30%. Ideal for slow travel, photography, and indoor coffee tastings — not for packed five-stop days.",
        ],
      },
      {
        h2: "March to May — summer",
        paragraphs: [
          "Warmer days; start sightseeing at dawn. Water volume lower at smaller falls. Good for family pool stays at Trip Chikmagalur Resort. Combine short morning outings with afternoon rest.",
        ],
      },
    ],
  },
  "chikmagalur-waterfalls-list": {
    slug: "chikmagalur-waterfalls-list",
    keyword: "Chikmagalur waterfalls list",
    title: "Chikmagalur Waterfalls List — Hebbe, Jhari, Kalhatti & Hidden Falls (2026)",
    metaDescription:
      "Full Chikmagalur waterfalls list with how to reach, jeep trails, best season & day packages for Hebbe, Jhari, Kalhatti, Ukkuda.",
    excerpt: "Every major fall near Chikmagalur with access type, season & package links",
    readTime: "13 min read",
    category: "Destinations",
    intro:
      "Waterfalls define many Chikmagalur trips — but access varies from roadside Kalhatti to jeep-only Hebbe and estate-hidden Jhari. This list orders falls by fame, effort, and best season so you can match them to day packages.",
    relatedLinks: [
      { label: "Waterfalls pillar page", href: "/waterfalls-in-chikmagalur" },
      { label: "Kemmangundi package", href: "/kemmangundi-tour-package" },
      { label: "Hebbe Falls guide", href: "/places/hebbe-falls" },
    ],
    sections: [
      {
        h2: "Hebbe Falls — the headline",
        paragraphs: [
          "Two-tier fall (~551 ft) inside coffee estate near Kemmangundi. Shared jeep mandatory last 8 km. Allow half a day. Strongest July–October. Covered on Kemmangundi tour package.",
        ],
      },
      {
        h2: "Jhari (Butter) Falls",
        paragraphs: [
          "Estate jeep through Attigundi; milky cascade in forest. Part of Mullayanagiri day route. Slippery rocks — grip footwear. Weekdays reduce queue time.",
        ],
      },
      {
        h2: "Kalhatti, Honnamana, Ukkuda & more",
        paragraphs: [
          "Kalhatti: roadside near Kemmangundi with temple. Honnamana: quick stop toward Baba Budangiri. Ukkuda: short forest walk, birding. Manikyadhara: pilgrim site near Baba Budangiri (not on our Day 1 package). Plan no more than two major falls per day.",
        ],
      },
    ],
  },
  "mullayanagiri-trek-guide": {
    slug: "mullayanagiri-trek-guide",
    keyword: "Mullayanagiri trek guide",
    title: "Mullayanagiri Trek Guide — Route, Timing, Fees & Safety (2026)",
    metaDescription:
      "Mullayanagiri trek guide: Karnataka's highest peak, sunrise hike, steps, parking, fees, best season & booking the day package.",
    excerpt: "Summit route, difficulty, what to pack & how to book the guided day tour",
    readTime: "14 min read",
    category: "Trekking",
    intro:
          "The Mullayanagiri trek is the most booked outdoor experience in Chikmagalur — Karnataka's highest peak at ~1,930 m with a temple at the summit and 360° Western Ghats views. This guide covers routes, timing, costs, safety, and how the trek fits into our [Mullayanagiri trek package](/mullayanagiri-trek-package) and [2-day itinerary](/2-day-chikmagalur-itinerary).",
    relatedLinks: [
      { label: "Mullayanagiri trek package", href: "/mullayanagiri-trek-package" },
      { label: "Place detail page", href: "/places/mullayanagiri-trek" },
      { label: "Trekking in Chikmagalur", href: "/trekking-in-chikmagalur" },
    ],
    sections: [
      {
        h2: "Routes and difficulty",
        paragraphs: [
          "Short route: park at base, climb ~450 stone steps (30–90 min). Longer Sarpadhari ridge route for trekkers wanting 3–4 hours. Easy–moderate; not technical. Avoid monsoon afternoons on wet steps.",
        ],
      },
      {
        h2: "Sunrise logistics",
        paragraphs: [
          "Leave Chikmagalur 5:00–5:30 AM winter. Parking ₹50 typical. No permit for standard summit steps. Weekend peak season may need early arrival for parking — packages include driver timing.",
        ],
      },
      {
        h2: "Combine with Baba Budangiri same day",
        paragraphs: [
          "Most groups do Mullayanagiri morning + Baba Budangiri late morning + Jhari afternoon. Our package handles sequencing; self-drivers often underestimate 120+ km loop time.",
        ],
      },
    ],
  },
  "chikmagalur-vs-coorg": {
    slug: "chikmagalur-vs-coorg",
    keyword: "Chikmagalur vs Coorg",
    title: "Chikmagalur vs Coorg — Which Hill Station to Choose? (2026)",
    metaDescription:
      "Chikmagalur vs Coorg compared: distance from Bangalore, treks, waterfalls, crowds, stays & costs. Pick the right Karnataka getaway.",
    excerpt: "Side-by-side comparison for weekend travellers from Bangalore",
    readTime: "10 min read",
    category: "Travel Guide",
    intro:
      "Bangalore weekend travellers often debate Chikmagalur vs Coorg — both are coffee-country hill stations within driving distance, but the vibe, sights, and crowd patterns differ. This comparison helps you pick (or split) your next trip.",
    relatedLinks: [
      { label: "Chikmagalur from Bangalore packages", href: "/chikmagalur-tour-packages-from-bangalore" },
      { label: "Trip from Bangalore itinerary", href: "/chikmagalur-itinerary-from-bangalore" },
      { label: "Stays", href: "/stays" },
    ],
    sections: [
      {
        h2: "Distance and drive time",
        paragraphs: [
          "Chikmagalur ~245 km (5–6 h) via Hassan. Coorg (Madikeri) ~260 km similar time via Mysore or Hassan routes. Both suit 2–3 night weekends; Chikmagalur feels less commercial in core town.",
        ],
      },
      {
        h2: "Activities compared",
        paragraphs: [
          "Chikmagalur: Mullayanagiri peak, Hebbe/Jhari falls, Baba Budangiri, Bhadra safari. Coorg: Abbey Falls, Raja's Seat, Dubare elephant camp, Tadiandamol trek. Chikmagalur wins for highest peak and estate jeep falls; Coorg for broader resort infrastructure.",
        ],
      },
      {
        h2: "When to choose Chikmagalur",
        paragraphs: [
          "Pick Chikmagalur if you want structured [tour packages](/chikmagalur-tour-packages) (₹3,499+), villa/resort stays we operate, and a tighter trekking focus. Many travellers follow our [2-day itinerary](/2-day-chikmagalur-itinerary) here first, then Coorg for broader resort comfort.",
        ],
      },
    ],
  },
};

export const blogLongSlugs = Object.keys(blogLongPosts);
