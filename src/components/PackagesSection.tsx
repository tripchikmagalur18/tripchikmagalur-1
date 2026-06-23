"use client";

import { useRouter } from "next/navigation";
import { AppImage } from "@/components/AppImage";
import { PackageKnowMoreModal } from "@/components/PackageKnowMoreModal";
import { PackageOfferPrice } from "@/components/PackageOfferPrice";
import { homePackages } from "@/data/home-packages";
import { getPackageDetail } from "@/data/package-places";
import { formatPackageInr, getPackageOfferPrices } from "@/lib/package-offer-price";
import { useCart } from "@/context/CartContext";
import { Sparkles, Info, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";

const packages = homePackages;

const btnBase =
  "inline-flex items-center justify-center gap-1.5 flex-1 min-h-10 rounded-full text-xs font-semibold transition-all duration-300 active:scale-95";

const PackagesSection = () => {
  const router = useRouter();
  const { addItem, items } = useCart();
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [knowMoreCartId, setKnowMoreCartId] = useState<string | null>(null);
  const swipeRef = useRef(false);
  const knowMoreDetail = knowMoreCartId ? getPackageDetail(knowMoreCartId) : null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    const el = document.getElementById("packages");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % packages.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + packages.length) % packages.length);
  }, []);

  const [touchStart, setTouchStart] = useState<number | null>(null);

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff =
      diff > 1 ? diff - packages.length : diff < -1 ? diff + packages.length : diff;

    if (normalizedDiff === 0) {
      return {
        transform: "translateX(0) scale(1)",
        zIndex: 10,
        opacity: 1,
        filter: "none",
      };
    }
    if (normalizedDiff === -1) {
      return {
        transform: "translateX(-65%) scale(0.8)",
        zIndex: 5,
        opacity: 0.6,
        filter: "blur(1px)",
      };
    }
    if (normalizedDiff === 1) {
      return {
        transform: "translateX(65%) scale(0.8)",
        zIndex: 5,
        opacity: 0.6,
        filter: "blur(1px)",
      };
    }
    return { transform: "translateX(0) scale(0.6)", zIndex: 0, opacity: 0 };
  };

  const handleCardClick = (index: number, link: string) => {
    if (swipeRef.current) {
      swipeRef.current = false;
      return;
    }
    if (index !== activeIndex) {
      setActiveIndex(index);
      return;
    }
    router.push(link);
  };

  const handleAddToCart = (
    e: React.MouseEvent,
    pkg: (typeof packages)[number],
  ) => {
    e.stopPropagation();
    addItem({
      id: pkg.cartId,
      name: pkg.name,
      price: pkg.price,
      link: pkg.packageDayLink,
    });
  };

  return (
    <section id="packages" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em] inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Choose Your Adventure
            <Sparkles className="w-4 h-4" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4">
            Chikmagalur Tour Packages
          </h2>
        </div>

        <div
          className={`relative flex items-center justify-center touch-pan-y transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ height: "min(520px, 70dvh)", maxWidth: "600px", margin: "0 auto" }}
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStart === null) return;
            const diff = touchStart - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
              swipeRef.current = true;
              diff > 0 ? goNext() : goPrev();
            }
            setTouchStart(null);
          }}
        >
          {packages.map((pkg, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;
            const inCart = items.some((i) => i.id === pkg.cartId);

            return (
              <div
                key={pkg.name}
                className="absolute w-[260px] md:w-[280px] transition-all duration-500 ease-out"
                style={{
                  ...style,
                  transformOrigin: "center center",
                }}
              >
                <article
                  role="button"
                  tabIndex={0}
                  aria-label={`${pkg.name}, ${formatPackageInr(pkg.price)} per group, offer was ${formatPackageInr(getPackageOfferPrices(pkg.price).scratchedPrice)}. ${isActive ? "Open package details" : "Select package"}`}
                  onClick={() => handleCardClick(index, pkg.link)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleCardClick(index, pkg.link);
                    }
                  }}
                  className={`bg-card rounded-3xl border overflow-hidden flex flex-col items-center text-center transition-shadow duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2 ${
                    isActive
                      ? "border-sunset/40 shadow-2xl shadow-sunset/15"
                      : "border-border shadow-lg hover:border-sunset/25"
                  }`}
                >
                  {"popular" in pkg && pkg.popular && isActive && (
                    <div className="w-full flex justify-center -mb-3 relative z-10 pt-3">
                      <span className="bg-sunset text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-sunset/30">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="w-full px-4 pt-4 pointer-events-none">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                      <AppImage
                        src={pkg.image}
                        alt={`${pkg.name} — guided Chikmagalur day tour with transport and local guide`}
                        fill
                        sizes="280px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="p-5 pb-6 flex flex-col items-center w-full pointer-events-none">
                    <h2 className="text-lg font-display font-bold text-foreground mb-0.5">
                      {pkg.name}
                    </h2>
                    <p className="text-muted-foreground text-xs mb-3">{pkg.duration}</p>

                    <ul className="text-left w-full space-y-1.5 mb-4 px-1">
                      {pkg.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="text-sunset mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <PackageOfferPrice price={pkg.price} size="sm" className="mb-3" />
                    <p className="text-[10px] text-muted-foreground/80 italic mb-4 -mt-1">
                      *Terms and conditions apply on places
                    </p>

                    <div
                      className="flex w-full gap-2 pointer-events-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        disabled={inCart}
                        onClick={(e) => handleAddToCart(e, pkg)}
                        className={`${btnBase} bg-sunset text-white hover:bg-sunset/90 disabled:opacity-70 disabled:cursor-not-allowed`}
                      >
                        <ShoppingCart className="w-3.5 h-3.5 shrink-0" />
                        {inCart ? "Added" : "Add to Cart"}
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setKnowMoreCartId(pkg.cartId);
                        }}
                        className={`${btnBase} backdrop-blur-md bg-sunset/20 border border-sunset/30 text-sunset hover:bg-sunset/30 hover:border-sunset/50`}
                      >
                        <Info className="w-3.5 h-3.5 shrink-0" />
                        Know More
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={goPrev}
            className="w-9 h-9 rounded-full border border-border/50 backdrop-blur-md bg-card/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-sunset/40 hover:bg-sunset/10 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Previous package"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {packages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-sunset w-6" : "bg-border hover:bg-muted-foreground/40"
                }`}
                aria-label={`Go to package ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goNext}
            className="w-9 h-9 rounded-full border border-border/50 backdrop-blur-md bg-card/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-sunset/40 hover:bg-sunset/10 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Next package"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <PackageKnowMoreModal
        detail={knowMoreDetail ?? null}
        onClose={() => setKnowMoreCartId(null)}
      />
    </section>
  );
};

export default PackagesSection;
