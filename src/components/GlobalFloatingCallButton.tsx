"use client";

import { usePathname } from "next/navigation";
import FloatingCallButton from "@/components/FloatingCallButton";

/** Global call FAB — hidden on homepage mobile (dock has Call). */
export function GlobalFloatingCallButton() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className={isHome ? "floating-call-global home-call-fab" : "floating-call-global"}>
      <FloatingCallButton />
    </div>
  );
}
