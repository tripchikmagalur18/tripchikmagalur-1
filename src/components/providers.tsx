"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";
import { PackagePricingProvider } from "@/context/PackagePricingContext";
import CartDrawer from "@/components/CartDrawer";
import { ScrollLockRecovery } from "@/components/ScrollLockRecovery";
import { ChatWidgetScripts } from "@/components/chat-widget-scripts";
import { SaraChatStickyButton } from "@/components/SaraChatStickyButton";
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
          <ChatWidgetScripts />
          <SaraChatStickyButton />
          <Toaster />
          <Sonner />
          </PackagePricingProvider>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
