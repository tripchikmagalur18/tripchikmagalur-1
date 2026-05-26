/** Contextual internal links appended or woven into FAQ / blog copy */

export type InternalLink = { label: string; href: string };

export const LINKS = {
  packages: { label: "Chikmagalur tour packages", href: "/chikmagalur-tour-packages" },
  itinerary: { label: "2-day Chikmagalur itinerary", href: "/2-day-chikmagalur-itinerary" },
  itineraryFull: { label: "Chikmagalur itinerary", href: "/chikmagalur-itinerary" },
  mullayanagiriPkg: { label: "Mullayanagiri trek package", href: "/mullayanagiri-trek-package" },
  kemmangundiPkg: { label: "Kemmangundi tour package", href: "/kemmangundi-tour-package" },
  muthodiPkg: { label: "Muthodi safari package", href: "/muthodi-safari-package" },
  belurPkg: { label: "Belur heritage tour package", href: "/belur-heritage-tour-package" },
  sringeriPkg: { label: "Sringeri trek package", href: "/sringeri-trek-package" },
  weekendPkg: { label: "weekend packages", href: "/chikmagalur-weekend-packages" },
  fromBangalore: { label: "packages from Bangalore", href: "/chikmagalur-tour-packages-from-bangalore" },
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
  2: [LINKS.fromBangalore, LINKS.itinerary],
  3: [LINKS.itinerary, LINKS.packages],
  4: [LINKS.mullayanagiriPkg, LINKS.kemmangundiPkg, LINKS.packages],
  5: [LINKS.mullayanagiriPkg, LINKS.sringeriPkg],
  7: [LINKS.mullayanagiriPkg],
  9: [LINKS.muthodiPkg],
  12: [LINKS.packages, LINKS.itinerary],
  16: [LINKS.packages, LINKS.mullayanagiriPkg, LINKS.kemmangundiPkg],
  20: [LINKS.mullayanagiriPkg, LINKS.fromBangalore],
  21: [LINKS.kemmangundiPkg],
  26: [LINKS.mullayanagiriPkg, LINKS.kemmangundiPkg],
  29: [LINKS.itinerary, LINKS.mullayanagiriPkg, LINKS.kemmangundiPkg],
  30: [LINKS.belurPkg],
};

/** Per blog post contextual links shown below article body */
export const blogContextualLinks: Partial<Record<number, InternalLink[]>> = {
  1: [LINKS.mullayanagiriPkg, LINKS.packages, LINKS.itinerary],
  2: [LINKS.fromBangalore, LINKS.itinerary, LINKS.packages],
  3: [LINKS.itinerary, LINKS.mullayanagiriPkg],
  4: [LINKS.itinerary, LINKS.packages],
  5: [LINKS.packages, LINKS.mullayanagiriPkg, LINKS.kemmangundiPkg],
  7: [LINKS.mullayanagiriPkg, LINKS.itinerary],
  8: [LINKS.kemmangundiPkg, LINKS.packages],
  9: [LINKS.mullayanagiriPkg, LINKS.muthodiPkg],
  10: [LINKS.itinerary, LINKS.packages],
  11: [LINKS.mullayanagiriPkg, LINKS.itinerary],
  12: [LINKS.itinerary, LINKS.weekendPkg],
  16: [LINKS.packages, LINKS.mullayanagiriPkg],
  21: [LINKS.kemmangundiPkg],
  25: [LINKS.muthodiPkg, LINKS.mullayanagiriPkg],
};
