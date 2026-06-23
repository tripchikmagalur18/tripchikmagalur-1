import type { StaticImageData } from "next/image";

import packageBelur from "@/assets/packages/package-belur.webp";
import packageKemmangundi from "@/assets/packages/package-kemmangundi.webp";
import packageMullayanagiri from "@/assets/packages/package-mullayanagiri.webp";
import packageMuthodi from "@/assets/packages/package-muthodi.webp";
import packageSringeri from "@/assets/packages/package-sringeri.webp";

export type HomePackage = {
  name: string;
  slug: string;
  duration: string;
  price: number;
  priceCurrency: "INR";
  link: string;
  packageDayLink: string;
  cartId: string;
  description: string;
  highlights: readonly string[];
  image: StaticImageData;
  popular?: boolean;
};

/** Package cards — homepage carousel & /chikmagalur-tour-packages */
export const homePackages: readonly HomePackage[] = [
  {
    name: "Mullayangiri Package",
    slug: "mullayanagiri-trek-package",
    duration: "Day 1",
    price: 3499,
    priceCurrency: "INR",
    link: "/mullayanagiri-trek-package",
    packageDayLink: "/package/day-1",
    cartId: "pkg-day-1",
    popular: true,
    image: packageMullayanagiri,
    description:
      "One-day Chikmagalur tour covering Mullayanagiri peak, Baba Budangiri, Jhari Falls jeep ride, and adventure add-ons.",
    highlights: [
      "Siri Nature Roost Coffee Point",
      "Jhari (Butter) Falls Jeep Ride",
      "Mullayangiri — Karnataka's Highest Peak",
      "Seethalayyangiri & Honnamana Halla Falls",
      "Baba Budangiri",
      "Z Point Sunset & Zip Lining",
    ],
  },
  {
    name: "Kemmangundi Package",
    slug: "kemmangundi-tour-package",
    duration: "Day 2",
    price: 4499,
    priceCurrency: "INR",
    link: "/kemmangundi-tour-package",
    packageDayLink: "/package/day-2",
    cartId: "pkg-day-2",
    image: packageKemmangundi,
    description:
      "Hill-station day tour with Kemmanagundi, Hebbe Falls jeep trail, Kalhatti Falls, and Raj Bhavan rose garden.",
    highlights: [
      "Deviramma Temple Hilltop",
      "Kalhatti Falls",
      "Kemmangundi Z-Point",
      "Raj Bhavan Rose Garden",
      "Hebbe Falls Jeep Trail",
    ],
  },
  {
    name: "Muthodi Package",
    slug: "muthodi-safari-package",
    duration: "Day 3",
    price: 3999,
    priceCurrency: "INR",
    link: "/muthodi-safari-package",
    packageDayLink: "/package/day-3",
    cartId: "pkg-day-3",
    image: packageMuthodi,
    description:
      "Nature and wildlife day with Hirekolale Lake, Bhadra Muthodi forest safari, Ukkuda Falls, and Mallandur viewpoints.",
    highlights: [
      "Hirekolale Lake Sunset",
      "Muthodi Forest Safari",
      "Ukkuda Falls Hidden Trail",
      "Bande Kal Gudda Viewpoint",
      "Wildlife & Birding Spots",
    ],
  },
  {
    name: "Belur Package",
    slug: "belur-heritage-tour-package",
    duration: "Day 4",
    price: 3499,
    priceCurrency: "INR",
    link: "/belur-heritage-tour-package",
    packageDayLink: "/package/day-4",
    cartId: "pkg-day-4",
    image: packageBelur,
    description:
      "Heritage tour to Belur Chennakeshava Temple, Halebidu Hoysaleshwara Temple, and Hiremagalur temples.",
    highlights: [
      "Belur Chennakeshava Temple",
      "Halebidu Hoysaleshwara Temple",
      "Hiremagalur Kodanda Rama Temple",
      "Heritage & Hoysala Architecture",
    ],
  },
  {
    name: "Sringeri & Trek Package",
    slug: "sringeri-trek-package",
    duration: "Day 5",
    price: 5999,
    priceCurrency: "INR",
    link: "/sringeri-trek-package",
    packageDayLink: "/package/day-5",
    cartId: "pkg-day-5",
    image: packageSringeri,
    description:
      "Trek-focused day with Devaramane Betta, Ethina Bhuja, Abbi Falls, and Mudigere range viewpoints.",
    highlights: [
      "Siddhartha Hegde Park",
      "Devaramane Betta Viewpoint",
      "Abbi Waterfalls",
      "Ethina Bhuja Trek",
      "Scenic Mudigere Range",
    ],
  },
] as const;

export function getHomePackageByCartId(cartId: string): HomePackage | undefined {
  return homePackages.find((pkg) => pkg.cartId === cartId);
}

export function getHomePackageByDayLink(link: string): HomePackage | undefined {
  return homePackages.find((pkg) => pkg.packageDayLink === link);
}

export const homeFaqItems = [
  {
    question: "How much do Chikmagalur tour packages cost?",
    answer:
      "Trip Chikmagalur day packages start from ₹3,499 per group (Day 1 Mullayanagiri) up to ₹5,999 (Day 5 trek package). Resort stays from ₹1,500/adult/night and villa from ₹1,200/adult/night. Book via cart and confirm on WhatsApp.",
  },
  {
    question: "Can I book a Chikmagalur trip from Bangalore?",
    answer:
      "Yes. Most guests drive or take a cab from Bangalore (245 km, ~5–6 hours). We also offer packages tailored for weekend travellers from Bangalore, Mangalore, and Mysore with optimised day-wise routes.",
  },
  {
    question: "Which package covers Mullayanagiri and Hebbe Falls?",
    answer:
      "Mullayanagiri, Baba Budangiri, and Jhari Falls are on the Day 1 Mullayanagiri package. Hebbe Falls and Kemmanagundi are on the Day 2 Kemmangundi package. Many guests book both for a 2-day weekend.",
  },
  {
    question: "How do I book a Chikmagalur tour package?",
    answer:
      "Add packages or stays to the cart on tripchikmagalur.com and checkout via WhatsApp at +91 6363131585. We confirm availability, share payment details, and help customise your itinerary by dates and group size.",
  },
] as const;
