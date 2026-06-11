import type { StaticImageData } from "next/image";
import ishaPhoto from "@/assets/testimonial-isha.webp";
import rahulPhoto from "@/assets/testimonial-rahul.webp";
import priyaPhoto from "@/assets/testimonial-priya.webp";
import arjunPhoto from "@/assets/testimonial-arjun.webp";
import meeraPhoto from "@/assets/testimonial-meera.webp";
import vikramPhoto from "@/assets/testimonial-vikram.webp";

export type Testimonial = {
  id: number;
  name: string;
  handle: string;
  photo: StaticImageData;
  review: string;
  likes: number;
  rating: number;
  datePublished: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Isha Sharma",
    handle: "@travelwithisha",
    photo: ishaPhoto,
    review:
      "Walking through the coffee fields of Chikmagalur as the morning mist lifted was pure magic. The team made every moment special!",
    likes: 234,
    rating: 5,
    datePublished: "2026-03-12",
  },
  {
    id: 2,
    name: "Rahul Menon",
    handle: "@rahul.adventures",
    photo: rahulPhoto,
    review:
      "The jeep safari through the Western Ghats was absolutely thrilling! Professional guides and breathtaking views at every turn.",
    likes: 189,
    rating: 5,
    datePublished: "2026-02-28",
  },
  {
    id: 3,
    name: "Priya Nair",
    handle: "@priya_explores",
    photo: priyaPhoto,
    review:
      "Best travel experience I've ever had. The homestay was cozy, food was authentic, and the sunrise trek was unforgettable.",
    likes: 312,
    rating: 5,
    datePublished: "2026-01-15",
  },
  {
    id: 4,
    name: "Arjun Reddy",
    handle: "@arjun.wanderlust",
    photo: arjunPhoto,
    review:
      "Camping under the stars with the sounds of nature was therapeutic. Trip Chikmagalur knows how to create memories!",
    likes: 156,
    rating: 5,
    datePublished: "2025-12-08",
  },
  {
    id: 5,
    name: "Meera Krishnan",
    handle: "@meera.travels",
    photo: meeraPhoto,
    review:
      "The zipline adventure was the highlight of my trip! Safe, exciting, and the views from up there were absolutely stunning.",
    likes: 278,
    rating: 5,
    datePublished: "2026-04-02",
  },
  {
    id: 6,
    name: "Vikram Singh",
    handle: "@vikram_explorer",
    photo: vikramPhoto,
    review:
      "From the coffee plantation tour to the waterfall trek, everything was perfectly organized. Will definitely come back!",
    likes: 201,
    rating: 5,
    datePublished: "2026-03-20",
  },
];

/** Keep in sync with verified Google Business Profile review count when it grows */
export const AGGREGATE_RATING = {
  ratingValue: 4.9,
  reviewCount: 500,
  bestRating: 5,
  worstRating: 1,
} as const;
