"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PageJsonLd } from "@/components/page-json-ld";
import { locationPages } from "@/data/location-pages";
import { WHATSAPP_LINK } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function LocationTourPage({ slug }: { slug: string }) {
  const page = locationPages[slug];
  if (!page) return null;

  return (
    <main className="overflow-x-hidden">
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Tour Packages", path: "/chikmagalur-tour-packages" },
          { name: page.h1, path: `/${page.slug}` },
        ]}
      />
      <Navbar />
      <article className="pt-28 pb-16 min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Packages", path: "/chikmagalur-tour-packages" },
              { name: page.h1, path: `/${page.slug}` },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-6">{page.h1}</h1>
          <p className="text-lg text-muted-foreground mt-4 leading-relaxed">{page.intro}</p>
          {page.sections.map((s) => (
            <section key={s.h2} className="mt-10">
              <h2 className="text-xl font-display font-bold text-foreground mb-3">{s.h2}</h2>
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 30)} className="text-muted-foreground leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </section>
          ))}
          <section className="mt-10 p-6 rounded-2xl border border-border bg-muted/20">
            <h2 className="font-display font-bold text-foreground mb-3">Book these packages</h2>
            <ul className="space-y-2">
              {page.packageLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sunset font-medium hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-sunset text-white px-6 py-3 rounded-full font-medium"
          >
            <MessageCircle className="w-5 h-5" />
            Book on WhatsApp
          </a>
        </div>
      </article>
      <Footer />
    </main>
  );
}
