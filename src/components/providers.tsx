"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";
import { PackagePricingProvider } from "@/context/PackagePricingContext";
import CartDrawer from "@/components/CartDrawer";
import { ScrollLockRecovery } from "@/components/ScrollLockRecovery";
import { HomepageSaraChat } from "@/components/HomepageSaraChat";
import { GlobalFloatingCallButton } from "@/components/GlobalFloatingCallButton";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <PackagePricingProvider>
          <ScrollLockRecovery />
          {children}
          <CartDrawer />
          <GlobalFloatingCallButton />
          <HomepageSaraChat />
          <Toaster />
          <Sonner />
          </PackagePricingProvider>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
