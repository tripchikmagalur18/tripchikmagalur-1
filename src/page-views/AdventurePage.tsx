"use client";
import { imageSrc } from "@/lib/image-src";

import Link from "next/link";
import { ArrowLeft, Clock, Mountain } from "lucide-react";
import { PageJsonLd } from "@/components/page-json-ld";
import Breadcrumbs from "@/components/Breadcrumbs";
import ziplineImg from "@/assets/activity-zipline.webp";
import atvImg from "@/assets/activity-atv.webp";
import jeepImg from "@/assets/activity-jeep.webp";
import trekImg from "@/assets/activity-trek.webp";
import campingImg from "@/assets/activity-camping.webp";
import sightseeingImg from "@/assets/activity-sightseeing.webp";

import { WHATSAPP_LINK } from "@/lib/whatsapp";

const activities = [
  {
    title: "Ziplining",
    image: imageSrc(ziplineImg),
    description: "Soar through the forest canopy on an exhilarating zipline adventure across the Western Ghats.",
    duration: "2-3 hours",
    difficulty: "Moderate",
  },
  {
    title: "ATV Bikes",
    image: imageSrc(atvImg),
    description: "Experience the thrill of off-road riding through rugged mountain terrain and coffee plantations.",
    duration: "1-2 hours",
    difficulty: "Easy",
  },
  {
    title: "Jeep Adventure",
    image: imageSrc(jeepImg),
    description: "Explore misty mountain trails and hidden waterfalls in a rugged 4x4 jeep safari.",
    duration: "4-5 hours",
    difficulty: "Easy",
  },
  {
    title: "Trekking",
    image: imageSrc(trekImg),
    description: "Conquer scenic peaks like Mullayanagiri and Kudremukh with guided trekking expeditions.",
    duration: "Full day",
    difficulty: "Challenging",
  },
  {
    title: "Fire Camping",
    image: imageSrc(campingImg),
    description: "Spend starlit nights around a bonfire in nature, surrounded by the sounds of the forest.",
    duration: "Overnight",
    difficulty: "Easy",
  },
  {
    title: "Sight Visiting",
    image: imageSrc(sightseeingImg),
    description: "Discover hidden waterfalls, ancient temples, and breathtaking viewpoints across Chikmagalur.",
    duration: "Half day",
    difficulty: "Easy",
  },
];

const AdventurePage = () => {
  return (
    <main className="min-h-screen bg-background">
      <PageJsonLd breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Adventure", path: "/adventure" },
        ]} />
      {/* Header */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src={imageSrc(ziplineImg)}
          alt="Adventure in Chikmagalur"
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
            Explore Adventures
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
            Adventure Activities
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            Experience the thrill of adventure with our carefully curated activities in the Western Ghats.
          </p>
        </div>
      </div>

      {/* Activities Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Adventure", path: "/adventure" },
            ]}
            className="mb-8"
          />
          <div className="grid grid-cols-1 gap-4">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border animate-fade-up flex h-28 md:h-36"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-28 md:w-40 shrink-0 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col justify-center flex-1 p-3 md:p-4 min-w-0">
                  <span className="text-sunset text-[10px] md:text-xs font-medium flex items-center gap-1 mb-1">
                    <Mountain className="w-3 h-3" />
                    {activity.difficulty}
                  </span>
                  <h3 className="text-sm md:text-lg font-display font-bold text-foreground truncate">{activity.title}</h3>
                  <span className="text-muted-foreground text-[10px] md:text-xs flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" />
                    {activity.duration}
                  </span>
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

export default AdventurePage;
