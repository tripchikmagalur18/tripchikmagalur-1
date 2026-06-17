"use client";

import Link from "next/link";
import type { StaticImageData } from "next/image";
import { ArrowLeft, ArrowRight, Clock, Mountain } from "lucide-react";
import { PageJsonLd } from "@/components/page-json-ld";
import Breadcrumbs from "@/components/Breadcrumbs";
import { LinkedText } from "@/components/LinkedText";
import { AppImage } from "@/components/AppImage";
import ziplineImg from "@/assets/activity-zipline.webp";
import atvImg from "@/assets/activity-atv.webp";
import jeepImg from "@/assets/activity-jeep.webp";
import trekImg from "@/assets/activity-trek.webp";
import campingImg from "@/assets/activity-camping.webp";
import sightseeingImg from "@/assets/activity-sightseeing.webp";

import { WHATSAPP_LINK } from "@/lib/whatsapp";
import { adventurePageIntro, adventureRelatedLinks } from "@/lib/contextual-links";

const activities: {
  title: string;
  image: StaticImageData;
  description: string;
  duration: string;
  difficulty: string;
}[] = [
  {
    title: "Ziplining",
    image: ziplineImg,
    description: "Soar through the forest canopy on an exhilarating zipline adventure across the Western Ghats.",
    duration: "2-3 hours",
    difficulty: "Moderate",
  },
  {
    title: "ATV Bikes",
    image: atvImg,
    description: "Experience the thrill of off-road riding through rugged mountain terrain and coffee plantations.",
    duration: "1-2 hours",
    difficulty: "Easy",
  },
  {
    title: "Jeep Adventure",
    image: jeepImg,
    description:
      "Explore misty mountain trails and hidden waterfalls — popular routes include [Hebbe Falls](/places/hebbe-falls) and the [Kemmangundi tour package](/kemmangundi-tour-package).",
    duration: "4-5 hours",
    difficulty: "Easy",
  },
  {
    title: "Trekking",
    image: trekImg,
    description:
      "Conquer scenic peaks with our [Mullayanagiri trek guide](/places/mullayanagiri-trek) and [Kudremukh trek guide](/places/kudremukh-national-park) on guided full-day expeditions.",
    duration: "Full day",
    difficulty: "Challenging",
  },
  {
    title: "Fire Camping",
    image: campingImg,
    description: "Spend starlit nights around a bonfire in nature, surrounded by the sounds of the forest.",
    duration: "Overnight",
    difficulty: "Easy",
  },
  {
    title: "Sight Visiting",
    image: sightseeingImg,
    description:
      "Discover hidden waterfalls, temples, and viewpoints — browse [places to visit](/places) or add a [Muthodi safari package](/muthodi-safari-package).",
    duration: "Half day",
    difficulty: "Easy",
  },
];

const AdventurePage = () => {
  return (
    <main className="min-h-screen bg-background">
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Adventure", path: "/adventure" },
        ]}
      />
      <div className="relative h-[40vh] overflow-hidden">
        <AppImage
          src={ziplineImg}
          alt="Ziplining adventure in Chikmagalur Western Ghats"
          fill
          sizes="100vw"
          priority
          className="object-cover"
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

          <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em] mb-4">Explore Adventures</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">Adventure Activities</h1>
          <p className="text-white/70 mt-4 max-w-2xl text-lg">
            Experience the thrill of adventure with our carefully curated activities in the Western Ghats.
          </p>
        </div>
      </div>

      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Adventure", path: "/adventure" },
            ]}
            className="mb-8"
          />
          <p className="text-foreground/90 leading-relaxed mb-10 max-w-3xl">
            <LinkedText text={adventurePageIntro} />
          </p>
          <div className="grid grid-cols-1 gap-4">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border animate-fade-up flex h-28 md:h-36"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative w-28 md:w-40 shrink-0 overflow-hidden">
                  <AppImage
                    src={activity.image}
                    alt={`${activity.title} — adventure activity in Chikmagalur`}
                    fill
                    sizes="160px"
                    className="transition-transform duration-700 group-hover:scale-110"
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
                  <p className="text-muted-foreground text-xs mt-1 line-clamp-2 hidden md:block">
                    <LinkedText text={activity.description} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 border-t border-border/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
            Related packages & guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {adventureRelatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="glass rounded-xl px-5 py-4 flex items-center justify-between hover:scale-[1.02] transition-all"
              >
                <span className="font-medium text-foreground text-sm">{link.label}</span>
                <ArrowRight className="w-4 h-4 text-sunset shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sunset text-white font-medium hover:bg-sunset/90 transition-colors"
        >
          Book an Adventure
        </a>
      </section>
    </main>
  );
};

export default AdventurePage;
