"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { count, openCart } = useCart();

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
        // Navigate to home first, then scroll
        window.location.href = href;
        return;
      }
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <div className="glass-dark rounded-2xl">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16 md:h-18">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-display font-bold text-white">
                  Trip Chikmagalur
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
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
                      className="text-white/70 hover:text-white transition-colors font-medium text-sm tracking-wide"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors font-medium text-sm tracking-wide"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>

              {/* Cart Button */}
              <div className="hidden md:block">
                <button
                  onClick={openCart}
                  className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-button text-white text-sm font-medium"
                  aria-label={`Open cart, ${count} items`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Cart
                  {count > 0 && (
                    <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-sunset text-white text-[10px] font-bold flex items-center justify-center">
                      {count}
                    </span>
                  )}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-white"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden py-4 border-t border-white/10 animate-fade-up">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) =>
                    isHashLink(link.href) ? (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => {
                          if (pathname === "/") {
                            e.preventDefault();
                          }
                          handleNavClick(link.href);
                        }}
                        className="text-white/70 hover:text-white transition-colors font-medium py-2"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-white/70 hover:text-white transition-colors font-medium py-2"
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      openCart();
                    }}
                    className="relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full glass-button text-white font-medium w-full"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Cart{count > 0 ? ` (${count})` : ""}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
