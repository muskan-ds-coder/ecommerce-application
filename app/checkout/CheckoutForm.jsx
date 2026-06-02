"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const deliveryFee = 20;
  const totalAmount = totalPrice + deliveryFee;

  const handlePlaceOrder = async () => {
    if (cart.length === 0) {
      setErrorMessage("Your cart is empty. Add items before placing an order.");
      setStatusMessage("");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setStatusMessage("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map((item) => ({
            id: item._id,
            title: item.title || item.name,
            price: item.price,
            quantity: item.quantity,
          })),
          subtotal: totalPrice,
          shipping: deliveryFee,
          total: totalAmount,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to place order. Please try again.");
      }

      clearCart();
      setStatusMessage(data.message || "Order placed successfully!");
    } catch (error) {
      setErrorMessage(error.message || "Unable to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Checkout</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Review your order</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Confirm the items you want to purchase from the marketplace and place your order. This checkout page now submits your cart to the backend.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Cart items</h2>
            <div className="mt-6 space-y-4">
              {cart.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-slate-600">
                  <p className="text-base font-medium">Your cart is empty.</p>
                  <p className="mt-2 text-sm">Add items in the marketplace before placing an order.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item._id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-900">{item.title || item.name}</p>
                        <p className="mt-1 text-sm text-slate-600">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-slate-900">₹{(item.price * item.quantity).toFixed(0)}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Order summary</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Subtotal</span>
                <span>₹{totalPrice.toFixed(0)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Delivery</span>
                <span>₹{deliveryFee.toFixed(0)}</span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-base font-semibold text-slate-900">
                <span>Total</span>
                <span>₹{totalAmount.toFixed(0)}</span>
              </div>
            </div>
            {statusMessage && <p className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">{statusMessage}</p>}
            {errorMessage && <p className="mt-4 rounded-2xl bg-rose-50 p-4 text-sm text-rose-700">{errorMessage}</p>}
            <button
              type="button"
              onClick={handlePlaceOrder}
              disabled={isSubmitting || cart.length === 0}
              className="mt-8 w-full rounded-3xl bg-slate-900 px-4 py-4 text-base font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {isSubmitting ? "Placing order..." : "Place Order"}
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
