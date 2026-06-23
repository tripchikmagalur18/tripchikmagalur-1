"use client";

import Link from "next/link";
import { AspectImage } from "@/components/AspectImage";
import { PackageOfferPrice } from "@/components/PackageOfferPrice";
import { PackageDayBookButton } from "@/components/PackageDayBookButton";
import { PackageWeekdayWeekendToggle } from "@/components/PackageWeekdayWeekendToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/page-json-ld";
import { buildPackageDaySchemas } from "@/lib/package-page-schema";
import { ArrowLeft, MapPin, Clock } from "lucide-react";
import { usePackagePricing } from "@/context/PackagePricingContext";
import { getHomePackageByCartId } from "@/data/home-packages";

import chennakeshava from "@/assets/place-chennakeshava.webp";
import hoysaleshwara from "@/assets/place-hoysaleshwara.webp";
import hiremangalore from "@/assets/place-hiremangalore.webp";
import belurDam from "@/assets/place-belur-dam.webp";

const places = [
  {
    name: "Belur Chennakeshava Temple",
    image: chennakeshava,
    distance: "30.8 km from Chikmagalur",
    time: "1 hr 8 min",
    description:
      "12th-century Hoysala masterpiece commissioned by King Vishnuvardhana in 1117 CE — intricate soapstone carvings and UNESCO-listed heritage.",
  },
  {
    name: "Halebidu Hoysaleshwara Temple",
    image: hoysaleshwara,
    distance: "34.6 km from Chikmagalur",
    time: "1 hr 30 min",
    description:
      "Historic twin Shiva temples in Halebidu built around 1120 CE — every inch covered in mythological sculptures.",
  },
  {
    name: "Hiremagalur Kodanda Rama Temple",
    image: hiremangalore,
    distance: "9 km from Chikmagalur",
    time: "20 min",
    description:
      "State-protected monument blending Hoysala and Dravidian architecture — a quiet heritage gem near Chikmagalur.",
  },
  {
    name: "Belur Dam",
    image: belurDam,
    distance: "22.6 km from Chikmagalur",
    time: "44 min",
    description:
      "Reservoir at 965 m altitude with calm backwater views — pair with temple visits for a relaxed heritage day.",
  },
];

const PackageDayFour = () => {
  const { getDisplayPrice } = usePackagePricing();
  const pkg = getHomePackageByCartId("pkg-day-4")!;

  return (
    <main className="overflow-x-hidden">
      <PageJsonLd
        schema={buildPackageDaySchemas("pkg-day-4")}
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
            <PackageOfferPrice price={getDisplayPrice(pkg.price)} size="md" align="start" className="mt-4" />
            <PackageWeekdayWeekendToggle className="mt-4 items-start" />
          </div>

          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Day 4 Destinations</h2>
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
            <PackageDayBookButton cartId="pkg-day-4" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PackageDayFour;
