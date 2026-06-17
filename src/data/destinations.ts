// Centralized data for all /places/[slug] destination pages.
// Each entry powers one SEO landing page via DestinationPage template.

import mullayangiri from "@/assets/place-mullayangiri.webp";
import hebbeFalls from "@/assets/place-hebbe-falls.webp";
import kemmanagundi from "@/assets/place-kemmanagundi.webp";
import bababudangiri from "@/assets/place-bababudangiri.webp";
import kalhattiFalls from "@/assets/place-kalhatti-falls.webp";
import hirekolale from "@/assets/place-hirekolale.webp";
import muthodi from "@/assets/place-muthodi.webp";
import estateCafe from "@/assets/place-estate-cafe.webp";
import jhariFalls from "@/assets/place-jhari-falls.webp";
import type { StaticImageData } from "next/image";

export interface DestinationFAQ {
  q: string;
  a: string;
}

export interface DestinationData {
  slug: string;
  primaryKeyword: string;
  title: string; // <60 chars
  description: string; // <160 chars
  h1: string;
  hero: {
    image: StaticImageData;
    alt: string; // include keyword
  };
  intro: string; // first 100 words must include primary keyword
  quickFacts: {
    distanceFromChikmagalur: string;
    bestTime: string;
    duration: string;
    entryFee: string;
    elevation?: string;
    difficulty?: string;
  };
  highlights: string[]; // 4-6 bullets
  howToReach: string; // 1-2 paragraphs
  thingsToDo: string[]; // 4-6 bullets
  tips: string[]; // 4-6 bullets
  faqs: DestinationFAQ[]; // 6+ for FAQPage schema
  geo?: { lat: number; lng: number };
  related: string[]; // slugs of nearby places
  lastUpdated: string;
}

export const destinations: Record<string, DestinationData> = {
  "mullayanagiri-trek": {
    slug: "mullayanagiri-trek",
    primaryKeyword: "Mullayanagiri trek",
    title: "Mullayanagiri Trek Guide Chikmagalur | Trip Chikmagalur",
    description:
      "Mullayanagiri trek guide — Karnataka's highest peak (1,930 m). Route, timings, entry fee, difficulty, best season & safety tips. Book trek on WhatsApp.",
    h1: "Mullayanagiri Trek — Complete Guide to Karnataka's Highest Peak",
    hero: {
      image: mullayangiri,
      alt: "Mullayanagiri trek summit view with mist rolling over Western Ghats peaks in Chikmagalur",
    },
    intro:
      "The Mullayanagiri trek leads you to the highest peak in Karnataka at 1,930 metres above sea level, set deep in the Baba Budangiri range of Chikmagalur. The climb is short but rewarding — a steep stone-step trail that opens onto 360° views of the Western Ghats, often blanketed in mist. This guide covers everything first-time and returning trekkers need: how to reach, entry fees, difficulty level, the best season to summit, and the local tips that make the trip safer and more memorable.",
    quickFacts: {
      distanceFromChikmagalur: "26 km (45 min by road)",
      bestTime: "September to February",
      duration: "1.5 – 2 hours one way",
      entryFee: "Free (parking ₹50)",
      elevation: "1,930 m",
      difficulty: "Easy to Moderate",
    },
    highlights: [
      "Highest peak in Karnataka — 1,930 metres",
      "Cinematic sunrise and sunset views",
      "Sri Mullappa Swamy temple at the summit",
      "Easy stone-step trail (~450 steps)",
      "Best photographed in monsoon and winter",
    ],
    howToReach:
      "From Chikmagalur town, drive 26 km via Sarpadhari Road; the route is well marked. Private cabs cost ₹800–1,200 round trip. From Bangalore, Mullayanagiri is ~270 km via NH75 — about a 5-hour drive. The base parking is just below the summit; the actual climb from the parking is a short, steep flight of stone steps.",
    thingsToDo: [
      "Catch the sunrise from the summit",
      "Visit Sri Mullappa Swamy temple",
      "Combine with Baba Budangiri and Manikyadhara on the same day",
      "Photograph the cloud inversion in early monsoon",
      "Picnic at the viewpoint below the steps",
    ],
    tips: [
      "Start before 6 AM in winter to catch sunrise without crowds",
      "Carry 1 L water — there are no shops at the summit",
      "Wear shoes with grip; steps get slippery in monsoon",
      "Avoid the trek during heavy rain (June–August) due to fog and slick steps",
      "Mobile network is patchy — download offline maps",
      "Respect the temple — remove shoes before entering",
    ],
    faqs: [
      {
        q: "Is the Mullayanagiri trek difficult?",
        a: "No, it's rated easy to moderate. The climb from the parking is around 450 stone steps and takes most people 30–45 minutes. Children and seniors complete it regularly.",
      },
      {
        q: "What is the best time for the Mullayanagiri trek?",
        a: "September to February offers clear skies, cool weather and the best summit views. Avoid heavy monsoon months (June–August) when fog and slippery steps make the climb risky.",
      },
      {
        q: "Is there an entry fee for Mullayanagiri?",
        a: "Entry to the peak is free. Parking near the base costs ₹50 for cars and ₹20 for two-wheelers.",
      },
      {
        q: "Can I drive to Mullayanagiri peak directly?",
        a: "You can drive up to the base parking, around 200 metres below the summit. The final stretch must be climbed on foot via the stone steps.",
      },
      {
        q: "How far is Mullayanagiri from Bangalore?",
        a: "Mullayanagiri is approximately 270 km from Bangalore. Driving via NH75 takes about 5 hours one way.",
      },
      {
        q: "Are there guides available at Mullayanagiri?",
        a: "The trail is straightforward and most visitors do not need a guide. For sunrise treks or combined Baba Budangiri tours, local operators in Chikmagalur arrange transport and guides.",
      },
    ],
    geo: { lat: 13.3905, lng: 75.7197 },
    related: ["baba-budangiri", "kemmanagundi", "hebbe-falls"],
    lastUpdated: "2026-04-26",
  },

  "hebbe-falls": {
    slug: "hebbe-falls",
    primaryKeyword: "Hebbe Falls Chikmagalur",
    title: "Hebbe Falls Chikmagalur Guide | Trip Chikmagalur",
    description:
      "Hebbe Falls Chikmagalur — 168 ft two-tier waterfall near Kemmangundi. Jeep route, entry fee, best season & safety tips. Book day tour on WhatsApp.",
    h1: "Hebbe Falls Chikmagalur — Complete Visitor Guide",
    hero: {
      image: hebbeFalls,
      alt: "Hebbe Falls Chikmagalur cascading two-tier waterfall surrounded by green Western Ghats forest",
    },
    intro:
      "Hebbe Falls in Chikmagalur is one of the most spectacular waterfalls in Karnataka — a 168-foot two-tier cascade hidden inside the dense forests near Kemmanagundi. Known locally as Dodda Hebbe (big falls) and Chikka Hebbe (small falls), it plunges through coffee estates and shola forest before settling into a clear pool below. This guide covers everything you need to plan a safe and rewarding visit: the mandatory jeep ride, entry fees, the best season to go, what to carry, and tips you only learn after visiting.",
    quickFacts: {
      distanceFromChikmagalur: "55 km (1 h 40 min)",
      bestTime: "August to February",
      duration: "Half day (4–5 hours)",
      entryFee: "₹350 jeep + ₹30 entry per person",
    },
    highlights: [
      "168-ft two-tier waterfall in dense forest",
      "Mandatory thrilling jeep ride to base",
      "Cool natural pool perfect for a foot dip",
      "Surrounded by coffee estates and shola forest",
      "Best photographed in late monsoon",
    ],
    howToReach:
      "Drive 55 km from Chikmagalur towards Kemmanagundi. From the Hebbe Falls entry point, private vehicles are NOT allowed beyond — you must take a shared 4x4 jeep (₹350 round trip per person) for the rough 8 km forest track. The jeep ride takes around 30 minutes each way and is part of the experience.",
    thingsToDo: [
      "Take the jeep ride through coffee estates",
      "Photograph the falls from the lower viewpoint",
      "Dip your feet in the pool (do not swim — current is strong)",
      "Combine with Kemmanagundi and Z Point in one day",
      "Pack a picnic — there are no eateries near the falls",
    ],
    tips: [
      "Visit August–February for full water flow and safe access",
      "Carry cash for jeep + entry — no UPI accepted on site",
      "Wear non-slip shoes; rocks are wet year-round",
      "Do NOT attempt to climb the falls — fatalities have occurred",
      "Start early (before 9 AM) to avoid long jeep queues",
      "Mobile network is non-existent — inform someone of your plan",
    ],
    faqs: [
      {
        q: "What is the entry fee for Hebbe Falls?",
        a: "Entry is ₹30 per person. The mandatory shared 4x4 jeep ride costs ₹350 per person round trip. Cash only.",
      },
      {
        q: "Can I drive my own car to Hebbe Falls?",
        a: "No. Private vehicles are not allowed past the entry checkpoint. You must take the shared forest jeep service for the final 8 km.",
      },
      {
        q: "What is the best time to visit Hebbe Falls?",
        a: "August to February is ideal. Late monsoon brings full water flow with safer access than peak rainy months.",
      },
      {
        q: "Is Hebbe Falls safe for swimming?",
        a: "No. Swimming is strictly prohibited due to strong currents and slippery underwater rocks. You can dip your feet at the edge.",
      },
      {
        q: "How far is Hebbe Falls from Chikmagalur?",
        a: "Hebbe Falls is approximately 55 km from Chikmagalur town, taking around 1 hour 40 minutes by road plus the 30-minute jeep ride.",
      },
      {
        q: "Are food and toilets available at Hebbe Falls?",
        a: "There are no proper eateries or toilets at the falls. Use facilities at Kemmanagundi en route and carry your own snacks.",
      },
    ],
    geo: { lat: 13.5333, lng: 75.7667 },
    related: ["kemmanagundi", "kalhatti-falls", "baba-budangiri"],
    lastUpdated: "2026-04-26",
  },

  kemmanagundi: {
    slug: "kemmanagundi",
    primaryKeyword: "Kemmanagundi hill station",
    title: "Kemmangundi Hill Station Guide | Trip Chikmagalur",
    description:
      "Kemmangundi hill station — Z Point sunset, Raj Bhavan, Hebbe Falls nearby. How to reach, where to stay, best time & itinerary. Book on WhatsApp.",
    h1: "Kemmanagundi — Karnataka's Quiet Hill Station Getaway",
    hero: {
      image: kemmanagundi,
      alt: "Kemmanagundi hill station rolling green hills and viewpoint with morning mist in Chikmagalur",
    },
    intro:
      "Kemmanagundi hill station, also known as K.R. Hills, sits at 1,434 metres in the Baba Budangiri range and is one of the most underrated getaways in Karnataka. Originally the summer retreat of the Mysore Maharajas, today it offers crisp weather, panoramic Z Point sunsets, the historic Rajbhavan, and easy access to Hebbe Falls. This guide covers how to reach Kemmanagundi from Chikmagalur and Bangalore, the top viewpoints, accommodation options, and the best season to plan your trip.",
    quickFacts: {
      distanceFromChikmagalur: "55 km (2 hours)",
      bestTime: "October to March",
      duration: "1–2 days ideal",
      entryFee: "Free entry to most viewpoints",
      elevation: "1,434 m",
    },
    highlights: [
      "Z Point — one of the best sunset viewpoints in Karnataka",
      "Historic Rajbhavan with rose garden",
      "Gateway to Hebbe Falls and Kalhatti Falls",
      "Cool 15–25°C weather year-round",
      "Forest department guesthouses for offbeat stays",
    ],
    howToReach:
      "Kemmanagundi is 55 km from Chikmagalur via Lingadahalli. Drive time is around 2 hours on narrow ghat roads. From Bangalore, it's ~270 km via Tumkur and Kadur — roughly 6 hours. There is no direct bus; KSRTC runs to Tarikere (35 km away), then take a local taxi.",
    thingsToDo: [
      "Catch sunset from Z Point",
      "Walk through Rajbhavan rose garden",
      "Day trip to Hebbe Falls (jeep mandatory)",
      "Trek to Shanti Falls (1.5 km easy walk)",
      "Visit Kalhatti Falls and Veerabhadra temple",
    ],
    tips: [
      "Carry warm layers — nights drop to 10°C in winter",
      "Fuel up in Tarikere; no petrol pumps on the ghat",
      "Book Forest Department cottages 30+ days in advance",
      "Avoid driving the ghat after dark — no streetlights",
      "Combine Kemmanagundi + Hebbe Falls in a single overnight trip",
      "Cash is king — limited UPI/card acceptance",
    ],
    faqs: [
      {
        q: "How do I reach Kemmanagundi from Chikmagalur?",
        a: "Drive 55 km via Lingadahalli ghat road — about 2 hours. Private taxi costs ₹2,500–3,500 round trip.",
      },
      {
        q: "What is the best time to visit Kemmanagundi?",
        a: "October to March offers clear views and pleasant 15–25°C weather. Avoid peak monsoon (June–August) when ghat roads can be risky.",
      },
      {
        q: "Where can I stay in Kemmanagundi?",
        a: "Options include Karnataka Forest Department cottages (most authentic), Hill View Resort, and a few homestays in nearby villages. Book ahead — supply is limited.",
      },
      {
        q: "Is Kemmanagundi worth visiting?",
        a: "Yes — especially if you want a quieter alternative to Coorg or Ooty. The Z Point sunset, Rajbhavan, and Hebbe Falls combo makes it a perfect 1–2 day escape.",
      },
      {
        q: "How far is Kemmanagundi from Bangalore?",
        a: "Kemmanagundi is approximately 270 km from Bangalore via Tumkur–Kadur–Tarikere route. Driving time is around 6 hours.",
      },
      {
        q: "Are there ATMs in Kemmanagundi?",
        a: "No. The nearest ATM is in Tarikere, 35 km away. Carry sufficient cash for stays, food, and the Hebbe Falls jeep.",
      },
    ],
    geo: { lat: 13.5414, lng: 75.7547 },
    related: ["hebbe-falls", "kalhatti-falls", "baba-budangiri"],
    lastUpdated: "2026-04-26",
  },

  "baba-budangiri": {
    slug: "baba-budangiri",
    primaryKeyword: "Baba Budangiri trek",
    title: "Baba Budangiri Trek Guide Chikmagalur | Trip Chikmagalur",
    description:
      "Baba Budangiri guide — sacred dargah, Manikyadhara Falls & trek route. Best time to visit & how to reach from Chikmagalur. Book tour on WhatsApp.",
    h1: "Baba Budangiri — Sacred Peaks & Trek Guide",
    hero: {
      image: bababudangiri,
      alt: "Baba Budangiri Chikmagalur sacred peaks with dargah cave and rolling Western Ghats backdrop",
    },
    intro:
      "Baba Budangiri is a sacred range in Chikmagalur named after the Sufi saint Hazrat Dada Hayath Mir Khalandar, who is believed to have brought the first coffee beans to India here. The dargah at the cave temple draws pilgrims from across faiths, while the surrounding peaks — including Mullayanagiri — make it one of Karnataka's best trekking circuits. This guide covers the Baba Budangiri trek route, how to reach the dargah, Manikyadhara Falls, and tips for combining the trip with Mullayanagiri in a single day.",
    quickFacts: {
      distanceFromChikmagalur: "30 km (1 hour)",
      bestTime: "October to February",
      duration: "Half day (4–5 hours)",
      entryFee: "Free",
      elevation: "1,895 m",
      difficulty: "Easy",
    },
    highlights: [
      "Sacred Sufi-Hindu shared dargah cave",
      "Manikyadhara Falls — pilgrim bathing site",
      "Birthplace of Indian coffee (legend)",
      "Spectacular peak ridge views",
      "Easy combo with Mullayanagiri",
    ],
    howToReach:
      "Baba Budangiri is 30 km north of Chikmagalur via the Mullayanagiri road. The drive takes around an hour on winding hill roads. Private taxis cost ₹1,500–2,000 for a round trip including Mullayanagiri. From Bangalore, it's ~270 km via NH75.",
    thingsToDo: [
      "Visit Inam Dattatreya Peetha cave dargah",
      "Trek the ridge from Mullayanagiri (8 km)",
      "Take a dip at Manikyadhara Falls",
      "Photograph the Galikere viewpoint",
      "Spot endemic birds in the shola forest",
    ],
    tips: [
      "Combine with Mullayanagiri in the same trip",
      "Dress modestly when visiting the dargah",
      "Carry packaged water and snacks",
      "Mornings before 10 AM offer the clearest views",
      "Avoid weekends and Urs festival for peace",
      "No fuel pumps past Chikmagalur — fill up in town",
    ],
    faqs: [
      {
        q: "How far is Baba Budangiri from Chikmagalur?",
        a: "Baba Budangiri is 30 km from Chikmagalur town, about a 1-hour drive on winding hill roads.",
      },
      {
        q: "Is Baba Budangiri the same as Mullayanagiri?",
        a: "No. Baba Budangiri is the broader hill range and the dargah peak. Mullayanagiri is the highest peak in the range. Both can be visited on the same day.",
      },
      {
        q: "What is special about Baba Budangiri?",
        a: "The dargah cave is sacred to both Muslims and Hindus and is said to be where coffee was first brought to India by the saint Baba Budan from Yemen.",
      },
      {
        q: "Is the Baba Budangiri trek difficult?",
        a: "No, the main viewpoints are vehicle-accessible. The ridge trek to Mullayanagiri is moderate and takes 3–4 hours one way.",
      },
      {
        q: "Can women visit the Baba Budangiri dargah?",
        a: "Yes, the dargah is open to all visitors. Modest clothing is requested as a mark of respect.",
      },
      {
        q: "Is there an entry fee at Baba Budangiri?",
        a: "No, entry to the dargah and viewpoints is free. Parking is also free.",
      },
    ],
    geo: { lat: 13.4258, lng: 75.7253 },
    related: ["mullayanagiri-trek", "kemmanagundi", "hebbe-falls"],
    lastUpdated: "2026-04-26",
  },

  "kalhatti-falls": {
    slug: "kalhatti-falls",
    primaryKeyword: "Kalhatti Falls Chikmagalur",
    title: "Kalhatti Falls Chikmagalur Guide | Trip Chikmagalur",
    description:
      "Kalhatti Falls Chikmagalur — sacred 400 ft cascade with Veerabhadra temple. Timings, entry, best season & travel tips. Book nearby tours on WhatsApp.",
    h1: "Kalhatti Falls — Sacred Cascade Near Kemmanagundi",
    hero: {
      image: kalhattiFalls,
      alt: "Kalhatti Falls Chikmagalur 400 ft sacred waterfall cascading beside Veerabhadra temple",
    },
    intro:
      "Kalhatti Falls in Chikmagalur is a 400-foot sacred waterfall that drops past the historic Veerabhadra temple, making it one of the most spiritually significant cascades in Karnataka. The falls are easily accessible by road, just 10 km from Kemmanagundi, and offer one of the best combinations of mythology, history and natural beauty in the Western Ghats. This guide covers how to reach Kalhatti Falls, temple timings, the best time to visit, and tips for first-time visitors.",
    quickFacts: {
      distanceFromChikmagalur: "55 km (2 hours)",
      bestTime: "September to January",
      duration: "1–2 hours visit",
      entryFee: "Free",
    },
    highlights: [
      "400-foot sacred cascade",
      "12th-century Veerabhadra temple at the base",
      "Easy roadside access — no trek required",
      "Mythological significance (Adi Shankaracharya)",
      "Pairs perfectly with Kemmanagundi",
    ],
    howToReach:
      "Kalhatti Falls is 55 km from Chikmagalur via Tarikere–Lingadahalli–Kemmanagundi road. From Kemmanagundi, it's only a 10 km drive. Private vehicles can park near the temple; the falls are visible from the parking lot.",
    thingsToDo: [
      "Visit the Veerabhadra temple shrine",
      "Photograph the cascade from the temple courtyard",
      "Combine with Kemmanagundi and Hebbe Falls",
      "Walk down to the lower viewpoint",
      "Attend morning aarti (5:30 AM)",
    ],
    tips: [
      "Visit between September and January for full water flow",
      "Maintain silence near the temple",
      "Remove shoes before approaching the shrine",
      "Carry change for temple offerings",
      "Combine with Kemmanagundi for an efficient day trip",
      "Limited food options — pack snacks",
    ],
    faqs: [
      {
        q: "Where is Kalhatti Falls located?",
        a: "Kalhatti Falls is in the Bababudangiri range, 55 km from Chikmagalur and just 10 km from Kemmanagundi hill station.",
      },
      {
        q: "Is there an entry fee for Kalhatti Falls?",
        a: "No, both the falls and the Veerabhadra temple are free to visit.",
      },
      {
        q: "What is the best time to visit Kalhatti Falls?",
        a: "September to January is ideal — water flow is strong post-monsoon and the weather is pleasant for the temple visit.",
      },
      {
        q: "Can I swim at Kalhatti Falls?",
        a: "No. The falls flow through a sacred temple area and swimming is not permitted.",
      },
      {
        q: "Is Kalhatti Falls worth visiting?",
        a: "Yes — especially when combined with Kemmanagundi and Hebbe Falls in a single day. It's one of the few sites that combines spiritual, historical and natural beauty.",
      },
      {
        q: "How long does the Kalhatti Falls visit take?",
        a: "Allocate 1–2 hours for the temple visit and viewpoints. Pair it with Kemmanagundi (full day) or Hebbe Falls.",
      },
    ],
    geo: { lat: 13.5167, lng: 75.7333 },
    related: ["kemmanagundi", "hebbe-falls", "baba-budangiri"],
    lastUpdated: "2026-04-26",
  },

  "hirekolale-lake": {
    slug: "hirekolale-lake",
    primaryKeyword: "Hirekolale Lake Chikmagalur",
    title: "Hirekolale Lake Sunset Guide Chikmagalur | Trip Chikmagalur",
    description:
      "Hirekolale Lake Chikmagalur — best sunset spot 10 km from town. Ideal timings, photography tips & nearby attractions. Plan visit & book on WhatsApp.",
    h1: "Hirekolale Lake — Chikmagalur's Best Sunset Spot",
    hero: {
      image: hirekolale,
      alt: "Hirekolale Lake Chikmagalur sunset reflection with Western Ghats hills in background",
    },
    intro:
      "Hirekolale Lake in Chikmagalur is widely regarded as the best sunset spot in the region, set just 10 km from town with the Western Ghats as a perfect backdrop. The reservoir reflects the orange sky into mirror-like waters, making it a favourite for photographers, couples and casual travellers winding down after a day of sightseeing. This guide covers how to reach Hirekolale Lake, the ideal time for sunset, photography angles, and what else to combine your visit with.",
    quickFacts: {
      distanceFromChikmagalur: "10 km (25 min)",
      bestTime: "October to March",
      duration: "1–2 hours (sunset)",
      entryFee: "Free",
    },
    highlights: [
      "One of Karnataka's best sunset viewpoints",
      "Mirror-like reservoir reflections",
      "Easily accessible — paved road to the bund",
      "Photography paradise (golden hour)",
      "Quiet, uncrowded weekday evenings",
    ],
    howToReach:
      "Hirekolale Lake is 10 km from Chikmagalur town via Mullayanagiri road. The drive takes around 25 minutes. Auto-rickshaws charge ₹250–350 round trip. The lake bund is the main viewpoint — park here and walk along the embankment.",
    thingsToDo: [
      "Watch sunset from the lake bund",
      "Photograph the mountain reflections",
      "Picnic on the embankment",
      "Combine with Mullayanagiri sunrise the next day",
      "Spot migratory birds in winter",
    ],
    tips: [
      "Arrive 45 minutes before sunset for the best light",
      "Carry a wide-angle lens for landscape shots",
      "No fences — keep children away from the embankment edge",
      "No food vendors — pack snacks and water",
      "Weekday evenings are far less crowded",
      "Combine with Mullayanagiri for a perfect golden-hour day",
    ],
    faqs: [
      {
        q: "How far is Hirekolale Lake from Chikmagalur?",
        a: "Hirekolale Lake is 10 km from Chikmagalur town — about a 25-minute drive on the Mullayanagiri road.",
      },
      {
        q: "What is the best time to visit Hirekolale Lake?",
        a: "Late afternoon to sunset (4 PM – 7 PM) between October and March offers the clearest skies and most stunning reflections.",
      },
      {
        q: "Is there an entry fee at Hirekolale Lake?",
        a: "No, the lake is freely accessible. There are no formal facilities — it's a roadside reservoir.",
      },
      {
        q: "Can I swim or boat at Hirekolale Lake?",
        a: "No. Swimming and boating are not permitted as it's a drinking water reservoir for Chikmagalur town.",
      },
      {
        q: "What can I combine with a Hirekolale Lake visit?",
        a: "It pairs perfectly with Mullayanagiri (5 km further), making for an ideal sunset–sunrise combo over two consecutive days.",
      },
      {
        q: "Are there toilets at Hirekolale Lake?",
        a: "No. There are no facilities at the lake. Use facilities in Chikmagalur town before heading out.",
      },
    ],
    geo: { lat: 13.343, lng: 75.7211 },
    related: ["mullayanagiri-trek", "baba-budangiri"],
    lastUpdated: "2026-04-26",
  },

  "kudremukh-national-park": {
    slug: "kudremukh-national-park",
    primaryKeyword: "Kudremukh National Park",
    title: "Kudremukh Trek Guide Chikmagalur | Trip Chikmagalur",
    description:
      "Kudremukh National Park — horse-face peak trek, wildlife, permits & entry fees. How to reach from Chikmagalur. Plan trek & book on WhatsApp.",
    h1: "Kudremukh National Park — Trek, Wildlife & Permits",
    hero: {
      image: muthodi,
      alt: "Kudremukh National Park rolling green grasslands with horse-face peak in Western Ghats Karnataka",
    },
    intro:
      "Kudremukh National Park is a UNESCO biodiversity hotspot spread across 600 sq km of Western Ghats shola forest and grasslands. The name 'Kudremukh' means 'horse face' in Kannada, referring to the iconic peak that dominates the skyline. The park hosts the Kudremukh trek — a 22 km round trip through some of India's most pristine green country — plus rich wildlife including Malabar civet, sloth bear, leopard and over 200 bird species. This guide covers trek permits, the entry process, and how to reach the park from Chikmagalur.",
    quickFacts: {
      distanceFromChikmagalur: "95 km (3 hours)",
      bestTime: "October to February",
      duration: "Full day or overnight",
      entryFee: "₹600 per person + permit",
      elevation: "1,894 m peak",
      difficulty: "Moderate to Difficult",
    },
    highlights: [
      "UNESCO biodiversity hotspot",
      "22 km round-trip Kudremukh trek",
      "Sholas, grasslands and rare wildlife",
      "Endemic to over 200 bird species",
      "One of South India's most scenic treks",
    ],
    howToReach:
      "Kudremukh is 95 km from Chikmagalur via Kalasa, taking around 3 hours by car. Trek permits must be obtained at the Mullodi forest gate (start point). KSRTC buses run from Chikmagalur to Kalasa; from Kalasa take a local jeep to Mullodi (15 km).",
    thingsToDo: [
      "Trek to Kudremukh peak (22 km round trip)",
      "Wildlife safari in Bhagavathi nature camp",
      "Stay at the forest guesthouse",
      "Photograph endemic Malabar trogons",
      "Visit the Hanumangundi Falls en route",
    ],
    tips: [
      "Permits are limited to 50 trekkers/day — book ahead",
      "Treks must start by 7 AM and end by 5 PM",
      "Carry 3 L water per person — no refill points",
      "Plastic is banned inside the park",
      "Hire a local guide (mandatory) at Mullodi",
      "Leeches are common in monsoon — carry salt",
    ],
    faqs: [
      {
        q: "How do I get a Kudremukh trek permit?",
        a: "Permits are issued at the Mullodi forest check-post on a first-come basis. Capacity is capped at 50 trekkers per day. Arrive by 6:30 AM.",
      },
      {
        q: "What is the entry fee for Kudremukh National Park?",
        a: "Trek entry is ₹600 per Indian adult. Foreigners pay ₹1,000. Mandatory guide fee is ₹600 per group.",
      },
      {
        q: "How long is the Kudremukh trek?",
        a: "The trek is 22 km round trip from Mullodi to the peak and back, typically taking 8–10 hours.",
      },
      {
        q: "What is the best time for the Kudremukh trek?",
        a: "October to February is ideal — clear skies, manageable temperatures, no leeches. Avoid June–August (heavy rain, leeches).",
      },
      {
        q: "Can I see wildlife at Kudremukh?",
        a: "Spotting big cats is rare, but the park is rich in birdlife, deer, langurs, Malabar giant squirrels and the occasional sloth bear.",
      },
      {
        q: "Where can I stay near Kudremukh?",
        a: "Bhagavathi Nature Camp (forest dept), homestays in Kalasa and Mullodi village. Book 30+ days in advance during peak season.",
      },
    ],
    geo: { lat: 13.1333, lng: 75.2667 },
    related: ["coffee-plantations-chikmagalur", "bhadra-wildlife-sanctuary"],
    lastUpdated: "2026-04-26",
  },

  "bhadra-wildlife-sanctuary": {
    slug: "bhadra-wildlife-sanctuary",
    primaryKeyword: "Bhadra Wildlife Sanctuary",
    title: "Bhadra Wildlife Safari Guide | Trip Chikmagalur",
    description:
      "Bhadra Wildlife Sanctuary — tiger safari, jeep timings, booking & best season. How to reach from Chikmagalur. Book Muthodi safari on WhatsApp.",
    h1: "Bhadra Wildlife Sanctuary — Tiger Reserve Travel Guide",
    hero: {
      image: muthodi,
      alt: "Bhadra Wildlife Sanctuary Muthodi tiger reserve forest road in Chikmagalur Karnataka",
    },
    intro:
      "Bhadra Wildlife Sanctuary is a 492 sq km Project Tiger reserve in Chikmagalur district, home to tigers, leopards, elephants, gaur, sambar and over 250 bird species. The Muthodi range is the main entry point and offers organised jeep safaris through dense Western Ghats forest. This guide covers Bhadra safari timings, booking process, the best time for wildlife sightings, and how to reach the sanctuary from Chikmagalur and Bangalore.",
    quickFacts: {
      distanceFromChikmagalur: "38 km (1 hour)",
      bestTime: "October to May",
      duration: "Half day or overnight",
      entryFee: "₹500 per person + safari fee",
    },
    highlights: [
      "Project Tiger reserve since 1998",
      "Jeep safaris through 492 sq km of forest",
      "Sightings of tiger, leopard, elephant, gaur",
      "Over 250 species of resident & migratory birds",
      "River Bhadra crocodile sightings",
    ],
    howToReach:
      "Bhadra Wildlife Sanctuary's Muthodi entry is 38 km from Chikmagalur via the Muthodi forest road, around 1 hour drive. Safari bookings must be made at the Muthodi range office or online. From Bangalore, it's ~280 km via NH75.",
    thingsToDo: [
      "Morning and afternoon jeep safaris",
      "Stay at Bhadra River Tern Lodge (Jungle Lodges)",
      "Birdwatching at the river bank",
      "Coracle rides on the Bhadra reservoir",
      "Trek to Lakkavalli viewpoint",
    ],
    tips: [
      "Book safaris 30+ days ahead during weekends and holidays",
      "Wear earth-tone clothing for safaris",
      "Use silent mode on cameras and phones",
      "Carry binoculars — sightings are often distant",
      "Avoid plastic — banned inside the sanctuary",
      "Early morning safari has the best chance of big cat sightings",
    ],
    faqs: [
      {
        q: "Is tiger sighting common at Bhadra?",
        a: "Tiger sightings happen but are not guaranteed — Bhadra has a low-density, healthy tiger population. Multiple safaris improve odds.",
      },
      {
        q: "What is the entry fee for Bhadra Wildlife Sanctuary?",
        a: "Entry is ₹500 for Indians, plus ₹600–800 per person for the shared jeep safari. Camera fees may apply.",
      },
      {
        q: "How do I book a Bhadra safari?",
        a: "Book at the Muthodi range office (first-come) or via Karnataka Eco-Tourism portal. Jungle Lodges packages include safari fees.",
      },
      {
        q: "What are the safari timings at Bhadra?",
        a: "Morning safari: 6:00–9:00 AM. Afternoon safari: 3:00–6:00 PM. Two slots per day, weather permitting.",
      },
      {
        q: "When is the best time to visit Bhadra Wildlife Sanctuary?",
        a: "October to May offers the best conditions. Summer (March–May) has higher big cat sighting probability near water sources.",
      },
      {
        q: "Where can I stay near Bhadra?",
        a: "Bhadra River Tern Lodge (Jungle Lodges), homestays in Lakkavalli, and budget guesthouses in Tarikere are popular options.",
      },
    ],
    geo: { lat: 13.4667, lng: 75.6333 },
    related: ["kudremukh-national-park", "coffee-plantations-chikmagalur"],
    lastUpdated: "2026-04-26",
  },

  "coffee-plantations-chikmagalur": {
    slug: "coffee-plantations-chikmagalur",
    primaryKeyword: "coffee plantation Chikmagalur",
    title: "Coffee Plantation Tour Guide Chikmagalur | Trip Chikmagalur",
    description:
      "Coffee plantations in Chikmagalur — estate tours, harvest season, tasting & budget stays under ₹2,500. Plan your coffee escape. Book on WhatsApp.",
    h1: "Coffee Plantations in Chikmagalur — Tours, Tastings & Stays",
    hero: {
      image: estateCafe,
      alt: "Coffee plantation Chikmagalur Arabica estate with red coffee cherries and shade trees",
    },
    intro:
      "Chikmagalur is the birthplace of coffee in India — the legend goes that the Sufi saint Baba Budan smuggled seven Arabica beans from Yemen and planted them in these very hills. Today, Chikmagalur produces some of India's finest Arabica and Robusta, and visiting a coffee plantation is the most unmissable experience in the region. This guide covers what to expect on a plantation tour, the best harvest season, tasting experiences, and the top coffee estate stays for travellers.",
    quickFacts: {
      distanceFromChikmagalur: "0–25 km depending on estate",
      bestTime: "November to February (harvest)",
      duration: "Half day tour",
      entryFee: "Free with stay; ₹500–1,500 standalone tours",
    },
    highlights: [
      "Birthplace of Indian coffee (legend)",
      "Arabica and Robusta plantations",
      "Live harvest demonstrations (Nov–Feb)",
      "Cup tasting and roasting workshops",
      "Estate-stay experiences with planters",
    ],
    howToReach:
      "Most plantations are 5–25 km from Chikmagalur town. Popular estates include Kelagur Heights, Dev Coorg Coffee Estate, and Sakleshpur Pollibetta belt. Book a tour through your homestay or directly with the estate. Many estate stays include guided plantation walks.",
    thingsToDo: [
      "Walk through Arabica & Robusta blocks",
      "Watch hand-picking during harvest",
      "Cup tasting & roasting demos",
      "Stay overnight at a planter's bungalow",
      "Buy single-estate beans direct from source",
    ],
    tips: [
      "Visit November–February to catch harvest",
      "Wear long sleeves — bee stings and insects",
      "Carry cash for direct bean purchases",
      "Ask for a tasting comparison of Arabica vs Robusta",
      "Book estate stays 30+ days in advance",
      "Combine with Mullayanagiri for a complete trip",
    ],
    faqs: [
      {
        q: "What is the best time to visit a coffee plantation in Chikmagalur?",
        a: "November to February — harvest season — when red coffee cherries are picked and processing is at its peak.",
      },
      {
        q: "Are coffee plantation tours free in Chikmagalur?",
        a: "Tours are free for guests of estate stays. Standalone tours range ₹500–1,500 depending on the experience (walk-only vs tasting + roasting).",
      },
      {
        q: "Can I stay inside a coffee plantation?",
        a: "Yes — Chikmagalur has dozens of authentic plantation homestays. Popular options include Honey Valley, Dev Coorg, and Kelagur Heights.",
      },
      {
        q: "Which coffee estate is best to visit in Chikmagalur?",
        a: "Top picks include Kelagur Heights (premium experience), The Serai (luxury), and any Karnataka Coffee Board-listed estate for an authentic working-plantation visit.",
      },
      {
        q: "Is Chikmagalur really the birthplace of Indian coffee?",
        a: "Yes — by legend, Baba Budan brought seven coffee beans from Yemen in the 17th century and planted them in the hills now named after him.",
      },
      {
        q: "Can I buy fresh coffee directly from estates?",
        a: "Yes, most estates sell single-estate beans (whole or ground). Carry cash and a sealable container for freshness.",
      },
    ],
    geo: { lat: 13.3161, lng: 75.772 },
    related: ["mullayanagiri-trek", "baba-budangiri", "bhadra-wildlife-sanctuary"],
    lastUpdated: "2026-04-26",
  },

  "jhari-falls": {
    slug: "jhari-falls",
    primaryKeyword: "Jhari Falls Chikmagalur",
    title: "Jhari Falls Chikmagalur Guide | Trip Chikmagalur",
    description:
      "Jhari Falls (Buttermilk Falls) — jeep route, entry fee & best season near Chikmagalur. What to expect on your hidden waterfall trip. Book on WhatsApp.",
    h1: "Jhari Falls Chikmagalur — The Hidden Buttermilk Falls",
    hero: {
      image: jhariFalls,
      alt: "Jhari Falls Chikmagalur Buttermilk Falls cascading through dense green forest",
    },
    intro:
      "Jhari Falls — locally called Buttermilk Falls for its frothy white cascade — is one of Chikmagalur's most photogenic waterfalls, hidden inside private coffee estate land 30 km from town. Reaching it requires a mandatory 4x4 jeep ride through a coffee estate, which keeps it pleasantly uncrowded compared to Hebbe Falls. This guide covers how to reach Jhari Falls, the entry fee, jeep booking, best season, and tips to make the most of your visit.",
    quickFacts: {
      distanceFromChikmagalur: "30 km (1 h 15 min)",
      bestTime: "August to January",
      duration: "Half day (3–4 hours)",
      entryFee: "₹250 entry + ₹250 jeep per person",
    },
    highlights: [
      "Hidden 'Buttermilk' cascade in coffee estate",
      "Mandatory jeep ride through plantations",
      "Less crowded than Hebbe Falls",
      "Pool at the base for foot dipping",
      "Surrounded by Arabica coffee bushes",
    ],
    howToReach:
      "Jhari Falls is 30 km from Chikmagalur via Attigundi. Drive to the coffee estate gate, park your vehicle, and book a 4x4 jeep at the entry counter. The jeep ride takes 20 minutes through the estate to the falls trailhead.",
    thingsToDo: [
      "Take the 4x4 jeep ride through coffee estate",
      "Photograph the buttermilk-white cascade",
      "Dip your feet at the base pool",
      "Combine with Mullayanagiri (15 km away)",
      "Buy fresh estate coffee on the way out",
    ],
    tips: [
      "Carry cash — UPI is unreliable at the entry counter",
      "Wear shoes with grip — final descent is slippery",
      "Best in late monsoon (Aug–Oct) for full water flow",
      "Avoid weekends to skip jeep wait times",
      "Combine with Mullayanagiri sunrise for an efficient day",
      "No food stalls — pack snacks",
    ],
    faqs: [
      {
        q: "Why is Jhari Falls called Buttermilk Falls?",
        a: "The water cascades down in such a frothy, white pattern that it resembles buttermilk being poured — earning the local nickname.",
      },
      {
        q: "What is the entry fee for Jhari Falls?",
        a: "Entry is ₹250 per person. The mandatory 4x4 jeep ride costs an additional ₹250 per person each way.",
      },
      {
        q: "Can I drive my own car to Jhari Falls?",
        a: "No. Private vehicles are not allowed past the coffee estate gate. The jeep ride is part of the experience.",
      },
      {
        q: "When is the best time to visit Jhari Falls?",
        a: "August to January — late monsoon offers the most spectacular flow with safer access than peak rainy months.",
      },
      {
        q: "Is Jhari Falls safer than Hebbe Falls?",
        a: "Both require care. Jhari is generally less crowded and has a smaller pool, but the cascade should not be climbed.",
      },
      {
        q: "How long does a Jhari Falls trip take?",
        a: "Allow 3–4 hours total: drive, jeep ride, viewing time and return. Combine with Mullayanagiri for a full day.",
      },
    ],
    geo: { lat: 13.3833, lng: 75.7333 },
    related: ["mullayanagiri-trek", "hebbe-falls", "coffee-plantations-chikmagalur"],
    lastUpdated: "2026-04-26",
  },
};

export const allDestinationSlugs = Object.keys(destinations);
