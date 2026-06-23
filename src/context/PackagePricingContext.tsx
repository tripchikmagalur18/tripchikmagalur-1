"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  getPackageDisplayPrice,
  type PackagePricingMode,
} from "@/lib/package-offer-price";

const STORAGE_KEY = "tc_package_pricing_mode_v1";

type PackagePricingContextValue = {
  mode: PackagePricingMode;
  setMode: (mode: PackagePricingMode) => void;
  isWeekend: boolean;
  getDisplayPrice: (basePrice: number) => number;
};

const PackagePricingContext = createContext<PackagePricingContextValue | undefined>(
  undefined,
);

function readStoredMode(): PackagePricingMode {
  if (typeof window === "undefined") return "weekdays";
  const stored = sessionStorage.getItem(STORAGE_KEY);
  return stored === "weekends" ? "weekends" : "weekdays";
}

export function PackagePricingProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<PackagePricingMode>("weekdays");

  useEffect(() => {
    setModeState(readStoredMode());
  }, []);

  const setMode = useCallback((next: PackagePricingMode) => {
    setModeState(next);
    sessionStorage.setItem(STORAGE_KEY, next);
  }, []);

  const getDisplayPrice = useCallback(
    (basePrice: number) => getPackageDisplayPrice(basePrice, mode),
    [mode],
  );

  return (
    <PackagePricingContext.Provider
      value={{
        mode,
        setMode,
        isWeekend: mode === "weekends",
        getDisplayPrice,
      }}
    >
      {children}
    </PackagePricingContext.Provider>
  );
}

export function usePackagePricing() {
  const ctx = useContext(PackagePricingContext);
  if (!ctx) {
    throw new Error("usePackagePricing must be used within PackagePricingProvider");
  }
  return ctx;
}
