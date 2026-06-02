"use client";

import Link from "next/link";
import { Sparkles, ShoppingCart, ChevronRight, Star } from "lucide-react";
import { AppImage } from "@/components/AppImage";
import { PackageOfferPrice } from "@/components/PackageOfferPrice";
import { useCart } from "@/context/CartContext";
import {
  getCartSuggestions,
  getCartSuggestionKind,
  getSuggestionHeading,
  getSuggestionSubheading,
  type CartSuggestion,
  type PackageSuggestion,
} from "@/lib/cart-suggestions";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function PackageSuggestionCard({
  item,
  onAdd,
  inCart,
}: {
  item: PackageSuggestion;
  onAdd: () => void;
  inCart: boolean;
}) {
  return (
    <article className="min-w-[85%] sm:min-w-[260px] shrink-0 snap-start flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm">
      <div className="relative aspect-[16/10] bg-muted">
        <AppImage
          src={item.image}
          alt={item.name}
          fill
          sizes="260px"
          className="object-cover"
        />
        {item.featured && (
          <span className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sunset text-white text-[10px] font-semibold uppercase tracking-wide">
            <Star className="w-3 h-3 fill-current" aria-hidden="true" />
            {item.badge ?? "Top pick"}
          </span>
        )}
      </div>
      <div className="p-3 flex flex-col flex-1 gap-2">
        <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2">
          {item.name}
        </h3>
        <PackageOfferPrice price={item.price} size="sm" align="start" className="!items-start !text-left" />
        <div className="flex gap-2 mt-auto pt-1">
          <button
            type="button"
            disabled={inCart}
            onClick={onAdd}
            className={`flex-1 inline-flex items-center justify-center gap-1.5 min-h-10 px-3 rounded-full bg-sunset text-white text-xs font-medium hover:bg-sunset/90 disabled:opacity-60 transition ${focusRing}`}
          >
            <ShoppingCart className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            {inCart ? "Added" : "Add"}
          </button>
          <Link
            href={item.link}
            className={`inline-flex items-center justify-center min-h-10 min-w-10 px-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-sunset/40 transition ${focusRing}`}
            aria-label={`View ${item.name}`}
          >
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function StaySuggestionCard({ item }: { item: Extract<CartSuggestion, { kind: "stay" }> }) {
  return (
    <Link
      href={item.link}
      className={`min-w-[85%] sm:min-w-[260px] shrink-0 snap-start flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:border-sunset/40 hover:shadow-md transition group ${focusRing}`}
    >
      <div className="relative aspect-[16/10] bg-muted">
        <AppImage
          src={item.image}
          alt={item.name}
          fill
          sizes="260px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/55 backdrop-blur-sm text-white text-[10px] font-medium">
          {item.categoryLabel}
        </span>
      </div>
      <div className="p-3 flex flex-col flex-1 gap-1.5">
        <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-sunset transition">
          {item.name}
        </h3>
        <p className="text-xs text-sunset font-semibold tabular-nums">
          From ₹{item.price.toLocaleString("en-IN")}
          <span className="text-muted-foreground font-normal"> /adult / night</span>
        </p>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-foreground mt-1">
          Select dates & book
          <ChevronRight className="w-3.5 h-3.5 text-sunset" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export function CartSuggestions() {
  const { items, addItem } = useCart();
  const kind = getCartSuggestionKind(items);
  const suggestions = getCartSuggestions(items);

  if (!kind || suggestions.length === 0) return null;

  const inCartIds = new Set(items.map((i) => i.id));

  return (
    <section
      className="mt-4 rounded-2xl border border-sunset/25 bg-gradient-to-br from-sunset/8 via-card to-card p-3 sm:p-4"
      aria-label="Recommended add-ons"
    >
      <div className="flex items-start gap-2 mb-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sunset/15 text-sunset">
          <Sparkles className="w-4 h-4" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-display font-bold text-foreground">
            {getSuggestionHeading(kind)}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
            {getSuggestionSubheading(kind)}
          </p>
        </div>
      </div>

      <div
        className="flex gap-3 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-1 -mx-0.5 px-0.5 scrollbar-thin touch-pan-x"
        role="list"
      >
        {suggestions.map((item) =>
          item.kind === "package" ? (
            <PackageSuggestionCard
              key={item.cartId}
              item={item}
              inCart={inCartIds.has(item.cartId)}
              onAdd={() =>
                addItem({
                  id: item.cartId,
                  name: item.name,
                  price: item.price,
                  link: item.packageDayLink,
                })
              }
            />
          ) : (
            <div key={item.cartId} role="listitem">
              <StaySuggestionCard item={item} />
            </div>
          ),
        )}
      </div>
    </section>
  );
}
