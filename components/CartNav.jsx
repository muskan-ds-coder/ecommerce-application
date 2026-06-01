"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartNav() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
    >
      Cart{totalItems > 0 ? ` (${totalItems})` : ""}
    </Link>
  );
}
