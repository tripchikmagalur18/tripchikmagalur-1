"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PageJsonLd } from "@/components/page-json-ld";
import { BUSINESS_CONTACT, buildContactPageSchema } from "@/lib/business-contact";
import { WHATSAPP_LINK } from "@/lib/whatsapp";

const contactSchema = buildContactPageSchema();

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-mist to-background">
      <PageJsonLd
        schema={contactSchema}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <Navbar />

      <section className="relative pt-28 pb-10 md:pt-36 md:pb-14 px-4">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl mb-10">
            <span className="text-sunset font-medium text-sm uppercase tracking-[0.2em]">
              Get in touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3">
              Contact Trip Chikmagalur
            </h1>
            <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed">
              Book tour packages, stays, and adventure activities. Call, email, or message us on
              WhatsApp — we help plan trips across Chikmagalur and the Western Ghats.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Contact details */}
            <div className="lg:col-span-2 space-y-4 order-2 lg:order-1">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                Chat on WhatsApp
              </a>

              <div className="glass rounded-2xl p-5 space-y-5">
                <div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sunset/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-sunset" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display font-semibold text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {BUSINESS_CONTACT.name}
                        <br />
                        {BUSINESS_CONTACT.address.line1}
                        <br />
                        {BUSINESS_CONTACT.address.line2}
                        <br />
                        {BUSINESS_CONTACT.address.country}
                      </p>
                      <a
                        href={BUSINESS_CONTACT.mapDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-sunset font-medium mt-2 hover:underline"
                      >
                        Get directions
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/40 pt-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sunset/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-sunset" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground">Phone</p>
                      <a
                        href={BUSINESS_CONTACT.phoneLink}
                        className="text-sm text-muted-foreground mt-1 block hover:text-sunset transition-colors"
                      >
                        {BUSINESS_CONTACT.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/40 pt-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sunset/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-sunset" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display font-semibold text-foreground">Email</p>
                      <a
                        href={`mailto:${BUSINESS_CONTACT.email}`}
                        className="text-sm text-muted-foreground mt-1 block break-all hover:text-sunset transition-colors"
                      >
                        {BUSINESS_CONTACT.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/40 pt-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sunset/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-sunset" />
                    </div>
                    <div className="space-y-3 w-full">
                      <p className="font-display font-semibold text-foreground">Business hours</p>
                      {BUSINESS_CONTACT.hours.map((row) => (
                        <div key={row.days} className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-4">
                          <span className="text-sm text-foreground/90">{row.days}</span>
                          <span className="text-sm text-muted-foreground">{row.time}</span>
                        </div>
                      ))}
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        WhatsApp is the fastest way to reach us for bookings and custom itineraries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-5">
                <p className="text-sm font-display font-semibold text-foreground mb-3">
                  Quick links
                </p>
                <ul className="space-y-2">
                  {[
                    { label: "Tour packages", href: "/chikmagalur-tour-packages" },
                    { label: "Stays", href: "/stays" },
                    { label: "FAQ", href: "/faq" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-sunset transition-colors"
                      >
                        {link.label}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="glass rounded-2xl overflow-hidden h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[520px] flex flex-col">
                <div className="px-5 py-4 border-b border-border/40 flex items-center justify-between gap-3">
                  <p className="font-display font-semibold text-foreground text-sm md:text-base">
                    Find us in Chikmagalur
                  </p>
                  <a
                    href={BUSINESS_CONTACT.mapViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs md:text-sm text-sunset font-medium hover:underline shrink-0"
                  >
                    Open in Maps
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="relative flex-1 min-h-[240px] sm:min-h-[320px]">
                  <iframe
                    title="Trip Chikmagalur location on Google Maps"
                    src={BUSINESS_CONTACT.mapEmbedUrl}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
