"use client";
import { imageSrc } from "@/lib/image-src";

import Link from "next/link";
import { ArrowLeft, Clock, Utensils } from "lucide-react";
import { PageJsonLd } from "@/components/page-json-ld";
import Breadcrumbs from "@/components/Breadcrumbs";
import categoryFood from "@/assets/category-food.webp";
import categoryStays from "@/assets/category-stays.webp";
import sightseeingImg from "@/assets/activity-sightseeing.webp";

import { WHATSAPP_LINK } from "@/lib/whatsapp";

const foodExperiences = [
  {
    title: "Malnad Thali Experience",
    image: imageSrc(categoryFood),
    description: "Savor the authentic Malnad cuisine with a traditional thali featuring local delicacies like Akki Rotti, Neer Dosa, and Pandi Curry.",
    type: "Traditional Cuisine",
    duration: "1.5 hours",
  },
  {
    title: "Coffee Estate Tour & Tasting",
    image: imageSrc(categoryStays),
    description: "Visit local coffee plantations, learn about coffee processing, and enjoy freshly brewed estate coffee.",
    type: "Coffee Experience",
    duration: "3 hours",
  },
  {
    title: "Farm-to-Table Dining",
    image: imageSrc(sightseeingImg),
    description: "Experience organic farm dining with vegetables picked fresh from the garden and cooked in traditional style.",
    type: "Organic Dining",
    duration: "2 hours",
  },
  {
    title: "Street Food Trail",
    image: imageSrc(categoryFood),
    description: "Explore the local street food scene with classics like Mangalore Buns, Goli Baje, and fresh coconut water.",
    type: "Street Food",
    duration: "2.5 hours",
  },
  {
    title: "Spice Plantation Visit",
    image: imageSrc(categoryStays),
    description: "Tour aromatic spice gardens, learn about cardamom, pepper, and other spices, with a traditional spice-infused lunch.",
    type: "Spice Experience",
    duration: "4 hours",
  },
  {
    title: "Kodava Cuisine Workshop",
    image: imageSrc(sightseeingImg),
    description: "Hands-on cooking class learning to prepare authentic Kodava dishes like Pork Curry and Kadambuttu.",
    type: "Cooking Class",
    duration: "3 hours",
  },
];

const FoodPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <PageJsonLd breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Food", path: "/food" },
        ]} />
      {/* Header */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src={imageSrc(categoryFood)}
          alt="Food in Chikmagalur"
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
            Taste & Savor
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
            Food Experiences
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            Discover the rich culinary heritage of Malnad with authentic local cuisine and coffee.
          </p>
        </div>
      </div>

      {/* Food Experiences Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Food", path: "/food" },
            ]}
            className="mb-8"
          />
          <div className="grid grid-cols-1 gap-4">
            {foodExperiences.map((food, index) => (
              <div
                key={food.title}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border animate-fade-up flex h-28 md:h-36"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Image left */}
                <div className="w-28 md:w-40 shrink-0 overflow-hidden">
                  <img
                    src={food.image}
                    alt={food.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content right */}
                <div className="flex flex-col justify-center flex-1 p-3 md:p-4 min-w-0">
                  <span className="text-sunset text-[10px] md:text-xs font-medium flex items-center gap-1 mb-1">
                    <Utensils className="w-3 h-3" />
                    {food.type}
                  </span>
                  <h3 className="text-sm md:text-lg font-display font-bold text-foreground truncate">{food.title}</h3>
                  <span className="text-muted-foreground text-[10px] md:text-xs flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" />
                    {food.duration}
                  </span>
                </div>

                {/* CTA */}
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

export default FoodPage;
