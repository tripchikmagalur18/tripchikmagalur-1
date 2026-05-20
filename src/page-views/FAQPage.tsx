"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { PageJsonLd } from "@/components/page-json-ld";
import Breadcrumbs from "@/components/Breadcrumbs";
import { cn } from "@/lib/utils";
import { WHATSAPP_LINK } from "@/lib/whatsapp";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is Chikmagalur famous for?",
    answer: "Chikmagalur is famous for its lush coffee plantations, scenic Western Ghats landscapes, waterfalls, trekking trails, and peaceful hill station vibes. It is also known as the Coffee Land of Karnataka.",
  },
  {
    id: 2,
    question: "How do I reach Chikmagalur from Bangalore?",
    answer: "Chikmagalur can be reached by road, rail, and air. The nearest airport is Mangalore International Airport, and the nearest railway station is Kadur. Buses, taxis, and self-drive options are easily available from Bangalore (245 km).",
  },
  {
    id: 3,
    question: "What is the best time to visit Chikmagalur?",
    answer: "October to March is the best time to visit Chikmagalur due to pleasant weather, clear views, and ideal conditions for sightseeing and trekking. Monsoon (June-August) offers lush greenery and flowing waterfalls.",
  },
  {
    id: 4,
    question: "What are the top tourist places in Chikmagalur?",
    answer: "Mullayanagiri Peak, Baba Budangiri Hills, Hebbe Falls, Jhari Waterfalls, Kemmanagundi, Bhadra Wildlife Sanctuary, and coffee plantations are must-visit attractions in Chikmagalur.",
  },
  {
    id: 5,
    question: "Is Chikmagalur good for trekking?",
    answer: "Yes, Chikmagalur is a trekking paradise with popular treks like Mullayanagiri, Kudremukh, Seethalayanagiri, and Ballalarayana Durga Fort offering breathtaking views and adventure.",
  },
  {
    id: 6,
    question: "Is Chikmagalur suitable for family trips?",
    answer: "Absolutely. Chikmagalur offers calm lakes, waterfalls, wildlife sanctuaries, viewpoints, and coffee estate stays ideal for families and couples seeking peaceful getaways.",
  },
  {
    id: 7,
    question: "Do I need permission to visit Mullayanagiri?",
    answer: "Yes, during weekends and peak seasons, online vehicle entry booking is required to manage crowd and traffic at Mullayanagiri and nearby hills.",
  },
  {
    id: 8,
    question: "What activities can tourists do in Chikmagalur?",
    answer: "Tourists can enjoy coffee plantation walks, jeep safaris, trekking, birdwatching, wildlife safaris, river rafting, camping, and photography throughout the region.",
  },
  {
    id: 9,
    question: "Is wildlife safari available in Chikmagalur?",
    answer: "Yes, Bhadra Wildlife Sanctuary offers safari experiences with chances to spot elephants, leopards, tigers, and diverse bird species in their natural habitat.",
  },
  {
    id: 10,
    question: "What local food should I try in Chikmagalur?",
    answer: "Tourists should try Malnad cuisine such as akki rotti, kadambalu, spicy curries, filter coffee, and locally grown estate coffee for an authentic taste of the region.",
  },
  {
    id: 11,
    question: "Is Chikmagalur safe for solo travelers?",
    answer: "Yes, Chikmagalur is safe for solo travelers. Many prefer renting bikes or scooters to explore coffee trails and nearby viewpoints independently.",
  },
  {
    id: 12,
    question: "How many days are enough for Chikmagalur?",
    answer: "A 2 to 4-day trip is ideal to cover major attractions, waterfalls, trekking spots, and coffee estate experiences comfortably without rushing.",
  },
  {
    id: 13,
    question: "Are ATMs and mobile networks available in Chikmagalur?",
    answer: "ATMs and mobile networks are available in town areas but may be limited in forest and hill regions. Carrying cash is recommended for remote areas.",
  },
  {
    id: 14,
    question: "Is Chikmagalur crowded during peak season?",
    answer: "Yes, during December, January, and long weekends, tourist spots can be crowded. Planning early and booking accommodations in advance is advisable.",
  },
  {
    id: 15,
    question: "Are there offbeat places in Chikmagalur?",
    answer: "Yes, peaceful spots like Seethalayanagiri, Jhari Falls, hidden coffee trails, and lesser-known viewpoints offer crowd-free experiences for explorers.",
  },
];

const FAQPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-mist to-background">
      <PageJsonLd schema={faqSchema} breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]} />
      
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
              Everything you need to know about planning your perfect trip to Chikmagalur. 
              Find answers to common questions about activities, weather, and travel tips.
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
              {faqs.map((faq, index) => (
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
                      openId === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p
                      className="px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground leading-relaxed"
                      itemProp="text"
                    >
                      {faq.answer}
                    </p>
                  </div>
                </article>
              ))}
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

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default FAQPage;
