import CartNav from "@/components/CartNav";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bengaluru Society Marketplace",
  description: "A friendly neighborhood marketplace for society members in Bengaluru.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <CartProvider>
          <header className="border-b border-slate-200 bg-blue-400 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <Link href="/" className="text-lg font-semibold tracking-wide text-slate-900">
                Bengaluru Society Market
              </Link>
              <Navigation />
            </div>
          </header>
          <main className="flex-1">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
