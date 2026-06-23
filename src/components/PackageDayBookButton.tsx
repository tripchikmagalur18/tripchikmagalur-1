"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { usePackagePricing } from "@/context/PackagePricingContext";
import { getHomePackageByCartId } from "@/data/home-packages";
import { formatPackageInr } from "@/lib/package-offer-price";

type PackageDayBookButtonProps = {
  cartId: string;
};

export function PackageDayBookButton({ cartId }: PackageDayBookButtonProps) {
  const pkg = getHomePackageByCartId(cartId);
  const { addItem, items } = useCart();
  const { getDisplayPrice } = usePackagePricing();

  if (!pkg) return null;

  const price = getDisplayPrice(pkg.price);
  const inCart = items.some((i) => i.id === cartId);

  return (
    <button
      type="button"
      onClick={() =>
        addItem({
          id: cartId,
          name: `${pkg.name} (${pkg.duration})`,
          price,
          link: pkg.packageDayLink,
        })
      }
      disabled={inCart}
      className="inline-flex items-center gap-2 bg-sunset hover:bg-sunset/90 disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full text-lg font-medium transition-all"
    >
      <ShoppingCart className="w-5 h-5" />
      {inCart ? "Added to Cart" : `Add to Cart — ${formatPackageInr(price)}/group`}
    </button>
  );
}
