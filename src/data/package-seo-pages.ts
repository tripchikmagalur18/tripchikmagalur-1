export type PackageSeoSection = {
  h2: string;
  paragraphs: string[];
  h3?: { title: string; body: string }[];
};

export type PackageSeoPage = {
  slug: string;
  title: string;
  metaDescription: string;
  keyword: string;
  h1: string;
  intro: string;
  price: number;
  duration: string;
  packageDayLink: string;
  cartId: string;
  relatedLinks: { label: string; href: string }[];
  sections: PackageSeoSection[];
};

export const packageSeoPages: Record<string, PackageSeoPage> = {
  "mullayanagiri-trek-package": {
    slug: "mullayanagiri-trek-package",
    title: "Mullayanagiri Trek Package Chikmagalur — Day Tour from ₹3,499 (2026)",
    metaDescription:
      "Book the Mullayanagiri trek package in Chikmagalur — sunrise peak, Baba Budangiri, Jhari Falls jeep & Z Point. ₹3,499/group, private cab & guide. WhatsApp booking.",
    keyword: "Mullayanagiri trek package Chikmagalur",
    h1: "Mullayanagiri Trek Package — Chikmagalur Day 1 Tour",
    intro:
      "The Mullayanagiri trek package is Trip Chikmagalur's most popular day tour — built for weekend travellers who want Karnataka's highest peak, sacred Baba Budangiri, a coffee-estate stop, and waterfall adventure in one guided day. Private transport, local route knowledge, and WhatsApp booking make it the easiest way to experience the Western Ghats without planning every turn yourself.",
    price: 3499,
    duration: "1 Day",
    packageDayLink: "/package/day-1",
    cartId: "pkg-day-1",
    relatedLinks: [
      { label: "2-day Chikmagalur itinerary", href: "/2-day-chikmagalur-itinerary" },
      { label: "Kemmangundi tour package", href: "/kemmangundi-tour-package" },
      { label: "Places to visit", href: "/places/mullayanagiri-trek" },
      { label: "Packages from Bangalore", href: "/chikmagalur-tour-packages-from-bangalore" },
    ],
    sections: [
      {
        h2: "What is included in the Mullayanagiri package?",
        paragraphs: [
          "Your group gets a dedicated vehicle and driver for the full day, fuel, and coordination for entry points and jeep segments where required. A local guide helps with timings — especially for the Mullayanagiri sunrise window — and routes between Siri Nature Roost, Jhari (Butter) Falls, Seethalayanagiri, Honnamana Falls, Baba Budangiri, Z Point sunset viewpoint, and optional ziplining at Mubarak Homestay.",
          "Package price is ₹3,499 per group (not per person), which suits friends, families, and small corporate outings splitting cost. Add the package to your cart on our website, then confirm dates and pickup on WhatsApp. Pair with a resort or villa stay for a full weekend.",
        ],
      },
      {
        h2: "Mullayanagiri trek — timing and difficulty",
        paragraphs: [
          "Mullayanagiri stands at roughly 1,930 metres and is the highest peak in Karnataka. Most visitors drive to the base parking and climb the final stone steps (about 450 steps) in 30–90 minutes depending on pace. Sunrise trips mean leaving Chikmagalur town around 5:00–5:30 AM in winter for clear views above the cloud line.",
          "Difficulty is easy to moderate. Monsoon months bring slippery steps — we adjust start times and footwear advice accordingly. Winter (October–February) is peak season for photography and comfortable trekking temperatures.",
        ],
        h3: [
          {
            title: "Best season for the Mullayanagiri trek package",
            body: "October to March offers the clearest skies. Post-monsoon waterfalls on the same route run strong through October. December–January is busiest — book transport and stays early.",
          },
        ],
      },
      {
        h2: "Why book with Trip Chikmagalur?",
        paragraphs: [
          "Self-driving tourists often underestimate ghat distances between Mullayanagiri, Baba Budangiri, and Jhari Falls — a full loop can exceed 120 km of winding road in one day. Our package sequences stops to reduce backtracking and accounts for jeep wait times at estate waterfalls.",
          "We are based in Chikmagalur with 5,000+ travellers served and government-verified operations. Explore our FAQ, compare the Kemmangundi package for day two, or read the Mullayanagiri trek guide on our blog for packing lists and safety tips.",
        ],
      },
      {
        h2: "Mullayanagiri trek package — FAQs",
        paragraphs: [
          "Is the Mullayanagiri trek package per person? No — ₹3,499 covers your whole group with cab and guide coordination. Do I need trekking experience? The summit steps are easy to moderate; sunrise timing matters more than fitness. Can I combine with a honeymoon or corporate stay? Yes — add resort or villa nights on the Stays page and book multiple days via WhatsApp.",
        ],
      },
    ],
  },
  "kemmangundi-tour-package": {
    slug: "kemmangundi-tour-package",
    title: "Kemmangundi Tour Package — Hebbe Falls & Z Point from ₹4,499 (2026)",
    metaDescription:
      "Kemmangundi tour package with Hebbe Falls jeep, Kalhatti Falls, Raj Bhavan roses & Z Point. ₹4,499/group from Chikmagalur. Book WhatsApp.",
    keyword: "Kemmangundi tour package Chikmagalur",
    h1: "Kemmangundi Tour Package — Hebbe Falls & Hill Station Day",
    intro:
      "The Kemmangundi tour package covers the classic hill-station circuit west of Chikmagalur — misty Raj Bhavan gardens, Kalhatti Falls, the jeep trail to Hebbe Falls inside coffee estates, and Z Point sunset near Baba Budangiri range. Ideal as day two of a weekend after the Mullayanagiri package.",
    price: 4499,
    duration: "1 Day",
    packageDayLink: "/package/day-2",
    cartId: "pkg-day-2",
    relatedLinks: [
      { label: "Mullayanagiri trek package", href: "/mullayanagiri-trek-package" },
      { label: "Waterfalls in Chikmagalur", href: "/waterfalls-in-chikmagalur" },
      { label: "Hebbe Falls guide", href: "/places/hebbe-falls" },
      { label: "Weekend packages", href: "/chikmagalur-weekend-packages" },
    ],
    sections: [
      {
        h2: "Highlights of the Kemmangundi day tour",
        paragraphs: [
          "Stops include Deviramma Temple viewpoint, Kalhatti Falls with its rock-face temple, Kemmangundi town and Z Point trek, Raj Bhavan rose garden, and the highlight for many groups — Hebbe Falls reached by shared jeep through private estate roads.",
          "Hebbe splits into Dodda Hebbe and Chikka Hebbe tiers totalling about 551 ft. Monsoon and post-monsoon flows are spectacular; winter visits balance safety and water volume. Allow four to five hours for the falls segment alone including jeep queue time.",
        ],
      },
      {
        h2: "Pricing and how to book",
        paragraphs: [
          "The Kemmangundi tour package is ₹4,499 per group with cab, driver, and guide coordination. Jeep charges to estate waterfalls are organised as part of the route — ask on WhatsApp for current forest or estate fees. Combine with Trip Chikmagalur Resort or Villa for overnight comfort between day one and day two tours.",
        ],
      },
      {
        h2: "Planning tips",
        paragraphs: [
          "Start early from your stay — Kemmangundi is roughly 60–65 km from Chikmagalur town and ghat sections slow average speed. Carry a light jacket; Z Point and Kemmangundi viewpoints get windy at sunset. Read our Kemmangundi destination page and 2-day itinerary for hour-by-hour planning from Bangalore.",
        ],
      },
      {
        h2: "Hebbe Falls jeep — common questions",
        paragraphs: [
          "Is Hebbe Falls open in monsoon? Usually yes with estate jeep access; heavy rain may pause jeeps temporarily. How long is the jeep ride? Roughly 30–45 minutes each way through coffee estates. Can Kemmangundi pair with Mullayanagiri same day? Not recommended — book as day two of our 2-day or 3-day Chikmagalur itinerary.",
        ],
      },
    ],
  },
  "muthodi-safari-package": {
    slug: "muthodi-safari-package",
    title: "Muthodi Safari Package — Bhadra Wildlife & Lakes from ₹3,999 (2026)",
    metaDescription:
      "Muthodi forest safari package: Bhadra wildlife jeep, Hirekolale Lake, Ukkuda Falls & Mallandur. ₹3,999/group. Book Chikmagalur nature day tour.",
    keyword: "Muthodi safari package Chikmagalur",
    h1: "Muthodi Safari Package — Bhadra Wildlife Day Tour",
    intro:
      "The Muthodi safari package is for nature lovers — Bhadra Tiger Reserve jeep safari from Muthodi gate, sunset at Hirekolale Lake, offbeat Ukkuda Falls, and Mallandur shooting-point vistas through coffee country.",
    price: 3999,
    duration: "1 Day",
    packageDayLink: "/package/day-3",
    cartId: "pkg-day-3",
    relatedLinks: [
      { label: "Things to do in Chikmagalur", href: "/things-to-do-in-chikmagalur" },
      { label: "Bhadra wildlife place guide", href: "/places/bhadra-wildlife-sanctuary" },
      { label: "All tour packages", href: "/chikmagalur-tour-packages" },
    ],
    sections: [
      {
        h2: "Bhadra Muthodi jeep safari",
        paragraphs: [
          "Morning slots (around 6:30 AM) give the best chance to spot gaurs, elephants, deer, and birdlife along the riverine forest track. Safaris are regulated — we help with timing and gate procedures. Avoid plastic inside the reserve and follow guide instructions for safety.",
        ],
      },
      {
        h2: "Lakes, falls, and viewpoints",
        paragraphs: [
          "Hirekolale Lake offers calm water reflections of the Mullayanagiri range — popular at sunset. Ukkuda Falls rewards travellers willing to walk a short forest trail; local guides are recommended in monsoon. Mallandur shooting point appears in several regional films and overlooks endless estate ridges.",
        ],
      },
      {
        h2: "Who should choose this package?",
        paragraphs: [
          "Families with children, birders, and groups who have already done peaks on day one/two. Price is ₹3,999 per group. Link with our blog post on Bhadra safari and the full places directory for distances from town.",
        ],
      },
      {
        h2: "Bhadra safari booking FAQs",
        paragraphs: [
          "What time is the Muthodi jeep safari? Morning slots around 6:30 AM offer the best wildlife sightings. Is safari included in ₹3,999? Package includes transport and coordination; forest gate fees are confirmed on WhatsApp for your date. Ideal for 3-day itineraries after peak days.",
        ],
      },
    ],
  },
  "belur-heritage-tour-package": {
    slug: "belur-heritage-tour-package",
    title: "Belur Heritage Tour Package — Hoysala Temples from ₹3,499 (2026)",
    metaDescription:
      "Belur & Halebidu heritage tour from Chikmagalur — Chennakeshava & Hoysaleshwara temples. ₹3,499/group. Day trip with guide.",
    keyword: "Belur Halebidu tour package",
    h1: "Belur Heritage Tour Package — Hoysala Temple Day Trip",
    intro:
      "The Belur heritage tour package shifts from hills to history — Chennakeshava Temple at Belur, Hoysaleshwara Temple at Halebidu, Hiremagalur Kodanda Rama Temple, and Belur Dam viewpoints. Perfect for culture-focused travellers and photography groups.",
    price: 3499,
    duration: "1 Day",
    packageDayLink: "/package/day-4",
    cartId: "pkg-day-4",
    relatedLinks: [
      { label: "Chikmagalur itinerary", href: "/chikmagalur-itinerary" },
      { label: "Tour packages", href: "/chikmagalur-tour-packages" },
    ],
    sections: [
      {
        h2: "Temple stops explained",
        paragraphs: [
          "Belur's Chennakeshava Temple (12th century) is famous for intricate exterior carvings and lathe-turned pillars. Halebidu's Hoysaleshwara Temple pairs with it as a twin highlight of Hoysala architecture — allow unhurried time for both. Dress modestly and remove footwear where required.",
        ],
      },
      {
        h2: "Logistics from Chikmagalur",
        paragraphs: [
          "Belur is roughly 40 km from Chikmagalur town — an easy day trip without extreme ghats. The package includes private cab and guide support for ₹3,499 per group. Combine with a weekday stay to avoid weekend temple crowds.",
        ],
      },
      {
        h2: "Belur Halebidu tour FAQs",
        paragraphs: [
          "How long do temples take? Allow 2–3 hours for Belur carvings and 1.5–2 hours at Halebidu. Dress code? Modest clothing; footwear off inside sanctums. Good for Mysore–Chikmagalur route? Yes — many Mysore travellers add temples on the Hassan leg.",
        ],
      },
    ],
  },
  "sringeri-trek-package": {
    slug: "sringeri-trek-package",
    title: "Sringeri Trek Package — Devaramane & Ethina Bhuja from ₹5,999 (2026)",
    metaDescription:
      "Sringeri trek package: Devaramane Betta, Ethina Bhuja trek, Abbi Falls, Mudigere views. ₹5,999/group. Adventure day from Chikmagalur.",
    keyword: "Sringeri trek package Chikmagalur",
    h1: "Sringeri Trek Package — Mudigere Range Adventure Day",
    intro:
      "The Sringeri trek package is our most adventurous day — Devaramane Betta viewpoint, Ethina Bhuja trek, Abbi Falls, Siddhartha Hegde Park, and Mudigere valley scenery. Built for fit groups who want fewer crowds than mainstream peaks.",
    price: 5999,
    duration: "1 Day",
    packageDayLink: "/package/day-5",
    cartId: "pkg-day-5",
    relatedLinks: [
      { label: "Trekking in Chikmagalur", href: "/trekking-in-chikmagalur" },
      { label: "Mullayanagiri package", href: "/mullayanagiri-trek-package" },
      { label: "Adventure activities", href: "/adventure" },
    ],
    sections: [
      {
        h2: "Trek difficulty and fitness",
        paragraphs: [
          "Ethina Bhuja and Devaramane routes are moderate to challenging compared with the short Mullayanagiri steps. Wear trekking shoes, carry 2 litres of water per person, and start early. Monsoon treks need local condition checks — we advise on WhatsApp before your date.",
        ],
      },
      {
        h2: "Package value at ₹5,999 per group",
        paragraphs: [
          "Longer driving distances toward Mudigere and Sringeri side make this a full 10–12 hour day. The price includes cab, driver, and guide coordination for the listed stops. Pair with our offbeat places blog and trekking pillar page for training and packing guidance.",
        ],
      },
      {
        h2: "Sringeri trek package FAQs",
        paragraphs: [
          "Who is this package for? Fit groups wanting Devaramane and Ethina Bhuja beyond mainstream Mullayanagiri crowds. Fitness level? Moderate to challenging — carry water and trekking shoes. Can seniors join? Mullayanagiri package is easier; this day suits active adults.",
        ],
      },
    ],
  },
};

export const packageSeoSlugs = Object.keys(packageSeoPages);
