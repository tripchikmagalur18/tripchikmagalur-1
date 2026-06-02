"use client";

import Link from "next/link";
import { AspectImage } from "@/components/AspectImage";
import { PackageOfferPrice } from "@/components/PackageOfferPrice";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/page-json-ld";
import { ArrowLeft, MapPin, Clock, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

import siddharthaPark from "@/assets/place-siddhartha-park.webp";
import devaramane from "@/assets/place-devaramane.webp";
import abbiFalls from "@/assets/place-abbi-falls.webp";
import ethinaBhuja from "@/assets/place-ethina-bhuja.webp";
import mallandur from "@/assets/place-mallandur.webp";

const BookButton = () => {
  const { addItem, items } = useCart();
  const id = "pkg-day-5";
  const inCart = items.some((i) => i.id === id);
  return (
    <button
      onClick={() =>
        addItem({ id, name: "Sringeri & Trek Package (Day 5)", price: 5999, link: "/package/day-5" })
      }
      disabled={inCart}
      className="inline-flex items-center gap-2 bg-sunset hover:bg-sunset/90 disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full text-lg font-medium transition-all"
    >
      <ShoppingCart className="w-5 h-5" />
      {inCart ? "Added to Cart" : "Add to Cart — ₹5,999/group"}
    </button>
  );
};

const places = [
  {
    name: "Siddhartha Hegde Park",
    image: siddharthaPark,
    distance: "19.4 km from Chikmagalur",
    time: "40 min",
    description:
      "Memorial park dedicated to V.G. Siddhartha (CCD founder) — a peaceful town retreat loved by locals.",
  },
  {
    name: "Devaramane Betta Viewpoint",
    image: devaramane,
    distance: "59 km from Chikmagalur",
    time: "1 hr 28 min",
    description:
      "Sacred hill at 3,500 ft with Kalabhairaveshwara temple — one of the best monsoon viewpoints in the Mudigere range.",
  },
  {
    name: "Abbi Waterfalls",
    image: abbiFalls,
    distance: "152 km from Chikmagalur",
    time: "3 hr 51 min",
    description:
      "Wide cascading waterfall in the Coorg region — spectacular views via a short walk across a hanging bridge.",
  },
  {
    name: "Ethina Bhuja Trek",
    image: ethinaBhuja,
    distance: "51 km from Chikmagalur",
    time: "1 hr 16 min",
    description:
      "Ox-hump shaped peak — one of the most scenic moderate treks in the Western Ghats (6 km round trip).",
  },
  {
    name: "Scenic Mudigere Range",
    image: mallandur,
    distance: "30.8 km from Chikmagalur",
    time: "1 hr 8 min",
    description:
      "Hilltop shooting point through coffee estates and forest — panoramic views across the Mudigere valley.",
  },
];

const PackageDayFive = () => {
  return (
    <main className="overflow-x-hidden">
      <PageJsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "Sringeri & Trek — Day 5 Chikmagalur Tour Package",
          description:
            "Day 5 Chikmagalur tour package with Siddhartha Hegde Park, Devaramane Betta, Abbi Waterfalls, Ethina Bhuja trek and Mudigere range viewpoints.",
          touristType: ["Adventure", "Trekking", "Nature"],
          itinerary: places.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name })),
          offers: {
            "@type": "Offer",
            price: "5999",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: "https://tripchikmagalur.com/package/day-5",
          },
          provider: { "@type": "TravelAgency", name: "Trip Chikmagalur", url: "https://tripchikmagalur.com" },
        }}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Packages", path: "/chikmagalur-tour-packages" },
          { name: "Day 5", path: "/package/day-5" },
        ]}
      />
      <Navbar />
      <section className="pt-28 pb-16 bg-muted/30 min-h-screen">
        <div className="container mx-auto px-4">
          <Link
            href="/#packages"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Packages
          </Link>
          <div className="mb-12">
            <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em]">Day 5</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2">
              Sringeri & Trek Package
            </h1>
            <p className="text-muted-foreground mt-3 text-lg max-w-2xl">
              Treks, waterfalls, and hill-country viewpoints — an adventure-focused day across the Mudigere and
              Western Ghats belt.
            </p>
            <PackageOfferPrice price={5999} size="md" align="start" className="mt-4" />
          </div>

          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Day 5 Destinations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((place, index) => (
              <div
                key={place.name}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              >
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
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {place.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {place.time}
                    </span>
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
      <Footer />
    </main>
  );
};

export default PackageDayFive;
