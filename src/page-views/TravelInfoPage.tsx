"use client";

import Link from "next/link";
import { useState } from "react";
import { Plus, Minus, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/page-json-ld";
import Breadcrumbs from "@/components/Breadcrumbs";
import { travelInfo, type TravelInfoKey } from "@/data/travelInfo";
import { cn } from "@/lib/utils";

interface TravelInfoPageProps {
  dataKey: TravelInfoKey;
}

const TravelInfoPage = ({ dataKey }: TravelInfoPageProps) => {
  const data = travelInfo[dataKey];
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const canonical = `/${data.slug}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.h1,
    description: data.description,
    dateModified: data.lastUpdated,
    author: { "@type": "Organization", name: "Trip Chikmagalur" },
    publisher: {
      "@type": "Organization",
      name: "Trip Chikmagalur",
      logo: {
        "@type": "ImageObject",
        url: "https://tripchikmagalur.com/favicon.ico",
      },
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <PageJsonLd schema={[articleSchema, faqSchema]} breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Travel Info", path: "/" },
          { name: data.primaryKeyword, path: canonical },
        ]} />
      <Navbar />

      <section className="pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: data.primaryKeyword, path: canonical },
            ]}
            className="mb-6"
          />

          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">
            {data.h1}
          </h1>
          <p className="text-muted-foreground text-xs md:text-sm mb-6">
            Last updated: {data.lastUpdated}
          </p>

          <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-10">
            {data.intro}
          </p>

          {/* TOC */}
          <nav aria-label="Table of contents" className="glass rounded-2xl p-5 mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              On this page
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {data.sections.map((s, i) => (
                <li key={s.h2}>
                  <a href={`#section-${i}`} className="hover:text-primary transition-colors">
                    → {s.h2}
                  </a>
                </li>
              ))}
              <li><a href="#faqs" className="hover:text-primary transition-colors">→ FAQs</a></li>
              <li><a href="#related" className="hover:text-primary transition-colors">→ Related guides</a></li>
            </ul>
          </nav>

          {/* Sections */}
          {data.sections.map((s, i) => (
            <section key={s.h2} id={`section-${i}`} className="mb-10 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                {s.h2}
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">{s.body}</p>
              {s.bullets && (
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-foreground/85">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* FAQ */}
          <section id="faqs" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
              {data.primaryKeyword} — FAQs
            </h2>
            <div className="space-y-3">
              {data.faqs.map((faq, i) => {
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
          <section id="related" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
              Related Chikmagalur guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.related.map((r) => (
                <Link
                  key={r.path}
                  href={r.path}
                  className="glass rounded-xl px-5 py-4 flex items-center justify-between hover:scale-[1.02] transition-all"
                >
                  <span className="font-medium text-foreground">{r.label}</span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </Link>
              ))}
            </div>
          </section>

          <p className="text-xs text-muted-foreground text-center mt-8">
            Sources:{" "}
            <a href="https://karnatakatourism.org/destination/chikmagalur/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
              Karnataka Tourism
            </a>
            {" • "}
            <a href="https://en.wikipedia.org/wiki/Chikmagalur_district" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
              Wikipedia
            </a>
          </p>
        </div>
      </section>

      <Footer />    </main>
  );
};

export default TravelInfoPage;
