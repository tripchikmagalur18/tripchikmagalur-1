"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Star,
  Users,
  Minus,
  Plus,
  ShoppingCart,
  Check,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { PageJsonLd } from "@/components/page-json-ld";
import Breadcrumbs from "@/components/Breadcrumbs";
import { imageSrc } from "@/lib/image-src";
import { useCart } from "@/context/CartContext";
import { palmGroveResort, RESORT_CART_ID } from "@/data/resort";

const StaysPage = () => {
  const { addItem, items, openCart } = useCart();
  const [guests, setGuests] = useState(2);
  const inCart = items.some((i) => i.id === RESORT_CART_ID);
  const cartItem = items.find((i) => i.id === RESORT_CART_ID);
  const displayGuests = inCart ? (cartItem?.quantity ?? guests) : guests;

  const { name, tagline, location, pricePerPerson, minGuests, maxGuests, rating, heroImage, description, highlights, amenities, gallery } =
    palmGroveResort;

  const lineTotal = pricePerPerson * displayGuests;

  const handleAddToCart = () => {
    addItem({
      id: RESORT_CART_ID,
      name,
      price: pricePerPerson,
      perPerson: true,
      quantity: guests,
      link: "/stays",
    });
  };

  const decreaseGuests = () => setGuests((g) => Math.max(minGuests, g - 1));
  const increaseGuests = () => setGuests((g) => Math.min(maxGuests, g + 1));

  return (
    <main className="min-h-screen bg-background">
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Stays", path: "/stays" },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={imageSrc(heroImage)}
          alt={`${name} — pool and palm grove`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />

        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <Link
            href="/"
            className="absolute top-24 md:top-28 left-6 inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
              <Star className="w-3.5 h-3.5 fill-sunset text-sunset" />
              {rating}
            </span>
            <span className="text-white/80 text-sm flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {location}
            </span>
          </div>

          <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em] mb-2">
            Resort Stay
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
            {name}
          </h1>
          <p className="text-white/70 mt-3 max-w-2xl text-lg">{tagline}</p>
        </div>
      </div>

      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Stays", path: "/stays" },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  About the resort
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Highlights
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 p-4 rounded-2xl border border-border bg-card"
                    >
                      <span className="mt-0.5 w-2 h-2 rounded-full bg-sunset shrink-0" />
                      <span className="text-foreground text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Amenities
                </h2>
                <div className="flex flex-wrap gap-2">
                  {amenities.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full border border-border bg-muted/50 text-sm text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {gallery.map((img) => (
                    <div
                      key={img.label}
                      className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
                    >
                      <img
                        src={imageSrc(img.src)}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <span className="absolute bottom-2 left-2 text-white text-xs md:text-sm font-medium">
                        {img.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-lg space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground">From</p>
                  <p className="text-3xl font-display font-bold text-foreground">
                    ₹{pricePerPerson.toLocaleString()}
                    <span className="text-base font-normal text-muted-foreground"> / person / night</span>
                  </p>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                    <Users className="w-4 h-4 text-sunset" />
                    Number of people
                  </label>
                  <div className="flex items-center justify-between p-3 rounded-xl border border-border bg-background">
                    <button
                      type="button"
                      onClick={decreaseGuests}
                      disabled={inCart || guests <= minGuests}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition"
                      aria-label="Decrease number of people"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-2xl font-display font-bold text-foreground tabular-nums">
                      {inCart ? cartItem?.quantity ?? guests : guests}
                    </span>
                    <button
                      type="button"
                      onClick={inCart ? () => openCart() : increaseGuests}
                      disabled={!inCart && guests >= maxGuests}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition"
                      aria-label={inCart ? "Open cart to change guests" : "Increase number of people"}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {minGuests}–{maxGuests} guests · adjust in cart after adding
                  </p>
                </div>

                <div className="flex items-center justify-between py-3 border-t border-border">
                  <span className="text-sm text-muted-foreground">Estimated total</span>
                  <span className="text-xl font-bold text-sunset">₹{lineTotal.toLocaleString()}</span>
                </div>

                {inCart ? (
                  <button
                    type="button"
                    onClick={openCart}
                    className="w-full inline-flex items-center justify-center gap-2 bg-muted text-foreground py-3.5 rounded-full font-medium transition hover:bg-muted/80"
                  >
                    <Check className="w-5 h-5 text-sunset" />
                    View in Cart
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="w-full inline-flex items-center justify-center gap-2 bg-sunset hover:bg-sunset/90 text-white py-3.5 rounded-full font-medium transition"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                )}

                <p className="text-xs text-center text-muted-foreground">
                  Checkout via WhatsApp — we&apos;ll confirm availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default StaysPage;
