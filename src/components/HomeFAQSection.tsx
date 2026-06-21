"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { homeFaqItems } from "@/data/home-packages";

const HomeFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em]">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            Chikmagalur Tour FAQ
          </h2>
        </div>
        <div className="space-y-3">
          {homeFaqItems.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl glass-card-light overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="font-display font-semibold text-foreground text-base md:text-lg">
                    {faq.question}
                  </h3>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-sunset shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-muted-foreground shrink-0" />
                  )}
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    isOpen ? "max-h-[480px]" : "max-h-0"
                  }`}
                >
                  <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/60 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          More answers on our{" "}
          <Link href="/faq" className="text-sunset font-medium hover:underline">
            full FAQ page
          </Link>
          {" "}or browse{" "}
          <Link href="/chikmagalur-tour-packages" className="text-sunset font-medium hover:underline">
            all tour packages
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default HomeFAQSection;
