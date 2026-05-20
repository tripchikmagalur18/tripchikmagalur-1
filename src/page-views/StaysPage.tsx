"use client";
import { imageSrc } from "@/lib/image-src";

import Link from "next/link";
import { ArrowLeft, MapPin, Star, Users } from "lucide-react";
import { PageJsonLd } from "@/components/page-json-ld";
import Breadcrumbs from "@/components/Breadcrumbs";
import categoryStays from "@/assets/category-stays.jpg";
import campingImg from "@/assets/activity-camping.jpg";
import sightseeingImg from "@/assets/activity-sightseeing.jpg";

import { WHATSAPP_LINK } from "@/lib/whatsapp";

const stays = [
  {
    title: "Coffee Estate Homestay",
    image: imageSrc(categoryStays),
    description: "Wake up to the aroma of fresh coffee in a cozy homestay nestled within lush coffee plantations.",
    location: "Aldur, Chikmagalur",
    rating: 4.8,
    guests: "2-6 guests",
    price: "₹3,500/night",
  },
  {
    title: "Mountain View Resort",
    image: imageSrc(sightseeingImg),
    description: "Luxury resort with panoramic views of the Western Ghats and world-class amenities.",
    location: "Mullayanagiri Road",
    rating: 4.9,
    guests: "2-4 guests",
    price: "₹6,000/night",
  },
  {
    title: "Forest Camping Site",
    image: imageSrc(campingImg),
    description: "Experience glamping under the stars with comfortable tents and bonfire nights.",
    location: "Baba Budangiri",
    rating: 4.7,
    guests: "2-8 guests",
    price: "₹2,500/night",
  },
  {
    title: "Heritage Bungalow",
    image: imageSrc(categoryStays),
    description: "Stay in a beautifully restored colonial-era bungalow with modern comforts and vintage charm.",
    location: "Chikmagalur Town",
    rating: 4.6,
    guests: "4-10 guests",
    price: "₹8,000/night",
  },
  {
    title: "Riverside Cottage",
    image: imageSrc(sightseeingImg),
    description: "Peaceful cottage by the river with private sit-outs and nature trails.",
    location: "Kemmanagundi",
    rating: 4.8,
    guests: "2-4 guests",
    price: "₹4,000/night",
  },
  {
    title: "Treehouse Retreat",
    image: imageSrc(campingImg),
    description: "Unique treehouse accommodation surrounded by dense forest and wildlife.",
    location: "Kudremukh",
    rating: 4.9,
    guests: "2 guests",
    price: "₹5,500/night",
  },
];

const StaysPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <PageJsonLd breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Stays", path: "/stays" },
        ]} />
      {/* Header */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src={imageSrc(categoryStays)}
          alt="Stays in Chikmagalur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <Link 
            href="/" 
            className="absolute top-6 left-6 inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em] mb-4">
            Rest & Relax
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
            Stays & Homestays
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            Find your perfect retreat among coffee plantations, mountains, and forests.
          </p>
        </div>
      </div>

      {/* Stays Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Stays", path: "/stays" },
            ]}
            className="mb-8"
          />
          <div className="grid grid-cols-1 gap-4">
            {stays.map((stay, index) => (
              <div
                key={stay.title}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border animate-fade-up flex h-28 md:h-36"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-28 md:w-40 shrink-0 overflow-hidden relative">
                  <img
                    src={stay.image}
                    alt={stay.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-2 left-2 flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-[10px]">
                    <Star className="w-3 h-3 fill-sunset text-sunset" />
                    {stay.rating}
                  </div>
                </div>

                <div className="flex flex-col justify-center flex-1 p-3 md:p-4 min-w-0">
                  <span className="text-muted-foreground text-[10px] md:text-xs flex items-center gap-1 mb-1">
                    <MapPin className="w-3 h-3" />
                    {stay.location}
                  </span>
                  <h3 className="text-sm md:text-lg font-display font-bold text-foreground truncate">{stay.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] md:text-xs text-muted-foreground flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {stay.guests}
                    </span>
                    <span className="text-sunset text-xs md:text-sm font-bold">{stay.price}</span>
                  </div>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center shrink-0 mr-3 md:mr-4 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-sunset text-white text-[10px] md:text-sm font-medium hover:bg-sunset/90 transition-colors"
                >
                  Book
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default StaysPage;
