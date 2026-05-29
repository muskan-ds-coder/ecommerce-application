"use client"
import { useEffect, useState } from "react";

export default function Home() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError(err.message);
      });
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Shop</p>
          <h1 className="mt-2 text-4xl font-semibold text-slate-900 sm:text-5xl">
            All Products
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
            Browse every product in the store.
          </p>
        </header>

        {error ? (
          <div className="rounded-3xl border border-red-300 bg-red-50 p-12 text-center shadow-sm">
            <p className="text-lg font-medium text-red-900">Error Loading Products</p>
            <p className="mt-2 text-sm text-red-700">{error}</p>
            <p className="mt-3 text-xs text-red-600">Check your MONGO_URI environment variable and database connection.</p>
          </div>
        ) : products.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-12 text-center shadow-sm">
            <p className="text-lg font-medium text-slate-700">Loading products...</p>
            <p className="mt-2 text-sm text-slate-500">Just a moment while we fetch the latest items.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <article
                key={product._id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-64 bg-slate-100">
                  <img
                    src={product.image || "/placeholder.png"}
                    alt={product.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 cursor-pointer">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    {product.category || "Uncategorized"}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold text-slate-900">
                    {product.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="text-lg font-semibold text-slate-900">
                      ${product.price?.toFixed(2)}
                    </span>
                    <button
                      type="button"
                      className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                    >
                      View
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}