import type { StaticImageData } from "next/image";

import siriNatureRoost from "@/assets/places/siri-nature-roost.webp";
import jhariFalls from "@/assets/places/jhari-falls.webp";
import mullayangiri from "@/assets/places/mullayangiri.webp";
import seethalayanagiri from "@/assets/places/seethalayanagiri.webp";
import honnamanaFalls from "@/assets/places/honnamana-falls.webp";
import babaBudangiri from "@/assets/places/baba-budangiri.webp";
import zPoint from "@/assets/places/z-point.webp";
import zipLining from "@/assets/places/zip-lining.webp";

import devirammaTemple from "@/assets/places/deviramma-temple.webp";
import kalhattiFalls from "@/assets/places/kalhatti-falls.webp";
import kemmanagundi from "@/assets/places/kemmanagundi.webp";
import rajBhavan from "@/assets/places/raj-bhavan.webp";
import hebbeFalls from "@/assets/places/hebbe-falls.webp";

import hirekolaleLake from "@/assets/places/hirekolale-lake.webp";
import estateCafe from "@/assets/places/estate-cafe.webp";
import mallandurShootingPoint from "@/assets/places/mallandur-shooting-point.webp";
import muthodiForest from "@/assets/places/muthodi-forest.webp";
import ukkudaFalls from "@/assets/places/ukkuda-falls.webp";
import bandeKalGudda from "@/assets/places/bande-kal-gudda.webp";

import yagachi from "@/assets/place-yagachi.webp";
import belurDam from "@/assets/place-belur-dam.webp";
import chennakeshava from "@/assets/place-chennakeshava.webp";
import hoysaleshwara from "@/assets/place-hoysaleshwara.webp";
import hiremangalore from "@/assets/place-hiremangalore.webp";

import siddharthaPark from "@/assets/place-siddhartha-park.webp";
import devaramane from "@/assets/place-devaramane.webp";
import bettada from "@/assets/place-bettada.webp";
import abbiFalls from "@/assets/place-abbi-falls.webp";
import ethinaBhuja from "@/assets/place-ethina-bhuja.webp";

export type PackagePlace = {
  name: string;
  image: StaticImageData;
  distance: string;
  time: string;
  description: string;
};

export type PackageDetail = {
  cartId: string;
  name: string;
  duration: string;
  price: number;
  packageDayLink: string;
  intro: string;
  places: PackagePlace[];
};

export const packageDetails: Record<string, PackageDetail> = {
  "pkg-day-1": {
    cartId: "pkg-day-1",
    name: "Mullayangiri Package",
    duration: "Day 1",
    price: 3499,
    packageDayLink: "/package/day-1",
    intro:
      "Explore 8 stunning locations in one action-packed day — from misty peaks to hidden waterfalls and thrilling adventures.",
    places: [
      {
        name: "Siri Nature Roost",
        image: siriNatureRoost,
        distance: "3.2 km",
        time: "11 min",
        description:
          "Siri Nature Roost is the best coffee point in Chikmagalur. The girl lying in the statue is the younger girl Siri, who gave the city its name — Chikmagaluru.",
      },
      {
        name: "Jhari Falls (Butter Falls)",
        image: jhariFalls,
        distance: "23.8 km",
        time: "48 min",
        description:
          "Also known as Sageer Ahmed Falls, this waterfall is hidden in an estate. To reach it, you take a thrilling 4.5 km jeep adventure ride through the coffee plantations.",
      },
      {
        name: "Mullayangiri (Highest Peak)",
        image: mullayangiri,
        distance: "33.4 km",
        time: "70 min",
        description:
          "Mullayangiri is the highest peak in Karnataka at 6,400 ft. Best visited in winter for stunning views. A religious temple sits at the very tip of the peak.",
      },
      {
        name: "Seethalayanagiri Temple & Cave",
        image: seethalayanagiri,
        distance: "19.4 km",
        time: "40 min",
        description:
          "A cave on the left side of the temple worships Lord Rama and Goddess Sita. Popularly known as the 'way to heaven' due to its stunning mountain surroundings.",
      },
      {
        name: "Honnamana Falls",
        image: honnamanaFalls,
        distance: "22.6 km",
        time: "44 min",
        description:
          "A lovely waterfall located enroute to Baba Budangiri hills. A must-stop point with beautiful cascading waters surrounded by lush greenery.",
      },
      {
        name: "Baba Budangiri",
        image: babaBudangiri,
        distance: "30.8 km",
        time: "1 hr 8 min",
        description:
          "Also known as Dattapeeta and Chandradrona, this is where Baba Budan started the first coffee plantation in India. From here, coffee spread across the country.",
      },
      {
        name: "Z Point (Sunset Point)",
        image: zPoint,
        distance: "37.9 km",
        time: "1 hr 27 min",
        description:
          "One of the most beautiful viewpoints for sunsets near Baba Budangiri. It captures the essence of nature's beauty with panoramic mountain views.",
      },
      {
        name: "Zip Lining (Mubarak Homestay)",
        image: zipLining,
        distance: "27.9 km",
        time: "54 min",
        description:
          "Zip lining is one of the most thrilling adventures in Chikmagalur. The craze for this adventure is rapidly growing. Located at Mubarak Homestay.",
      },
    ],
  },
  "pkg-day-2": {
    cartId: "pkg-day-2",
    name: "Kemmangundi Package",
    duration: "Day 2",
    price: 4499,
    packageDayLink: "/package/day-2",
    intro:
      "Hill-station day tour with Kemmanagundi, Hebbe Falls jeep trail, Kalhatti Falls, and Raj Bhavan rose garden.",
    places: [
      {
        name: "Deviramma Temple",
        image: devirammaTemple,
        distance: "20 km",
        time: "30 min",
        description:
          "Deviramma temple is located atop Devigiri hill, open only during Deepavali. Legend says Mysore Palace initiated celebrations based on lighting from this hill.",
      },
      {
        name: "Kalhatti Falls",
        image: kalhattiFalls,
        distance: "58 km",
        time: "1 hr 28 min",
        description:
          "Kalhatti Falls is a stunning waterfall on the headwaters of the river, located 10 km from Kemmanagundi hill station in Tarikere Taluk.",
      },
      {
        name: "Kemmanagundi",
        image: kemmanagundi,
        distance: "62.2 km",
        time: "1 hr 34 min",
        description:
          "Known for vibrant night sky vistas from the Sunset View Point, Kemmanagundi is a tranquil hill station surrounded by lush forest.",
      },
      {
        name: "Raj Bhavan (Rose Garden)",
        image: rajBhavan,
        distance: "34 km",
        time: "55 min",
        description:
          "A perfect place for spending time with loved ones, featuring beautiful flower gardens. One of the most amazing places to visit in Chikmagalur.",
      },
      {
        name: "Hebbe Falls",
        image: hebbeFalls,
        distance: "65 km",
        time: "1 hr 45 min",
        description:
          "Inside a coffee estate, reachable by walk or four-wheeler. Hebbe Falls gushes down from a height of 551 ft in two spectacular stages.",
      },
    ],
  },
  "pkg-day-3": {
    cartId: "pkg-day-3",
    name: "Muthodi Package",
    duration: "Day 3",
    price: 3999,
    packageDayLink: "/package/day-3",
    intro:
      "Nature and wildlife day with Hirekolale Lake, Bhadra Muthodi forest safari, Ukkuda Falls, and Mallandur viewpoints.",
    places: [
      {
        name: "Hirekolale Lake",
        image: hirekolaleLake,
        distance: "10 km",
        time: "15 min",
        description:
          "Built as a water supply and irrigation source for Chikmagalur town. The lake is enclosed with gorgeous surroundings and offers a serene retreat.",
      },
      {
        name: "Estate Café, Mallandur",
        image: estateCafe,
        distance: "23.7 km",
        time: "54 min",
        description:
          "The perfect place for a date, family dinner, or hangout with friends. A must-visit café in Mallandur with great ambiance and food.",
      },
      {
        name: "Mallandur Shooting Point",
        image: mallandurShootingPoint,
        distance: "30.8 km",
        time: "1 hr 8 min",
        description:
          "Just 2 km from town, the route passes through coffee estates and forest, opening suddenly to a vast hilltop with stunning panoramic views.",
      },
      {
        name: "Muthodi Forest Safari",
        image: muthodiForest,
        distance: "34.6 km",
        time: "1 hr 30 min",
        description:
          "Experience a thrilling forest safari in the Bhadra Wildlife Sanctuary. Spot deer, birds, and lush Western Ghats biodiversity.",
      },
      {
        name: "Ukkuda Falls",
        image: ukkudaFalls,
        distance: "19.4 km",
        time: "40 min",
        description:
          "Verdant green environments with high biodiversity — many species of animals, birds, and plants to explore. A hidden gem known to few.",
      },
      {
        name: "Bande Kal Gudda",
        image: bandeKalGudda,
        distance: "22.6 km",
        time: "44 min",
        description:
          "A stunning hill reaching approximately 3,500 feet above sea level, offering a breathtaking escape into nature's embrace. Best during monsoon.",
      },
    ],
  },
  "pkg-day-4": {
    cartId: "pkg-day-4",
    name: "Belur Package",
    duration: "Day 4",
    price: 3499,
    packageDayLink: "/package/day-4",
    intro:
      "A full-day heritage circuit — Hoysala temples at Belur and Halebidu, Yagachi water sports, and Hiremagalur monument.",
    places: [
      {
        name: "Yagachi Water Sports",
        image: yagachi,
        distance: "19.4 km",
        time: "40 min",
        description:
          "Yagachi Water Adventure Sports Center is next to Yagachi Dam on the Belur–Chikmagalur road. Kayaking and water activities with scenic dam views.",
      },
      {
        name: "Belur Dam",
        image: belurDam,
        distance: "22.6 km",
        time: "44 min",
        description:
          "Reservoir at 965 m altitude built for drinking water and irrigation in Belur, Chikmagalur, and Hassan — completed in 2001.",
      },
      {
        name: "Belur Chennakeshava Temple",
        image: chennakeshava,
        distance: "30.8 km",
        time: "1 hr 8 min",
        description:
          "12th-century Hoysala masterpiece commissioned by King Vishnuvardhana in 1117 CE — intricate soapstone carvings and UNESCO-listed heritage.",
      },
      {
        name: "Halebidu Hoysaleshwara Temple",
        image: hoysaleshwara,
        distance: "34.6 km",
        time: "1 hr 30 min",
        description:
          "Historic twin Shiva temples in Halebidu built around 1120 CE — every inch covered in mythological sculptures.",
      },
      {
        name: "Hiremagalur Kodanda Rama Temple",
        image: hiremangalore,
        distance: "9 km",
        time: "20 min",
        description:
          "State-protected monument blending Hoysala and Dravidian architecture — a quiet heritage gem near Chikmagalur.",
      },
    ],
  },
  "pkg-day-5": {
    cartId: "pkg-day-5",
    name: "Sringeri & Trek Package",
    duration: "Day 5",
    price: 5999,
    packageDayLink: "/package/day-5",
    intro:
      "Trek-focused day with Devaramane Betta, Ethina Bhuja, Abbi Falls, and Mudigere range viewpoints.",
    places: [
      {
        name: "Siddhartha Hegde Park",
        image: siddharthaPark,
        distance: "19.4 km",
        time: "40 min",
        description:
          "Memorial park dedicated to V.G. Siddhartha (CCD founder) — a peaceful town retreat loved by locals.",
      },
      {
        name: "Devaramane Betta Viewpoint",
        image: devaramane,
        distance: "59 km",
        time: "1 hr 28 min",
        description:
          "Sacred hill at 3,500 ft with Kalabhairaveshwara temple — one of the best monsoon viewpoints in the Mudigere range.",
      },
      {
        name: "Bettada Bhaireshwara Temple",
        image: bettada,
        distance: "62.2 km",
        time: "1 hr 34 min",
        description:
          "Nearly 600-year-old Shiva temple on a forested hill — one of the oldest shrines in the region with panoramic valley views.",
      },
      {
        name: "Abbi Waterfalls",
        image: abbiFalls,
        distance: "152 km",
        time: "3 hr 51 min",
        description:
          "Wide cascading waterfall near Chikmagalur with spectacular views — a wider fall area creating memorable monsoon scenes.",
      },
      {
        name: "Ethina Bhuja Trek",
        image: ethinaBhuja,
        distance: "51 km",
        time: "1 hr 16 min",
        description:
          "Ox-hump shaped peak in the Mudigere range — one of the most scenic moderate treks in the Western Ghats, great in summer and monsoon.",
      },
    ],
  },
};

export function getPackageDetail(cartId: string): PackageDetail | undefined {
  return packageDetails[cartId];
}
