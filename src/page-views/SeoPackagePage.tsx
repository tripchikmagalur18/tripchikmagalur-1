"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PageJsonLd } from "@/components/page-json-ld";
import { packageSeoPages, type PackageSeoPage } from "@/data/package-seo-pages";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { WHATSAPP_LINK } from "@/lib/whatsapp";
import { SITE_URL } from "@/lib/seo";

function BookCta({ page }: { page: PackageSeoPage }) {
  const { addItem, items } = useCart();
  const inCart = items.some((i) => i.id === page.cartId);
  return (
    <div className="flex flex-wrap gap-3 justify-center mt-8">
      <button
        type="button"
        disabled={inCart}
        onClick={() =>
          addItem({
            id: page.cartId,
            name: page.h1,
            price: page.price,
            link: page.packageDayLink,
          })
        }
        className="inline-flex items-center gap-2 bg-sunset hover:bg-sunset/90 disabled:opacity-70 text-white px-6 py-3 rounded-full font-medium"
      >
        <ShoppingCart className="w-5 h-5" />
        {inCart ? "Added to Cart" : `Add to Cart — ₹${page.price.toLocaleString("en-IN")}/group`}
      </button>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-sunset text-sunset px-6 py-3 rounded-full font-medium hover:bg-sunset/10"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>
      <Link
        href={page.packageDayLink}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground px-4 py-3 text-sm font-medium"
      >
        View full day itinerary →
      </Link>
    </div>
  );
}

export default function SeoPackagePage({ slug }: { slug: string }) {
  const page = packageSeoPages[slug];
  if (!page) return null;

  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: page.h1,
    description: page.intro,
    url: `${SITE_URL}/${page.slug}`,
    touristType: ["Adventure", "Family", "Couples"],
    offers: {
      "@type": "Offer",
      price: String(page.price),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/${page.slug}`,
    },
    provider: { "@type": "TravelAgency", name: "Trip Chikmagalur", url: SITE_URL },
  };

  return (
    <main className="overflow-x-hidden">
      <PageJsonLd
        schema={tripSchema}
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
              { name: page.duration, path: `/${page.slug}` },
            ]}
          />
          <header className="mt-6 mb-10">
            <p className="text-sunset text-sm font-medium uppercase tracking-wider">{page.duration} tour</p>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">{page.h1}</h1>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">{page.intro}</p>
            <p className="mt-4 text-2xl font-bold text-foreground">
              ₹{page.price.toLocaleString("en-IN")}
              <span className="text-base font-normal text-muted-foreground"> /group</span>
            </p>
          </header>

          {page.sections.map((section) => (
            <section key={section.h2} className="mb-10">
              <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">{section.h2}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-muted-foreground leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {section.h3?.map((sub) => (
                <div key={sub.title} className="mt-6 pl-4 border-l-2 border-sunset/30">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{sub.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{sub.body}</p>
                </div>
              ))}
            </section>
          ))}

          <section className="mb-10 rounded-2xl border border-border bg-muted/30 p-6">
            <h2 className="text-lg font-display font-bold text-foreground mb-3">Related guides</h2>
            <ul className="space-y-2">
              {page.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sunset hover:underline text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <BookCta page={page} />
        </div>
      </article>
      <Footer />
    </main>
  );
}
