import type { StaticImageData } from "next/image";

import heroPool from "@/assets/resort/hero-pool.webp";
import villaExterior from "@/assets/resort/villa-exterior.webp";
import roomTriple from "@/assets/resort/room-triple.webp";
import roomSuite from "@/assets/resort/room-suite.webp";
import roomDouble from "@/assets/resort/room-double.webp";
import roomDorm from "@/assets/resort/room-dorm.webp";
import gameRoom from "@/assets/resort/game-room.webp";
import playground from "@/assets/resort/playground.webp";
import playgroundSwings from "@/assets/resort/playground-swings.webp";
import foosball from "@/assets/resort/foosball.webp";
import photoSpot from "@/assets/resort/photo-spot.webp";
import cottage from "@/assets/resort/cottage.webp";

import villa01 from "@/assets/villa/villa-01.webp";
import villa03 from "@/assets/villa/villa-03.webp";
import villa04 from "@/assets/villa/villa-04.webp";
import villa05 from "@/assets/villa/villa-05.webp";
import villa06 from "@/assets/villa/villa-06.webp";
import villa07 from "@/assets/villa/villa-07.webp";
import villa08 from "@/assets/villa/villa-08.webp";
import villa09 from "@/assets/villa/villa-09.webp";
import villa10 from "@/assets/villa/villa-10.webp";
import villa11 from "@/assets/villa/villa-11.webp";
import villa12 from "@/assets/villa/villa-12.webp";
import villa13 from "@/assets/villa/villa-13.webp";
import villa14 from "@/assets/villa/villa-14.webp";
import villa15 from "@/assets/villa/villa-15.webp";

import homestayCover from "@/assets/homestay/double-room-02.webp";
import homestayDorm01 from "@/assets/homestay/group-dorm-01.webp";
import homestayDorm02 from "@/assets/homestay/group-dorm-02.webp";
import homestayDorm03 from "@/assets/homestay/group-dorm-03.webp";
import homestayDouble01 from "@/assets/homestay/double-room-01.webp";
import homestayDouble02 from "@/assets/homestay/double-room-02.webp";
import homestayDouble03 from "@/assets/homestay/double-room-03.webp";
import homestayDouble04 from "@/assets/homestay/double-room-04.webp";

import staySrCover from "@/assets/stay-sr/exterior.webp";
import staySrBalcony from "@/assets/stay-sr/balcony-egg-chair.webp";
import staySrBedroomWindow from "@/assets/stay-sr/bedroom-window.webp";
import staySrBedroomYellow from "@/assets/stay-sr/bedroom-yellow.webp";
import staySrTwinRoom from "@/assets/stay-sr/twin-room.webp";
import staySrBedDetail from "@/assets/stay-sr/bed-detail.webp";
import staySrCommonArea from "@/assets/stay-sr/common-area.webp";
import staySrBathroomVanity from "@/assets/stay-sr/bathroom-vanity.webp";
import staySrBathroomBlue from "@/assets/stay-sr/bathroom-blue.webp";

export type StayGalleryImage = {
  src: StaticImageData;
  alt: string;
  label: string;
};

export type Stay = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  location: string;
  pricePerPerson: number;
  minGuests: number;
  maxGuests: number;
  rating: number;
  categoryLabel: string;
  coverImage: StaticImageData;
  description: string;
  highlights: string[];
  amenities: string[];
  gallery: StayGalleryImage[];
};

export const RESORT_CART_ID = "stay-trip-chikmagalur-resort";
export const VILLA_CART_ID = "stay-trip-chikmagalur-villa";
export const HOMESTAY_CART_ID = "stay-trip-chikmagalur-homestay";
export const STAY_SR_CART_ID = "stay-trip-chikmagalur-stay-sr";

export const tripChikmagalurResort: Stay = {
  id: RESORT_CART_ID,
  slug: "trip-chikmagalur-resort",
  name: "Trip Chikmagalur Resort",
  shortName: "Resort",
  tagline: "Tropical stay in the heart of Chikmagalur",
  location: "Chikmagalur, Karnataka",
  pricePerPerson: 1500,
  minGuests: 1,
  maxGuests: 12,
  rating: 4.9,
  categoryLabel: "Resort Stay",
  coverImage: heroPool,
  description:
    "Wake up surrounded by towering palm trees, take a dip in the pool, and unwind in clean, modern rooms. Trip Chikmagalur Resort is a family-friendly retreat with villas, a game room, playground, and plenty of space for groups.",
  highlights: [
    "Swimming pool with villa views",
    "Spacious AC rooms & group dormitory",
    "Indoor game room — pool, carrom & foosball",
    "Kids playground & outdoor swings",
    "Photo spot with vintage scooter pergola",
    "Private cottages amid lush greenery",
  ],
  amenities: [
    "Swimming pool",
    "AC rooms",
    "Balcony & garden views",
    "Indoor games",
    "Children's playground",
    "Parking",
    "Power backup",
    "Room service on request",
  ],
  gallery: [
    { src: heroPool, alt: "Resort swimming pool with palm trees", label: "Pool" },
    { src: villaExterior, alt: "Two-story resort villa exterior", label: "Villa" },
    { src: roomSuite, alt: "Spacious suite with balcony access", label: "Suite" },
    { src: roomTriple, alt: "Triple room with double and single beds", label: "Triple Room" },
    { src: roomDouble, alt: "Double bedroom with wardrobe", label: "Double Room" },
    { src: cottage, alt: "Private cottage with porch", label: "Cottage" },
    { src: gameRoom, alt: "Indoor game room with pool table", label: "Game Room" },
    { src: foosball, alt: "Foosball table in recreation area", label: "Foosball" },
    { src: playground, alt: "Colourful outdoor playground", label: "Playground" },
    { src: playgroundSwings, alt: "Garden swings under palm trees", label: "Garden" },
    { src: photoSpot, alt: "Vintage scooter photo spot under pergola", label: "Photo Spot" },
    { src: roomDorm, alt: "Group dormitory-style room", label: "Group Stay" },
  ],
};

export const tripChikmagalurVilla: Stay = {
  id: VILLA_CART_ID,
  slug: "trip-chikmagalur-villa",
  name: "Trip Chikmagalur Villa",
  shortName: "Villa",
  tagline: "Private villa with living, kitchen & family spaces",
  location: "Chikmagalur, Karnataka",
  pricePerPerson: 1200,
  minGuests: 1,
  maxGuests: 10,
  rating: 4.8,
  categoryLabel: "Private Villa",
  coverImage: villa08,
  description:
    "A fully furnished private villa in Chikmagalur — perfect for families and groups. Enjoy spacious bedrooms, a modern kitchen, cozy living areas, and warm wooden interiors throughout.",
  highlights: [
    "Entire villa for your group",
    "Multiple spacious bedrooms",
    "Fully equipped kitchen & dining",
    "Living room with entertainment unit",
    "Indoor garden & wooden staircase",
    "Work desk & Wi‑Fi friendly spaces",
  ],
  amenities: [
    "Full kitchen",
    "Spacious bedrooms",
    "Living & dining area",
    "Hot water bathrooms",
    "Parking",
    "Power backup",
    "Private entrance",
  ],
  gallery: [
    { src: villa08, alt: "Trip Chikmagalur Villa exterior with yellow gate and modern facade", label: "Exterior" },
    { src: villa15, alt: "Villa entrance porch with wicker swing chair and stone flooring", label: "Entrance" },
    { src: villa13, alt: "Spacious living room with leather sofas and entertainment unit", label: "Living Room" },
    { src: villa04, alt: "Coffee and reading nook with Chikmagalur coffee", label: "Lounge" },
    { src: villa11, alt: "Cozy bedroom with wooden headboard and warm lighting", label: "Bedroom" },
    { src: villa12, alt: "Bedroom with white linens and peach accent walls", label: "Bedroom 2" },
    { src: villa09, alt: "Guest bedroom with wooden furniture and natural light", label: "Bedroom 3" },
    { src: villa06, alt: "Dining area with wooden table and red cushioned chairs", label: "Dining" },
    { src: villa07, alt: "Dining space with wooden staircase and indoor plants", label: "Dining & Stairs" },
    { src: villa01, alt: "Fully equipped kitchen with red range hood and gas stove", label: "Kitchen" },
    { src: villa10, alt: "Kitchen with induction cooktop and cookware", label: "Kitchen 2" },
    { src: villa05, alt: "Home office desk with books and laptop", label: "Work Space" },
    { src: villa03, alt: "Upper floor hallway with wooden railings", label: "Hallway" },
    { src: villa14, alt: "Indoor garden atrium with plants and wooden staircase", label: "Indoor Garden" },
  ],
};

export const tripChikmagalurHomestay: Stay = {
  id: HOMESTAY_CART_ID,
  slug: "trip-chikmagalur-homestay",
  name: "Trip Chikmagalur Homestay",
  shortName: "Homestay",
  tagline: "Clean group rooms & private doubles — budget-friendly coffee-country stay",
  location: "Chikmagalur, Karnataka",
  pricePerPerson: 799,
  minGuests: 1,
  maxGuests: 8,
  rating: 4.7,
  categoryLabel: "Homestay",
  coverImage: homestayCover,
  description:
    "Trip Chikmagalur Homestay offers hygienic, well-lit rooms for friends, families, and budget travellers — spacious group dorm-style beds for large parties and private double rooms with wardrobes, balcony access, and ensuite bathrooms. Ceiling fans, polished floors, and a calm residential setting keep your hill-station trip affordable without sacrificing comfort.",
  highlights: [
    "Group dorm rooms with multiple single beds",
    "Private double bedrooms with balcony views",
    "Clean white linens and daily housekeeping",
    "In-room washbasin on select floors",
    "Ceiling fans & bright natural lighting",
    "Ideal for students, trek groups & weekend gangs",
  ],
  amenities: [
    "Group & private rooms",
    "Hot water bathrooms",
    "Ceiling fans",
    "Wardrobe storage",
    "Balcony access (select rooms)",
    "Parking nearby",
    "Power backup",
  ],
  gallery: [
    {
      src: homestayDouble02,
      alt: "Private double bedroom at Trip Chikmagalur Homestay with balcony access and white linens",
      label: "Double Room",
    },
    {
      src: homestayDouble01,
      alt: "Double bed room with wooden furniture and garden view at Trip Chikmagalur Homestay",
      label: "Balcony Room",
    },
    {
      src: homestayDouble04,
      alt: "Bright double bedroom with dark wood headboard at Trip Chikmagalur Homestay",
      label: "Bedroom",
    },
    {
      src: homestayDouble03,
      alt: "Minimal double room with wardrobe at Trip Chikmagalur Homestay",
      label: "Private Room",
    },
    {
      src: homestayDorm01,
      alt: "Group dormitory room with six single beds at Trip Chikmagalur Homestay",
      label: "Group Stay",
    },
    {
      src: homestayDorm02,
      alt: "Spacious group accommodation with multiple beds and large windows at Trip Chikmagalur Homestay",
      label: "Group Room",
    },
    {
      src: homestayDorm03,
      alt: "Large group room with beds, ceiling fans and in-room washbasin at Trip Chikmagalur Homestay",
      label: "Dormitory",
    },
  ],
};

export const tripChikmagalurStaySr: Stay = {
  id: STAY_SR_CART_ID,
  slug: "trip-chikmagalur-stay-sr",
  name: "Trip Chikmagalur Stay SR",
  shortName: "Stay SR",
  tagline: "Modern guest house with balconies, twin rooms & green views",
  location: "Chikmagalur, Karnataka",
  pricePerPerson: 799,
  minGuests: 1,
  maxGuests: 6,
  rating: 4.8,
  categoryLabel: "Guest House",
  coverImage: staySrCover,
  description:
    "Trip Chikmagalur Stay SR is a cheerful three-storey guest house surrounded by trees — peach-and-stone exterior, private balconies with a hanging egg chair, twin and double bedrooms with yellow accent walls, and spotless marble-style bathrooms. Ideal for couples, small families, and friends who want a mid-budget stay with character, hot water, and a relaxed common seating area.",
  highlights: [
    "Three-storey house with balcony & egg swing chair",
    "Twin-share & double bedrooms with bright interiors",
    "Modern bathrooms with hot water",
    "Common seating area with garden views",
    "Quiet residential lane near Chikmagalur town",
    "Parking at the property gate",
  ],
  amenities: [
    "Private & twin bedrooms",
    "Hot water bathrooms",
    "Balcony seating",
    "Common hall",
    "Ceiling fans",
    "Parking",
    "Power backup",
  ],
  gallery: [
    {
      src: staySrCover,
      alt: "Trip Chikmagalur Stay SR exterior — modern three-storey guest house with balconies",
      label: "Exterior",
    },
    {
      src: staySrBalcony,
      alt: "Wicker hanging egg chair on balcony overlooking green trees at Trip Chikmagalur Stay SR",
      label: "Balcony",
    },
    {
      src: staySrBedroomWindow,
      alt: "Double bedroom with yellow accent wall and curtained window at Trip Chikmagalur Stay SR",
      label: "Bedroom",
    },
    {
      src: staySrBedroomYellow,
      alt: "Cozy double room with checkered bedding and yellow wall at Trip Chikmagalur Stay SR",
      label: "Double Room",
    },
    {
      src: staySrTwinRoom,
      alt: "Twin bedroom with floral green bedding at Trip Chikmagalur Stay SR",
      label: "Twin Room",
    },
    {
      src: staySrBedDetail,
      alt: "Neatly made bed with patterned linens at Trip Chikmagalur Stay SR",
      label: "Room Detail",
    },
    {
      src: staySrCommonArea,
      alt: "Common seating area with chairs and large window at Trip Chikmagalur Stay SR",
      label: "Common Area",
    },
    {
      src: staySrBathroomVanity,
      alt: "Modern bathroom with marble tiles and geometric mirror at Trip Chikmagalur Stay SR",
      label: "Bathroom",
    },
    {
      src: staySrBathroomBlue,
      alt: "Bathroom with blue marble-pattern tiles and hot water at Trip Chikmagalur Stay SR",
      label: "Bathroom 2",
    },
  ],
};

export const allStays: Stay[] = [
  tripChikmagalurResort,
  tripChikmagalurVilla,
  tripChikmagalurHomestay,
  tripChikmagalurStaySr,
];

export const staySlugs = allStays.map((s) => s.slug);

export function getStayBySlug(slug: string): Stay | undefined {
  return allStays.find((s) => s.slug === slug);
}

/** @deprecated Use tripChikmagalurResort from @/data/stays */
export const palmGroveResort = tripChikmagalurResort;
