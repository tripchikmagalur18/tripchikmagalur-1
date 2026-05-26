import { AGGREGATE_RATING, testimonials } from "@/data/testimonials";
import { SITE_URL } from "@/lib/seo";

export function buildAggregateRatingSchema() {
  return {
    "@type": "AggregateRating",
    ratingValue: String(AGGREGATE_RATING.ratingValue),
    reviewCount: String(AGGREGATE_RATING.reviewCount),
    bestRating: String(AGGREGATE_RATING.bestRating),
    worstRating: String(AGGREGATE_RATING.worstRating),
  };
}

export function buildReviewSchemas() {
  return testimonials.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    datePublished: t.datePublished,
    reviewBody: t.review,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating),
      bestRating: "5",
      worstRating: "1",
    },
    itemReviewed: {
      "@type": "TravelAgency",
      name: "Trip Chikmagalur",
      url: SITE_URL,
    },
  }));
}

export function buildTravelAgencyReviewsField() {
  return {
    aggregateRating: buildAggregateRatingSchema(),
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      datePublished: t.datePublished,
      reviewBody: t.review,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.rating),
        bestRating: "5",
      },
    })),
  };
}
