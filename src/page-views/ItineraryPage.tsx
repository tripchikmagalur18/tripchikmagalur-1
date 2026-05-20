"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Calendar, IndianRupee, Plus, Minus, ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { PageJsonLd } from "@/components/page-json-ld";
import Breadcrumbs from "@/components/Breadcrumbs";
import { itineraries } from "@/data/itineraries";
import { cn } from "@/lib/utils";

const SITE_URL = "https://tripchikmagalur.com";
const WHATSAPP_LINK = "https://wa.link/6s636h";

interface ItineraryPageProps {
  slug: string;
}

const ItineraryPage = ({ slug }: ItineraryPageProps) => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!slug || !itineraries[slug]) {
    router.replace("/");
    return null;
  }

  const it = itineraries[slug];
  const canonical = `/${it.slug}`;

  // ItemList schema for the day-by-day stops
  const itemListSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: it.h1,
    description: it.description,
    numberOfItems: it.days.reduce((sum, day) => sum + day.stops.length, 0),
    itemListElement: it.days.flatMap((day, di) =>
      day.stops.map((s, si) => ({
        "@type": "ListItem",
        position: di * 100 + si + 1,
        name: `Day ${di + 1} — ${s.place}`,
        description: s.note,
        ...(s.placeSlug
          ? { url: `${SITE_URL}/places/${s.placeSlug}` }
          : {}),
      }))
    ),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: it.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const relatedItineraries = it.related
    .map((s) => itineraries[s])
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-background">
      <PageJsonLd schema={[itemListSchema, faqSchema]} breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Itineraries", path: "/chikmagalur-itinerary" },
          { name: it.primaryKeyword, path: canonical },
        ]} />
      <Navbar />

      <section className="pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Itineraries", path: "/chikmagalur-itinerary" },
              { name: it.primaryKeyword, path: canonical },
            ]}
            className="mb-6"
          />

          <span className="text-sunset font-medium text-xs md:text-sm uppercase tracking-[0.2em]">
            Chikmagalur Itinerary • {it.totalDays}-day plan
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
            {it.h1}
          </h1>
          <p className="text-muted-foreground text-xs md:text-sm mb-6">
            Last updated: {it.lastUpdated} • Built for {it.audience}
          </p>

          <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-10">
            {it.intro}
          </p>

          {/* Quick facts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
            <div className="glass rounded-xl p-4">
              <Calendar className="w-4 h-4 text-primary mb-2" />
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Best time</p>
              <p className="font-medium text-foreground text-sm mt-0.5">{it.bestTime}</p>
            </div>
            <div className="glass rounded-xl p-4">
              <Clock className="w-4 h-4 text-primary mb-2" />
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Duration</p>
              <p className="font-medium text-foreground text-sm mt-0.5">{it.totalDays} days</p>
            </div>
            <div className="glass rounded-xl p-4">
              <IndianRupee className="w-4 h-4 text-primary mb-2" />
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Budget</p>
              <p className="font-medium text-foreground text-sm mt-0.5">{it.budget}</p>
            </div>
          </div>

          {/* Days */}
          {it.days.map((day, di) => (
            <section key={day.title} id={`day-${di + 1}`} className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {di + 1}
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    {day.title}
                  </h2>
                  <p className="text-muted-foreground text-sm">{day.summary}</p>
                </div>
              </div>

              <ol className="border-l border-border/60 ml-5 space-y-4 pl-6">
                {day.stops.map((stop) => (
                  <li key={stop.time + stop.place} className="relative">
                    <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                    <p className="text-xs font-mono text-muted-foreground">{stop.time}</p>
                    <p className="font-display font-semibold text-foreground">
                      {stop.placeSlug ? (
                        <Link
                          href={`/places/${stop.placeSlug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {stop.place}
                        </Link>
                      ) : (
                        stop.place
                      )}
                    </p>
                    <p className="text-sm text-foreground/80">{stop.note}</p>
                  </li>
                ))}
              </ol>

              {day.stay && (
                <p className="mt-4 text-sm text-muted-foreground">
                  <strong className="text-foreground">Stay:</strong> {day.stay}{" "}
                  <Link href="/stays" className="text-primary hover:underline ml-1">
                    Browse stays →
                  </Link>
                </p>
              )}
            </section>
          ))}

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
              {it.primaryKeyword} — frequently asked questions
            </h2>
            <div className="space-y-3">
              {it.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <article
                    key={faq.q}
                    className={cn("glass rounded-xl overflow-hidden", isOpen && "ring-1 ring-primary/30")}
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
          {relatedItineraries.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
                More Chikmagalur itineraries
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedItineraries.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/${rel.slug}`}
                    className="glass rounded-2xl p-5 hover:scale-[1.02] transition-all"
                  >
                    <p className="text-xs text-sunset uppercase tracking-wider mb-1">
                      {rel.totalDays} days
                    </p>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {rel.primaryKeyword}
                    </h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-1">
                      Read plan <ArrowRight className="w-3.5 h-3.5" />
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="glass rounded-2xl p-6 md:p-8 text-center">
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">
              Want this itinerary booked end-to-end?
            </h2>
            <p className="text-muted-foreground mb-5">
              Talk to our local team for stays, transport and activity bookings.
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
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default ItineraryPage;
