// Data-driven travel-info pages: best time, how to reach, weather, things to do, tips, food.

export interface TravelSection {
  h2: string;
  body: string; // can include simple <strong> tags
  bullets?: string[];
}

export interface TravelInfoData {
  slug: string; // e.g. "best-time-to-visit-chikmagalur"
  primaryKeyword: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: TravelSection[];
  faqs: { q: string; a: string }[];
  related: { label: string; path: string }[];
  lastUpdated: string;
}

export const travelInfo: Record<string, TravelInfoData> = {
  "best-time-to-visit-chikmagalur": {
    slug: "best-time-to-visit-chikmagalur",
    primaryKeyword: "best time to visit Chikmagalur",
    title: "Best Time to Visit Chikmagalur — Month-by-Month Guide 2026",
    description:
      "Best time to visit Chikmagalur — month-by-month weather, season tips and the right window for trekking, waterfalls and coffee tours.",
    h1: "Best Time to Visit Chikmagalur — Season-by-Season Guide",
    intro:
      "The best time to visit Chikmagalur is between October and February, when the post-monsoon weather brings clear skies, full waterfalls and cool temperatures perfect for trekking and coffee plantation walks. That said, every season has its own appeal — monsoon turns the Western Ghats emerald green, summer is ideal for indoor coffee experiences, and winter mornings offer cinematic mist over Mullayanagiri. This guide breaks it down month by month so you can pick the right window for your trip.",
    sections: [
      {
        h2: "October to February — Peak Season",
        body: "This is the ideal window for first-time visitors. Daytime temperatures sit at 18–28°C, nights drop to 10–15°C, and humidity is low. Mullayanagiri sunrises are crystal clear, Hebbe Falls has strong water flow without monsoon risks, and the November–February window coincides with coffee harvest.",
        bullets: [
          "Best for trekking and viewpoints",
          "Coffee harvest in Nov–Feb",
          "Festival energy in Dec–Jan",
          "Book stays 30+ days ahead — peak demand",
        ],
      },
      {
        h2: "June to September — Monsoon Season",
        body: "Heavy rains transform the Western Ghats into a deep-green paradise. Waterfalls are at their most spectacular, but trekking is risky and Hebbe Falls jeep service may pause during downpours. Best for landscape photography, slow estate stays and reading-by-the-fire kind of trips.",
        bullets: [
          "Mist, green and roaring waterfalls",
          "Avoid Mullayanagiri trek (slippery steps)",
          "Estate stays drop prices 20–30%",
          "Pack rain gear and quick-dry clothes",
        ],
      },
      {
        h2: "March to May — Summer",
        body: "Temperatures climb to 30–34°C — warm but not punishing thanks to the elevation. Shoulder season brings smaller crowds and cheaper stays. Waterfalls dry up partially. Best for indoor coffee experiences, Bhadra wildlife safaris (animals near water sources) and budget-conscious travelers.",
        bullets: [
          "Cheaper homestays and resorts",
          "Best probability of tiger sightings at Bhadra",
          "Pack sunscreen and a sun cap",
          "Avoid mid-day outdoor activities",
        ],
      },
    ],
    faqs: [
      { q: "Which month is best for Chikmagalur?", a: "November and December are the absolute best — clear skies, coffee harvest, and 18–25°C weather perfect for everything from treks to estate walks." },
      { q: "Is Chikmagalur good in monsoon?", a: "Yes, if you enjoy mist, full waterfalls and quiet stays. Avoid if you want to trek Mullayanagiri or do a packed sightseeing schedule." },
      { q: "What is the temperature in Chikmagalur in winter?", a: "December–January nights can drop to 8–12°C; days stay at 18–22°C. Carry a sweater or light jacket." },
      { q: "Is Chikmagalur worth visiting in summer?", a: "Yes for budget travellers — stays are cheaper and Bhadra Wildlife Sanctuary has higher tiger sighting probability. Outdoor temperatures can hit 32°C, so plan early-morning activities." },
      { q: "When does the coffee harvest happen in Chikmagalur?", a: "Coffee harvest runs November to February, with December–January being peak. This is the best time for plantation experiences." },
      { q: "Can I do Hebbe Falls in monsoon?", a: "Service may be suspended during heavy rain. Late-monsoon (August–September) is safer and has spectacular flow." },
    ],
    related: [
      { label: "How to reach Chikmagalur", path: "/how-to-reach-chikmagalur" },
      { label: "Chikmagalur weather", path: "/chikmagalur-weather" },
      { label: "Chikmagalur 2-day itinerary", path: "/chikmagalur-2-days-itinerary" },
      { label: "Top places to visit", path: "/places" },
    ],
    lastUpdated: "2026-04-26",
  },

  "how-to-reach-chikmagalur": {
    slug: "how-to-reach-chikmagalur",
    primaryKeyword: "how to reach Chikmagalur",
    title: "How to Reach Chikmagalur — Road, Rail, Flight Guide 2026",
    description:
      "How to reach Chikmagalur from Bangalore, Mangalore, Mysore — distances, drive times, bus, train, flight options + cab fares.",
    h1: "How to Reach Chikmagalur — From Bangalore, Mangalore & More",
    intro:
      "Chikmagalur is well connected by road from all major South Indian cities, with the closest airport in Mangalore (110 km) and the nearest broad-gauge railway in Kadur (40 km). Whether you're driving from Bangalore for a weekend escape, taking an overnight Volvo or flying in from afar, this guide covers every option — distances, timings, costs and the smartest way to combine them.",
    sections: [
      {
        h2: "By Road from Bangalore",
        body: "Bangalore to Chikmagalur is 270 km via NH75. Drive time is 5 hours via Tumkur, Hassan and Belur. The route is well-paved with multiple food and fuel stops at Kunigal, Yediyur and Hassan.",
        bullets: [
          "Distance: 270 km via NH75",
          "Drive time: 5 hours (5.5 on weekends)",
          "Toll cost: ~₹350 one way",
          "Best departure: Friday 8 PM to dodge traffic",
        ],
      },
      {
        h2: "By Bus from Bangalore",
        body: "KSRTC Airavat (Volvo), Rajahamsa and SRS sleeper services run from Bangalore Majestic and Kempegowda terminals to Chikmagalur. Overnight services depart 9–11 PM and arrive 4–6 AM.",
        bullets: [
          "Volvo fare: ₹650–₹1,100",
          "Sleeper fare: ₹800–₹1,400",
          "Travel time: 6–7 hours",
          "Operators: KSRTC, SRS, VRL, Sugama",
        ],
      },
      {
        h2: "By Train",
        body: "There is no direct broad-gauge railway to Chikmagalur town. The nearest railhead is Kadur Junction (40 km), well connected to Bangalore, Mangalore and Mysuru. From Kadur, take a local taxi (₹800–₹1,000) or KSRTC bus to Chikmagalur.",
        bullets: [
          "Nearest station: Kadur Junction (40 km)",
          "Trains from Bangalore: KSR Hubballi, Hampi Express",
          "Local taxi from Kadur: ₹800–₹1,000",
        ],
      },
      {
        h2: "By Flight",
        body: "The nearest airport is Mangalore International (110 km, 3 hr drive). Bangalore Kempegowda (270 km, 5 hr) and Mysore (180 km, 4 hr) are also workable. Pre-paid taxis run from all three.",
        bullets: [
          "Mangalore Airport (IXE): 110 km — 3 hr",
          "Bangalore Airport (BLR): 295 km — 6 hr",
          "Mysore Airport (MYQ): 180 km — 4 hr",
          "Pre-paid cab from BLR: ₹4,500–₹6,500",
        ],
      },
    ],
    faqs: [
      { q: "What is the distance from Bangalore to Chikmagalur?", a: "Chikmagalur is 270 km from Bangalore via NH75. Drive time is approximately 5 hours." },
      { q: "Is there a train to Chikmagalur?", a: "There is no direct broad-gauge train. The nearest railway station is Kadur Junction, 40 km away, well-connected to Bangalore and Mangalore." },
      { q: "Which is the nearest airport to Chikmagalur?", a: "Mangalore International Airport (IXE) is the nearest at 110 km — a 3-hour drive. Bangalore (BLR) is 295 km away." },
      { q: "How long is the bus journey from Bangalore to Chikmagalur?", a: "KSRTC Volvo and private overnight buses take 6–7 hours, departing 9–11 PM and arriving 4–6 AM." },
      { q: "Are there direct cabs from Bangalore Airport to Chikmagalur?", a: "Yes, pre-paid taxi services and Ola/Uber outstation cabs cost ₹4,500–₹6,500 one way for a sedan." },
      { q: "Can I drive my own car from Mumbai to Chikmagalur?", a: "Yes, the Mumbai–Chikmagalur drive is 970 km via Pune–Hubli–Shimoga, taking 16–18 hours. Best done over 2 days." },
    ],
    related: [
      { label: "Chikmagalur from Bangalore itinerary", path: "/chikmagalur-itinerary-from-bangalore" },
      { label: "Best time to visit Chikmagalur", path: "/best-time-to-visit-chikmagalur" },
      { label: "Top places to visit", path: "/places" },
      { label: "Travel tips", path: "/chikmagalur-travel-tips" },
    ],
    lastUpdated: "2026-04-26",
  },

  "chikmagalur-weather": {
    slug: "chikmagalur-weather",
    primaryKeyword: "Chikmagalur weather",
    title: "Chikmagalur Weather — Month-by-Month Climate & Tips",
    description:
      "Chikmagalur weather guide — month-by-month temperature, rainfall, what to wear and the best time for treks, waterfalls and coffee tours.",
    h1: "Chikmagalur Weather — Climate Guide & What to Pack",
    intro:
      "Chikmagalur weather is famously pleasant year-round thanks to its 1,090-metre elevation in the Western Ghats. Temperatures rarely cross 30°C even in peak summer, while winter mornings can dip to 8°C. The region sees three distinct seasons — a cool dry winter (Oct–Feb), a warm dry summer (Mar–May) and a heavy monsoon (Jun–Sep). This guide breaks down month-by-month weather and tells you exactly what to pack.",
    sections: [
      {
        h2: "Winter (October – February)",
        body: "Daytime: 18–25°C. Nights: 10–15°C. Sunny, clear, low humidity. Best season for trekking, viewpoints and coffee tours. Mullayanagiri sunrises are spectacular.",
        bullets: [
          "Pack: Light jacket, fleece, full-sleeve tees",
          "Carry: Sunscreen, lip balm (dry winds)",
          "Best for: Treks, coffee harvest, sightseeing",
        ],
      },
      {
        h2: "Summer (March – May)",
        body: "Daytime: 28–32°C. Nights: 18–22°C. Slightly humid. Pleasant compared to plains. Waterfalls dry up partially.",
        bullets: [
          "Pack: Cotton tees, shorts, a sun cap",
          "Carry: Sunscreen, hydration sachets",
          "Best for: Wildlife safaris, indoor coffee experiences",
        ],
      },
      {
        h2: "Monsoon (June – September)",
        body: "Daytime: 20–25°C. Nights: 17–20°C. Heavy rainfall (1,500+ mm). Misty, dramatic, slippery. Waterfalls at peak flow.",
        bullets: [
          "Pack: Waterproof jacket, quick-dry clothes",
          "Carry: Trekking shoes with grip, plastic bag for electronics",
          "Best for: Photography, slow estate stays",
        ],
      },
    ],
    faqs: [
      { q: "What is the average temperature in Chikmagalur?", a: "Average annual temperature is 22°C. Summer peaks at 32°C, winter lows around 8°C." },
      { q: "Does Chikmagalur get cold in winter?", a: "Yes — December and January nights drop to 8–12°C. Carry a fleece or light jacket, especially for early morning treks." },
      { q: "How much does it rain in Chikmagalur?", a: "Annual rainfall is 1,500–2,500 mm, almost entirely between June and September." },
      { q: "Can I visit Chikmagalur in heavy monsoon?", a: "Yes, but expect road delays and trek closures. Late monsoon (August–September) is safer than peak (July)." },
      { q: "What is Chikmagalur weather like in November?", a: "November is one of the best months — sunny days at 22–26°C, cool nights at 14°C, low humidity, post-monsoon green landscape." },
      { q: "Is Chikmagalur cooler than Bangalore?", a: "Yes, by 5–8°C on average. The 1,090-m elevation keeps Chikmagalur consistently cooler than the Deccan plains." },
    ],
    related: [
      { label: "Best time to visit", path: "/best-time-to-visit-chikmagalur" },
      { label: "How to reach Chikmagalur", path: "/how-to-reach-chikmagalur" },
      { label: "Travel tips", path: "/chikmagalur-travel-tips" },
      { label: "Top places", path: "/places" },
    ],
    lastUpdated: "2026-04-26",
  },

  "things-to-do-in-chikmagalur": {
    slug: "things-to-do-in-chikmagalur",
    primaryKeyword: "things to do in Chikmagalur",
    title: "20 Best Things to Do in Chikmagalur — 2026 Local Guide",
    description:
      "Things to do in Chikmagalur — top 20 experiences from Mullayanagiri trek to coffee tasting, ATV rides, Hebbe Falls, wildlife & more.",
    h1: "20 Best Things to Do in Chikmagalur",
    intro:
      "There are far more things to do in Chikmagalur than the typical Mullayanagiri-and-back day trip. From sunrise treks and coffee plantation walks to Bhadra wildlife safaris, ATV rides and hidden waterfalls, the region rewards travellers who slow down. This guide covers 20 specific experiences — many missed by first-timers — sorted by adventure, nature, food, culture and slow travel categories.",
    sections: [
      {
        h2: "Adventure",
        body: "Chikmagalur is one of South India's best adventure hubs.",
        bullets: [
          "Trek Mullayanagiri at sunrise (Karnataka's highest peak)",
          "Take a 4x4 jeep ride to Hebbe Falls",
          "ATV biking through coffee estate trails",
          "Zip-lining over forest canopy",
          "Multi-day Kudremukh trek",
        ],
      },
      {
        h2: "Nature & Wildlife",
        body: "The Western Ghats biodiversity is on full display here.",
        bullets: [
          "Bhadra Wildlife Sanctuary tiger safari",
          "Birdwatching at Bhadra River Tern Lodge",
          "Sunset at Hirekolale Lake",
          "Visit Manikyadhara and Jhari Falls",
          "Walk the shola forest at Kemmanagundi",
        ],
      },
      {
        h2: "Coffee & Slow Travel",
        body: "The whole region was built on coffee — experience it deeply.",
        bullets: [
          "Plantation walk + cup tasting at an Arabica estate",
          "Stay overnight at a planter's bungalow",
          "Buy fresh single-estate beans",
          "Visit a roastery for a hands-on workshop",
          "Slow afternoon at an estate café",
        ],
      },
      {
        h2: "Culture & Heritage",
        body: "Don't skip the temples and history nearby.",
        bullets: [
          "Belur Chennakeshava Temple (30 km)",
          "Halebidu Hoysaleshwara Temple (45 km)",
          "Inam Dattatreya Peetha cave dargah",
          "Sri Mullappa Swamy temple at Mullayanagiri summit",
          "Veerabhadra temple at Kalhatti Falls",
        ],
      },
    ],
    faqs: [
      { q: "What is Chikmagalur famous for?", a: "Chikmagalur is famous for being the birthplace of Indian coffee, Karnataka's highest peak (Mullayanagiri), and as a Western Ghats trekking and waterfall destination." },
      { q: "How many days are enough for Chikmagalur?", a: "2–3 days is ideal for a balanced trip covering treks, falls, coffee estates and wildlife. Add a day for Kudremukh or Belur–Halebidu temples." },
      { q: "Is Chikmagalur good for couples?", a: "Yes — coffee estate stays, sunset spots like Hirekolale Lake, and quiet trekking trails make it one of Karnataka's best honeymoon and couple destinations." },
      { q: "What are the top activities for adventure lovers?", a: "Mullayanagiri sunrise trek, Hebbe Falls jeep ride, Kudremukh trek, ATV biking, ziplining, and Bhadra River Tern Lodge stays." },
      { q: "Can I visit Chikmagalur with kids?", a: "Yes — short walks at Mullayanagiri, the Hebbe Falls jeep ride, coffee plantation tours and estate stays are all family-friendly." },
      { q: "Is Chikmagalur worth visiting in 1 day?", a: "A single day can cover Mullayanagiri sunrise + Baba Budangiri + a quick coffee walk. For Hebbe Falls and Kemmanagundi, plan 2 days minimum." },
    ],
    related: [
      { label: "Top places to visit", path: "/places" },
      { label: "Adventure activities", path: "/adventure" },
      { label: "Chikmagalur 2-day itinerary", path: "/chikmagalur-2-days-itinerary" },
      { label: "Coffee plantation guide", path: "/places/coffee-plantations-chikmagalur" },
    ],
    lastUpdated: "2026-04-26",
  },

  "chikmagalur-travel-tips": {
    slug: "chikmagalur-travel-tips",
    primaryKeyword: "Chikmagalur travel tips",
    title: "Chikmagalur Travel Tips for First-Time Visitors 2026",
    description:
      "Chikmagalur travel tips — packing list, road conditions, mobile network, ATM locations, money tips and local etiquette for first-timers.",
    h1: "Chikmagalur Travel Tips — What First-Timers Should Know",
    intro:
      "These Chikmagalur travel tips come from years of guiding visitors through the region's quirks — patchy mobile networks past Kemmanagundi, ATM scarcity in remote areas, ghat-road driving rules, and the small etiquette things that locals appreciate. Read these before you book, and your trip will be noticeably smoother than the average tourist's.",
    sections: [
      {
        h2: "Packing Essentials",
        body: "Chikmagalur weather can flip from sunny to misty within an hour. Pack for layers.",
        bullets: [
          "Light jacket or fleece (year-round)",
          "Trekking shoes with grip",
          "Rain jacket or poncho",
          "Power bank and offline maps",
          "Sunscreen, sun cap, lip balm",
          "Cash (₹3,000–5,000 minimum)",
        ],
      },
      {
        h2: "Road & Driving Tips",
        body: "Ghat roads need patience and grip. Drive defensively, especially at dusk.",
        bullets: [
          "Avoid ghat driving after sunset — no streetlights",
          "Fill fuel in Chikmagalur town before going to Kemmanagundi",
          "Don't use cruise control on hairpin sections",
          "Carry a basic puncture kit",
          "Honk before blind turns",
        ],
      },
      {
        h2: "Connectivity & Money",
        body: "Reception drops sharply away from Chikmagalur town and around waterfalls.",
        bullets: [
          "Jio and Airtel work best in town; BSNL helps in remote areas",
          "Last reliable ATMs are in Chikmagalur and Tarikere",
          "Carry cash for jeep rides at Hebbe Falls and Jhari Falls",
          "UPI may not work at remote falls and dargahs",
          "Download offline Google Maps for the entire route",
        ],
      },
      {
        h2: "Local Etiquette",
        body: "A few small habits go a long way with locals.",
        bullets: [
          "Remove shoes before entering temples and the dargah",
          "Don't litter at viewpoints — pack out everything you bring",
          "Avoid loud music at homestays — neighbours are close",
          "Greet locals with a smile or 'Namaskara'",
          "Respect coffee estate boundaries — don't pluck cherries",
        ],
      },
    ],
    faqs: [
      { q: "Is Chikmagalur safe for solo female travellers?", a: "Yes — Chikmagalur is generally safe for solo women travellers. Stick to verified homestays, avoid isolated roads after dark, and keep emergency numbers handy." },
      { q: "Is mobile network available in Chikmagalur?", a: "Reception is good in Chikmagalur town. Jio and Airtel work well at most viewpoints; BSNL is more reliable in remote forest areas like Bhadra and Kudremukh." },
      { q: "Are ATMs available in Chikmagalur?", a: "Yes, in Chikmagalur town. Beyond town, the next reliable ATM is in Tarikere (40 km). Carry cash for waterfalls and rural areas." },
      { q: "Do I need permits for trekking in Chikmagalur?", a: "Mullayanagiri is permit-free. Kudremukh National Park and Bhadra Wildlife require forest permits issued at the entry gate or online via Karnataka eco-tourism." },
      { q: "What language is spoken in Chikmagalur?", a: "Kannada is the local language. Hindi and English are widely understood in tourist areas, restaurants and homestays." },
      { q: "Is Chikmagalur expensive?", a: "Mid-range travel costs ₹2,000–3,500 per person per day including stay, food and transport. Estate luxury stays start at ₹6,000+ per night." },
    ],
    related: [
      { label: "How to reach", path: "/how-to-reach-chikmagalur" },
      { label: "Best time to visit", path: "/best-time-to-visit-chikmagalur" },
      { label: "Things to do", path: "/things-to-do-in-chikmagalur" },
      { label: "FAQs", path: "/faq" },
    ],
    lastUpdated: "2026-04-26",
  },

  "chikmagalur-local-food": {
    slug: "chikmagalur-local-food",
    primaryKeyword: "Chikmagalur local food",
    title: "Chikmagalur Local Food — Malnad Cuisine Guide 2026",
    description:
      "Chikmagalur local food guide — Malnad thali, Akki Rotti, Pandi Curry, Neer Dosa, filter coffee. Where to eat, what to order, prices.",
    h1: "Chikmagalur Local Food — A Malnad Cuisine Guide",
    intro:
      "Chikmagalur local food is rooted in Malnad cuisine — the rice, coconut, jaggery and forest-greens cooking style of the Western Ghats highlands. It's heavier on coconut than coastal Karnataka cooking and lighter on chillies than coastal Konkan food. From traditional Malnad thalis at family-run kitchens to estate cafés serving wood-fired filter coffee, here's what to order and where to find it.",
    sections: [
      {
        h2: "Must-try Local Dishes",
        body: "These are the staples you'll find everywhere from estate kitchens to small town messes.",
        bullets: [
          "Malnad thali — full vegetarian platter with 6–8 dishes",
          "Akki Rotti — rice-flour flatbread with onion and chilli",
          "Neer Dosa — paper-thin lacy dosa, usually with coconut chutney",
          "Pandi Curry — Coorg-style pork (non-veg restaurants)",
          "Kadubu — steamed rice dumplings with coconut filling",
          "Filter coffee — Chikmagalur's pride, served in steel tumblers",
        ],
      },
      {
        h2: "Where to Eat in Chikmagalur Town",
        body: "Town has a dense cluster of family-run Malnad restaurants and estate cafés.",
        bullets: [
          "Town Canteen — authentic Malnad thali, ₹150",
          "Hotel Mayura — KSTDC-run, reliable thali",
          "Sapthagiri Veg — clean veg thali",
          "Estate Café (multiple) — coffee + light meals",
        ],
      },
      {
        h2: "Estate-Stay Food Experience",
        body: "Most homestays serve home-cooked Malnad meals included with the stay — often the highlight of the trip.",
        bullets: [
          "Wood-fire breakfast (idli, dosa, rotti)",
          "Lunch thali with seasonal vegetables",
          "Evening tea/coffee with home-made snacks",
          "Hot dinner with fresh estate produce",
        ],
      },
    ],
    faqs: [
      { q: "What is Chikmagalur famous food?", a: "Chikmagalur is famous for Malnad cuisine — Akki Rotti, Neer Dosa, Pandi Curry, Kadubu, traditional Malnad thali and world-class single-estate filter coffee." },
      { q: "Where can I try the best Malnad thali in Chikmagalur?", a: "Town Canteen, Hotel Mayura (KSTDC) and Sapthagiri are reliable in town. Most coffee estate homestays serve excellent home-cooked Malnad thalis included with stays." },
      { q: "Is Chikmagalur food vegetarian?", a: "Both options are widely available. Veg thalis dominate town restaurants; non-veg specialties like Pandi Curry are easy to find in select restaurants and homestays." },
      { q: "How much does food cost in Chikmagalur?", a: "Local thali: ₹100–₹200. Mid-range restaurant meal: ₹250–₹500. Estate café meal: ₹400–₹700. Homestay all-meals: included in the stay rate." },
      { q: "Where can I buy authentic Chikmagalur coffee?", a: "Buy directly from coffee estates during plantation tours, or from town shops like Cothas Coffee and Sankalpa Estate Store. Carry an airtight container for freshness." },
      { q: "Is street food common in Chikmagalur?", a: "Less common than in larger Indian cities. Mornings have a small street-food scene with bondas, vada pav and filter coffee carts near the bus stand." },
    ],
    related: [
      { label: "Food experiences", path: "/food" },
      { label: "Top places", path: "/places" },
      { label: "Travel tips", path: "/chikmagalur-travel-tips" },
      { label: "Coffee plantations", path: "/places/coffee-plantations-chikmagalur" },
    ],
    lastUpdated: "2026-04-26",
  },
};

export const allTravelInfoSlugs = Object.keys(travelInfo);
export type TravelInfoKey = keyof typeof travelInfo;
