"use client";

import { useCart } from "@/components/CartProvider";

export default function AddToCartButton({ product }) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(product)}
      className="mt-6 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
    >
      Add to cart
    </button>
  );
}
