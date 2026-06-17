import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/sitemap-entries";

const AI_CRAWLERS = ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot"] as const;

const DEFAULT_DISALLOW = ["/api/", "/cart", "/_next/"];

/**
 * https://tripchikmagalur.com/robots.txt
 * Allows all crawlers (including AI bots) and points to the dynamic sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: DEFAULT_DISALLOW,
      },
    ],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_ORIGIN,
  };
}
