"use client";

import Link from "next/link";
import { MapPin, Clock, MessageCircle, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/page-json-ld";
import Breadcrumbs from "@/components/Breadcrumbs";
import { AspectImage } from "@/components/AspectImage";
import { destinations } from "@/data/destinations";

import { WHATSAPP_LINK } from "@/lib/whatsapp";

// Curated, ranked list of top places (slugs from destinations.ts)
const TOP_PLACES = [
  "mullayanagiri-trek",
  "baba-budangiri",
  "hebbe-falls",
  "kemmanagundi",
  "coffee-plantations-chikmagalur",
  "jhari-falls",
  "kalhatti-falls",
  "hirekolale-lake",
  "kudremukh-national-park",
  "bhadra-wildlife-sanctuary",
];

const categories = [
  { name: "Peaks & Treks", slugs: ["mullayanagiri-trek", "baba-budangiri", "kudremukh-national-park"] },
  { name: "Waterfalls", slugs: ["hebbe-falls", "jhari-falls", "kalhatti-falls"] },
  { name: "Hill Stations & Lakes", slugs: ["kemmanagundi", "hirekolale-lake"] },
  { name: "Coffee & Wildlife", slugs: ["coffee-plantations-chikmagalur", "bhadra-wildlife-sanctuary"] },
];

const faqs = [
  {
    q: "What are the top places to visit in Chikmagalur?",
    a: "The top 10 places to visit in Chikmagalur are Mullayanagiri (Karnataka's highest peak), Baba Budangiri, Hebbe Falls, Kemmanagundi hill station, coffee plantations, Jhari (Buttermilk) Falls, Kalhatti Falls, Hirekolale Lake, Kudremukh National Park and Bhadra Wildlife Sanctuary.",
  },
  {
    q: "How many places can I cover in 2 days in Chikmagalur?",
    a: "In a comfortable 2-day Chikmagalur itinerary you can cover 6–8 major places: Mullayanagiri, Baba Budangiri, a coffee estate and Hirekolale Lake on Day 1; Hebbe Falls, Kemmanagundi and Z Point on Day 2.",
  },
  {
    q: "Which is the most beautiful place in Chikmagalur?",
    a: "Mullayanagiri at sunrise is widely considered the most beautiful — Karnataka's highest peak with cloud-inversion views. Hebbe Falls and Z Point at Kemmanagundi are close runners-up.",
  },
  {
    q: "Are there offbeat places to visit in Chikmagalur?",
    a: "Yes — Jhari (Buttermilk) Falls, Seethalayanagiri cave temple, Devaramane Betta, Bandekal Gudda and Ethina Bhuja are quieter alternatives loved by repeat travellers.",
  },
  {
    q: "Which places in Chikmagalur are good for families with kids?",
    a: "Coffee estate visits, Hirekolale Lake, Hebbe Falls jeep ride, Kemmanagundi rose garden and Yagachi water sports are family-friendly with minimal trekking required.",
  },
  {
    q: "How far are the main Chikmagalur places from each other?",
    a: "Most major places are within 30–60 km of Chikmagalur town: Mullayanagiri (26 km), Baba Budangiri (30 km), Hebbe Falls (55 km), Kemmanagundi (55 km). A private cab is the most efficient way to cover them.",
  },
  {
    q: "Do I need entry tickets for Chikmagalur tourist places?",
    a: "Most places are free or have a small entry fee (₹20–₹50). Hebbe Falls and Jhari Falls require a mandatory paid jeep ride (₹250–350 per person). Bhadra and Kudremukh have ticketed safaris.",
  },
];

const PlacesToVisitPage = () => {
  const places = TOP_PLACES.map((slug) => destinations[slug]).filter(Boolean);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Places to Visit in Chikmagalur",
    itemListElement: places.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://tripchikmagalur.com/places/${p.slug}`,
      name: p.h1,
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
          { name: "Places to Visit", path: "/places-to-visit-in-chikmagalur" },
        ]} />

      <Navbar />

      <section className="pt-32 pb-10 bg-gradient-to-b from-mist to-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Places to Visit in Chikmagalur", path: "/places-to-visit-in-chikmagalur" },
            ]}
            className="mb-6"
          />
          <span className="text-sunset text-xs font-bold uppercase tracking-[0.2em]">
            Updated April 2026
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-3 leading-tight">
            Top 10 Places to Visit in Chikmagalur
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Chikmagalur — Karnataka's coffee-scented hill country — packs Western Ghats peaks, two-tier
            waterfalls, sacred caves and India's first coffee estates into a 60 km radius. This is the
            definitive list of the best places to visit in Chikmagalur, ranked by what travellers
            actually love, with distances from town, entry fees, best season and a deep-dive guide for
            every spot.
          </p>
        </div>
      </section>

      {/* Quick category jump */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
            Browse by category
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <a
                key={c.name}
                href={`#${c.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="bg-muted hover:bg-accent hover:text-white text-foreground text-sm font-medium px-4 py-2 rounded-full transition"
              >
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Numbered places list */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <ol className="space-y-10">
            {places.map((p, idx) => (
              <li key={p.slug} className="flex flex-col md:flex-row gap-6 group">
                <Link
                  href={`/places/${p.slug}`}
                  className="md:w-2/5 flex-shrink-0 block aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <AspectImage
                    src={p.hero.image}
                    alt={p.hero.alt}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="md:w-3/5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-sunset text-white text-xs font-bold px-3 py-1 rounded-full">
                      #{idx + 1}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Star className="w-3 h-3 fill-sunset text-sunset" /> Must-visit
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                    <Link href={`/places/${p.slug}`} className="hover:text-accent transition">
                      {idx + 1}. {p.h1.replace(/ — .*$/, "")}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{p.intro.slice(0, 280)}…</p>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {p.quickFacts.distanceFromChikmagalur}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {p.quickFacts.duration}
                    </span>
                    <span>Best: {p.quickFacts.bestTime}</span>
                    <span>Entry: {p.quickFacts.entryFee}</span>
                  </div>
                  <Link
                    href={`/places/${p.slug}`}
                    className="inline-flex items-center gap-1 text-accent font-medium text-sm hover:underline"
                  >
                    Read full {p.primaryKeyword} guide →
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* By category sections */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8">
            Places to Visit in Chikmagalur — By Category
          </h2>
          {categories.map((c) => (
            <div key={c.name} id={c.name.toLowerCase().replace(/[^a-z]+/g, "-")} className="mb-10">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">{c.name}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {c.slugs.map((slug) => {
                  const p = destinations[slug];
                  if (!p) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/places/${slug}`}
                      className="bg-card border border-border rounded-xl p-4 hover:border-accent hover:shadow-md transition"
                    >
                      <p className="font-semibold text-foreground text-sm">
                        {p.h1.replace(/ — .*$/, "")}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {p.quickFacts.distanceFromChikmagalur}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plan your trip CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-3">
            Want all of these covered in one trip?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our 2-day and 3-day Chikmagalur tour packages cover every place on this list with private
            cab, estate stays and a local guide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/chikmagalur-tour-packages"
              className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              View Tour Packages →
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sunset text-white px-6 py-3 rounded-full font-medium hover:bg-sunset/90 transition"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8">
            Places to Visit in Chikmagalur — FAQs
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

export default PlacesToVisitPage;
