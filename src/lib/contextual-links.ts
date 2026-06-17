/** Contextual internal links appended or woven into FAQ / blog copy */

export type InternalLink = { label: string; href: string };

export const LINKS = {
  packages: { label: "Chikmagalur tour packages", href: "/chikmagalur-tour-packages" },
  itinerary: { label: "2-day Chikmagalur itinerary", href: "/2-day-chikmagalur-itinerary" },
  itinerary3: { label: "3-day Chikmagalur itinerary", href: "/3-day-chikmagalur-itinerary" },
  itineraryFull: { label: "Chikmagalur itinerary", href: "/chikmagalur-itinerary" },
  mullayanagiriPkg: { label: "Mullayanagiri trek package", href: "/mullayanagiri-trek-package" },
  kemmangundiPkg: { label: "Kemmangundi tour package", href: "/kemmangundi-tour-package" },
  muthodiPkg: { label: "Muthodi safari package", href: "/muthodi-safari-package" },
  belurPkg: { label: "Belur heritage tour package", href: "/belur-heritage-tour-package" },
  sringeriPkg: { label: "Sringeri trek package", href: "/sringeri-trek-package" },
  weekendPkg: { label: "weekend packages", href: "/chikmagalur-weekend-packages" },
  fromBangalore: { label: "packages from Bangalore", href: "/chikmagalur-tour-packages-from-bangalore" },
  fromMysore: { label: "packages from Mysore", href: "/chikmagalur-tour-packages-from-mysore" },
  fromMangalore: { label: "packages from Mangalore", href: "/chikmagalur-tour-packages-from-mangalore" },
  honeymoon: { label: "honeymoon packages", href: "/chikmagalur-honeymoon-packages" },
  corporate: { label: "corporate outing packages", href: "/chikmagalur-corporate-outing-packages" },
  homestays: { label: "homestays in Chikmagalur", href: "/homestays-in-chikmagalur" },
  coffeeTour: { label: "coffee plantation tour", href: "/coffee-plantation-tour-chikmagalur" },
  stays: { label: "stays in Chikmagalur", href: "/stays" },
  places: { label: "places to visit", href: "/places" },
  adventure: { label: "adventure activities", href: "/adventure" },
  waterfalls: { label: "waterfalls in Chikmagalur", href: "/waterfalls-in-chikmagalur" },
  trekking: { label: "trekking in Chikmagalur", href: "/trekking-in-chikmagalur" },
  bestTime: { label: "best time to visit", href: "/best-time-to-visit-chikmagalur" },
  howToReach: { label: "how to reach Chikmagalur", href: "/how-to-reach-chikmagalur" },
  budget: { label: "trip budget guide", href: "/chikmagalur-trip-budget" },
  food: { label: "Chikmagalur food guide", href: "/food" },
  localFood: { label: "Chikmagalur local food guide", href: "/chikmagalur-local-food" },
  thingsToDo: { label: "things to do in Chikmagalur", href: "/things-to-do-in-chikmagalur" },
  mullayanagiriPlace: { label: "Mullayanagiri trek guide", href: "/places/mullayanagiri-trek" },
  hebbeFalls: { label: "Hebbe Falls guide", href: "/places/hebbe-falls" },
  kudremukhPlace: { label: "Kudremukh trek guide", href: "/places/kudremukh-national-park" },
  coffeePlantations: { label: "coffee plantations in Chikmagalur", href: "/places/coffee-plantations-chikmagalur" },
  day1: { label: "Day 1 Mullayanagiri tour", href: "/package/day-1" },
} as const;

/** Short natural suffix for FAQ answers without an inline link yet */
export function faqLinkSuffix(links: InternalLink[]): string {
  const md = links.map((l) => `[${l.label}](${l.href})`);
  if (md.length === 0) return "";
  if (md.length === 1) return ` See our ${md[0]}.`;
  if (md.length === 2) return ` See our ${md[0]} and ${md[1]}.`;
  return ` See our ${md.slice(0, -1).join(", ")}, and ${md[md.length - 1]}.`;
}

/** Per-FAQ contextual links (inline suffix where answer text has no natural anchor) */
export const faqContextualLinks: Partial<Record<number, InternalLink[]>> = {
  1: [LINKS.mullayanagiriPkg, LINKS.packages],
  2: [LINKS.fromBangalore, LINKS.howToReach],
  3: [LINKS.bestTime, LINKS.itinerary],
  4: [LINKS.mullayanagiriPkg, LINKS.packages, LINKS.places],
  5: [LINKS.mullayanagiriPkg, LINKS.trekking],
  6: [LINKS.stays, LINKS.homestays],
  7: [LINKS.mullayanagiriPkg, LINKS.packages],
  8: [LINKS.honeymoon, LINKS.stays],
  9: [LINKS.muthodiPkg, LINKS.adventure],
  10: [LINKS.kemmangundiPkg, LINKS.waterfalls],
  11: [LINKS.packages, LINKS.budget],
  12: [LINKS.packages, LINKS.itinerary],
  13: [LINKS.stays, LINKS.homestays],
  14: [LINKS.adventure, LINKS.corporate],
  15: [LINKS.fromBangalore, LINKS.weekendPkg],
  16: [LINKS.packages, LINKS.mullayanagiriPkg, LINKS.kemmangundiPkg],
  17: [LINKS.coffeeTour, LINKS.food],
  18: [LINKS.belurPkg, LINKS.packages],
  19: [LINKS.sringeriPkg, LINKS.trekking],
  20: [LINKS.mullayanagiriPkg, LINKS.fromBangalore],
  21: [LINKS.kemmangundiPkg, LINKS.waterfalls],
  22: [LINKS.itinerary, LINKS.itinerary3],
  23: [LINKS.fromMangalore, LINKS.packages],
  24: [LINKS.corporate, LINKS.weekendPkg],
  25: [LINKS.muthodiPkg, LINKS.places],
  26: [LINKS.mullayanagiriPkg, LINKS.kemmangundiPkg],
  27: [LINKS.homestays, LINKS.stays],
  28: [LINKS.fromMysore, LINKS.packages],
  29: [LINKS.itinerary, LINKS.mullayanagiriPkg, LINKS.kemmangundiPkg],
  30: [LINKS.belurPkg, LINKS.packages],
};

/** Per blog post contextual links shown below article body */
export const blogContextualLinks: Partial<Record<number, InternalLink[]>> = {
  1: [LINKS.mullayanagiriPkg, LINKS.packages, LINKS.places],
  2: [LINKS.fromBangalore, LINKS.itinerary, LINKS.packages],
  3: [LINKS.bestTime, LINKS.itinerary],
  4: [LINKS.budget, LINKS.homestays],
  5: [LINKS.packages, LINKS.mullayanagiriPkg, LINKS.kemmangundiPkg],
  6: [LINKS.stays, LINKS.homestays],
  7: [LINKS.honeymoon, LINKS.stays, LINKS.mullayanagiriPkg],
  8: [LINKS.corporate, LINKS.weekendPkg, LINKS.adventure],
  9: [LINKS.muthodiPkg, LINKS.adventure],
  10: [LINKS.kemmangundiPkg, LINKS.waterfalls],
  11: [LINKS.packages, LINKS.itinerary],
  12: [LINKS.itinerary, LINKS.weekendPkg],
  13: [LINKS.coffeeTour, LINKS.food],
  14: [LINKS.trekking, LINKS.sringeriPkg],
  15: [LINKS.fromMangalore, LINKS.packages],
  16: [LINKS.packages, LINKS.mullayanagiriPkg],
  17: [LINKS.homestays, LINKS.stays],
  18: [LINKS.belurPkg, LINKS.packages],
  19: [LINKS.sringeriPkg, LINKS.trekking],
  20: [LINKS.mullayanagiriPkg, LINKS.fromBangalore],
  21: [LINKS.kemmangundiPkg, LINKS.waterfalls],
  22: [LINKS.itinerary3, LINKS.itinerary],
  23: [LINKS.fromMysore, LINKS.packages],
  24: [LINKS.corporate, LINKS.adventure],
  25: [LINKS.muthodiPkg, LINKS.mullayanagiriPkg],
  26: [LINKS.mullayanagiriPkg, LINKS.kemmangundiPkg],
  27: [LINKS.packages, LINKS.itineraryFull],
};

/** Intro copy with inline markdown links for /food */
export const foodPageIntro =
  "Discover Malnad thali, estate filter coffee, and street-food classics across the hills. Pair a food day with a [coffee plantation tour](/coffee-plantation-tour-chikmagalur), explore [places to visit](/places), and book [stays in Chikmagalur](/stays) for multi-day trips. See our [local food guide](/chikmagalur-local-food) and [Chikmagalur tour packages](/chikmagalur-tour-packages) to plan the full experience.";

export const foodRelatedLinks: InternalLink[] = [
  LINKS.coffeeTour,
  LINKS.localFood,
  LINKS.itinerary,
  LINKS.thingsToDo,
  LINKS.bestTime,
];

/** Intro copy with inline markdown links for /adventure */
export const adventurePageIntro =
  "From ziplining and jeep safaris to peak treks, Chikmagalur’s Western Ghats offer year-round thrills. Combine activities with our [Mullayanagiri trek package](/mullayanagiri-trek-package), [trekking in Chikmagalur](/trekking-in-chikmagalur) guide, [waterfalls in Chikmagalur](/waterfalls-in-chikmagalur), and [weekend packages](/chikmagalur-weekend-packages). Browse [Chikmagalur tour packages](/chikmagalur-tour-packages) to mix adventure with sightseeing.";

export const adventureRelatedLinks: InternalLink[] = [
  LINKS.mullayanagiriPkg,
  LINKS.muthodiPkg,
  LINKS.kemmangundiPkg,
  LINKS.hebbeFalls,
  LINKS.day1,
];
