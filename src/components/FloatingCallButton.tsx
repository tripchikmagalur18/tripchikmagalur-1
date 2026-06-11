"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { PHONE_LINK } from "@/lib/whatsapp";

/** WhatsApp green — matches FloatingWhatsApp and chat widget */
const CALL_BUTTON_CLASS =
  "min-w-14 min-h-14 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2";

type FloatingCallButtonProps = {
  positionClassName?: string;
};

const FloatingCallButton = ({ positionClassName = "safe-bottom-fixed" }: FloatingCallButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed left-4 sm:left-6 z-40 flex items-center gap-3 ${positionClassName}`}
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
