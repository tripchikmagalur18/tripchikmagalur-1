"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PageJsonLd } from "@/components/page-json-ld";
import { LinkedText } from "@/components/LinkedText";
import { blogLongPosts } from "@/data/blog-long-posts";
import { Clock } from "lucide-react";
import { SITE_URL } from "@/lib/seo";

export default function BlogArticlePage({ slug }: { slug: string }) {
  const post = blogLongPosts[slug];
  if (!post) return null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    keywords: post.keyword,
    author: { "@type": "Organization", name: "Trip Chikmagalur" },
    publisher: { "@type": "Organization", name: "Trip Chikmagalur", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    datePublished: "2026-05-01",
    dateModified: "2026-05-26",
  };

  return (
    <main className="min-h-screen bg-background">
      <PageJsonLd
        schema={articleSchema}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <Navbar />
      <article className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ]}
          />
          <header className="mt-6 mb-10">
            <span className="text-xs font-medium text-sunset uppercase tracking-wider">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">{post.title}</h1>
            <p className="flex items-center gap-2 text-sm text-muted-foreground mt-3">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </p>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              <LinkedText text={post.intro} />
            </p>
          </header>
          {post.sections.map((section) => (
            <section key={section.h2} className="mb-10">
              <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">{section.h2}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-muted-foreground leading-relaxed mb-4">
                  <LinkedText text={p} />
                </p>
              ))}
              {section.h3?.map((sub) => (
                <div key={sub.title} className="mt-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{sub.title}</h3>
                  {sub.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)} className="text-muted-foreground leading-relaxed mb-4">
                      <LinkedText text={p} />
                    </p>
                  ))}
                </div>
              ))}
            </section>
          ))}
          <section className="rounded-2xl border border-border p-6 bg-muted/20">
            <h2 className="font-display font-bold text-foreground mb-3">Plan your trip</h2>
            <ul className="space-y-2">
              {post.relatedLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sunset font-medium hover:underline text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <p className="mt-8 text-center">
            <Link href="/blog" className="text-sunset font-medium hover:underline">
              ← Back to all articles
            </Link>
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
