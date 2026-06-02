"use client";

import Link from "next/link";
import { CloudRain, Sparkles, ArrowRight, Droplets, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/whatsapp";
import { PACKAGE_PREBOOK_OFFER_LINE } from "@/lib/package-offer-price";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900";

export default function MonsoonPromoBanner() {
  return (
    <section
      className="relative z-20 px-4 -mt-6 sm:-mt-10 md:-mt-14 pb-2 sm:pb-4"
      aria-label="Monsoon promotion"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-emerald-400/35 shadow-[0_20px_50px_-12px_rgba(6,78,59,0.45)]">
          {/* Background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.25),transparent_55%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(45,212,191,0.15),transparent_50%)]"
            aria-hidden="true"
          />

          {/* Rain streaks */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40" aria-hidden="true">
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                className="absolute w-px h-8 sm:h-12 bg-gradient-to-b from-transparent via-emerald-200/80 to-transparent animate-monsoon-rain"
                style={{
                  left: `${6 + i * 6.5}%`,
                  top: "-10%",
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: `${1.2 + (i % 4) * 0.3}s`,
                }}
              />
            ))}
          </div>

          {/* Shimmer sweep */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-monsoon-shimmer pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative flex flex-col lg:flex-row lg:items-center gap-5 sm:gap-6 p-5 sm:p-7 md:p-8">
            {/* Badge + headline */}
            <div className="flex-1 min-w-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-100 text-xs font-semibold uppercase tracking-wider mb-3">
                <CloudRain className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                Monsoon season special
                <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0 animate-pulse" aria-hidden="true" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                Monsoon Offers —{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                    Up to 20% Off
                  </span>
                  <span
                    className="absolute -inset-1 bg-amber-400/20 blur-md rounded-lg -z-0"
                    aria-hidden="true"
                  />
                </span>
              </h2>

              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-emerald-100/90 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Lush coffee hills, roaring waterfalls & misty treks — book packages and stays at
                monsoon-only prices. Limited slots this season.
              </p>

              <p className="mt-2 text-xs sm:text-sm font-medium text-amber-200/95 flex items-center justify-center lg:justify-start gap-1.5">
                <Droplets className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                {PACKAGE_PREBOOK_OFFER_LINE}
              </p>
            </div>

            {/* Offer chip + CTAs */}
            <div className="flex flex-col items-center lg:items-end gap-4 shrink-0 w-full lg:w-auto">
              <div className="relative flex flex-col items-center justify-center w-full sm:w-auto min-w-[140px] px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-inner">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-emerald-200/80 font-semibold">
                  Save up to
                </span>
                <span className="text-4xl sm:text-5xl font-display font-black text-white tabular-nums leading-none mt-0.5">
                  20<span className="text-2xl sm:text-3xl align-top">%</span>
                </span>
                <span className="text-[10px] sm:text-xs text-emerald-100/80 mt-1">on pre-bookings</span>
                <span
                  className="absolute -top-2 -right-2 px-2 py-0.5 rounded-md bg-sunset text-white text-[10px] font-bold uppercase shadow-lg animate-pulse"
                >
                  Hot
                </span>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full sm:w-auto min-w-[200px]">
                <Link
                  href="/#packages"
                  className={`inline-flex items-center justify-center gap-2 w-full sm:min-w-[200px] px-5 py-3 rounded-full bg-sunset hover:bg-sunset/90 text-white text-sm font-semibold shadow-lg shadow-sunset/30 transition active:scale-[0.98] ${focusRing}`}
                >
                  Grab monsoon deals
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </Link>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full sm:min-w-[200px] px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-medium border border-white/25 backdrop-blur-sm transition active:scale-[0.98] ${focusRing}`}
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
