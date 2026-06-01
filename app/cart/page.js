"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { cart, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart();

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Your Cart</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Review items before checkout</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            This cart is stored locally in your browser so you can add products and review them before moving to checkout.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
            <p className="text-lg font-medium text-slate-700">Your cart is empty.</p>
            <p className="mt-3 text-sm text-slate-500">Add products from the marketplace to see them here.</p>
            <Link href="/" className="mt-6 inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Browse products
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item._id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="min-w-22.5 overflow-hidden rounded-3xl bg-slate-100 sm:h-28 sm:w-28">
                      <img src={item.image || "/placeholder.png"} alt={item.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                      <div className="mt-4 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item._id, item.quantity - 1)}
                          className="rounded-full border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                        >
                          -
                        </button>
                        <span className="text-sm font-semibold text-slate-900">Qty: {item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item._id, item.quantity + 1)}
                          className="rounded-full border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3 text-right">
                      <p className="text-lg font-semibold text-slate-900">₹{(item.price * item.quantity).toFixed(0)}</p>
                      <button
                        type="button"
                        onClick={() => removeItem(item._id)}
                        className="text-sm font-medium text-red-600 transition hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Order summary</h2>
              <div className="mt-6 space-y-4 text-slate-600">
                <div className="flex items-center justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toFixed(0)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Shipping</span>
                  <span>₹20</span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-base font-semibold text-slate-900">
                  <span>Total</span>
                  <span>₹{(totalPrice + 20).toFixed(0)}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={clearCart}
                className="mt-8 w-full rounded-3xl bg-red-600 px-4 py-4 text-base font-semibold text-white transition hover:bg-red-700"
              >
                Clear cart
              </button>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
