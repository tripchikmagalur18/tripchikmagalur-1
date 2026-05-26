import { SITE_URL } from "@/lib/seo";

export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Trip Chikmagalur — Tour Packages, Stays & Adventure",
  description:
    "Book Chikmagalur tour packages, resort and villa stays, adventure activities, and local travel guides.",
  url: SITE_URL,
  isPartOf: {
    "@type": "WebSite",
    name: "Trip Chikmagalur",
    url: SITE_URL,
  },
  about: {
    "@type": "Place",
    name: "Chikmagalur, Karnataka, India",
  },
};
