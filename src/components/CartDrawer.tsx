"use client";

import { useEffect, useId, useRef } from "react";
import Link from "next/link";
import { ShoppingCart, X, Trash2, MessageCircle, Minus, Plus } from "lucide-react";
import { useCart, isStayCartItem } from "@/context/CartContext";
import { formatBookingDate } from "@/lib/booking-date";
import { whatsappUrl } from "@/lib/whatsapp";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const CartDrawer = () => {
  const { isOpen, closeCart, items, removeItem, updateQuantity, total, clear } = useCart();
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const waMessage = `Hi Trip Chikmagalur! I'd like to book the following:\n\n${items
    .map((i, idx) => {
      const qty = i.quantity ?? 1;
      const line = i.price * qty;
      if (isStayCartItem(i)) {
        const dateLine = i.checkInDate
          ? `\n   • Check-in: ${formatBookingDate(i.checkInDate)}`
          : "";
        return `${idx + 1}. ${i.name}${dateLine}\n   • Adults: ${qty}\n   • Price: ₹${i.price.toLocaleString("en-IN")}/adult/night\n   • Subtotal: ₹${line.toLocaleString("en-IN")}`;
      }
      if (i.perPerson) {
        return `${idx + 1}. ${i.name}\n   • Price: ₹${i.price.toLocaleString("en-IN")}/person\n   • Members: ${qty}\n   • Subtotal: ₹${line.toLocaleString("en-IN")}`;
      }
      return `${idx + 1}. ${i.name}\n   • Price: ₹${i.price.toLocaleString()}/group\n   • Subtotal: ₹${line.toLocaleString()}`;
    })
    .join("\n\n")}\n\n----------------------\nTotal Bill: ₹${total.toLocaleString()}\n\nPlease confirm availability. Thank you!`;
  const waUrl = whatsappUrl(waMessage);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, closeCart]);

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
        tabIndex={-1}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
        className={`fixed top-0 right-0 h-full w-full max-w-full sm:max-w-[400px] bg-background border-l border-border z-[61] shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <header className="flex items-center justify-between px-4 sm:px-5 py-4 border-b border-border shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <ShoppingCart className="w-5 h-5 text-sunset shrink-0" aria-hidden="true" />
            <h2 id={titleId} className="text-lg font-display font-bold text-foreground truncate">
              Your Cart
            </h2>
            <span className="text-sm text-muted-foreground shrink-0" aria-live="polite">
              ({items.length})
            </span>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeCart}
            className={`min-w-11 min-h-11 p-2 rounded-full hover:bg-muted transition ${focusRing}`}
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-foreground" aria-hidden="true" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-5 py-4">
          {items.length === 0 ? (
            <div className="h-full min-h-[12rem] flex flex-col items-center justify-center text-center text-muted-foreground px-4">
              <ShoppingCart className="w-12 h-12 mb-3 opacity-40" aria-hidden="true" />
              <p className="font-medium text-foreground">Your cart is empty</p>
              <p className="text-sm mt-1">Add a stay, package, or activity to get started.</p>
            </div>
          ) : (
            <ul className="space-y-3" role="list">
              {items.map((item) => {
                const qty = item.quantity ?? 1;
                const lineTotal = item.price * qty;
                const isStay = isStayCartItem(item);
                return (
                  <li
                    key={item.id}
                    className="flex items-start justify-between gap-3 p-4 rounded-xl border border-border bg-card"
                  >
                    <div className="flex-1 min-w-0">
                      {item.link ? (
                        <Link
                          href={item.link}
                          onClick={closeCart}
                          className={`font-medium text-foreground hover:text-sunset transition block ${focusRing}`}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <p className="font-medium text-foreground">{item.name}</p>
                      )}
                      {isStay && item.checkInDate && (
                        <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1">
                          <span className="font-medium text-foreground">Check-in:</span>
                          {formatBookingDate(item.checkInDate)}
                        </p>
                      )}

                      <p className="text-sm text-sunset font-semibold mt-1">
                        ₹{lineTotal.toLocaleString("en-IN")}
                        <span className="text-muted-foreground font-normal text-xs ml-1">
                          {isStay
                            ? `(₹${item.price.toLocaleString("en-IN")}/night × ${qty} adults)`
                            : item.perPerson
                              ? `(₹${item.price.toLocaleString("en-IN")}/P × ${qty})`
                              : "/group"}
                        </span>
                      </p>

                      {item.perPerson && (
                        <div className="flex items-center flex-wrap gap-2 mt-3">
                          <span className="text-xs text-muted-foreground w-full sm:w-auto">
                            {isStay ? "Adults" : "People"}:
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, qty - 1)}
                            disabled={qty <= 1}
                            className={`min-w-11 min-h-11 w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition ${focusRing}`}
                            aria-label={`Decrease ${isStay ? "guests" : "people"} for ${item.name}. Currently ${qty}`}
                          >
                            <Minus className="w-4 h-4" aria-hidden="true" />
                          </button>
                          <span
                            className="min-w-[2rem] text-center text-base font-semibold text-foreground tabular-nums"
                            aria-live="polite"
                            aria-atomic="true"
                          >
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, qty + 1)}
                            className={`min-w-11 min-h-11 w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted transition ${focusRing}`}
                            aria-label={`Increase ${isStay ? "guests" : "people"} for ${item.name}. Currently ${qty}`}
                          >
                            <Plus className="w-4 h-4" aria-hidden="true" />
                          </button>
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className={`min-w-11 min-h-11 p-2 rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition shrink-0 ${focusRing}`}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer
            className="border-t border-border px-4 sm:px-5 py-4 space-y-3 shrink-0"
            style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="text-xl font-bold text-foreground" aria-live="polite">
                ₹{total.toLocaleString("en-IN")}
              </span>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 bg-sunset hover:bg-sunset/90 text-white py-3.5 rounded-full font-medium text-sm transition min-h-11 ${focusRing}`}
            >
              <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              Checkout via WhatsApp
            </a>
            <button
              type="button"
              onClick={clear}
              className={`w-full text-sm text-muted-foreground hover:text-destructive transition py-2 min-h-11 ${focusRing}`}
            >
              Clear cart
            </button>
          </footer>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
