import heroPool from "@/assets/resort/hero-pool.png";
import villaExterior from "@/assets/resort/villa-exterior.png";
import roomTriple from "@/assets/resort/room-triple.png";
import roomSuite from "@/assets/resort/room-suite.png";
import roomDouble from "@/assets/resort/room-double.png";
import roomDorm from "@/assets/resort/room-dorm.png";
import gameRoom from "@/assets/resort/game-room.png";
import playground from "@/assets/resort/playground.png";
import playgroundSwings from "@/assets/resort/playground-swings.png";
import foosball from "@/assets/resort/foosball.png";
import photoSpot from "@/assets/resort/photo-spot.png";
import cottage from "@/assets/resort/cottage.png";
import type { StaticImageData } from "next/image";

export const RESORT_CART_ID = "stay-trip-chikmagalur-resort";

export type ResortGalleryImage = {
  src: StaticImageData;
  alt: string;
  label: string;
};

export const palmGroveResort = {
  id: RESORT_CART_ID,
  name: "Trip Chikmagalur Resort",
  tagline: "Tropical stay in the heart of Chikmagalur",
  location: "Chikmagalur, Karnataka",
  pricePerPerson: 1500,
  minGuests: 1,
  maxGuests: 12,
  rating: 4.9,
  heroImage: heroPool,
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
  ] satisfies ResortGalleryImage[],
};
