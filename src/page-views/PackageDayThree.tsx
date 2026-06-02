"use client";

import Link from "next/link";
import { AspectImage } from "@/components/AspectImage";
import { PackageOfferPrice } from "@/components/PackageOfferPrice";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/page-json-ld";
import { ArrowLeft, MapPin, Clock, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

import hirekolaleLake from "@/assets/places/hirekolale-lake.webp";
import estateCafe from "@/assets/places/estate-cafe.webp";
import mallandurShootingPoint from "@/assets/places/mallandur-shooting-point.webp";
import muthodiForest from "@/assets/places/muthodi-forest.webp";
import ukkudaFalls from "@/assets/places/ukkuda-falls.webp";
import bandeKalGudda from "@/assets/places/bande-kal-gudda.webp";

import { WHATSAPP_LINK } from "@/lib/whatsapp";

const BookButton = () => {
  const { addItem, items } = useCart();
  const id = "pkg-day-3";
  const inCart = items.some((i) => i.id === id);
  return (
    <button
      onClick={() =>
        addItem({ id, name: "Muthodi Package (Day 3)", price: 3999, link: "/package/day-3" })
      }
      disabled={inCart}
      className="inline-flex items-center gap-2 bg-sunset hover:bg-sunset/90 disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full text-lg font-medium transition-all"
    >
      <ShoppingCart className="w-5 h-5" />
      {inCart ? "Added to Cart" : "Add to Cart — ₹3,999/group"}
    </button>
  );
};

const places = [
  {
    name: "Hirekolale Lake",
    image: hirekolaleLake,
    distance: "10 km from Chikmagalur",
    time: "25 min",
    description: "Built as a water supply and irrigation source for Chikmagalur town. The lake is enclosed with gorgeous surroundings and offers a serene retreat.",
  },
  {
    name: "Estate Café, Mallandur",
    image: estateCafe,
    distance: "23.7 km from Chikmagalur",
    time: "54 min",
    description: "The perfect place for a date, family dinner, or hangout with friends. A must-visit café in Mallandur with great ambiance and food.",
  },
  {
    name: "Mallandur Shooting Point",
    image: mallandurShootingPoint,
    distance: "30.8 km from Chikmagalur",
    time: "1 hr 8 min",
    description: "Just 2 km from town, the route passes through coffee estates and forest, opening suddenly to a vast hilltop with stunning panoramic views.",
  },
  {
    name: "Muthodi Forest Safari",
    image: muthodiForest,
    distance: "34.6 km from Chikmagalur",
    time: "1 hr 30 min",
    description: "Experience a thrilling forest safari along the Somavahini River. See the British guest house and the largest teak tree in the region.",
  },
  {
    name: "Ukkuda Falls",
    image: ukkudaFalls,
    distance: "19.4 km from Chikmagalur",
    time: "40 min",
    description: "Verdant green environments with high biodiversity — many species of animals, birds, and plants to explore. A hidden gem known to few.",
  },
  {
    name: "Bande Kal Gudda",
    image: bandeKalGudda,
    distance: "22.6 km from Chikmagalur",
    time: "44 min",
    description: "A stunning hill reaching approximately 3,500 feet above sea level, offering a breathtaking escape into nature's embrace. Best during monsoon.",
  },
];

const PackageDayThree = () => {
  return (
    <main className="overflow-x-hidden">
      <PageJsonLd schema={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "Chikmagalur Adventure Week — 3 Day Tour Package",
          description: "3-day Chikmagalur tour package including all Day 1 & 2 stops plus Hirekolale Lake, Muthodi Forest safari, Mallandur shooting point, Ukkuda Falls and Bande Kal Gudda.",
          touristType: ["Adventure", "Long Weekend", "Friends"],
          itinerary: places.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name })),
          offers: {
            "@type": "Offer",
            price: "3999",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: "https://tripchikmagalur.com/package/day-3",
          },
          provider: { "@type": "TravelAgency", name: "Trip Chikmagalur", url: "https://tripchikmagalur.com" },
        }} breadcrumbs={[{ name: "Home", path: "/" }, { name: "Packages", path: "/chikmagalur-tour-packages" }, { name: "Day 3", path: "/package/day-3" }]} />
      <Navbar />
      <section className="pt-28 pb-16 bg-muted/30 min-h-screen">
        <div className="container mx-auto px-4">
          <Link href="/#packages" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Packages
          </Link>
          <div className="mb-12">
            <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em]">Day 3</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2">Muthodi Package</h1>
            <p className="text-muted-foreground mt-3 text-lg max-w-2xl">The ultimate 3-day Chikmagalur experience — includes all Day 1 & 2 locations plus 6 more destinations on Day 3.</p>
            <PackageOfferPrice price={3999} size="md" align="start" className="mt-4" />
          </div>

          <p className="text-sm text-sunset font-medium mb-6 bg-sunset/10 inline-block px-4 py-2 rounded-full">✨ Includes all Day 1 & Day 2 locations</p>

          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Day 3 Destinations</h2>
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

export default PackageDayThree;
