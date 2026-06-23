/** Strikethrough “was” price shown on package cards (₹500 above offer). */
export const PACKAGE_OFFER_MARKUP = 500;

/** Extra charge per group when weekend pricing is selected. */
export const PACKAGE_WEEKEND_SURCHARGE = 500;

export type PackagePricingMode = "weekdays" | "weekends";

export function getPackageDisplayPrice(
  basePrice: number,
  mode: PackagePricingMode,
): number {
  return mode === "weekends" ? basePrice + PACKAGE_WEEKEND_SURCHARGE : basePrice;
}

export const PACKAGE_PREBOOK_OFFER_LINE = "Avail offers only while pre-booked";

export function getPackageOfferPrices(offerPrice: number) {
  return {
    offerPrice,
    scratchedPrice: offerPrice + PACKAGE_OFFER_MARKUP,
  };
}

export function formatPackageInr(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}
