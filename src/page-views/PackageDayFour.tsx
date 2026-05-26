"use client";
import { imageSrc } from "@/lib/image-src";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/page-json-ld";
import { ArrowLeft, MapPin, Clock, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

import chennakeshava from "@/assets/place-chennakeshava.jpg";
import hoysaleshwara from "@/assets/place-hoysaleshwara.jpg";
import hiremangalore from "@/assets/place-hiremangalore.jpg";
import belurDam from "@/assets/place-belur-dam.jpg";

const BookButton = () => {
  const { addItem, items } = useCart();
  const id = "pkg-day-4";
  const inCart = items.some((i) => i.id === id);
  return (
    <button
      onClick={() =>
        addItem({ id, name: "Belur Package (Day 4)", price: 3499, link: "/package/day-4" })
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
    name: "Belur Chennakeshava Temple",
    image: imageSrc(chennakeshava),
    distance: "30.8 km from Chikmagalur",
    time: "1 hr 8 min",
    description:
      "12th-century Hoysala masterpiece commissioned by King Vishnuvardhana in 1117 CE — intricate soapstone carvings and UNESCO-listed heritage.",
  },
  {
    name: "Halebidu Hoysaleshwara Temple",
    image: imageSrc(hoysaleshwara),
    distance: "34.6 km from Chikmagalur",
    time: "1 hr 30 min",
    description:
      "Historic twin Shiva temples in Halebidu built around 1120 CE — every inch covered in mythological sculptures.",
  },
  {
    name: "Hiremagalur Kodanda Rama Temple",
    image: imageSrc(hiremangalore),
    distance: "9 km from Chikmagalur",
    time: "20 min",
    description:
      "State-protected monument blending Hoysala and Dravidian architecture — a quiet heritage gem near Chikmagalur.",
  },
  {
    name: "Belur Dam",
    image: imageSrc(belurDam),
    distance: "22.6 km from Chikmagalur",
    time: "44 min",
    description:
      "Reservoir at 965 m altitude with calm backwater views — pair with temple visits for a relaxed heritage day.",
  },
];

const PackageDayFour = () => {
  return (
    <main className="overflow-x-hidden">
      <PageJsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "Belur Heritage — Day 4 Chikmagalur Tour Package",
          description:
            "Day 4 Chikmagalur tour package covering Belur Chennakeshava Temple, Halebidu Hoysaleshwara Temple, Hiremagalur Kodanda Rama Temple and Belur Dam.",
          touristType: ["Heritage", "Family", "Culture"],
          itinerary: places.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name })),
          offers: {
            "@type": "Offer",
            price: "3499",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: "https://tripchikmagalur.com/package/day-4",
          },
          provider: { "@type": "TravelAgency", name: "Trip Chikmagalur", url: "https://tripchikmagalur.com" },
        }}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Packages", path: "/chikmagalur-tour-packages" },
          { name: "Day 4", path: "/package/day-4" },
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
            <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em]">Day 4</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2">Belur Package</h1>
            <p className="text-muted-foreground mt-3 text-lg max-w-2xl">
              A full-day heritage circuit — Hoysala temples at Belur and Halebidu plus Hiremagalur&apos;s protected
              monument.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-3xl font-bold text-foreground">₹3,499</span>
              <span className="text-muted-foreground">/group</span>
            </div>
          </div>

          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Day 4 Destinations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((place, index) => (
              <div
                key={place.name}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
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

export default PackageDayFour;
