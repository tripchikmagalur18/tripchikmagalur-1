"use client";

import { Plus, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/context/CartContext";
import ziplineImg from "@/assets/activity-zipline.jpg";
import atvImg from "@/assets/activity-atv.jpg";
import jeepImg from "@/assets/activity-jeep.jpg";
import trekImg from "@/assets/activity-trek.jpg";
import campingImg from "@/assets/activity-camping.jpg";
import sightseeingImg from "@/assets/activity-sightseeing.jpg";
import { imageSrc } from "@/lib/image-src";

type Activity = {
  id: string;
  title: string;
  image: string;
  description: string;
  price?: number;
};

const activities: Activity[] = [
  {
    id: "act-zipline",
    title: "Ziplining",
    image: imageSrc(ziplineImg),
    description: "Soar through the forest canopy",
    price: 299,
  },
  {
    id: "act-atv",
    title: "ATV Bikes",
    image: imageSrc(atvImg),
    description: "Off-road adventure thrills",
    price: 299,
  },
  {
    id: "act-jeep",
    title: "Jeep Adventure",
    image: imageSrc(jeepImg),
    description: "Explore misty mountain trails",
    price: 349,
  },
  {
    id: "act-trek",
    title: "Trekking",
    image: imageSrc(trekImg),
    description: "Conquer scenic peaks",
  },
  {
    id: "act-camping",
    title: "Fire Camping",
    image: imageSrc(campingImg),
    description: "Starlit nights in nature",
  },
  {
    id: "act-sightseeing",
    title: "Sight Visiting",
    image: imageSrc(sightseeingImg),
    description: "Discover hidden waterfalls",
  },
];

const ActivitiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { addItem, items } = useCart();
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(activities.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const cards = document.querySelectorAll('.activity-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="activities" className="py-24 bg-background relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - SEO Optimized */}
        <div className="text-center mb-16">
          <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em] animate-fade-up">
            Adventure Awaits
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4 animate-fade-up stagger-1">
            Things to Do in Chikmagalur
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg animate-fade-up stagger-2">
            Explore adventure activities in Chikmagalur - trekking, ziplining, ATV rides, 
            jeep safari & more for an unforgettable Western Ghats experience.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => {
            const inCart = items.some((i) => i.id === activity.id);
            return (
              <div
                key={activity.title}
                data-index={index}
                className={`activity-card group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/5] relative overflow-hidden rounded-3xl">
                  <img
                    src={activity.image}
                    alt={`${activity.title} activity in Chikmagalur - adventure tourism`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-3xl" />

                  {/* Price badge — visible on hover (top-right) */}
                  {activity.price !== undefined && (
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-sunset text-white text-[10px] md:text-xs font-bold shadow-lg">
                        ₹{activity.price}/P
                      </span>
                    </div>
                  )}
                  
                  {/* Content Overlay - positioned at bottom-left corner on mobile */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 text-white">
                    <h3 className="text-sm md:text-2xl font-display font-bold mb-0.5 md:mb-1">{activity.title}</h3>
                    <p className="text-white/70 text-[10px] md:text-sm mb-2 md:mb-4 line-clamp-1 md:line-clamp-none">
                      {activity.description}
                    </p>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <button
                        type="button"
                        disabled={inCart || activity.price === undefined}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (activity.price === undefined) return;
                          addItem({
                            id: activity.id,
                            name: activity.title,
                            price: activity.price,
                            perPerson: true,
                            quantity: 1,
                          });
                        }}
                        className="inline-flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1.5 md:py-2.5 rounded-full glass-button text-white text-[10px] md:text-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {inCart ? (
                          <>
                            <Check className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="hidden md:inline">Added</span>
                            <span className="md:hidden">✓</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="hidden md:inline">Add to Cart</span>
                            <span className="md:hidden">Add</span>
                          </>
                        )}
                      </button>
                      {activity.price !== undefined && (
                        <span className="text-white font-bold text-xs md:text-sm">
                          ₹{activity.price}/P
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
