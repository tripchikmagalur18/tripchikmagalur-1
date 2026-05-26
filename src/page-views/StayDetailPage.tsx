"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Star,
  ShoppingCart,
  Check,
  Calendar,
  Users,
  Pencil,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ResortGalleryCarousel } from "@/components/ResortGalleryCarousel";
import { StayBookingDialog } from "@/components/StayBookingDialog";
import { useCart } from "@/context/CartContext";
import { formatBookingDate, stayLineTotal, stayNights } from "@/lib/booking-date";
import type { Stay } from "@/data/stays";
import { imageSrc } from "@/lib/image-src";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2 focus-visible:ring-offset-background";

type StayDetailPageProps = {
  stay: Stay;
};

export default function StayDetailPage({ stay }: StayDetailPageProps) {
  const { addItem, items, openCart } = useCart();
  const [bookingOpen, setBookingOpen] = useState(false);

  const {
    id: cartId,
    slug,
    name,
    tagline,
    location,
    pricePerPerson,
    minGuests,
    maxGuests,
    rating,
    categoryLabel,
    description,
    highlights,
    amenities,
    gallery,
  } = stay;

  const stayPath = `/stays/${slug}`;
  const inCart = items.some((i) => i.id === cartId);
  const cartItem = items.find((i) => i.id === cartId);
  const adults = cartItem?.quantity ?? 2;
  const checkInDate = cartItem?.checkInDate;
  const checkOutDate = cartItem?.checkOutDate;
  const nights = stayNights(checkInDate, checkOutDate);
  const lineTotal = cartItem
    ? stayLineTotal(cartItem)
    : pricePerPerson * adults;

  const handleBookingConfirm = ({
    checkInDate: checkIn,
    checkOutDate: checkOut,
    adults: guestCount,
  }: {
    checkInDate: string;
    checkOutDate: string;
    adults: number;
  }) => {
    addItem({
      id: cartId,
      name,
      price: pricePerPerson,
      perPerson: true,
      quantity: guestCount,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      link: stayPath,
    });
  };

  const openBooking = () => setBookingOpen(true);

  const BookingControls = ({ compact = false }: { compact?: boolean }) => (
    <div className={compact ? "space-y-3" : "space-y-4"}>
      <div>
        <p className="text-xs text-muted-foreground font-sans">From</p>
        <p
          className={`flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 ${compact ? "text-xl" : "text-2xl"}`}
          aria-label={`₹${pricePerPerson.toLocaleString("en-IN")} per adult per night`}
        >
          <span className="font-price">₹{pricePerPerson.toLocaleString("en-IN")}</span>
          <span className="font-price-unit">/ adult / night</span>
        </p>
      </div>

      {inCart && (
        <div className="rounded-xl border border-border bg-muted/40 p-3 space-y-2 text-sm">
          {checkInDate && checkOutDate ? (
            <>
              <div className="flex items-center gap-2 text-foreground">
                <Calendar className="w-4 h-4 text-sunset shrink-0" aria-hidden="true" />
                <span>
                  {formatBookingDate(checkInDate)} → {formatBookingDate(checkOutDate)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground pl-6">
                {nights} {nights === 1 ? "night" : "nights"}
              </p>
            </>
          ) : (
            <p className="text-xs text-sunset font-medium">Check-in & check-out dates required</p>
          )}
          <div className="flex items-center gap-2 text-foreground">
            <Users className="w-4 h-4 text-sunset shrink-0" aria-hidden="true" />
            <span>
              {adults} {adults === 1 ? "adult" : "adults"}
            </span>
          </div>
          <button
            type="button"
            onClick={openBooking}
            className={`inline-flex items-center gap-1.5 text-xs font-medium text-sunset hover:underline min-h-11 ${focusRing}`}
          >
            <Pencil className="w-3.5 h-3.5" aria-hidden="true" />
            {checkInDate && checkOutDate ? "Edit booking details" : "Add stay dates"}
          </button>
        </div>
      )}

      {inCart && (
        <div className="flex items-center justify-between py-2 border-t border-border">
          <span className="text-sm text-muted-foreground">Total</span>
          <span className="text-lg font-sans font-semibold tabular-nums text-sunset">
            ₹{lineTotal.toLocaleString("en-IN")}
          </span>
        </div>
      )}

      {inCart ? (
        <button
          type="button"
          onClick={openCart}
          className={`w-full inline-flex items-center justify-center gap-2 bg-muted text-foreground rounded-full font-medium min-h-11 py-3 text-sm hover:bg-muted/80 transition ${focusRing}`}
        >
          <Check className="w-5 h-5 text-sunset shrink-0" aria-hidden="true" />
          View in Cart
        </button>
      ) : (
        <button
          type="button"
          onClick={openBooking}
          className={`w-full inline-flex items-center justify-center gap-2 bg-sunset hover:bg-sunset/90 text-white rounded-full font-medium min-h-11 py-3 text-sm transition ${focusRing}`}
        >
          <ShoppingCart className="w-5 h-5 shrink-0" aria-hidden="true" />
          Add to Cart
        </button>
      )}

      {!compact && (
        <p className="text-xs text-center text-muted-foreground">
          You&apos;ll choose check-in, check-out, and number of adults next
        </p>
      )}
    </div>
  );

  return (
    <>
      <StayBookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        resortName={name}
        pricePerPerson={pricePerPerson}
        minAdults={minGuests}
        maxAdults={maxGuests}
        initialCheckIn={cartItem?.checkInDate}
        initialCheckOut={cartItem?.checkOutDate}
        initialAdults={cartItem?.quantity ?? 2}
        submitLabel={inCart ? "Update booking" : "Add to Cart"}
        onConfirm={handleBookingConfirm}
      />

      <main id="main-content" className="min-h-screen bg-background pt-[4.5rem] sm:pt-20 pb-24 lg:pb-10">
        <Navbar />

        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <Link
            href="/stays"
            className={`inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-3 min-h-11 ${focusRing}`}
            aria-label="Back to all stays"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden="true" />
            All stays
          </Link>

          <ResortGalleryCarousel images={gallery} className="mb-4" />

          <header className="mb-4 sm:mb-5">
            <p className="text-sunset text-xs font-medium uppercase tracking-widest mb-1">
              {categoryLabel}
            </p>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground text-balance">
              {name}
            </h1>
            <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{tagline}</p>
            <div className="flex flex-wrap items-center gap-2 mt-2 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted text-foreground">
                <Star className="w-3.5 h-3.5 fill-sunset text-sunset" aria-hidden="true" />
                <span>
                  <span className="font-semibold">{rating}</span> / 5
                </span>
              </span>
              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                {location}
              </span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-8">
            <div className="lg:col-span-3 space-y-4 min-w-0">
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

              <section
                aria-labelledby="included-heading"
                className="rounded-xl border border-border bg-card/50 p-4"
              >
                <h2
                  id="included-heading"
                  className="text-base font-display font-bold text-foreground mb-3"
                >
                  What&apos;s included
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-foreground">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sunset shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul
                  className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border"
                  aria-label="Amenities"
                >
                  {amenities.map((item) => (
                    <li key={item}>
                      <span className="inline-block px-2.5 py-1 rounded-full bg-muted text-xs text-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside
              id="book-stay-panel"
              aria-labelledby="booking-heading"
              className="hidden lg:block lg:col-span-2"
            >
              <div className="lg:sticky lg:top-24 rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-lg">
                <h2 id="booking-heading" className="text-lg font-display font-bold text-foreground mb-4">
                  Book your stay
                </h2>
                <BookingControls />
              </div>
            </aside>
          </div>
        </div>

        <div
          id="book-stay"
          className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-md"
          role="region"
          aria-label="Quick booking"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="flex items-center gap-3 px-4 pt-3">
            <div className="flex-1 min-w-0">
              {inCart && checkInDate && checkOutDate ? (
                <>
                  <p className="text-xs text-muted-foreground truncate">
                    {nights} {nights === 1 ? "night" : "nights"} · {adults}{" "}
                    {adults === 1 ? "adult" : "adults"}
                  </p>
                  <p className="text-sm font-sans font-semibold text-sunset tabular-nums truncate">
                    ₹{lineTotal.toLocaleString("en-IN")}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-xs text-muted-foreground truncate">
                    ₹{pricePerPerson.toLocaleString("en-IN")}/adult/night
                  </p>
                  <p className="text-sm text-muted-foreground truncate">Tap to pick dates & adults</p>
                </>
              )}
            </div>
            {inCart ? (
              <button
                type="button"
                onClick={openCart}
                className={`shrink-0 inline-flex items-center gap-2 bg-muted px-5 py-3 rounded-full text-sm font-medium min-h-11 ${focusRing}`}
              >
                <Check className="w-4 h-4 text-sunset" aria-hidden="true" />
                Cart
              </button>
            ) : (
              <button
                type="button"
                onClick={openBooking}
                className={`shrink-0 inline-flex items-center gap-2 bg-sunset text-white px-5 py-3 rounded-full text-sm font-medium min-h-11 ${focusRing}`}
              >
                <ShoppingCart className="w-4 h-4" aria-hidden="true" />
                Book
              </button>
            )}
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
