import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/sitemap-entries";

/**
 * https://tripchikmagalur.com/robots.txt
 * Allows all crawlers and points to the dynamic sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/cart", "/_next/"],
    },
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_ORIGIN,
  };
}
