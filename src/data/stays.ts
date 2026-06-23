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

import p2PoolForest from "@/assets/resort-p2/pool-forest.webp";
import p2PoolSunny from "@/assets/resort-p2/pool-sunny.webp";
import p2ScenicTerraces from "@/assets/resort-p2/scenic-terraces.webp";
import p2ExteriorBlueStairs from "@/assets/resort-p2/exterior-blue-stairs.webp";
import p2ExteriorOrangeBrick from "@/assets/resort-p2/exterior-orange-brick.webp";
import p2ExteriorWoodFacade from "@/assets/resort-p2/exterior-wood-facade.webp";
import p2RoomTwinRed from "@/assets/resort-p2/room-twin-red-ceiling.webp";
import p2RoomTwinGreen from "@/assets/resort-p2/room-twin-green-ceiling.webp";
import p2RoomFamilyLed from "@/assets/resort-p2/room-family-led-ceiling.webp";
import p2RoomFamilyYellow from "@/assets/resort-p2/room-family-yellow-wall.webp";
import p2RoomFamilyPink from "@/assets/resort-p2/room-family-pink-ceiling.webp";
import p2RoomWardrobe from "@/assets/resort-p2/room-wardrobe-mirror.webp";
import p2BathroomWood from "@/assets/resort-p2/bathroom-wood-tiles.webp";
import p2BathroomWood2 from "@/assets/resort-p2/bathroom-wood-tiles-2.webp";

import p3ExteriorNightMain from "@/assets/homestay-p3/exterior-night-main.webp";
import p3ExteriorNightFacade from "@/assets/homestay-p3/exterior-night-facade.webp";
import p3RooftopGazebo from "@/assets/homestay-p3/rooftop-gazebo.webp";
import p3BathroomMarble from "@/assets/homestay-p3/bathroom-marble.webp";
import p3BedroomTvTeal from "@/assets/homestay-p3/bedroom-tv-teal.webp";
import p3StudioKitchenette from "@/assets/homestay-p3/studio-kitchenette.webp";
import p3BedroomGeometricRunner from "@/assets/homestay-p3/bedroom-geometric-runner.webp";
import p3BedroomDoorTeal from "@/assets/homestay-p3/bedroom-door-teal.webp";
import p3RoomLoungeTv from "@/assets/homestay-p3/room-lounge-tv.webp";
import p3LawnGazeboNight from "@/assets/homestay-p3/lawn-gazebo-night.webp";
import p3CourtyardNight from "@/assets/homestay-p3/courtyard-night.webp";
import p3GroundFloorFacade from "@/assets/homestay-p3/ground-floor-facade.webp";

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
export const RESORT_P2_CART_ID = "stay-trip-chikmagalur-resort-p2";
export const VILLA_CART_ID = "stay-trip-chikmagalur-villa";
export const HOMESTAY_CART_ID = "stay-trip-chikmagalur-homestay";
export const HOMESTAY_P3_CART_ID = "stay-trip-chikmagalur-homestay-p3";
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

export const tripChikmagalurResortP2: Stay = {
  id: RESORT_P2_CART_ID,
  slug: "trip-chikmagalur-resort-p2",
  name: "Trip Chikmagalur Resort P2",
  shortName: "Resort P2",
  tagline: "Forest-view resort with pool, spacious rooms & hill-station calm",
  location: "Chikmagalur, Karnataka",
  pricePerPerson: 1800,
  minGuests: 1,
  maxGuests: 12,
  rating: 4.9,
  categoryLabel: "Resort Stay",
  coverImage: p2PoolForest,
  description:
    "Trip Chikmagalur Resort P2 sits in lush Western Ghats greenery — wake to forest views, swim in the resort pool, and unwind in clean, spacious rooms with twin beds, modern bathrooms, and family-friendly layouts. Stone terraces, red-tiled roofs, and a peaceful plantation setting make it ideal for groups, families, and weekend getaways from Bangalore and Mysore.",
  highlights: [
    "Swimming pool surrounded by tall forest trees",
    "Panoramic resort views from stone terraces & lawns",
    "Spacious twin & family rooms with premium linens",
    "Modern wood-pattern tiled bathrooms with hot water",
    "Traditional red-tile architecture with blue-stone stairways",
    "Ideal for families, friends & corporate weekend groups",
  ],
  amenities: [
    "Swimming pool",
    "Spacious AC rooms",
    "Forest & garden views",
    "Hot water bathrooms",
    "Parking",
    "Power backup",
    "Room service on request",
  ],
  gallery: [
    {
      src: p2PoolForest,
      alt: "Trip Chikmagalur Resort P2 swimming pool with forest backdrop and clear blue sky",
      label: "Pool & Forest View",
    },
    {
      src: p2PoolSunny,
      alt: "Resort P2 pool area with red-tiled pavilion and guest cottages in Chikmagalur",
      label: "Pool Area",
    },
    {
      src: p2ScenicTerraces,
      alt: "Scenic stone terraces and cottage surrounded by forest at Trip Chikmagalur Resort P2",
      label: "Resort Grounds",
    },
    {
      src: p2ExteriorBlueStairs,
      alt: "Trip Chikmagalur Resort P2 exterior with blue staircase and cream building in forest setting",
      label: "Exterior",
    },
    {
      src: p2ExteriorOrangeBrick,
      alt: "Resort P2 two-storey building with orange brick walls and blue entrance stairs",
      label: "Building",
    },
    {
      src: p2ExteriorWoodFacade,
      alt: "Resort P2 wood-pattern facade with lawn and fairy lights among tall trees",
      label: "Forest Facade",
    },
    {
      src: p2RoomTwinRed,
      alt: "Twin double beds with towel swan decor and red accent ceiling at Trip Chikmagalur Resort P2",
      label: "Twin Room",
    },
    {
      src: p2RoomTwinGreen,
      alt: "Spacious twin bedroom with green accent ceiling and white linens at Resort P2",
      label: "Double Room",
    },
    {
      src: p2RoomFamilyLed,
      alt: "Family room with two double beds, LED ceiling lighting and TV at Resort P2",
      label: "Family Room",
    },
    {
      src: p2RoomFamilyYellow,
      alt: "Bright family bedroom with yellow accent wall and extra cot at Trip Chikmagalur Resort P2",
      label: "Group Room",
    },
    {
      src: p2RoomFamilyPink,
      alt: "Family suite with pink ceiling feature and twin beds at Resort P2 Chikmagalur",
      label: "Suite",
    },
    {
      src: p2RoomWardrobe,
      alt: "In-room wardrobe with full-length mirror at Trip Chikmagalur Resort P2",
      label: "Wardrobe",
    },
    {
      src: p2BathroomWood,
      alt: "Modern bathroom with wood-pattern wall tiles at Trip Chikmagalur Resort P2",
      label: "Bathroom",
    },
    {
      src: p2BathroomWood2,
      alt: "Clean ensuite bathroom with floral tile borders at Resort P2 Chikmagalur",
      label: "Ensuite",
    },
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

export const tripChikmagalurHomestayP3: Stay = {
  id: HOMESTAY_P3_CART_ID,
  slug: "trip-chikmagalur-homestay-p3",
  name: "Trip Chikmagalur Homestay P3",
  shortName: "Homestay P3",
  tagline: "Modern multi-storey homestay with rooftop gazebo, lawn & clean rooms",
  location: "Chikmagalur, Karnataka",
  pricePerPerson: 799,
  minGuests: 1,
  maxGuests: 8,
  rating: 4.8,
  categoryLabel: "Homestay",
  coverImage: p3ExteriorNightMain,
  description:
    "Trip Chikmagalur Homestay P3 is a clean, modern three-storey property with teal-and-white exteriors, private double rooms, studio units with kitchenettes, and a lit rooftop gazebo over a manicured lawn. Wall-mounted TV, hot-water marble bathrooms, and budget-friendly pricing at ₹799 per person make it ideal for friends, families, and trek groups visiting coffee country.",
  highlights: [
    "Three-storey homestay with balcony rooms on every floor",
    "Rooftop gazebo with string lights & lawn courtyard",
    "Private double bedrooms with TV & fresh white linens",
    "Studio rooms with kitchenette sink & seating area",
    "Modern marble-tile bathrooms with hot water",
    "Ideal for budget groups, students & weekend gangs",
  ],
  amenities: [
    "Private & studio rooms",
    "Kitchenette (select rooms)",
    "Wall-mounted TV",
    "Hot water bathrooms",
    "Rooftop gazebo & lawn",
    "Parking",
    "Power backup",
  ],
  gallery: [
    {
      src: p3ExteriorNightMain,
      alt: "Trip Chikmagalur Homestay P3 — three-storey modern building lit at night in Chikmagalur",
      label: "Exterior",
    },
    {
      src: p3ExteriorNightFacade,
      alt: "Homestay P3 two-storey facade with balcony, warm lights and private room entrances",
      label: "Building",
    },
    {
      src: p3CourtyardNight,
      alt: "Homestay P3 courtyard with green lawn and illuminated rooftop gazebo at night",
      label: "Courtyard",
    },
    {
      src: p3LawnGazeboNight,
      alt: "Elevated rooftop gazebo with string lights overlooking lawn at Trip Chikmagalur Homestay P3",
      label: "Rooftop Gazebo",
    },
    {
      src: p3RooftopGazebo,
      alt: "Outdoor dining gazebo with warm string lights at Homestay P3 Chikmagalur",
      label: "Outdoor Dining",
    },
    {
      src: p3GroundFloorFacade,
      alt: "Ground floor rooms with checkered walkway and warm exterior lighting at Homestay P3",
      label: "Ground Floor",
    },
    {
      src: p3BedroomTvTeal,
      alt: "Double bedroom with wall TV, teal curtains and white linens at Trip Chikmagalur Homestay P3",
      label: "Bedroom",
    },
    {
      src: p3BedroomGeometricRunner,
      alt: "Clean double room with geometric bed runner at Homestay P3",
      label: "Double Room",
    },
    {
      src: p3BedroomDoorTeal,
      alt: "Bright bedroom with wooden bed frame and teal accent rug at Trip Chikmagalur Homestay P3",
      label: "Private Room",
    },
    {
      src: p3StudioKitchenette,
      alt: "Studio room with kitchenette sink, wardrobe and seating at Homestay P3",
      label: "Studio Room",
    },
    {
      src: p3RoomLoungeTv,
      alt: "Room lounge area with TV, wardrobe and white chairs at Trip Chikmagalur Homestay P3",
      label: "Lounge",
    },
    {
      src: p3BathroomMarble,
      alt: "Modern bathroom with marble-pattern tiles and rainfall shower at Homestay P3",
      label: "Bathroom",
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
  tripChikmagalurResortP2,
  tripChikmagalurVilla,
  tripChikmagalurHomestay,
  tripChikmagalurHomestayP3,
  tripChikmagalurStaySr,
];

export const staySlugs = allStays.map((s) => s.slug);

export function getStayBySlug(slug: string): Stay | undefined {
  return allStays.find((s) => s.slug === slug);
}

/** @deprecated Use tripChikmagalurResort from @/data/stays */
export const palmGroveResort = tripChikmagalurResort;
