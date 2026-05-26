"use client";

import Link from "next/link";
import { useState } from "react";
import { Plus, Minus, ArrowRight, CheckCircle2, Lightbulb, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageJsonLd } from "@/components/page-json-ld";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pillarPages, type PillarPageKey } from "@/data/pillarPages";
import { cn } from "@/lib/utils";

const SITE_URL = "https://tripchikmagalur.com";

interface PillarPageProps {
  dataKey: PillarPageKey;
}

const PillarPage = ({ dataKey }: PillarPageProps) => {
  const data = pillarPages[dataKey];
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const canonical = `/${data.slug}`;

  // Article schema for the page itself
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
        url: `${SITE_URL}/favicon.ico`,
      },
    },
    mainEntityOfPage: `${SITE_URL}${canonical}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // Optional per-item schemas (e.g., SportsActivity for treks)
  const itemSchemas: Record<string, unknown>[] = [];
  if (data.itemSchemaType) {
    const firstItemSection = data.sections.find((s) => s.items?.length);
    if (firstItemSection?.items) {
      firstItemSection.items.forEach((item) => {
        itemSchemas.push({
          "@context": "https://schema.org",
          "@type": data.itemSchemaType,
          name: item.name,
          description: item.body,
          ...(item.href ? { url: `${SITE_URL}${item.href}` } : {}),
          location: {
            "@type": "Place",
            name: "Chikmagalur",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chikmagalur",
              addressRegion: "Karnataka",
              addressCountry: "IN",
            },
          },
        });
      });
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <PageJsonLd schema={[articleSchema, faqSchema, ...itemSchemas]} breadcrumbs={[
          { name: "Home", path: "/" },
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
              {data.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-primary transition-colors">
                    → {s.h2}
                  </a>
                </li>
              ))}
              <li><a href="#faqs" className="hover:text-primary transition-colors">→ FAQs</a></li>
              <li><a href="#related" className="hover:text-primary transition-colors">→ Related guides</a></li>
            </ul>
          </nav>

          {/* Sections */}
          {data.sections.map((s) => (
            <section key={s.id} id={s.id} className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
                {s.h2}
              </h2>
              {s.body && (
                <p className="text-foreground/90 leading-relaxed mb-5">{s.body}</p>
              )}

              {s.bullets && (
                <ul className="space-y-2 mb-5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-foreground/85">{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {s.items && (
                <div className="space-y-4">
                  {s.items.map((item) => (
                    <article key={item.name} className="glass rounded-2xl p-5">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <h3 className="font-display font-semibold text-foreground text-lg md:text-xl">
                          {item.name}
                        </h3>
                        {item.best_for && (
                          <span className="inline-block text-[11px] font-medium uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                            Best for: {item.best_for}
                          </span>
                        )}
                      </div>
                      {item.meta && (
                        <p className="text-xs text-muted-foreground mb-3">{item.meta}</p>
                      )}
                      <p className="text-foreground/90 text-sm md:text-base leading-relaxed mb-3">
                        {item.body}
                      </p>
                      {item.bullets && (
                        <ul className="space-y-1.5 mb-3">
                          {item.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-1" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.href && (
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-1 text-primary hover:underline text-sm font-medium"
                        >
                          Read full guide <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </article>
                  ))}
                </div>
              )}

              {s.table && (
                <div className="mt-2 overflow-x-auto rounded-2xl glass">
                  <table className="w-full text-sm">
                    {s.table.caption && (
                      <caption className="text-xs text-muted-foreground p-3 text-left">
                        {s.table.caption}
                      </caption>
                    )}
                    <thead>
                      <tr className="border-b border-border/30">
                        {s.table.headers.map((h) => (
                          <th key={h} className="text-left px-4 py-3 font-semibold text-foreground">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((r, i) => (
                        <tr key={i} className="border-b border-border/10 last:border-0">
                          {r.cells.map((c, j) => (
                            <td key={j} className="px-4 py-3 text-foreground/85">{c}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {s.proTip && (
                <aside className="mt-5 flex gap-3 items-start glass rounded-xl p-4 border-l-4 border-sunset">
                  <Lightbulb className="w-5 h-5 text-sunset shrink-0 mt-0.5" />
                  <p className="text-foreground/90 text-sm leading-relaxed">{s.proTip}</p>
                </aside>
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

          {/* Outbound sources */}
          {data.outboundLinks && data.outboundLinks.length > 0 && (
            <p className="text-xs text-muted-foreground text-center mt-8 flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span>Sources:</span>
              {data.outboundLinks.map((o, i) => (
                <a
                  key={o.href}
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground inline-flex items-center gap-1"
                >
                  {o.label}
                  <ExternalLink className="w-3 h-3" />
                  {i < data.outboundLinks!.length - 1 && <span className="ml-1">•</span>}
                </a>
              ))}
            </p>
          )}
        </div>
      </section>

      <Footer />    </main>
  );
};

export default PillarPage;
