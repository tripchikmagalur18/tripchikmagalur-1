// Data-driven pillar landing pages (trekking, waterfalls, resorts, budget).
// Each entry is rendered by src/pages/PillarPage.tsx with full SEO scaffolding.

export interface PillarTableRow {
  cells: string[];
}
export interface PillarTable {
  caption?: string;
  headers: string[];
  rows: PillarTableRow[];
}

export interface PillarItem {
  name: string;
  meta?: string; // short tag like "Moderate • 9 km"
  best_for?: string; // "Couples", "Families", etc.
  body: string;
  bullets?: string[];
  href?: string; // internal link to detail page
}

export interface PillarSection {
  id: string;
  h2: string;
  body?: string;
  bullets?: string[]; // simple bullet list under body
  items?: PillarItem[]; // listed cards (treks, falls, resorts)
  table?: PillarTable; // tabular data (budget, transport)
  proTip?: string; // callout
}

export type PillarSchemaType =
  | "SportsActivity"
  | "TouristAttraction"
  | "LodgingBusiness"
  | "Article";

export interface PillarPageData {
  slug: string;
  primaryKeyword: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  heroImage?: string;
  itemSchemaType?: PillarSchemaType; // emit schema per item in first item-section
  sections: PillarSection[];
  faqs: { q: string; a: string }[];
  related: { label: string; path: string }[];
  outboundLinks?: { label: string; href: string }[];
  lastUpdated: string;
}

export const pillarPages: Record<string, PillarPageData> = {
  // ─────────────────────────────────────────────────────────────────────
  "trekking-in-chikmagalur": {
    slug: "trekking-in-chikmagalur",
    primaryKeyword: "trekking in Chikmagalur",
    title: "Trekking in Chikmagalur Guide | Trip Chikmagalur",
    description:
      "Trekking in Chikmagalur — Mullayanagiri, Kudremukh, Z Point & Ballalarayana Durga routes with difficulty, distance, permits & costs. Plan & book on WhatsApp.",
    h1: "Trekking in Chikmagalur — All Trek Routes & Difficulty Guide",
    intro:
      "Trekking in Chikmagalur means walking across the highest peak in Karnataka, climbing through shola grasslands, and waking up above the clouds. The Western Ghats around Chikmagalur hold treks for every level — from the easy 30-minute Mullayanagiri stair walk to the multi-day Kudremukh climb. This guide covers every trek route in detail with difficulty, distance, duration, best season, permits and pro-tips so you can pick the right one.",
    itemSchemaType: "SportsActivity",
    sections: [
      {
        id: "treks",
        h2: "All Major Trek Routes in Chikmagalur",
        items: [
          {
            name: "Mullayanagiri Trek",
            meta: "Easy • 0.5–4 km • 1–3 hr • 1,930 m",
            best_for: "Beginners & families",
            body: "Karnataka's highest peak. The shortest route is a 30-minute stair climb from the parking lot, or trek the longer Sarpadhari ridge route from Sarpadhari (4 km, 3 hr) for the full experience. Sunrise is the highlight.",
            bullets: [
              "Best season: October–February",
              "Entry fee: ₹50 per person",
              "No permit required",
              "Sunrise hike — start by 5:00 AM",
            ],
            href: "/places/mullayanagiri-trek",
          },
          {
            name: "Kudremukh Trek",
            meta: "Hard • 22 km round-trip • 8–10 hr • 1,894 m",
            best_for: "Experienced trekkers",
            body: "A challenging 'horse-face' shaped peak inside Kudremukh National Park. Forest department permit is mandatory and the trek must be completed in a single day — no overnight camping allowed.",
            bullets: [
              "Best season: October–February (closed in monsoon)",
              "Permit fee: ₹600 per person",
              "Mandatory guide from forest department",
              "Carry 3L water + packed lunch",
            ],
            href: "/places/kudremukh-national-park",
          },
          {
            name: "Z Point Trek",
            meta: "Moderate • 4 km round-trip • 2 hr",
            best_for: "Casual trekkers",
            body: "Starts from Kemmanagundi and follows a Z-shaped trail to a cliffside viewpoint over the Bhadra valley. Best at sunrise or sunset; mist rolls in fast in monsoon.",
            bullets: [
              "Best season: October–March",
              "Entry fee: included with Kemmanagundi pass",
              "Wear shoes with grip — loose gravel",
            ],
            href: "/places/kemmanagundi",
          },
          {
            name: "Ballalarayana Durga Fort Trek",
            meta: "Moderate • 6 km round-trip • 4 hr • 1,509 m",
            best_for: "History + nature lovers",
            body: "12th-century Hoysala-era fort ruins atop a grass-covered hill, often combined with the Bandaje Arbi waterfall trek (multi-day option). Stunning 360° Western Ghats panorama.",
            bullets: [
              "Best season: November–February",
              "Free entry, no permit",
              "Trek base: Sunkasale village (40 km from Chikmagalur)",
            ],
          },
          {
            name: "Gangamoola (Varaha Parvatha)",
            meta: "Hard • 18 km • 2 days • 1,458 m",
            best_for: "Serious trekkers",
            body: "Source of the Tunga, Bhadra and Netravati rivers. A protected reserve trek requiring forest permit and overnight camping. Limited access — check with Sringeri forest office before planning.",
            bullets: [
              "Best season: November–January",
              "Forest permit mandatory",
              "Camping fee: ₹500 per person",
            ],
          },
        ],
        proTip:
          "Pro Tip: For all monsoon-season trekking, leeches are common from June to September — carry salt packets and tuck pants into socks. Mullayanagiri stairs become slippery; consider postponing to October.",
      },
      {
        id: "essentials",
        h2: "Essentials Before You Trek",
        body: "A few basics that apply to every trek in the region.",
        bullets: [
          "Trekking shoes with grip (not sneakers) — gravel and wet stairs are unforgiving",
          "Carry minimum 2 litres of water per person",
          "Mobile network is patchy — download offline maps (Maps.me)",
          "Start by 5:00 AM for sunrise treks; ghat roads are dark before dawn",
          "Inform your homestay/resort of your trek plan",
          "Don't litter — Kudremukh is plastic-free, you'll be fined",
        ],
      },
    ],
    faqs: [
      {
        q: "Which is the best trek in Chikmagalur for beginners?",
        a: "Mullayanagiri is the easiest and most popular. The shortest route is just a 30-minute stair climb from the parking lot, suitable for kids and seniors. Z Point at Kemmanagundi is a good second option.",
      },
      {
        q: "Do I need a permit for Kudremukh trek?",
        a: "Yes. A forest department permit (₹600) and a mandatory guide are required. Permits must be booked in advance at the Kudremukh forest office in Karkala. Overnight camping is not allowed.",
      },
      {
        q: "Is Mullayanagiri trek difficult?",
        a: "No — the standard route is a paved stair climb of about 30 minutes (450 steps). The longer Sarpadhari ridge route (4 km) is moderate. Both are doable for first-time trekkers.",
      },
      {
        q: "Can I trek in Chikmagalur during monsoon?",
        a: "Most treks are closed or unsafe between June and September due to slippery trails and leeches. Mullayanagiri stairs remain open but are risky. Best season is October to February.",
      },
      {
        q: "What is the best time for trekking in Chikmagalur?",
        a: "October to February — clear skies, dry trails, comfortable 18–25°C temperatures and excellent visibility from peaks.",
      },
      {
        q: "Are there guided treks in Chikmagalur?",
        a: "Yes, local trek operators run guided sunrise treks to Mullayanagiri, Kudremukh and Ballalarayana Durga. Group rates start around ₹1,500 per person including transport and breakfast.",
      },
    ],
    related: [
      { label: "Mullayanagiri trek guide", path: "/places/mullayanagiri-trek" },
      { label: "Kudremukh National Park", path: "/places/kudremukh-national-park" },
      { label: "Best time to visit Chikmagalur", path: "/best-time-to-visit-chikmagalur" },
      { label: "Resorts & coffee stays", path: "/resorts-in-chikmagalur" },
    ],
    outboundLinks: [
      {
        label: "Karnataka Tourism — Chikmagalur",
        href: "https://karnatakatourism.org/destination/chikmagalur/",
      },
      {
        label: "Kudremukh National Park (Karnataka Forest Dept.)",
        href: "https://aranya.gov.in/aranyacms/(S(qpwdq145lkfpdf45cudcdlrm))/English/KudremukhNationalPark.aspx",
      },
    ],
    lastUpdated: "2026-04-26",
  },

  // ─────────────────────────────────────────────────────────────────────
  "waterfalls-in-chikmagalur": {
    slug: "waterfalls-in-chikmagalur",
    primaryKeyword: "waterfalls in Chikmagalur",
    title: "Waterfalls in Chikmagalur Guide | Trip Chikmagalur",
    description:
      "Waterfalls in Chikmagalur — Hebbe, Jhari, Kalhatti, Kadambi, Manikyadhara & Shanti Falls with entry fees, timings & jeep routes. Book tours on WhatsApp.",
    h1: "Best Waterfalls in Chikmagalur & Nearby (with Entry Fee & Timings)",
    intro:
      "The waterfalls in Chikmagalur are scattered across the Western Ghats — some inside coffee estates, others reached only by 4x4 jeeps through the forest. Hebbe and Jhari are the headliners, but lesser-known falls like Manikyadhara and Hanuman Gundi reward travellers who venture deeper. This guide lists every accessible waterfall with entry fee, timings, distance and how to reach.",
    itemSchemaType: "TouristAttraction",
    sections: [
      {
        id: "falls",
        h2: "All Waterfalls in & Around Chikmagalur",
        items: [
          {
            name: "Hebbe Falls",
            meta: "168 m • 60 km from town • Jeep ride mandatory",
            best_for: "Adventure & families",
            body: "A two-tier 168-metre waterfall hidden inside Kemmanagundi range. The last 8 km is a rough forest trail accessible only by official 4x4 jeeps from Kemmanagundi.",
            bullets: [
              "Entry fee: ₹50 + jeep ride ₹600 per person (shared)",
              "Timings: 9:00 AM – 4:00 PM",
              "Best season: September–February",
              "Avoid mid-monsoon — jeep service may pause",
            ],
            href: "/places/hebbe-falls",
          },
          {
            name: "Jhari Falls (Buttermilk Falls)",
            meta: "Inside Attigundi estate • 25 km from town",
            best_for: "Couples & photographers",
            body: "A tucked-away cascade locally called Buttermilk Falls for its frothy white water. Reached via a private coffee estate gate; 4x4 jeep recommended for the last 4 km.",
            bullets: [
              "Entry fee: ₹40 + jeep ₹500 per person",
              "Timings: 9:00 AM – 5:30 PM",
              "Best season: October–March",
            ],
            href: "/places/jhari-falls",
          },
          {
            name: "Kalhatti Falls",
            meta: "122 m • 55 km from town",
            best_for: "Families & temple visits",
            body: "A sacred waterfall flowing over a Veerabhadra temple complex. Easy roadside access — no trekking needed. Especially full in late monsoon (August–September).",
            bullets: [
              "Entry fee: free",
              "Timings: 6:00 AM – 7:00 PM",
              "Best season: August–February",
            ],
            href: "/places/kalhatti-falls",
          },
          {
            name: "Kadambi Falls",
            meta: "Inside Kudremukh NP • 95 km from town",
            best_for: "Solo travellers & nature lovers",
            body: "A roadside waterfall on the way to Kudremukh, framed by dense rainforest. Stop for 30 minutes en route to Kudremukh trek or Sringeri.",
            bullets: [
              "Entry fee: included with Kudremukh permit",
              "Timings: 6:00 AM – 6:00 PM",
              "Best season: September–March",
            ],
          },
          {
            name: "Manikyadhara Falls",
            meta: "Sacred falls • 30 km from town",
            best_for: "Spiritual visitors & families",
            body: "A short 100-metre walk from the road, near Baba Budangiri shrine. Pilgrims bathe here believing the waters are holy. Best clubbed with Baba Budangiri visit.",
            bullets: [
              "Entry fee: free",
              "Timings: 6:00 AM – 6:00 PM",
              "Best season: October–February",
            ],
          },
          {
            name: "Hanuman Gundi Falls",
            meta: "100 m • Inside Kudremukh NP",
            best_for: "Trekkers",
            body: "A 100-metre waterfall reached after descending around 450 stone steps inside Kudremukh National Park. Powerful flow during and after monsoon.",
            bullets: [
              "Entry fee: ₹200 + ₹150 vehicle entry",
              "Timings: 9:00 AM – 4:00 PM",
              "Best season: September–February",
            ],
          },
          {
            name: "Shanti Falls",
            meta: "Small cascade • 35 km from town",
            best_for: "Quick stops",
            body: "An off-track cascade near Bhadra Wildlife Sanctuary. Best clubbed with a Bhadra safari trip. Often skipped, hence very quiet.",
            bullets: [
              "Entry fee: free",
              "Best season: August–January",
            ],
          },
        ],
        proTip:
          "Pro Tip: Most waterfalls close their official viewing decks by 5:00 PM. Plan to arrive at least an hour before closing — late afternoon also gives you the best lighting for photos.",
      },
      {
        id: "safety",
        h2: "Waterfall Safety in Chikmagalur",
        body: "The Western Ghats are beautiful but unforgiving. Every monsoon brings news of slip accidents at unmarked falls.",
        bullets: [
          "Never enter the pool below a waterfall — undercurrents are deadly",
          "Stick to railed viewing decks; rocks are mossy",
          "Avoid falls upstream during heavy rain (flash floods)",
          "Don't drink the water — even at 'sacred' falls",
          "Carry a dry-bag for phones and cameras",
        ],
      },
    ],
    faqs: [
      {
        q: "Which is the best waterfall in Chikmagalur?",
        a: "Hebbe Falls is the most spectacular — a two-tier 168-metre cascade reached by a 4x4 jeep ride through forest. Jhari Falls is a close second for couples.",
      },
      {
        q: "What is the entry fee for Hebbe Falls?",
        a: "₹50 entry fee plus ₹600 per person for the mandatory jeep ride from Kemmanagundi (shared basis).",
      },
      {
        q: "Can I visit Chikmagalur waterfalls in monsoon?",
        a: "Late monsoon (August–September) is excellent — full flow, lush surroundings. Peak monsoon (June–July) is risky due to landslides and jeep service interruptions.",
      },
      {
        q: "Are Chikmagalur waterfalls open all year?",
        a: "Most are open year-round, but flow varies. October to February has best balance of flow + safety. Summer (March–May) waterfalls reduce significantly.",
      },
      {
        q: "How many waterfalls are there in Chikmagalur?",
        a: "There are 7 main accessible waterfalls — Hebbe, Jhari, Kalhatti, Kadambi, Manikyadhara, Hanuman Gundi and Shanti Falls. Several smaller cascades exist inside coffee estates.",
      },
      {
        q: "Which Chikmagalur waterfall is family-friendly?",
        a: "Kalhatti Falls and Manikyadhara are roadside, with no trek required. Hebbe Falls is also family-friendly thanks to the jeep service.",
      },
    ],
    related: [
      { label: "Hebbe Falls full guide", path: "/places/hebbe-falls" },
      { label: "Jhari Falls", path: "/places/jhari-falls" },
      { label: "Top places to visit", path: "/places" },
      { label: "Chikmagalur 2-day itinerary", path: "/2-day-chikmagalur-itinerary" },
    ],
    outboundLinks: [
      {
        label: "Karnataka Tourism — Chikmagalur",
        href: "https://karnatakatourism.org/destination/chikmagalur/",
      },
      {
        label: "Wikipedia — Hebbe Falls",
        href: "https://en.wikipedia.org/wiki/Hebbe_Falls",
      },
    ],
    lastUpdated: "2026-04-26",
  },

  // ─────────────────────────────────────────────────────────────────────
  "resorts-in-chikmagalur": {
    slug: "resorts-in-chikmagalur",
    primaryKeyword: "resorts in Chikmagalur",
    title: "Best Resorts in Chikmagalur to Book | Trip Chikmagalur",
    description:
      "Best resorts in Chikmagalur — homestays, mid-range resorts, estate stays & honeymoon villas with prices, locations & tips. Compare & book on WhatsApp.",
    h1: "Best Resorts & Coffee Estate Stays in Chikmagalur",
    intro:
      "The best resorts in Chikmagalur let you wake up to mist over coffee bushes, the call of Malabar whistling thrushes, and a French press of estate-grown Arabica. From ₹1,800 family homestays to ₹15,000 plantation villas, this guide groups every category — budget, mid-range, luxury and pure coffee-estate stays — with location, price range and what to expect.",
    itemSchemaType: "LodgingBusiness",
    sections: [
      {
        id: "budget",
        h2: "Budget Stays (₹1,500 – ₹3,500 per night)",
        body: "Local homestays run by coffee planter families. Simple rooms, home-cooked meals, often a small estate walk included.",
        items: [
          {
            name: "Coffee Planter Homestays",
            meta: "Multiple options • ₹1,800–₹2,800 per double",
            best_for: "Solo travellers, friend groups",
            body: "Family-run homestays around K.M. Road, Aldur and Mudigere. Includes breakfast and dinner. Hot water, basic Wi-Fi, no AC needed (it's cool year-round).",
            bullets: [
              "Best for: Slow travellers, friend groups",
              "Meal plan: Usually breakfast + dinner included",
              "Book direct via WhatsApp for best rates",
            ],
          },
          {
            name: "KSTDC Mayura Tunga",
            meta: "Government-run • ₹2,400 per night",
            best_for: "Budget families",
            body: "Reliable Karnataka government property in Chikmagalur town. Clean, central, no frills. Good for transit nights.",
            bullets: [
              "Walking distance to bus stand",
              "AC and non-AC options",
            ],
          },
        ],
      },
      {
        id: "midrange",
        h2: "Mid-Range Resorts (₹3,500 – ₹7,000 per night)",
        body: "Boutique resorts with plantation views, pool access and on-site restaurants.",
        items: [
          {
            name: "Plantation View Resorts (Aldur belt)",
            meta: "₹4,500–₹6,500 per double",
            best_for: "Couples, weekend getaways",
            body: "Mid-range resorts on private estates 15–25 km from Chikmagalur town. Most include guided plantation walks, bonfire evenings and full board.",
            bullets: [
              "Pool, in-house restaurant, lounge",
              "Plantation walk usually free for guests",
              "Best for 2-night couple getaways",
            ],
          },
          {
            name: "Mudigere Hill Resorts",
            meta: "₹3,800–₹5,500 per double",
            best_for: "Families with kids",
            body: "Resorts around Mudigere with garden, kids' play areas and easy access to Charmadi Ghat viewpoints.",
            bullets: [
              "Family rooms (4–5 pax)",
              "Closer to Hebbe Falls",
            ],
          },
        ],
        proTip:
          "Pro Tip: Mid-range Chikmagalur resorts are 20–30% cheaper Sunday–Thursday. If you can flex your dates, you'll save ₹1,500+ per night and get better service from less-stretched staff.",
      },
      {
        id: "luxury",
        h2: "Luxury Coffee Estate Stays (₹7,500+ per night)",
        body: "Heritage planter bungalows, premium villas and forest-edge experiences.",
        items: [
          {
            name: "The Serai Chikmagalur",
            meta: "Luxury • from ₹14,000 per night",
            best_for: "Honeymooners, special occasions",
            body: "Premium villas on a working coffee estate at Mudigere, with infinity pool, in-house spa and curated plantation-walk + tasting experiences.",
            bullets: [
              "Private plunge pool villas",
              "In-house Ayurvedic spa",
              "Multi-course estate-to-table dining",
            ],
          },
          {
            name: "Java Rain Resort",
            meta: "Luxury • from ₹11,000 per night",
            best_for: "Couples, photography",
            body: "Cliff-edge resort overlooking Mullayanagiri, with floor-to-ceiling glass rooms and one of the most photographed infinity pools in Karnataka.",
            bullets: [
              "Mullayanagiri-facing rooms",
              "Sunrise yoga deck",
              "Couple's spa packages",
            ],
          },
          {
            name: "Bhadra River Tern Lodge (JLR)",
            meta: "Wildlife luxury • from ₹9,500 per pax",
            best_for: "Wildlife & birding enthusiasts",
            body: "Jungle Lodges & Resorts property on Bhadra reservoir — boat safaris, jeep safaris and birdwatching included in the package.",
            bullets: [
              "Includes safaris + meals",
              "Run by Karnataka Tourism",
              "Book 30+ days in advance",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Which is the best resort in Chikmagalur?",
        a: "For luxury, The Serai Chikmagalur and Java Rain Resort are the top-rated. For wildlife, Bhadra River Tern Lodge by JLR is unmatched. For mid-range, Aldur belt plantation resorts offer the best value.",
      },
      {
        q: "How much does a Chikmagalur resort cost per night?",
        a: "Budget homestays start at ₹1,800 per double, mid-range resorts ₹3,500–₹7,000 and luxury coffee estate properties ₹9,000–₹16,000 per night.",
      },
      {
        q: "Are coffee estate stays worth it?",
        a: "Yes — they're the most authentic Chikmagalur experience. You'll get plantation walks, tasting sessions, planter-style meals and accommodation inside a working estate. Book at least 30 days ahead.",
      },
      {
        q: "What is the best resort in Chikmagalur for couples?",
        a: "Java Rain Resort and The Serai are top picks for couples and honeymooners. For mid-range romantic stays, look at boutique resorts in the Aldur belt with plunge pools or private decks.",
      },
      {
        q: "Are there family-friendly resorts in Chikmagalur?",
        a: "Yes — Mudigere hill resorts and Aldur plantation resorts both offer family rooms (4–5 pax), play areas and kid-friendly menus. Avoid pure coffee-estate luxury stays as they're optimised for couples.",
      },
      {
        q: "How early should I book Chikmagalur resorts?",
        a: "For weekends in peak season (October–February), book 30–45 days in advance. For weekday stays, 7–10 days is usually enough. Long weekends sell out 60+ days ahead.",
      },
    ],
    related: [
      { label: "Chikmagalur stays", path: "/stays" },
      { label: "Coffee plantations guide", path: "/places/coffee-plantations-chikmagalur" },
      { label: "Chikmagalur trip budget", path: "/chikmagalur-trip-budget" },
      { label: "Chikmagalur 2-day itinerary", path: "/2-day-chikmagalur-itinerary" },
    ],
    outboundLinks: [
      {
        label: "Karnataka Tourism — Where to Stay",
        href: "https://karnatakatourism.org/destination/chikmagalur/",
      },
      {
        label: "Jungle Lodges & Resorts (Bhadra)",
        href: "https://www.junglelodges.com/",
      },
    ],
    lastUpdated: "2026-04-26",
  },

  // ─────────────────────────────────────────────────────────────────────
  "chikmagalur-trip-budget": {
    slug: "chikmagalur-trip-budget",
    primaryKeyword: "Chikmagalur trip budget",
    title: "Chikmagalur Trip Budget Guide | Trip Chikmagalur",
    description:
      "Chikmagalur trip budget — solo, couple & family cost breakdown for transport, stay, food & entry fees from Bangalore. Plan smart & book on WhatsApp.",
    h1: "Chikmagalur Trip Budget — Complete Cost Breakdown for 2026",
    intro:
      "How much does a Chikmagalur trip really cost? It depends on whether you're a solo backpacker on a Volvo, a couple in a coffee-estate villa, or a family of four in a self-driven SUV. This budget guide breaks down the actual numbers — transport, stay, food, entry fees and activities — for each traveller type, with sample 2-day budgets ranging from ₹3,000 to ₹35,000.",
    sections: [
      {
        id: "summary",
        h2: "Quick Budget Summary (2-Day Trip from Bangalore)",
        table: {
          caption: "Approximate per-person costs for a standard 2-day, 1-night Chikmagalur trip.",
          headers: ["Traveller type", "Transport", "Stay", "Food + entry", "Total"],
          rows: [
            { cells: ["Solo backpacker", "₹1,200 (Volvo)", "₹1,500 (homestay)", "₹800", "₹3,500"] },
            { cells: ["Couple (mid-range)", "₹3,000 (cab)", "₹4,500 (resort)", "₹2,500", "₹10,000"] },
            { cells: ["Family of 4", "₹6,000 (own car)", "₹7,000 (family room)", "₹4,000", "₹17,000"] },
            { cells: ["Couple (luxury)", "₹6,500 (cab)", "₹14,000 (estate villa)", "₹4,500", "₹25,000"] },
          ],
        },
        proTip:
          "Pro Tip: Travelling with a group of 4–6? Hiring a single Innova/Ertiga from Bangalore (₹8,000–₹10,000 round trip) is usually cheaper per person than individual Volvo + local cab combos.",
      },
      {
        id: "transport",
        h2: "Transport Costs",
        body: "Bangalore is the most common starting point. Choose between bus, train + cab, or self-drive.",
        table: {
          headers: ["Mode", "Cost (one way)", "Time", "Notes"],
          rows: [
            { cells: ["KSRTC Volvo", "₹650–₹1,100", "6–7 hr", "Overnight services available"] },
            { cells: ["Sleeper bus (private)", "₹800–₹1,400", "6–7 hr", "Comfortable for couples"] },
            { cells: ["Train + cab via Kadur", "₹350 + ₹1,000", "7–8 hr", "Train to Kadur, taxi to Chikmagalur"] },
            { cells: ["Self-drive (sedan)", "~₹3,500 fuel + ₹350 toll", "5 hr", "Best for groups"] },
            { cells: ["Outstation Ola/Uber", "₹4,500–₹6,500", "5–6 hr", "Round-trip pricing higher"] },
          ],
        },
      },
      {
        id: "stay",
        h2: "Accommodation Costs",
        body: "Per-night double-occupancy estimates by category.",
        table: {
          headers: ["Category", "Per night (double)", "Includes", "Best for"],
          rows: [
            { cells: ["Budget homestay", "₹1,500–₹2,500", "Breakfast + dinner", "Solo, friends"] },
            { cells: ["Mid-range resort", "₹3,500–₹6,500", "Breakfast, sometimes pool", "Couples, families"] },
            { cells: ["Coffee estate villa", "₹7,500–₹14,000", "All meals + estate walk", "Honeymoon, special trips"] },
            { cells: ["JLR Bhadra Lodge", "₹9,500/pax", "All meals + safaris", "Wildlife enthusiasts"] },
          ],
        },
      },
      {
        id: "food",
        h2: "Food & Activity Costs",
        body: "Daily food and standard entry fees.",
        table: {
          headers: ["Item", "Cost", "Notes"],
          rows: [
            { cells: ["Local meals (per day)", "₹400–₹600", "Idli, dosa, rice plate"] },
            { cells: ["Resort meals (per day)", "₹1,200–₹2,000", "Buffet or à la carte"] },
            { cells: ["Mullayanagiri entry", "₹50", "Plus parking ₹50"] },
            { cells: ["Hebbe Falls + jeep", "₹650", "₹50 entry + ₹600 jeep"] },
            { cells: ["Coffee estate tour", "₹300–₹500", "Includes tasting"] },
            { cells: ["Bhadra safari", "₹600", "Boat safari per pax"] },
            { cells: ["ATV ride (15 min)", "₹500–₹800", "Per person"] },
          ],
        },
        proTip:
          "Pro Tip: Most coffee estate stays already bundle plantation walks and tastings into the room rate — don't pay extra for these as 'add-on activities'. Always confirm what's included while booking.",
      },
    ],
    faqs: [
      {
        q: "What is the average cost of a Chikmagalur trip?",
        a: "A 2-day Chikmagalur trip from Bangalore averages ₹3,500 for solo backpackers, ₹10,000 per couple in mid-range resorts and ₹17,000 for a family of four with own car.",
      },
      {
        q: "Can I do a Chikmagalur trip under ₹5,000?",
        a: "Yes — solo travellers can comfortably do a 2-day Chikmagalur trip under ₹5,000 by taking KSRTC Volvo, staying in a homestay (₹1,800), eating local meals and limiting paid activities to Mullayanagiri and one waterfall.",
      },
      {
        q: "How much does a Chikmagalur honeymoon cost?",
        a: "A 3-day honeymoon at a luxury coffee estate villa (e.g. The Serai or Java Rain) costs ₹35,000–₹60,000 per couple including transport, stay and meals. Mid-range romantic options can be done at ₹18,000–₹25,000.",
      },
      {
        q: "What is the cost of a family trip to Chikmagalur?",
        a: "A 2-day, 1-night family trip (4 people) costs around ₹17,000 total — ₹6,000 transport (own car), ₹7,000 family room, ₹4,000 food and entry fees.",
      },
      {
        q: "How much does the Mullayanagiri trek cost?",
        a: "Just ₹50 entry fee plus ₹50 parking. If you book a guided sunrise trek package with transport from town, costs are ₹1,200–₹1,500 per person including breakfast.",
      },
      {
        q: "Is Chikmagalur expensive?",
        a: "No — Chikmagalur is one of the more affordable hill stations in South India. Budget travellers can do 2 days under ₹4,000, while couples spend ₹8,000–₹15,000 for a comfortable mid-range experience.",
      },
    ],
    related: [
      { label: "Chikmagalur 2-day itinerary", path: "/2-day-chikmagalur-itinerary" },
      { label: "Resorts & coffee stays", path: "/resorts-in-chikmagalur" },
      { label: "How to reach Chikmagalur", path: "/how-to-reach-chikmagalur" },
      { label: "Travel tips", path: "/chikmagalur-travel-tips" },
    ],
    outboundLinks: [
      { label: "KSRTC bus booking", href: "https://ksrtc.in/" },
      {
        label: "Karnataka Tourism — Chikmagalur",
        href: "https://karnatakatourism.org/destination/chikmagalur/",
      },
    ],
    lastUpdated: "2026-04-26",
  },
};

export type PillarPageKey = keyof typeof pillarPages;
