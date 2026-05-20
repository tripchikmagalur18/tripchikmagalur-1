"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Clock, MapPin, Calendar, IndianRupee, Mountain, ArrowRight, CheckCircle2, Lightbulb } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { PageJsonLd } from "@/components/page-json-ld";
import Breadcrumbs from "@/components/Breadcrumbs";
import { destinations } from "@/data/destinations";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_LINK } from "@/lib/whatsapp";

const SITE_URL = "https://tripchikmagalur.com";

interface DestinationPageProps {
  slug: string;
}

const DestinationPage = ({ slug }: DestinationPageProps) => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!slug || !destinations[slug]) {
    router.replace("/places");
    return null;
  }

  const d = destinations[slug];
  const canonical = `/places/${d.slug}`;

  // Schemas: TouristAttraction + FAQPage (Breadcrumb auto-emitted by SEO)
  const touristSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: d.h1,
    description: d.description,
    image: `${SITE_URL}${d.hero.image}`,
    url: `${SITE_URL}${canonical}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chikmagalur",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    ...(d.geo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: d.geo.lat,
            longitude: d.geo.lng,
          },
        }
      : {}),
    isAccessibleForFree: d.quickFacts.entryFee.toLowerCase().includes("free"),
    touristType: ["Adventure travelers", "Nature lovers", "Families", "Couples"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const relatedDestinations = d.related
    .map((s) => destinations[s])
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-background">
      <PageJsonLd schema={[touristSchema, faqSchema]} breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Places", path: "/places" },
          { name: d.h1, path: canonical },
        ]} />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <img
          src={d.hero.image}
          alt={d.hero.alt}
          width={1600}
          height={900}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-10 md:pb-16">
            <span className="inline-block text-sunset font-medium text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
              {d.primaryKeyword} • Chikmagalur Travel Guide
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground max-w-3xl">
              {d.h1}
            </h1>
            <p className="text-muted-foreground text-xs md:text-sm mt-3">
              Last updated: {d.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Places", path: "/places" },
              { name: d.primaryKeyword, path: canonical },
            ]}
            className="mb-8"
          />

          {/* Intro */}
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-10">
            {d.intro}
          </p>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
            <FactCard icon={MapPin} label="Distance" value={d.quickFacts.distanceFromChikmagalur} />
            <FactCard icon={Calendar} label="Best Time" value={d.quickFacts.bestTime} />
            <FactCard icon={Clock} label="Duration" value={d.quickFacts.duration} />
            <FactCard icon={IndianRupee} label="Entry" value={d.quickFacts.entryFee} />
            {d.quickFacts.elevation && (
              <FactCard icon={Mountain} label="Elevation" value={d.quickFacts.elevation} />
            )}
            {d.quickFacts.difficulty && (
              <FactCard icon={Mountain} label="Difficulty" value={d.quickFacts.difficulty} />
            )}
          </div>

          {/* Table of contents */}
          <nav aria-label="Table of contents" className="glass rounded-2xl p-5 mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              On this page
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <li><a href="#highlights" className="hover:text-primary transition-colors">→ Highlights</a></li>
              <li><a href="#how-to-reach" className="hover:text-primary transition-colors">→ How to reach</a></li>
              <li><a href="#things-to-do" className="hover:text-primary transition-colors">→ Things to do</a></li>
              <li><a href="#tips" className="hover:text-primary transition-colors">→ Travel tips</a></li>
              <li><a href="#faqs" className="hover:text-primary transition-colors">→ FAQs</a></li>
              <li><a href="#related" className="hover:text-primary transition-colors">→ Nearby places</a></li>
            </ul>
          </nav>

          {/* Highlights */}
          <section id="highlights" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
              Why visit {d.primaryKeyword}
            </h2>
            <ul className="space-y-3">
              {d.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{h}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* How to reach */}
          <section id="how-to-reach" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
              How to reach {d.primaryKeyword}
            </h2>
            <p className="text-foreground/90 leading-relaxed">{d.howToReach}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/how-to-reach-chikmagalur"
                className="inline-flex items-center gap-1 text-primary hover:underline text-sm"
              >
                Full Chikmagalur travel guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              {d.geo && (
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${d.geo.lat},${d.geo.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline text-sm"
                >
                  Open in Google Maps <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </section>

          {/* Things to do */}
          <section id="things-to-do" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
              Things to do at {d.primaryKeyword}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {d.thingsToDo.map((t) => (
                <li key={t} className="glass rounded-xl p-4 text-foreground/90 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </section>

          {/* Tips */}
          <section id="tips" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
              Travel tips for {d.primaryKeyword}
            </h2>
            <ul className="space-y-3">
              {d.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-sunset shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section id="faqs" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
              {d.primaryKeyword} — frequently asked questions
            </h2>
            <div className="space-y-3">
              {d.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <article
                    key={faq.q}
                    className={cn(
                      "glass rounded-xl overflow-hidden transition-all",
                      isOpen && "ring-1 ring-primary/30"
                    )}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <h3 className="font-display font-semibold text-foreground text-base md:text-lg">
                        {faq.q}
                      </h3>
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      ) : (
                        <Plus className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-foreground/85 leading-relaxed text-sm md:text-base">
                        {faq.a}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>

          {/* Related */}
          {relatedDestinations.length > 0 && (
            <section id="related" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
                Nearby places to visit
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedDestinations.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/places/${rel.slug}`}
                    className="group glass rounded-2xl overflow-hidden transition-all hover:scale-[1.02]"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={rel.hero.image}
                        alt={rel.hero.alt}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {rel.primaryKeyword}
                      </h3>
                      <p className="text-muted-foreground text-xs mt-1">
                        {rel.quickFacts.distanceFromChikmagalur}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="glass rounded-2xl p-6 md:p-8 text-center">
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">
              Plan a guided trip to {d.primaryKeyword}
            </h2>
            <p className="text-muted-foreground mb-5">
              Speak to our local Chikmagalur travel team for transport,
              permits and combined-day itineraries.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-8">
            Sources:{" "}
            <a
              href="https://karnatakatourism.org/destination/chikmagalur/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              Karnataka Tourism
            </a>
            {" • "}
            <a
              href="https://en.wikipedia.org/wiki/Chikmagalur_district"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              Wikipedia
            </a>
          </p>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

const FactCard = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) => (
  <div className="glass rounded-xl p-3 md:p-4">
    <Icon className="w-4 h-4 text-primary mb-2" />
    <p className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground">
      {label}
    </p>
    <p className="font-medium text-foreground text-sm mt-0.5">{value}</p>
  </div>
);

export default DestinationPage;
