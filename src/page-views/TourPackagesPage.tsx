"use client";

import Link from "next/link";
import { MessageCircle, Check, Star, Shield, Clock, Users, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppImage } from "@/components/AppImage";
import { PackageOfferPrice } from "@/components/PackageOfferPrice";
import { PageJsonLd } from "@/components/page-json-ld";
import Breadcrumbs from "@/components/Breadcrumbs";
import { homePackages, homeFaqItems } from "@/data/home-packages";
import { buildTourPackagesItemListSchema } from "@/lib/schemas/tour-packages-schema";
import { WHATSAPP_LINK } from "@/lib/whatsapp";

const trustSignals = [
  { icon: Shield, label: "Govt. Approved", sub: "Karnataka Tourism" },
  { icon: Star, label: "4.9 / 5 Rating", sub: "500+ reviews" },
  { icon: Users, label: "500+ Travellers", sub: "Since 2018" },
  { icon: Clock, label: "24x7 Support", sub: "WhatsApp + Phone" },
];

const faqs = [
  ...homeFaqItems.map((item) => ({ q: item.question, a: item.answer })),
  {
    q: "What is included in your Chikmagalur tour packages?",
    a: "All day packages include private cab with driver, fuel, local guide support, and curated sightseeing as per the itinerary. Jeep rides and entry fees apply where listed on each package page. Add resort or villa stays separately from our Stays section.",
  },
  {
    q: "Are the Chikmagalur tour packages customisable?",
    a: "Yes — every package is fully customisable. Combine Day 1 and Day 2 for a weekend, add Bhadra safari, or extend with estate stays. Message us on WhatsApp with your dates and group size for a tailored quote.",
  },
  {
    q: "Which package covers Mullayanagiri and Hebbe Falls?",
    a: "Mullayanagiri, Baba Budangiri, and Jhari Falls are on the Day 1 Mullayanagiri package (₹3,499/group). Hebbe Falls and Kemmanagundi are on the Day 2 Kemmangundi package (₹4,499/group). Many guests book both for a 2-day weekend.",
  },
  {
    q: "How do I book a Chikmagalur tour package?",
    a: "Add packages to the cart on tripchikmagalur.com and checkout via WhatsApp at +91 6363131585. We confirm availability, share payment details, and help customise your itinerary by dates and group size.",
  },
];

const TourPackagesPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="overflow-x-hidden bg-background">
      <PageJsonLd schema={[buildTourPackagesItemListSchema(), faqSchema]} breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Chikmagalur Tour Packages", path: "/chikmagalur-tour-packages" },
        ]} />

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-mist to-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Tour Packages", path: "/chikmagalur-tour-packages" },
            ]}
            className="mb-6"
          />
          <div className="max-w-3xl">
            <span className="inline-block text-sunset text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Chikmagalur Tour Packages 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Chikmagalur Tour Packages — From ₹3,499
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Day-wise guided Chikmagalur tour packages — Mullayanagiri, Kemmangundi, Muthodi wildlife,
              Belur heritage, and Sringeri treks. Same prices as our homepage packages: ₹3,499–₹5,999
              per group with pre-book offers. Govt.-approved operator with 24x7 WhatsApp support.
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustSignals.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="glass-card-light p-4 rounded-xl text-center">
                  <Icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="font-bold text-sm text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Compare Chikmagalur Tour Packages
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Five day-wise packages — same prices and highlights as on our homepage. Pick one day or
            combine multiple days for a weekend. All prices are per group with pre-book offers.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homePackages.map((pkg) => (
              <article
                key={pkg.cartId}
                className="relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all flex flex-col"
              >
                {pkg.popular && (
                  <span className="absolute top-4 right-4 bg-sunset text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    Most Popular
                  </span>
                )}

                <div className="relative aspect-[4/3] w-full">
                  <AppImage
                    src={pkg.image}
                    alt={`${pkg.name} — guided Chikmagalur day tour`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Clock className="w-3.5 h-3.5" /> {pkg.duration}
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{pkg.description}</p>

                  <ul className="space-y-2 mb-5 flex-1">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <PackageOfferPrice price={pkg.price} size="md" align="start" className="mb-2" />
                  <p className="text-[10px] text-muted-foreground/80 italic mb-5">
                    *Terms and conditions apply on places
                  </p>

                  <div className="flex flex-col gap-2 mt-auto">
                    <Link
                      href={pkg.link}
                      className="block text-center bg-foreground text-background py-3 rounded-full font-medium text-sm hover:opacity-90 transition"
                    >
                      View Package Details
                    </Link>
                    <Link
                      href={pkg.packageDayLink}
                      className="block text-center border border-border py-3 rounded-full font-medium text-sm text-foreground hover:border-sunset/40 transition"
                    >
                      View Full Itinerary
                    </Link>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-sunset text-white py-3 rounded-full font-medium text-sm hover:bg-sunset/90 transition"
                    >
                      <MessageCircle className="w-4 h-4" /> Book on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8">
            Why Book Your Chikmagalur Tour Package With Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Local Operator, Local Prices", d: "Based in Chikmagalur — we cut out middlemen, so you pay 20–30% less than Bangalore-based agencies for the same itinerary." },
              { t: "Verified Estate Stays", d: "We personally inspect every coffee estate homestay every quarter. No surprises, no over-promised photos." },
              { t: "Real-Time WhatsApp Support", d: "Your driver, guide and our office are one WhatsApp message away — before, during and after your trip." },
              { t: "Customisable Everything", d: "Add Bhadra safari, Kudremukh trek, photography sessions, or extend by days. Mix and match — no rigid templates." },
              { t: "Transparent Pricing", d: "What you see is what you pay. No hidden fees, no last-minute 'driver tips,' no inflated entry charges." },
              { t: "Flexible Cancellation", d: "Free cancellation up to 7 days before. Reschedule any time within 6 months at no extra cost." },
            ].map((b) => (
              <div key={b.t} className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{b.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links to related content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-display font-bold text-foreground mb-3">
            Plan Your Chikmagalur Trip
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Pick a package above, or dig deeper into specific places, itineraries and travel tips.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { to: "/places-to-visit-in-chikmagalur", label: "Top Places to Visit" },
              { to: "/2-day-chikmagalur-itinerary", label: "2-Day Itinerary" },
              { to: "/chikmagalur-itinerary-from-bangalore", label: "From Bangalore" },
              { to: "/best-time-to-visit-chikmagalur", label: "Best Time to Visit" },
              { to: "/how-to-reach-chikmagalur", label: "How to Reach" },
              { to: "/things-to-do-in-chikmagalur", label: "Things to Do" },
              { to: "/trekking-in-chikmagalur", label: "Trekking Guide" },
              { to: "/waterfalls-in-chikmagalur", label: "Waterfalls Guide" },
              { to: "/resorts-in-chikmagalur", label: "Resorts & Stays" },
              { to: "/chikmagalur-trip-budget", label: "Trip Budget" },
              { to: "/chikmagalur-local-food", label: "Local Food" },
              { to: "/faq", label: "Travel FAQs" },
            ].map((l) => (
              <Link
                key={l.to}
                href={l.to}
                className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:border-accent hover:shadow-md transition"
              >
                <MapPin className="w-3.5 h-3.5 text-accent" />
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8">
            Chikmagalur Tour Package FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-card border border-border rounded-xl p-5 group">
                <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  {f.q}
                  <span className="text-accent text-xl group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />    </main>
  );
};

export default TourPackagesPage;
