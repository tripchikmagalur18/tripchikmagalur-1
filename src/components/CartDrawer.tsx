"use client";

import Link from "next/link";
import { ShoppingCart, X, Trash2, MessageCircle, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartDrawer = () => {
  const { isOpen, closeCart, items, removeItem, updateQuantity, total, clear } = useCart();

  const waText = encodeURIComponent(
    `Hi Trip Chikmagalur! I'd like to book the following:\n\n${items
      .map((i, idx) => {
        const qty = i.quantity ?? 1;
        const line = i.price * qty;
        if (i.perPerson) {
          return `${idx + 1}. ${i.name}\n   • Price: ₹${i.price.toLocaleString()}/person\n   • Members: ${qty}\n   • Subtotal: ₹${line.toLocaleString()}`;
        }
        return `${idx + 1}. ${i.name}\n   • Price: ₹${i.price.toLocaleString()}/group\n   • Subtotal: ₹${line.toLocaleString()}`;
      })
      .join("\n\n")}\n\n----------------------\nTotal Bill: ₹${total.toLocaleString()}\n\nPlease confirm availability. Thank you!`
  );
  // wa.link short links don't forward ?text=, so use wa.me to prefill the cart message
  const waUrl = `https://wa.me/96551246540?text=${waText}`;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background border-l border-border z-[61] shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
      >
        <header className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-sunset" />
            <h2 className="text-lg font-display font-bold text-foreground">Your Cart</h2>
            <span className="text-sm text-muted-foreground">({items.length})</span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-muted transition"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground">
              <ShoppingCart className="w-12 h-12 mb-3 opacity-40" />
              <p className="font-medium">Your cart is empty</p>
              <p className="text-sm mt-1">Add a package to get started.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => {
                const qty = item.quantity ?? 1;
                const lineTotal = item.price * qty;
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
                          className="font-medium text-foreground hover:text-sunset transition block truncate"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <p className="font-medium text-foreground truncate">{item.name}</p>
                      )}
                      <p className="text-sm text-sunset font-semibold mt-1">
                        ₹{lineTotal.toLocaleString()}
                        <span className="text-muted-foreground font-normal text-xs ml-1">
                          {item.perPerson ? `(₹${item.price}/P × ${qty})` : "/group"}
                        </span>
                      </p>

                      {item.perPerson && (
                        <div className="flex items-center gap-2 mt-3">
                          <span className="text-xs text-muted-foreground mr-1">People:</span>
                          <button
                            onClick={() => updateQuantity(item.id, qty - 1)}
                            disabled={qty <= 1}
                            className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="min-w-[1.5rem] text-center text-sm font-semibold text-foreground">
                            {qty}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, qty + 1)}
                            className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted transition"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-border px-5 py-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="text-xl font-bold text-foreground">
                ₹{total.toLocaleString()}
              </span>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-sunset hover:bg-sunset/90 text-white py-3 rounded-full font-medium text-sm transition"
            >
              <MessageCircle className="w-4 h-4" />
              Checkout via WhatsApp
            </a>
            <button
              onClick={clear}
              className="w-full text-xs text-muted-foreground hover:text-destructive transition"
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
