"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Star, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/page-json-ld";
import { allStays } from "@/data/stays";
import { AppImage } from "@/components/AppImage";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const StaysPage = () => {
  return (
    <main id="main-content" className="min-h-screen bg-background pt-[4.5rem] sm:pt-20 pb-12">
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Stays", path: "/stays" },
        ]}
      />
      <Navbar />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/"
          className={`inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 min-h-11 ${focusRing}`}
          aria-label="Back to home"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden="true" />
          Back
        </Link>

        <header className="mb-6 sm:mb-8">
          <p className="text-sunset text-xs font-medium uppercase tracking-widest mb-1">Stays</p>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
            Choose your stay
          </h1>
          <p className="text-muted-foreground text-sm mt-2 max-w-xl">
            Pick a resort or private villa in Chikmagalur. Select dates and adults when you add to
            cart.
          </p>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" role="list">
          {allStays.map((stay) => (
            <li key={stay.slug}>
              <Link
                href={`/stays/${stay.slug}`}
                className={`group block rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md hover:border-sunset/40 transition ${focusRing}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <AppImage
                    src={stay.coverImage}
                    alt={stay.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-sm text-white text-xs font-medium">
                    {stay.categoryLabel}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h2 className="text-lg font-display font-bold text-foreground group-hover:text-sunset transition truncate">
                        {stay.name}
                      </h2>
                      <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">
                        {stay.tagline}
                      </p>
                    </div>
                    <ChevronRight
                      className="w-5 h-5 text-muted-foreground shrink-0 mt-1 group-hover:text-sunset transition"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-3 text-xs">
                    <span className="inline-flex items-center gap-1 text-foreground">
                      <Star className="w-3.5 h-3.5 fill-sunset text-sunset" aria-hidden="true" />
                      {stay.rating}
                    </span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      {stay.location}
                    </span>
                  </div>
                  <p className="mt-3 font-sans font-semibold text-foreground">
                    From{" "}
                    <span className="text-sunset tabular-nums">
                      ₹{stay.pricePerPerson.toLocaleString("en-IN")}
                    </span>
                    <span className="text-muted-foreground font-normal text-sm"> / adult / night</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </main>
  );
};

export default StaysPage;
