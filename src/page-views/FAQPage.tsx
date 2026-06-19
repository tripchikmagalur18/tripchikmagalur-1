"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { LinkedText } from "@/components/LinkedText";
import { faqItems } from "@/data/faq-content";
import { faqContextualLinks, faqLinkSuffix } from "@/lib/contextual-links";
import { cn } from "@/lib/utils";
import { WHATSAPP_LINK } from "@/lib/whatsapp";
import { MULLAYANAGIRI_PASS_BOOKING_URL } from "@/data/mullayanagiri-entry-pass";

const FAQPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-mist to-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-light mb-6">
              <HelpCircle className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-medium text-foreground/80">Frequently Asked Questions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Chikmagalur Travel <span className="text-gradient-gold">FAQs</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about planning your trip — from{" "}
              <Link href="/chikmagalur-tour-packages" className="text-accent font-medium hover:underline">
                tour packages
              </Link>{" "}
              and our{" "}
              <Link href="/2-day-chikmagalur-itinerary" className="text-accent font-medium hover:underline">
                2-day itinerary
              </Link>{" "}
              to stays and adventure activities.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "FAQ", path: "/faq" },
              ]}
              className="mb-8"
            />
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <article
                  key={faq.id}
                  className={cn(
                    "glass-card-light overflow-hidden transition-all duration-300",
                    openId === faq.id && "ring-2 ring-accent/20"
                  )}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                    aria-expanded={openId === faq.id}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <h2
                      className="text-base md:text-lg font-semibold text-foreground pr-4 group-hover:text-accent transition-colors"
                      itemProp="name"
                    >
                      <span className="text-accent/60 mr-2">
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      {faq.question}
                    </h2>
                    <span
                      className={cn(
                        "flex-shrink-0 w-8 h-8 rounded-full glass flex items-center justify-center transition-all duration-300",
                        openId === faq.id
                          ? "bg-accent text-white rotate-180"
                          : "bg-secondary text-foreground group-hover:bg-accent/10"
                      )}
                    >
                      {openId === faq.id ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-out",
                      openId === faq.id ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
                    )}
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p
                      className="px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground leading-relaxed"
                      itemProp="text"
                    >
                      <LinkedText
                        text={
                          faq.answer +
                          (faq.answer.includes("](/")
                            ? ""
                            : faqLinkSuffix(faqContextualLinks[faq.id] ?? []))
                        }
                      />
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mullayanagiri govt entry pass */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto glass-card-light rounded-2xl p-6 md:p-8 border border-sunset/20">
            <p className="text-xs font-semibold uppercase tracking-wider text-sunset mb-2">
              Official entry pass
            </p>
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">
              Mullayanagiri vehicle entry pass
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
              Driving to Mullayanagiri or Inam Dattathreya Peeta? Book your mandatory government
              vehicle pass online before you travel — especially if coming from Bangalore on a
              weekend.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={MULLAYANAGIRI_PASS_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset px-6 py-3 text-sm font-semibold text-white hover:bg-sunset/90 transition-colors"
              >
                Book pass — official portal
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/mullayanagiri-entry-pass"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted/50 transition-colors"
              >
                Full booking guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center glass-card-light p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our travel experts are here to help you plan your perfect Chikmagalur adventure.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />    </main>
  );
};

export default FAQPage;
