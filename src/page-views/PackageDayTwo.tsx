"use client";

import Link from "next/link";
import { AspectImage } from "@/components/AspectImage";
import { PackageOfferPrice } from "@/components/PackageOfferPrice";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/page-json-ld";
import { buildPackageDaySchemas } from "@/lib/package-page-schema";
import { ArrowLeft, MapPin, Clock, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

import devirammaTemple from "@/assets/places/deviramma-temple.webp";
import kalhattiFalls from "@/assets/places/kalhatti-falls.webp";
import kemmanagundi from "@/assets/places/kemmanagundi.webp";
import rajBhavan from "@/assets/places/raj-bhavan.webp";
import hebbeFalls from "@/assets/places/hebbe-falls.webp";

import { WHATSAPP_LINK } from "@/lib/whatsapp";

const BookButton = () => {
  const { addItem, items } = useCart();
  const id = "pkg-day-2";
  const inCart = items.some((i) => i.id === id);
  return (
    <button
      onClick={() =>
        addItem({ id, name: "Kemmangundi Package (Day 2)", price: 4499, link: "/package/day-2" })
      }
      disabled={inCart}
      className="inline-flex items-center gap-2 bg-sunset hover:bg-sunset/90 disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full text-lg font-medium transition-all"
    >
      <ShoppingCart className="w-5 h-5" />
      {inCart ? "Added to Cart" : "Add to Cart — ₹4,499/group"}
    </button>
  );
};

const places = [
  {
    name: "Deviramma Temple",
    image: devirammaTemple,
    distance: "20 km from Chikmagalur",
    time: "30 min",
    description: "Deviramma temple is located atop Devigiri hill, open only during Deepavali. Legend says Mysore Palace initiated celebrations based on lighting from this hill.",
  },
  {
    name: "Kalhatti Falls",
    image: kalhattiFalls,
    distance: "58 km from Chikmagalur",
    time: "1 hr 28 min",
    description: "Kalhatti Falls is a stunning waterfall on the headwaters of the river, located 10 km from Kemmanagundi hill station in Tarikere Taluk.",
  },
  {
    name: "Kemmanagundi",
    image: kemmanagundi,
    distance: "62.2 km from Chikmagalur",
    time: "1 hr 34 min",
    description: "Known for vibrant night sky vistas from the Sunset View Point, Kemmanagundi is a tranquil hill station surrounded by lush forest.",
  },
  {
    name: "Raj Bhavan (Rose Garden)",
    image: rajBhavan,
    distance: "34 km from Chikmagalur",
    time: "54 min",
    description: "A perfect place for spending time with loved ones, featuring beautiful flower gardens. One of the most amazing places to visit in Chikmagalur.",
  },
  {
    name: "Hebbe Falls",
    image: hebbeFalls,
    distance: "65 km from Chikmagalur",
    time: "1 hr 45 min",
    description: "Inside a coffee estate, reachable by walk or four-wheeler. Hebbe Falls gushes down from a height of 551 ft in two spectacular stages.",
  },
];

const PackageDayTwo = () => {
  return (
    <main className="overflow-x-hidden">
      <PageJsonLd
        schema={buildPackageDaySchemas("pkg-day-2")}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Packages", path: "/chikmagalur-tour-packages" },
          { name: "Day 2", path: "/package/day-2" },
        ]}
      />
      <Navbar />
      <section className="pt-28 pb-16 bg-muted/30 min-h-screen">
        <div className="container mx-auto px-4">
          <Link href="/#packages" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Packages
          </Link>
          <div className="mb-12">
            <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em]">Day 2</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2">Kemmangundi Package</h1>
            <p className="text-muted-foreground mt-3 text-lg max-w-2xl">Includes all Day 1 locations plus 5 more incredible destinations on Day 2 — hill stations, waterfalls, and rose gardens.</p>
            <PackageOfferPrice price={4499} size="md" align="start" className="mt-4" />
          </div>

          <p className="text-sm text-sunset font-medium mb-6 bg-sunset/10 inline-block px-4 py-2 rounded-full">✨ Day 1 includes all Day Explorer locations</p>

          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Day 2 Destinations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((place, index) => (
              <div key={place.name} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <AspectImage src={place.image} alt={place.name} className="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sunset text-xs font-bold mb-2">
                    <span className="bg-sunset/10 px-2 py-0.5 rounded-full">Stop {index + 1}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">{place.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{place.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{place.distance}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{place.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <BookButton />
          </div>
        </div>
      </section>
      <Footer />    </main>
  );
};

export default PackageDayTwo;
