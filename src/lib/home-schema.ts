import { homeFaqItems } from "@/data/home-packages";
import { buildBusinessSchema } from "@/lib/schemas/business-schema";
import { buildTourPackagesItemListSchema } from "@/lib/schemas/tour-packages-schema";
import { SITE_URL } from "@/lib/seo";

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const webPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Best Chikmagalur Tour Packages — Trip Chikmagalur",
  description:
    "Book Chikmagalur tour packages from ₹3,499. Mullayanagiri trek, Kemmangundi, waterfalls & jeep safari. Govt. verified, 500+ travellers.",
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
  mainEntity: {
    "@id": `${SITE_URL}/#business`,
  },
};

export const homePageSchema = [
  buildBusinessSchema(),
  buildTourPackagesItemListSchema(),
  faqPage,
  webPage,
];
