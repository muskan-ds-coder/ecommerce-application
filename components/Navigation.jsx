"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CartNav from "@/components/CartNav";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/checkout", label: "Checkout" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2 text-sm font-medium text-slate-700">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-full px-4 py-2 transition font-bold ${
              isActive
                ? "bg-slate-100 text-slate-900"
                : "hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
      <CartNav />
    </nav>
  );
}
