import { blogPosts } from "@/data/blog-posts";
import { faqItems } from "@/data/faq-content";
import { buildBreadcrumbSchema, SITE_URL } from "@/lib/seo";

export function buildBlogListingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Trip Chikmagalur Travel Blog",
    description:
      "Chikmagalur travel guides — tour packages, resorts, treks, waterfalls, coffee estates and weekend itineraries from Bangalore.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Trip Chikmagalur",
      url: SITE_URL,
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      articleBody: post.content,
      keywords: post.keyword,
      author: {
        "@type": "Organization",
        name: "Trip Chikmagalur",
      },
      publisher: {
        "@type": "Organization",
        name: "Trip Chikmagalur",
      },
      mainEntityOfPage: `${SITE_URL}/blog#post-${post.id}`,
    })),
  };
}

function stripMarkdownLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export function buildFaqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripMarkdownLinks(faq.answer),
      },
    })),
  };
}

export const blogBreadcrumbs = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
]);

export const faqBreadcrumbs = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
]);
