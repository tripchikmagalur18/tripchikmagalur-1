/** Strikethrough “was” price shown on package cards (₹500 above offer). */
export const PACKAGE_OFFER_MARKUP = 500;

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
