import { cn } from "@/lib/utils";
import {
  formatPackageInr,
  getPackageOfferPrices,
  PACKAGE_PREBOOK_OFFER_LINE,
} from "@/lib/package-offer-price";

type PackageOfferPriceProps = {
  price: number;
  /** Price suffix, e.g. "/group" */
  suffix?: string;
  size?: "sm" | "md" | "lg";
  align?: "center" | "start";
  showPreBookLine?: boolean;
  className?: string;
};

const sizeStyles = {
  sm: {
    scratched: "text-sm",
    offer: "text-2xl",
    suffix: "text-xs",
    badge: "text-[10px]",
  },
  md: {
    scratched: "text-base",
    offer: "text-3xl",
    suffix: "text-sm",
    badge: "text-xs",
  },
  lg: {
    scratched: "text-lg",
    offer: "text-4xl",
    suffix: "text-base",
    badge: "text-xs",
  },
} as const;

export function PackageOfferPrice({
  price,
  suffix = "/group",
  size = "sm",
  align = "center",
  showPreBookLine = true,
  className,
}: PackageOfferPriceProps) {
  const { offerPrice, scratchedPrice } = getPackageOfferPrices(price);
  const s = sizeStyles[size];

  return (
    <div
      className={cn(
        "flex flex-col gap-1",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-wrap items-baseline gap-x-2 gap-y-0.5",
          align === "center" ? "justify-center" : "justify-start",
        )}
      >
        <span
          className={cn(s.scratched, "text-muted-foreground line-through decoration-muted-foreground/70")}
          aria-hidden="true"
        >
          {formatPackageInr(scratchedPrice)}
        </span>
        <span className={cn(s.offer, "font-bold text-sunset tabular-nums")}>
          {formatPackageInr(offerPrice)}
        </span>
        {suffix ? (
          <span className={cn(s.suffix, "text-muted-foreground font-normal")}>{suffix}</span>
        ) : null}
      </div>
      {showPreBookLine && (
        <p
          className={cn(
            s.badge,
            "font-medium text-sunset/90 max-w-[16rem] leading-snug",
            align === "center" && "mx-auto",
          )}
        >
          {PACKAGE_PREBOOK_OFFER_LINE}
        </p>
      )}
    </div>
  );
}
