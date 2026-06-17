// Itinerary data driving /chikmagalur-itinerary* SEO pages.

export interface ItineraryDay {
  title: string;
  summary: string;
  stops: { time: string; place: string; note: string; placeSlug?: string }[];
  stay?: string;
}

export interface ItineraryFAQ {
  q: string;
  a: string;
}

export interface ItineraryData {
  slug: string;
  primaryKeyword: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  audience: string; // who is this for
  totalDays: number;
  days: ItineraryDay[];
  budget: string;
  bestTime: string;
  faqs: ItineraryFAQ[];
  related: string[]; // slugs of other itineraries
  lastUpdated: string;
}

export const itineraries: Record<string, ItineraryData> = {
  "chikmagalur-itinerary": {
    slug: "chikmagalur-itinerary",
    primaryKeyword: "Chikmagalur itinerary",
    title: "Chikmagalur Itinerary — 1, 2 & 3 Days | Trip Chikmagalur",
    description:
      "Chikmagalur itinerary — 1, 2 or 3 day plans covering Mullayanagiri, Hebbe Falls, Baba Budangiri, coffee estates & hidden gems. Book packages on WhatsApp.",
    h1: "The Complete Chikmagalur Itinerary — 1, 2 & 3 Day Plans",
    intro:
      "A well-planned Chikmagalur itinerary is the difference between rushing through three peaks in a fog and a calm, cinematic weekend in Karnataka's coffee hills. This guide gives you three ready-to-use plans — a tight 1-day taste, a balanced 2-day weekend, and a relaxed 3-day deep dive — covering Mullayanagiri, Hebbe Falls, Baba Budangiri, coffee plantations and the best viewpoints. Pick the one that fits your travel window and skip the planning headache.",
    audience: "All travelers planning a Chikmagalur trip",
    totalDays: 3,
    days: [
      {
        title: "Day 1 — Sunrise on Mullayanagiri",
        summary: "The classic introduction: Karnataka's highest peak, the dargah, and a lake sunset.",
        stops: [
          { time: "5:30 AM", place: "Drive to Mullayanagiri", note: "Arrive before sunrise", placeSlug: "mullayanagiri-trek" },
          { time: "6:30 AM", place: "Mullayanagiri summit", note: "Sunrise + temple visit", placeSlug: "mullayanagiri-trek" },
          { time: "10:00 AM", place: "Baba Budangiri", note: "Cave dargah + Manikyadhara", placeSlug: "baba-budangiri" },
          { time: "1:00 PM", place: "Lunch in town", note: "Try Malnad thali" },
          { time: "4:00 PM", place: "Coffee plantation walk", note: "Estate tour + tasting", placeSlug: "coffee-plantations-chikmagalur" },
          { time: "6:30 PM", place: "Hirekolale Lake sunset", note: "Best sunset spot", placeSlug: "hirekolale-lake" },
        ],
        stay: "Coffee estate homestay or central Chikmagalur hotel",
      },
      {
        title: "Day 2 — Falls & Forest Day",
        summary: "Hebbe Falls jeep ride, Kemmanagundi viewpoint and Kalhatti Falls.",
        stops: [
          { time: "7:30 AM", place: "Drive to Kemmanagundi", note: "2-hour scenic ghat road", placeSlug: "kemmanagundi" },
          { time: "10:00 AM", place: "Hebbe Falls jeep ride", note: "Mandatory shared 4x4", placeSlug: "hebbe-falls" },
          { time: "1:30 PM", place: "Lunch at Kemmanagundi", note: "KSTDC restaurant" },
          { time: "3:00 PM", place: "Kalhatti Falls + temple", note: "Sacred cascade", placeSlug: "kalhatti-falls" },
          { time: "5:00 PM", place: "Z Point sunset", note: "Best viewpoint in Kemmanagundi", placeSlug: "kemmanagundi" },
          { time: "8:00 PM", place: "Return to Chikmagalur", note: "Drive back or stay in K-gundi" },
        ],
        stay: "KSTDC Cottage at Kemmanagundi or Chikmagalur",
      },
      {
        title: "Day 3 — Coffee, Wildlife & Hidden Falls",
        summary: "Slow morning at the estate, then Bhadra safari or Jhari Falls.",
        stops: [
          { time: "8:00 AM", place: "Estate breakfast", note: "Filter coffee + Akki rotti" },
          { time: "9:30 AM", place: "Jhari Falls", note: "Hidden buttermilk falls", placeSlug: "jhari-falls" },
          { time: "1:00 PM", place: "Lunch at estate café", note: "Local Malnad menu" },
          { time: "3:00 PM", place: "Bhadra Wildlife Sanctuary", note: "Afternoon safari", placeSlug: "bhadra-wildlife-sanctuary" },
          { time: "7:00 PM", place: "Departure", note: "Drive back to base city" },
        ],
      },
    ],
    budget: "₹4,500 – ₹8,500 per person (3 days, mid-range)",
    bestTime: "October to March",
    faqs: [
      {
        q: "Is 2 days enough for Chikmagalur?",
        a: "Two days covers the highlights — Mullayanagiri, Baba Budangiri, Hebbe Falls and a coffee estate visit — at a comfortable pace. Three days lets you add Bhadra safari and hidden waterfalls.",
      },
      {
        q: "What is the best Chikmagalur itinerary from Bangalore?",
        a: "Leave Bangalore Friday night, drive 5 hours to Chikmagalur. Saturday for Mullayanagiri + Baba Budangiri, Sunday morning for Hebbe Falls, return by Sunday evening. See our dedicated guide.",
      },
      {
        q: "How much does a 3-day Chikmagalur trip cost?",
        a: "Mid-range budget is ₹4,500–₹8,500 per person including stays, food, transport and activities. Luxury estate stays push it to ₹15,000+.",
      },
      {
        q: "Can I cover Hebbe Falls and Mullayanagiri in one day?",
        a: "Technically yes, but it's exhausting (5+ hrs driving + jeep ride). Splitting them across two days is far more enjoyable.",
      },
      {
        q: "What is the best month for a Chikmagalur trip?",
        a: "October to March offers the best weather — clear views, comfortable trekking, and full waterfalls just after monsoon.",
      },
      {
        q: "Do I need a guide for the Chikmagalur itinerary?",
        a: "For DIY road trips, no. For Bhadra safari (mandatory guide), Kudremukh trek (mandatory) and combined-day logistics, a local operator is recommended.",
      },
    ],
    related: ["chikmagalur-2-days-itinerary", "chikmagalur-itinerary-from-bangalore", "2-day-chikmagalur-itinerary", "3-day-chikmagalur-itinerary"],
    lastUpdated: "2026-04-26",
  },

  "chikmagalur-2-days-itinerary": {
    slug: "chikmagalur-2-days-itinerary",
    primaryKeyword: "Chikmagalur 2 days itinerary",
    title: "Chikmagalur 2 Day Weekend Itinerary | Trip Chikmagalur",
    description:
      "Chikmagalur 2-day itinerary — Mullayanagiri, Baba Budangiri, Hebbe Falls & coffee estate. Day-by-day timings, costs & stay tips. Book on WhatsApp.",
    h1: "Chikmagalur 2 Days Itinerary — The Perfect Weekend Plan",
    intro:
      "A Chikmagalur 2 days itinerary is the sweet spot for most travellers — enough time to do the highlights without rushing, and short enough for a Friday-night-to-Sunday-night weekend escape. This plan covers Mullayanagiri sunrise, Baba Budangiri, Hebbe Falls, a coffee plantation walk, and the iconic Hirekolale Lake sunset, with realistic timings and budget breakdown.",
    audience: "Weekend travelers, couples, friend groups",
    totalDays: 2,
    days: [
      {
        title: "Day 1 — Peaks & Coffee",
        summary: "Sunrise at Mullayanagiri, dargah, plantation walk and lake sunset.",
        stops: [
          { time: "5:30 AM", place: "Mullayanagiri sunrise", note: "Drive 26 km from town", placeSlug: "mullayanagiri-trek" },
          { time: "9:00 AM", place: "Baba Budangiri", note: "Sacred cave dargah", placeSlug: "baba-budangiri" },
          { time: "12:30 PM", place: "Lunch in town", note: "Malnad thali" },
          { time: "3:30 PM", place: "Coffee estate tour", note: "Tasting + plantation walk", placeSlug: "coffee-plantations-chikmagalur" },
          { time: "6:30 PM", place: "Hirekolale Lake", note: "Sunset photography", placeSlug: "hirekolale-lake" },
        ],
        stay: "Coffee estate homestay",
      },
      {
        title: "Day 2 — Hebbe Falls Day Trip",
        summary: "Long but rewarding day to Kemmanagundi and Hebbe Falls.",
        stops: [
          { time: "7:30 AM", place: "Drive to Kemmanagundi", note: "Carry breakfast", placeSlug: "kemmanagundi" },
          { time: "10:00 AM", place: "Hebbe Falls jeep", note: "4x4 to base of falls", placeSlug: "hebbe-falls" },
          { time: "1:30 PM", place: "Lunch + Kalhatti Falls", note: "Sacred temple cascade", placeSlug: "kalhatti-falls" },
          { time: "4:30 PM", place: "Z Point sunset", note: "Kemmanagundi viewpoint", placeSlug: "kemmanagundi" },
          { time: "7:30 PM", place: "Drive back / depart", note: "Return to Chikmagalur or base city" },
        ],
      },
    ],
    budget: "₹3,500 – ₹6,000 per person",
    bestTime: "October to March",
    faqs: [
      {
        q: "Is 2 days enough to cover Chikmagalur?",
        a: "Yes — 2 days covers all the major highlights: Mullayanagiri, Baba Budangiri, Hebbe Falls, a coffee estate and Hirekolale Lake sunset.",
      },
      {
        q: "What should I pack for a 2-day Chikmagalur trip?",
        a: "Light layers, trekking shoes, rain jacket (any season), sunscreen, cap, water bottle, basic medicines, cash (limited UPI in remote spots).",
      },
      {
        q: "Where should I stay for 2 days in Chikmagalur?",
        a: "A coffee estate homestay 5–10 km from town offers the best mix of nature and convenience. Avoid staying inside Kemmanagundi unless you're skipping Mullayanagiri.",
      },
      {
        q: "How much does a 2-day Chikmagalur trip cost?",
        a: "₹3,500–₹6,000 per person for mid-range stays, food and shared transport. Group trips bring per-person cost down significantly.",
      },
      {
        q: "Can I do this 2-day plan from Bangalore?",
        a: "Yes — leave Bangalore Friday night by car or sleeper bus, arrive Saturday morning, follow this plan, return Sunday night.",
      },
      {
        q: "Is the 2-day plan suitable for families with kids?",
        a: "Yes, with one swap — replace the long Mullayanagiri sunrise with a relaxed late-morning visit. Hebbe Falls jeep ride is a hit with children.",
      },
    ],
    related: ["chikmagalur-itinerary-from-bangalore", "2-day-chikmagalur-itinerary", "chikmagalur-itinerary"],
    lastUpdated: "2026-04-26",
  },

  "chikmagalur-itinerary-from-bangalore": {
    slug: "chikmagalur-itinerary-from-bangalore",
    primaryKeyword: "Chikmagalur from Bangalore",
    title: "Chikmagalur from Bangalore Itinerary | Trip Chikmagalur",
    description:
      "Chikmagalur from Bangalore — 2-day road trip with route, fuel stops, costs & day-by-day schedule. Perfect weekend plan. Book packages on WhatsApp.",
    h1: "Chikmagalur Trip from Bangalore — Complete Road Trip Guide",
    intro:
      "Driving to Chikmagalur from Bangalore is one of South India's most popular weekend escapes — 270 km of NH75 highway leading from urban sprawl into Karnataka's misty coffee country. This itinerary covers the full route with fuel stops, breakfast points, optimal departure times, and a tight 2-day plan that lets you experience Mullayanagiri sunrise, Hebbe Falls and a coffee estate without burning out. Tested for both car and motorbike trips.",
    audience: "Weekend travelers from Bangalore",
    totalDays: 2,
    days: [
      {
        title: "Friday Night — Drive from Bangalore",
        summary: "Leave Bangalore by 8 PM to reach Chikmagalur by 1:30 AM.",
        stops: [
          { time: "8:00 PM", place: "Depart Bangalore", note: "Take NH75 via Tumkur" },
          { time: "10:30 PM", place: "Kunigal stop", note: "Dinner + fuel" },
          { time: "1:30 AM", place: "Reach Chikmagalur", note: "Check in to homestay" },
        ],
        stay: "Coffee estate homestay",
      },
      {
        title: "Saturday — Mullayanagiri + Coffee",
        summary: "Sunrise trek, dargah and afternoon plantation walk.",
        stops: [
          { time: "5:30 AM", place: "Mullayanagiri sunrise", note: "26 km drive", placeSlug: "mullayanagiri-trek" },
          { time: "9:30 AM", place: "Baba Budangiri", note: "Cave dargah", placeSlug: "baba-budangiri" },
          { time: "1:00 PM", place: "Lunch in town", note: "Malnad cuisine" },
          { time: "4:00 PM", place: "Coffee estate tour", note: "Tasting + walk", placeSlug: "coffee-plantations-chikmagalur" },
          { time: "6:30 PM", place: "Hirekolale Lake sunset", note: "Sunset spot", placeSlug: "hirekolale-lake" },
        ],
      },
      {
        title: "Sunday — Hebbe Falls + Drive Back",
        summary: "Half-day Hebbe Falls trip and return drive.",
        stops: [
          { time: "7:30 AM", place: "Drive to Kemmanagundi", note: "55 km, 2 hrs", placeSlug: "kemmanagundi" },
          { time: "10:00 AM", place: "Hebbe Falls jeep ride", note: "Mandatory 4x4", placeSlug: "hebbe-falls" },
          { time: "1:30 PM", place: "Lunch + checkout", note: "Pack up" },
          { time: "3:00 PM", place: "Drive back to Bangalore", note: "5-hr return" },
          { time: "8:00 PM", place: "Reach Bangalore", note: "Avoid Sunday late-night traffic" },
        ],
      },
    ],
    budget: "₹4,000 – ₹6,500 per person (sharing car of 4)",
    bestTime: "October to March",
    faqs: [
      {
        q: "How far is Chikmagalur from Bangalore?",
        a: "Chikmagalur is 270 km from Bangalore via NH75. Drive time is 5 hours one way, 5.5 hours during weekends.",
      },
      {
        q: "What is the best route from Bangalore to Chikmagalur?",
        a: "Bangalore → Tumkur → Hassan → Belur → Chikmagalur via NH75. The road is well maintained with multiple food and fuel stops.",
      },
      {
        q: "Are there sleeper buses from Bangalore to Chikmagalur?",
        a: "Yes — KSRTC and private operators run overnight Volvo and sleeper services. Travel time is 6–7 hours.",
      },
      {
        q: "What is the best time to leave Bangalore for Chikmagalur?",
        a: "Friday 8 PM is ideal — light Bangalore traffic, arrival by 1:30 AM lets you sleep before sunrise trek.",
      },
      {
        q: "Is it safe to drive to Chikmagalur at night?",
        a: "Yes, NH75 is a well-lit national highway. The final 30 km after Belur has fewer streetlights — drive cautiously.",
      },
      {
        q: "Can I do a one-day Chikmagalur trip from Bangalore?",
        a: "Not recommended — a one-day round trip means 11+ hours of driving plus minimal sightseeing. Stick to 2 days minimum.",
      },
    ],
    related: ["chikmagalur-2-days-itinerary", "2-day-chikmagalur-itinerary", "chikmagalur-itinerary"],
    lastUpdated: "2026-04-26",
  },

  "3-day-chikmagalur-itinerary": {
    slug: "3-day-chikmagalur-itinerary",
    primaryKeyword: "3 day Chikmagalur itinerary",
    title: "3 Day Chikmagalur Trip Itinerary Guide | Trip Chikmagalur",
    description:
      "3-day Chikmagalur itinerary — Mullayanagiri, Hebbe Falls, Bhadra safari & coffee estates. Day-by-day timings, ₹4,500+ budget & packages. Book on WhatsApp.",
    h1: "3 Day Chikmagalur Itinerary — Complete Plan",
    intro:
      "A 3 day Chikmagalur itinerary is the best choice when you want peaks, waterfalls, wildlife, and estate time without rushing a Sunday drive back. This plan sequences Mullayanagiri and Baba Budangiri on day one, Kemmangundi and Hebbe Falls on day two, and Bhadra safari plus Jhari Falls on day three — matching our bookable day packages so you can add transport and guide support on WhatsApp.",
    audience: "Families, friend groups, and Bangalore/Mysore weekend travellers with an extra day",
    totalDays: 3,
    days: [
      {
        title: "Day 1 — Mullayanagiri, Baba Budangiri & sunset",
        summary: "Sunrise peak, sacred hills, Jhari jeep and Z Point.",
        stops: [
          { time: "5:30 AM", place: "Mullayanagiri sunrise", note: "26 km from town", placeSlug: "mullayanagiri-trek" },
          { time: "9:00 AM", place: "Baba Budangiri", note: "Cave dargah + viewpoints", placeSlug: "baba-budangiri" },
          { time: "1:00 PM", place: "Lunch in town", note: "Malnad thali" },
          { time: "3:00 PM", place: "Jhari (Butter) Falls", note: "Estate jeep segment", placeSlug: "jhari-falls" },
          { time: "6:00 PM", place: "Z Point or Hirekolale Lake", note: "Sunset", placeSlug: "hirekolale-lake" },
        ],
        stay: "Trip Chikmagalur Resort or Villa",
      },
      {
        title: "Day 2 — Kemmangundi & Hebbe Falls",
        summary: "Hill station loop with jeep to Hebbe and Kalhatti.",
        stops: [
          { time: "7:30 AM", place: "Drive to Kemmangundi", note: "Allow 2 hrs with ghats", placeSlug: "kemmanagundi" },
          { time: "10:00 AM", place: "Hebbe Falls jeep", note: "Shared 4x4 through estate", placeSlug: "hebbe-falls" },
          { time: "1:30 PM", place: "Raj Bhavan & lunch", note: "Rose garden stop", placeSlug: "kemmanagundi" },
          { time: "4:00 PM", place: "Kalhatti Falls", note: "Temple cascade", placeSlug: "kalhatti-falls" },
          { time: "6:30 PM", place: "Return to stay", note: "Early night before safari" },
        ],
        stay: "Same resort or villa",
      },
      {
        title: "Day 3 — Bhadra safari, estate café & departure",
        summary: "Wildlife morning and relaxed checkout.",
        stops: [
          { time: "6:30 AM", place: "Muthodi jeep safari", note: "Book morning slot", placeSlug: "bhadra-wildlife-sanctuary" },
          { time: "11:00 AM", place: "Estate café & coffee walk", note: "Tasting + brunch", placeSlug: "coffee-plantations-chikmagalur" },
          { time: "2:00 PM", place: "Checkout & depart", note: "Drive to Bangalore/Mysore" },
        ],
      },
    ],
    budget: "₹5,500 – ₹9,500 per person (3 days, mid-range with packages)",
    bestTime: "October to March",
    faqs: [
      {
        q: "Is 3 days enough for Chikmagalur?",
        a: "Yes — three days covers Mullayanagiri, Hebbe Falls, Baba Budangiri, a coffee estate, and Bhadra safari without the rush of a 2-day trip.",
      },
      {
        q: "How much do 3-day Chikmagalur tour packages cost?",
        a: "Our three day tours as packages total ₹11,997 per group (₹3,499 + ₹4,499 + ₹3,999) plus stays from ₹1,200/adult/night. Groups split per-person cost.",
      },
      {
        q: "Can I follow this 3-day plan from Bangalore?",
        a: "Leave Friday night or Saturday dawn, follow days 1–3, return Monday evening. See packages from Bangalore for drive tips.",
      },
      {
        q: "What should I book in advance for a 3-day trip?",
        a: "Resort or villa dates, Mullayanagiri day package, and Bhadra safari slot — December–January fills fastest.",
      },
    ],
    related: ["chikmagalur-itinerary", "2-day-chikmagalur-itinerary", "chikmagalur-tour-packages-from-bangalore"],
    lastUpdated: "2026-05-26",
  },
};

export const allItinerarySlugs = Object.keys(itineraries);
