import type { StaticImageData } from "next/image";
import type { CartItem } from "@/context/CartContext";
import { isStayCartItem } from "@/context/CartContext";
import { allStays } from "@/data/stays";

import packageMullayanagiri from "@/assets/packages/package-mullayanagiri.webp";
import packageKemmangundi from "@/assets/packages/package-kemmangundi.webp";
import packageMuthodi from "@/assets/packages/package-muthodi.webp";

export type CartSuggestionKind = "stays" | "packages";

export type PackageSuggestion = {
  kind: "package";
  cartId: string;
  name: string;
  price: number;
  link: string;
  packageDayLink: string;
  image: StaticImageData;
  featured?: boolean;
  badge?: string;
};

export type StaySuggestion = {
  kind: "stay";
  cartId: string;
  name: string;
  price: number;
  link: string;
  image: StaticImageData;
  categoryLabel: string;
};

export type CartSuggestion = PackageSuggestion | StaySuggestion;

export const isPackageCartItem = (item: CartItem) => item.id.startsWith("pkg-day-");

export const PACKAGE_SUGGESTIONS: PackageSuggestion[] = [
  {
    kind: "package",
    cartId: "pkg-day-1",
    name: "Mullayanagiri Trek Package",
    price: 3499,
    link: "/mullayanagiri-trek-package",
    packageDayLink: "/package/day-1",
    image: packageMullayanagiri,
    featured: true,
    badge: "Highly recommended",
  },
  {
    kind: "package",
    cartId: "pkg-day-2",
    name: "Kemmangundi Tour Package",
    price: 4499,
    link: "/kemmangundi-tour-package",
    packageDayLink: "/package/day-2",
    image: packageKemmangundi,
  },
  {
    kind: "package",
    cartId: "pkg-day-3",
    name: "Muthodi Safari Package",
    price: 3999,
    link: "/muthodi-safari-package",
    packageDayLink: "/package/day-3",
    image: packageMuthodi,
  },
];

export const STAY_SUGGESTIONS: StaySuggestion[] = allStays.map((stay) => ({
  kind: "stay" as const,
  cartId: stay.id,
  name: stay.name,
  price: stay.pricePerPerson,
  link: `/stays/${stay.slug}`,
  image: stay.coverImage,
  categoryLabel: stay.categoryLabel,
}));

export function getCartSuggestionKind(items: CartItem[]): CartSuggestionKind | null {
  const hasStay = items.some(isStayCartItem);
  const hasPackage = items.some(isPackageCartItem);
  if (hasPackage && !hasStay) return "stays";
  if (hasStay && !hasPackage) return "packages";
  return null;
}

export function getCartSuggestions(items: CartItem[]): CartSuggestion[] {
  const kind = getCartSuggestionKind(items);
  if (!kind) return [];

  const inCart = new Set(items.map((i) => i.id));

  if (kind === "stays") {
    return STAY_SUGGESTIONS.filter((s) => !inCart.has(s.cartId));
  }

  return PACKAGE_SUGGESTIONS.filter((s) => !inCart.has(s.cartId));
}

export function getSuggestionHeading(kind: CartSuggestionKind): string {
  return kind === "stays"
    ? "Add a stay for your trip"
    : "Add sightseeing packages";
}

export function getSuggestionSubheading(kind: CartSuggestionKind): string {
  return kind === "stays"
    ? "Book resort, villa, or homestay nights in Chikmagalur"
    : "Pair your stay with guided day tours — Mullayanagiri is our top pick";
}
