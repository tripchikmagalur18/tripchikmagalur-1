"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";
import { useCoarsePointer } from "@/hooks/use-coarse-pointer";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { count, openCart } = useCart();
  const isTouchDevice = useCoarsePointer();
  const mobileMenuId = "mobile-nav-menu";

  useBodyScrollLock(isOpen && isTouchDevice);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/chikmagalur-tour-packages", label: "Packages" },
    { href: "/places-to-visit-in-chikmagalur", label: "Places" },
    { href: "/2-day-chikmagalur-itinerary", label: "Itinerary" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/#contact", label: "Contact" },
  ];

  const isHashLink = (href: string) => href.includes("#") && (href.startsWith("/#") || href.startsWith("#"));

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (isHashLink(href)) {
      const hash = href.split("#")[1];
      if (pathname !== "/") {
        window.location.href = href;
        return;
      }
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cartLabel =
    count === 0 ? "Open cart, empty" : `Open cart, ${count} ${count === 1 ? "item" : "items"}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" aria-label="Main navigation">
      <div className="mx-2 sm:mx-4 mt-2 sm:mt-4">
        <div className="glass-dark rounded-2xl">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 gap-2">
              <Link
                href="/"
                className={`flex items-center gap-2 min-h-11 shrink min-w-0 ${focusRing}`}
                aria-label="Trip Chikmagalur home"
              >
                <span className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white truncate">
                  Trip Chikmagalur
                </span>
              </Link>

              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                {navLinks.map((link) =>
                  isHashLink(link.href) ? (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        if (pathname === "/") {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }
                      }}
                      className={`text-white/70 hover:text-white transition-colors font-medium text-sm tracking-wide py-2 ${focusRing}`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-white/70 hover:text-white transition-colors font-medium text-sm tracking-wide py-2 ${focusRing}`}
                      aria-current={pathname === link.href ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  type="button"
                  onClick={openCart}
                  className={`relative inline-flex items-center justify-center gap-2 min-h-11 min-w-11 md:min-w-0 md:px-5 md:py-2.5 rounded-full glass-button text-white text-sm font-medium ${focusRing}`}
                  aria-label={cartLabel}
                >
                  <ShoppingCart className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span className="hidden md:inline">Cart</span>
                  {count > 0 && (
                    <span
                      className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 min-w-[20px] h-5 px-1 rounded-full bg-sunset text-white text-[10px] font-bold flex items-center justify-center"
                      aria-hidden="true"
                    >
                      {count}
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className={`md:hidden min-h-11 min-w-11 p-2 text-white rounded-full hover:bg-white/10 transition ${focusRing}`}
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                  aria-controls={mobileMenuId}
                >
                  {isOpen ? (
                    <X className="w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Menu className="w-6 h-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {isOpen && (
              <div
                id={mobileMenuId}
                className="md:hidden py-4 border-t border-white/10 animate-fade-up max-h-[min(70dvh,calc(100dvh-6rem))] overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] touch-pan-y"
                role="navigation"
                aria-label="Mobile menu"
              >
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      {isHashLink(link.href) ? (
                        <a
                          href={link.href}
                          onClick={(e) => {
                            if (pathname === "/") {
                              e.preventDefault();
                            }
                            handleNavClick(link.href);
                          }}
                          className={`block text-white/70 hover:text-white transition-colors font-medium py-3 px-2 min-h-11 ${focusRing}`}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`block text-white/70 hover:text-white transition-colors font-medium py-3 px-2 min-h-11 ${focusRing}`}
                          aria-current={pathname === link.href ? "page" : undefined}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
