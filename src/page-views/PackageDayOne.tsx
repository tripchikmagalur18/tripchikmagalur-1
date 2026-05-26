"use client";

import Link from "next/link";
import { AspectImage } from "@/components/AspectImage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/page-json-ld";
import { ArrowLeft, MapPin, Clock, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

import siriNatureRoost from "@/assets/places/siri-nature-roost.webp";
import jhariFalls from "@/assets/places/jhari-falls.webp";
import mullayangiri from "@/assets/places/mullayangiri.webp";
import seethalayanagiri from "@/assets/places/seethalayanagiri.webp";
import honnamanaFalls from "@/assets/places/honnamana-falls.webp";
import babaBudangiri from "@/assets/places/baba-budangiri.webp";
import zPoint from "@/assets/places/z-point.webp";
import zipLining from "@/assets/places/zip-lining.webp";

import { WHATSAPP_LINK } from "@/lib/whatsapp";

const BookButton = () => {
  const { addItem, items } = useCart();
  const id = "pkg-day-1";
  const inCart = items.some((i) => i.id === id);
  return (
    <button
      onClick={() =>
        addItem({ id, name: "Mullayangiri Package (Day 1)", price: 3499, link: "/package/day-1" })
      }
      disabled={inCart}
      className="inline-flex items-center gap-2 bg-sunset hover:bg-sunset/90 disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full text-lg font-medium transition-all"
    >
      <ShoppingCart className="w-5 h-5" />
      {inCart ? "Added to Cart" : "Add to Cart — ₹3,499/group"}
    </button>
  );
};

const places = [
  {
    name: "Siri Nature Roost",
    image: siriNatureRoost,
    distance: "3.2 km from Chikmagalur",
    time: "11 min",
    description: "Siri Nature Roost is the best coffee point in Chikmagalur. The girl lying in the statue is the younger girl Siri, who gave the city its name — Chikmagaluru.",
  },
  {
    name: "Jhari Falls (Butter Falls)",
    image: jhariFalls,
    distance: "23.8 km from Chikmagalur",
    time: "48 min",
    description: "Also known as Sageer Ahmed Falls, this waterfall is hidden in an estate. To reach it, you take a thrilling 4.5 km jeep adventure ride through the coffee plantations.",
  },
  {
    name: "Mullayangiri (Highest Peak)",
    image: mullayangiri,
    distance: "33.4 km from Chikmagalur",
    time: "70 min",
    description: "Mullayangiri is the highest peak in Karnataka at 6,400 ft. Best visited in winter for stunning views. A religious temple sits at the very tip of the peak.",
  },
  {
    name: "Seethalayanagiri Temple & Cave",
    image: seethalayanagiri,
    distance: "19.4 km from Chikmagalur",
    time: "40 min",
    description: "A cave on the left side of the temple worships Lord Rama and Goddess Sita. Popularly known as the 'way to heaven' due to its stunning mountain surroundings.",
  },
  {
    name: "Honnamana Falls",
    image: honnamanaFalls,
    distance: "22.6 km from Chikmagalur",
    time: "44 min",
    description: "A lovely waterfall located enroute to Baba Budangiri hills. A must-stop point with beautiful cascading waters surrounded by lush greenery.",
  },
  {
    name: "Baba Budangiri",
    image: babaBudangiri,
    distance: "30.8 km from Chikmagalur",
    time: "1 hr 8 min",
    description: "Also known as Dattapeeta and Chandradrona, this is where Baba Budan started the first coffee plantation in India. From here, coffee spread across the country.",
  },
  {
    name: "Z Point (Sunset Point)",
    image: zPoint,
    distance: "37.9 km from Chikmagalur",
    time: "1 hr 27 min",
    description: "One of the most beautiful viewpoints for sunsets near Baba Budangiri. It captures the essence of nature's beauty with panoramic mountain views.",
  },
  {
    name: "Zip Lining (Mubarak Homestay)",
    image: zipLining,
    distance: "27.9 km from Chikmagalur",
    time: "54 min",
    description: "Zip lining is one of the most thrilling adventures in Chikmagalur. The craze for this adventure is rapidly growing. Located at Mubarak Homestay.",
  },
];

const PackageDayOne = () => {
  return (
    <main className="overflow-x-hidden">
      <PageJsonLd schema={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "Chikmagalur Day Explorer — 1 Day Tour Package",
          description: "8-stop one-day Chikmagalur tour covering Mullayanagiri, Baba Budangiri, Jhari Falls, coffee estates and adventure activities.",
          touristType: ["Adventure", "Family", "Couples", "Friends"],
          itinerary: places.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name })),
          offers: {
            "@type": "Offer",
            price: "3499",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: "https://tripchikmagalur.com/package/day-1",
          },
          provider: { "@type": "TravelAgency", name: "Trip Chikmagalur", url: "https://tripchikmagalur.com" },
        }} breadcrumbs={[{ name: "Home", path: "/" }, { name: "Packages", path: "/chikmagalur-tour-packages" }, { name: "Day 1", path: "/package/day-1" }]} />
      <Navbar />
      <section className="pt-28 pb-16 bg-muted/30 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <Link href="/#packages" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Packages
          </Link>
          <div className="mb-12">
            <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em]">Day 1</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2">Mullayangiri Package</h1>
            <p className="text-muted-foreground mt-3 text-lg max-w-2xl">Explore 8 stunning locations in one action-packed day — from misty peaks to hidden waterfalls and thrilling adventures.</p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-3xl font-bold text-foreground">₹3,499</span>
              <span className="text-muted-foreground">/group</span>
            </div>
          </div>

          {/* Places Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((place, index) => (
              <div key={place.name} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
                <AspectImage
                  src={place.image}
                  alt={place.name}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
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

          {/* CTA */}
          <div className="text-center mt-12">
            <BookButton />
          </div>
        </div>
      </section>
      <Footer />    </main>
  );
};

export default PackageDayOne;
