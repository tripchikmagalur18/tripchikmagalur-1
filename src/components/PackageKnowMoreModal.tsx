"use client";

import { useEffect, useRef } from "react";
import { X, MapPin, Clock, ShoppingCart } from "lucide-react";
import { AspectImage } from "@/components/AspectImage";
import { PackageOfferPrice } from "@/components/PackageOfferPrice";
import { useCart } from "@/context/CartContext";
import type { PackageDetail } from "@/data/package-places";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2 focus-visible:ring-offset-background";

type PackageKnowMoreModalProps = {
  detail: PackageDetail | null;
  onClose: () => void;
};

export function PackageKnowMoreModal({ detail, onClose }: PackageKnowMoreModalProps) {
  const { addItem, items } = useCart();
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const isOpen = detail !== null;
  const inCart = detail ? items.some((i) => i.id === detail.cartId) : false;

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!detail) return null;

  const handleAddToCart = () => {
    addItem({
      id: detail.cartId,
      name: detail.name,
      price: detail.price,
      link: detail.packageDayLink,
    });
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="package-know-more-title"
        className="relative w-full sm:max-w-2xl lg:max-w-3xl max-h-[92dvh] sm:max-h-[88dvh] flex flex-col bg-background rounded-t-2xl sm:rounded-2xl shadow-2xl border border-border overflow-hidden"
      >
        {/* Sticky price + cart header */}
        <div className="shrink-0 border-b border-border bg-gradient-to-r from-sunset/10 via-background to-teal/5 px-4 sm:px-6 py-4">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="min-w-0">
              <span className="text-sunset font-medium text-xs uppercase tracking-[0.2em]">
                {detail.duration}
              </span>
              <h2
                id="package-know-more-title"
                className="text-xl sm:text-2xl font-display font-bold text-foreground truncate"
              >
                {detail.name}
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1 line-clamp-2">
                {detail.intro}
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className={`min-w-10 min-h-10 p-2 rounded-full hover:bg-muted transition shrink-0 ${focusRing}`}
              aria-label="Close package details"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl bg-card border border-sunset/25 px-4 py-3 shadow-sm">
            <PackageOfferPrice price={detail.price} size="md" align="start" />
            <button
              type="button"
              disabled={inCart}
              onClick={handleAddToCart}
              className={`inline-flex items-center justify-center gap-2 bg-sunset hover:bg-sunset/90 disabled:opacity-70 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full font-semibold text-sm transition min-h-11 shrink-0 ${focusRing}`}
            >
              <ShoppingCart className="w-4 h-4 shrink-0" />
              {inCart ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>

        {/* Places list */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-6 py-5">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            {detail.places.length} places included · distances from Chikmagalur (Ckm)
          </p>
          <ul className="space-y-5" role="list">
            {detail.places.map((place, index) => (
              <li
                key={place.name}
                className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-border bg-card overflow-hidden"
              >
                <div className="sm:w-44 md:w-52 shrink-0">
                  <AspectImage
                    src={place.image}
                    alt={place.name}
                    aspectClass="aspect-[4/3] sm:aspect-square sm:h-full sm:min-h-[11rem]"
                    sizes="(max-width: 640px) 100vw, 208px"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:py-4 sm:pr-4 sm:pl-0 flex-1 min-w-0">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-sunset bg-sunset/10 px-2 py-0.5 rounded-full mb-2">
                    Stop {index + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-display font-bold text-foreground mb-2">
                    {place.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {place.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1">
                      <MapPin className="w-3 h-3 text-sunset" aria-hidden="true" />
                      Ckm → {place.distance}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1">
                      <Clock className="w-3 h-3 text-sunset" aria-hidden="true" />
                      {place.time}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
