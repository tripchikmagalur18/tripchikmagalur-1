"use client";
import { imageSrc } from "@/lib/image-src";

import Link from "next/link";
import { Sparkles, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

import heroAdventure from "@/assets/hero-adventure.webp";
import heroChikmagalur from "@/assets/hero-chikmagalur.webp";
import heroMist from "@/assets/hero-mist.webp";

const packages = [
  {
    name: "Mullayangiri Package",
    duration: "Day 1",
    price: "₹3,499",
    popular: true,
    image: imageSrc(heroAdventure),
    link: "/package/day-1",
    highlights: [
      "Siri Nature Roost Coffee Point",
      "Jhari (Butter) Falls Jeep Ride",
      "Mullayangiri — Karnataka's Highest Peak",
      "Seethalayyangiri & Honnamana Halla Falls",
      "Baba Budangiri & Manikyadhara Falls",
      "Z Point Sunset & Zip Lining",
    ],
  },
  {
    name: "Kemmangundi Package",
    duration: "Day 2",
    price: "₹4,499",
    image: imageSrc(heroChikmagalur),
    link: "/package/day-2",
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
    duration: "Day 3",
    price: "₹3,999",
    image: imageSrc(heroMist),
    link: "/package/day-3",
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
    duration: "Day 4",
    price: "₹3,499",
    image: imageSrc(heroChikmagalur),
    link: "/package/day-4",
    highlights: [
      "Belur Chennakeshava Temple",
      "Halebidu Hoysaleshwara Temple",
      "Hiremagalur Kodanda Rama Temple",
      "Heritage & Hoysala Architecture",
    ],
  },
  {
    name: "Sringeri & Trek Package",
    duration: "Day 5",
    price: "₹5,999",
    image: imageSrc(heroMist),
    link: "/package/day-5",
    highlights: [
      "Siddhartha Hegde Park",
      "Devaramane Betta Viewpoint",
      "Abbi Waterfalls",
      "Ethina Bhuja Trek",
      "Scenic Mudigere Range",
    ],
  },
];

const PackagesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    const el = document.getElementById("packages");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % packages.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + packages.length) % packages.length);
  }, []);

  // Swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    // Normalize diff for wrap-around
    const normalizedDiff =
      diff > 1 ? diff - packages.length : diff < -1 ? diff + packages.length : diff;

    if (normalizedDiff === 0) {
      // Center / active card
      return {
        transform: "translateX(0) scale(1)",
        zIndex: 10,
        opacity: 1,
        filter: "none",
      };
    } else if (normalizedDiff === -1) {
      // Left card
      return {
        transform: "translateX(-65%) scale(0.8)",
        zIndex: 5,
        opacity: 0.6,
        filter: "blur(1px)",
      };
    } else if (normalizedDiff === 1) {
      // Right card
      return {
        transform: "translateX(65%) scale(0.8)",
        zIndex: 5,
        opacity: 0.6,
        filter: "blur(1px)",
      };
    }
    return { transform: "translateX(0) scale(0.6)", zIndex: 0, opacity: 0 };
  };

  return (
    <section id="packages" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em] inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Choose Your Adventure
            <Sparkles className="w-4 h-4" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4">
            Chikmagalur Tour Packages
          </h2>
        </div>

        {/* Carousel */}
        <div
          className={`relative flex items-center justify-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ height: "520px", maxWidth: "600px", margin: "0 auto" }}
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStart === null) return;
            const diff = touchStart - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
              diff > 0 ? goNext() : goPrev();
            }
            setTouchStart(null);
          }}
        >
          {packages.map((pkg, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={pkg.name}
                className="absolute w-[260px] md:w-[280px] transition-all duration-500 ease-out"
                style={{
                  ...style,
                  transformOrigin: "center center",
                }}
              >
                <div
                  className={`bg-card rounded-3xl border overflow-hidden flex flex-col items-center text-center transition-shadow duration-300 ${
                    isActive
                      ? "border-sunset/40 shadow-2xl shadow-sunset/15"
                      : "border-border shadow-lg"
                  }`}
                >
                  {/* Popular badge */}
                  {pkg.popular && isActive && (
                    <div className="w-full flex justify-center -mb-3 relative z-10 pt-3">
                      <span className="bg-sunset text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-sunset/30">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="w-full px-4 pt-4">
                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={`${pkg.name} - Chikmagalur tour`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 pb-6 flex flex-col items-center w-full">
                    <h3 className="text-lg font-display font-bold text-foreground mb-0.5">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground text-xs mb-3">{pkg.duration}</p>

                    {/* Highlights */}
                    <ul className="text-left w-full space-y-1.5 mb-4 px-1">
                      {pkg.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="text-sunset mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="mb-1">
                      <span className="text-2xl font-bold text-sunset">{pkg.price}</span>
                      <span className="text-muted-foreground text-xs ml-1">/group</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground/80 italic mb-4">
                      *Terms and conditions apply on places
                    </p>

                    {/* CTA */}
                    <Link
                      href={pkg.link}
                      className="w-full inline-flex items-center justify-center gap-2 backdrop-blur-md bg-sunset/20 border border-sunset/30 text-sunset font-semibold py-2.5 rounded-full text-sm transition-all duration-300 hover:bg-sunset/30 hover:border-sunset/50 hover:shadow-lg hover:shadow-sunset/20 hover:scale-[1.03] active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation dots + arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={goPrev}
            className="w-9 h-9 rounded-full border border-border/50 backdrop-blur-md bg-card/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-sunset/40 hover:bg-sunset/10 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Previous package"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {packages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-sunset w-6" : "bg-border hover:bg-muted-foreground/40"
                }`}
                aria-label={`Go to package ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={goNext}
            className="w-9 h-9 rounded-full border border-border/50 backdrop-blur-md bg-card/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-sunset/40 hover:bg-sunset/10 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Next package"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
