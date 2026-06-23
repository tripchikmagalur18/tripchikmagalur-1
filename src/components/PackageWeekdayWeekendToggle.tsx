"use client";

import { cn } from "@/lib/utils";
import { usePackagePricing } from "@/context/PackagePricingContext";
import { PACKAGE_WEEKEND_SURCHARGE } from "@/lib/package-offer-price";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2";

type PackageWeekdayWeekendToggleProps = {
  className?: string;
};

export function PackageWeekdayWeekendToggle({ className }: PackageWeekdayWeekendToggleProps) {
  const { mode, setMode, isWeekend } = usePackagePricing();

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        Travel period
      </p>
      <div
        className="inline-flex rounded-full border border-border bg-card p-1 shadow-sm"
        role="group"
        aria-label="Package pricing by travel period"
      >
        <button
          type="button"
          onClick={() => setMode("weekdays")}
          aria-pressed={mode === "weekdays"}
          className={cn(
            "min-h-10 rounded-full px-5 sm:px-6 text-sm font-semibold transition-all",
            focusRing,
            mode === "weekdays"
              ? "bg-sunset text-white shadow-md"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          Weekdays
        </button>
        <button
          type="button"
          onClick={() => setMode("weekends")}
          aria-pressed={mode === "weekends"}
          className={cn(
            "min-h-10 rounded-full px-5 sm:px-6 text-sm font-semibold transition-all",
            focusRing,
            mode === "weekends"
              ? "bg-sunset text-white shadow-md"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          Weekends
        </button>
      </div>
      {isWeekend ? (
        <p className="text-xs text-sunset font-medium">
          Weekend pricing — +₹{PACKAGE_WEEKEND_SURCHARGE.toLocaleString("en-IN")} per package
        </p>
      ) : (
        <p className="text-xs text-muted-foreground">Standard weekday rates</p>
      )}
    </div>
  );
}
