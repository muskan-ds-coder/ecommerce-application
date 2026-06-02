"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/CartProvider";

export default function CartNav() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const isActive = pathname === "/cart";

  return (
    <Link
      href="/cart"
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        isActive ? "bg-slate-100 text-slate-900" : "text-white hover:bg-slate-800"
      }`}
    >
      Cart{totalItems > 0 ? ` (${totalItems})` : ""}
    </Link>
  );
}
