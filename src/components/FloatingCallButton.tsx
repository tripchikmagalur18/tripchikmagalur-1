"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { PHONE_LINK } from "@/lib/whatsapp";

/** Teal gradient — matches site chat/support accent used alongside the Saif chat widget */
const CALL_BUTTON_CLASS =
  "min-w-14 min-h-14 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(174,72%,40%)] focus-visible:ring-offset-2 bg-gradient-to-br from-[hsl(174,72%,40%)] to-[hsl(195,80%,45%)]";

type FloatingCallButtonProps = {
  positionClassName?: string;
};

const FloatingCallButton = ({ positionClassName = "bottom-6" }: FloatingCallButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed left-4 sm:left-6 z-50 flex items-center gap-3 ${positionClassName}`}
      style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <a
        href={PHONE_LINK}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className={CALL_BUTTON_CLASS}
        aria-label="Call Trip Chikmagalur at +91 6363131585"
      >
        <Phone className="w-6 h-6 text-white" strokeWidth={2.25} aria-hidden="true" />
      </a>

      <div
        className={`hidden sm:block px-4 py-2 bg-white rounded-full shadow-lg text-sm font-medium text-gray-800 whitespace-nowrap transition-all duration-300 ease-out ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
        }`}
        aria-hidden={!isHovered}
      >
        Call us
      </div>
    </div>
  );
};

export default FloatingCallButton;
