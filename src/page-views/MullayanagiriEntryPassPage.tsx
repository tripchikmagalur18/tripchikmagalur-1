"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  Shield,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PageJsonLd } from "@/components/page-json-ld";
import { LinkedText } from "@/components/LinkedText";
import {
  MULLAYANAGIRI_PASS_BOOKING_URL,
  mullayanagiriEntryPassPage as page,
} from "@/data/mullayanagiri-entry-pass";
import { formatPackageInr } from "@/lib/package-offer-price";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from "@/lib/whatsapp";

const MullayanagiriEntryPassPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const canonical = `/${page.slug}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to book Mullayanagiri vehicle entry pass online",
    description: page.description,
    step: page.steps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: `Step ${i + 1}`,
      text,
    })),
    tool: {
      "@type": "HowToTool",
      name: "Chikkamagaluru district tourism online portal",
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-mist to-background">
      <PageJsonLd
        schema={[faqSchema, howToSchema]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Mullayanagiri entry pass", path: canonical },
        ]}
      />
      <Navbar />

      <section className="pt-28 pb-10 md:pt-36 md:pb-14 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Mullayanagiri entry pass", path: canonical },
            ]}
            className="mb-6"
          />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sunset/10 text-sunset text-xs font-medium mb-4">
            <Shield className="w-3.5 h-3.5" />
            Official government entry pass guide
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
            {page.h1}
          </h1>
          <p className="text-muted-foreground text-xs md:text-sm mb-6">
            Last updated: {page.lastUpdated}
          </p>

          <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-8">
            {page.intro}
          </p>

          {/* Primary CTA — book pass */}
          <div className="glass rounded-2xl p-5 sm:p-6 mb-12 border border-sunset/20 bg-sunset/5">
            <p className="font-display font-semibold text-foreground text-lg mb-1">
              Book your official entry pass
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Chikkamagaluru district portal — Mullayanagiri Peak & Inam Dattathreya Peeta
            </p>
            <a
              href={MULLAYANAGIRI_PASS_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-sunset px-8 py-4 text-base font-semibold text-white hover:bg-sunset/90 transition-colors shadow-lg shadow-sunset/20"
            >
              Book pass on official portal
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
            <p className="text-xs text-muted-foreground mt-3 break-all">
              {MULLAYANAGIRI_PASS_BOOKING_URL}
            </p>

            <div className="mt-6 pt-6 border-t border-sunset/15">
              <p className="font-display font-semibold text-foreground text-base mb-1">
                Need full guidance?
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Not sure about slots, vehicle type, or planning from Bangalore? Call or WhatsApp
                us — we&apos;ll walk you through the pass and your Mullayanagiri trip.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  WhatsApp us
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-foreground/20 bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted/50 transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          {/* Quick steps + package suggestions */}
          <section id="steps" className="mb-12 scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-5 sm:p-6">
              <h2 className="text-lg md:text-xl font-display font-bold text-foreground mb-4">
                How to book — quick steps
              </h2>
              <ol className="space-y-2.5 mb-4">
                {page.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sunset/15 text-sunset font-semibold text-xs">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <a
                href={MULLAYANAGIRI_PASS_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-sunset font-semibold hover:underline"
              >
                Open official portal
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="glass rounded-2xl p-5 sm:p-6 border border-sunset/15">
              <h2 className="text-lg md:text-xl font-display font-bold text-foreground mb-1">
                Our Chikmagalur packages
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Prefer not to drive? We handle transport, routes & timing.
              </p>
              <ul className="space-y-3">
                {page.suggestedPackages.map((pkg) => (
                  <li key={pkg.path}>
                    <Link
                      href={pkg.path}
                      className="group flex items-start justify-between gap-3 rounded-xl border border-border/60 bg-background/50 p-4 hover:border-sunset/30 hover:bg-sunset/5 transition-colors"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <span className="font-display font-semibold text-foreground text-sm">
                            {pkg.name}
                          </span>
                          <span className="text-[10px] font-medium uppercase tracking-wider text-sunset bg-sunset/10 px-2 py-0.5 rounded-full">
                            {pkg.duration}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {pkg.description}
                        </p>
                        <p className="text-sm font-semibold text-foreground mt-1.5">
                          From {formatPackageInr(pkg.price)}
                          <span className="text-xs font-normal text-muted-foreground"> /group</span>
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-sunset shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/chikmagalur-tour-packages"
                className="inline-flex items-center gap-1.5 mt-4 text-sm text-sunset font-medium hover:underline"
              >
                View all tour packages
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* TOC */}
          <nav aria-label="Table of contents" className="glass rounded-2xl p-5 mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              On this page
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {page.sections.map((s, i) => (
                <li key={s.h2}>
                  <a href={`#section-${i}`} className="hover:text-sunset transition-colors">
                    → {s.h2}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faqs" className="hover:text-sunset transition-colors">
                  → FAQs
                </a>
              </li>
              <li>
                <a href="#steps" className="hover:text-sunset transition-colors">
                  → Booking steps & packages
                </a>
              </li>
            </ul>
          </nav>

          {/* Content sections */}
          {page.sections.map((s, i) => (
            <section key={s.h2} id={`section-${i}`} className="mb-10 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                {s.h2}
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">{s.body}</p>
              {s.bullets && (
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-sunset shrink-0 mt-1" />
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
              Mullayanagiri entry pass — FAQs
            </h2>
            <div className="space-y-3">
              {page.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <article
                    key={faq.q}
                    className={cn("glass rounded-xl overflow-hidden", isOpen && "ring-1 ring-sunset/30")}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <h3 className="font-display font-semibold text-foreground text-base md:text-lg">
                        {faq.q}
                      </h3>
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-sunset shrink-0 mt-0.5" />
                      ) : (
                        <Plus className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-foreground/85 leading-relaxed text-sm md:text-base">
                        <LinkedText text={faq.a} />
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>

          {/* Services pitch — compact */}
          <section
            id="trip-services"
            className="mb-12 scroll-mt-24 rounded-2xl border border-border bg-card/50 p-5 md:p-6"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {page.servicesPitch.body}
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-sunset px-6 py-3 text-sm font-semibold text-sunset hover:bg-sunset/10 transition-colors"
            >
              Chat with us on WhatsApp
            </a>
          </section>

          {/* Related */}
          <section id="related" className="mb-8 scroll-mt-24">
            <h2 className="text-2xl font-display font-bold text-foreground mb-5">
              Related guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {page.related.map((r) => (
                <Link
                  key={r.path}
                  href={r.path}
                  className="glass rounded-xl px-5 py-4 flex items-center justify-between hover:scale-[1.02] transition-all"
                >
                  <span className="font-medium text-foreground text-sm">{r.label}</span>
                  <ArrowRight className="w-4 h-4 text-sunset shrink-0" />
                </Link>
              ))}
            </div>
          </section>

          <p className="text-xs text-muted-foreground text-center">
            Official pass booking:{" "}
            <a
              href={MULLAYANAGIRI_PASS_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground break-all"
            >
              Chikkamagaluru district tourism portal
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MullayanagiriEntryPassPage;
