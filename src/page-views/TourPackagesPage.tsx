"use client";

import Link from "next/link";
import { MessageCircle, Check, Star, Shield, Clock, Users, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { PageJsonLd } from "@/components/page-json-ld";
import Breadcrumbs from "@/components/Breadcrumbs";

import { WHATSAPP_LINK } from "@/lib/whatsapp";

const packages = [
  {
    slug: "/package/day-1",
    name: "Day Explorer — 1 Day Chikmagalur Tour Package",
    duration: "1 Day",
    price: 2999,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 412,
    highlights: [
      "9 destinations in one action-packed day",
      "Mullayanagiri sunrise + Baba Budangiri",
      "Jhari Falls (Buttermilk Falls) jeep ride",
      "Coffee estate visit + Hirekolale Lake sunset",
      "Private cab + experienced local guide",
    ],
    inclusions: ["AC private cab", "Driver & fuel", "Local guide", "All entry fees", "Mineral water"],
    bestFor: "Couples, friends, photographers — short on time",
    keyword: "1 day Chikmagalur tour package",
  },
  {
    slug: "/package/day-2",
    name: "Weekend Escape — 2 Day Chikmagalur Tour Package",
    duration: "2 Days / 1 Night",
    price: 3499,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 738,
    highlights: [
      "Day 1 covers all Day Explorer locations",
      "Day 2: Hebbe Falls, Kemmanagundi, Z Point",
      "Coffee estate homestay (1 night)",
      "Malnad cuisine breakfast & dinner included",
      "Most popular weekend pick from Bangalore",
    ],
    inclusions: ["1 night stay", "Breakfast + dinner", "AC private cab", "All entries + jeep rides", "24x7 support"],
    bestFor: "Weekend travellers from Bangalore, Mysore, Mangalore",
    keyword: "2 day Chikmagalur tour package",
    badge: "Most Popular",
  },
  {
    slug: "/package/day-3",
    name: "Deep Dive — 3 Day Chikmagalur Tour Package",
    duration: "3 Days / 2 Nights",
    price: 5499,
    originalPrice: 7499,
    rating: 4.9,
    reviews: 286,
    highlights: [
      "Everything in 2-day plan + Day 3 wildlife",
      "Bhadra Wildlife Sanctuary jeep safari",
      "Hidden waterfalls — Jhari, Kalhatti",
      "2 nights in premium coffee estate stay",
      "All meals included (Malnad cuisine)",
    ],
    inclusions: ["2 nights stay", "All meals", "AC private cab", "Bhadra safari booking", "Photo guide on request"],
    bestFor: "Families, slow travellers, wildlife & coffee enthusiasts",
    keyword: "3 day Chikmagalur tour package",
  },
];

const trustSignals = [
  { icon: Shield, label: "Govt. Approved", sub: "Karnataka Tourism" },
  { icon: Star, label: "4.9 / 5 Rating", sub: "1,400+ reviews" },
  { icon: Users, label: "10,000+ Travellers", sub: "Since 2018" },
  { icon: Clock, label: "24x7 Support", sub: "WhatsApp + Phone" },
];

const faqs = [
  {
    q: "How much does a Chikmagalur tour package cost?",
    a: "Chikmagalur tour packages start at ₹2,999 per person for a 1-day trip, ₹3,499 for a 2-day weekend escape, and ₹5,499 for a 3-day deep-dive. Prices include cab, stay, food, entries and a local guide. Group sizes of 4+ get additional discounts.",
  },
  {
    q: "Which is the best Chikmagalur tour package from Bangalore?",
    a: "The 2-day Weekend Escape (₹3,499) is the most popular package from Bangalore. It covers Mullayanagiri, Baba Budangiri, Hebbe Falls, Kemmanagundi and a coffee estate homestay — perfect for a Friday-night-to-Sunday-night trip.",
  },
  {
    q: "What is included in your Chikmagalur tour packages?",
    a: "All packages include AC private cab with driver, fuel, all entry fees, jeep rides where mandatory (Hebbe & Jhari Falls), local guide, mineral water and 24x7 WhatsApp support. Multi-day packages also include coffee estate stay and meals.",
  },
  {
    q: "Are the Chikmagalur tour packages customisable?",
    a: "Yes — every package is fully customisable. Add Bhadra wildlife safari, Kudremukh trek, premium resort stays, or extend by extra days. Message us on WhatsApp with your dates and group size for a tailored quote.",
  },
  {
    q: "Are the packages safe for solo female travellers and families?",
    a: "Yes. We are a Karnataka Tourism-approved operator with verified drivers, female-friendly homestays, and 24x7 emergency support. Over 30% of our travellers are solo women and families with children.",
  },
  {
    q: "What is the cancellation policy on Chikmagalur tour packages?",
    a: "Free cancellation up to 7 days before the trip. 50% refund between 3–7 days. No refund within 72 hours, but you can reschedule to any date within 6 months at no extra cost.",
  },
  {
    q: "Which is the best time to book a Chikmagalur tour package?",
    a: "October to March is the peak season — book 3–4 weeks in advance. For monsoon waterfall trips (June–September), book 2 weeks ahead. Weekends and long weekends sell out fastest.",
  },
  {
    q: "Do you offer Chikmagalur tour packages from Mysore and Mangalore?",
    a: "Yes — we offer pickup from Bangalore, Mysore, Mangalore, Hassan and Shimoga. Cab fare from your city is added to the base package price.",
  },
];

const TourPackagesPage = () => {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Chikmagalur Tour Packages",
    itemListElement: packages.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristTrip",
        name: p.name,
        description: p.highlights.join(". "),
        url: `https://tripchikmagalur.com${p.slug}`,
        offers: {
          "@type": "Offer",
          price: p.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: p.rating,
          reviewCount: p.reviews,
        },
      },
    })),
  };

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
      <PageJsonLd schema={[itemListSchema, faqSchema]} breadcrumbs={[
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
              Chikmagalur Tour Packages — From ₹2,999
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Hand-crafted Chikmagalur tour packages covering Mullayanagiri, Baba Budangiri, Hebbe Falls,
              coffee estates and hidden waterfalls. Govt.-approved operator, 4.9★ rated by 1,400+ travellers,
              fully customisable, with 24x7 WhatsApp support.
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
            All packages include private AC cab, entries, jeep rides and a local guide. Multi-day plans
            include estate stays and Malnad meals. Pick the one that fits your timeline.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <article
                key={pkg.slug}
                className="relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                {pkg.badge && (
                  <span className="absolute top-4 right-4 bg-sunset text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    {pkg.badge}
                  </span>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Clock className="w-3.5 h-3.5" /> {pkg.duration}
                    <span className="mx-1">•</span>
                    <Star className="w-3.5 h-3.5 fill-sunset text-sunset" />
                    {pkg.rating} ({pkg.reviews})
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">{pkg.name}</h3>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-foreground">₹{pkg.price.toLocaleString()}</span>
                    <span className="text-muted-foreground line-through text-sm">
                      ₹{pkg.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-green-600 font-bold">
                      {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">per person, on twin sharing</p>

                  <ul className="space-y-2 mb-5">
                    {pkg.highlights.slice(0, 4).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-muted-foreground italic mb-5">Best for: {pkg.bestFor}</p>

                  <div className="flex flex-col gap-2">
                    <Link
                      href={pkg.slug}
                      className="block text-center bg-foreground text-background py-3 rounded-full font-medium text-sm hover:opacity-90 transition"
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

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default TourPackagesPage;
