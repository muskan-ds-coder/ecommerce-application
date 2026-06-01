import connectDB from "@/lib/db";
import Product from "@/models/Product";
import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";

const randomizeUrl = (url) => {
  if (!url) return "/placeholder.png";
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}random=${Math.random().toString(36).slice(2)}`;
};

async function getProduct(id) {
  await connectDB();
  return Product.findById(id).lean();
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-semibold text-slate-900">Product not found</h1>
          <p className="mt-4 text-slate-600">Please return to the marketplace and select a different item.</p>
          <Link href="/" className="mt-8 inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Back to shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <img
            src={randomizeUrl(product.image)}
            alt={product.title}
            className="h-95 w-full rounded-3xl object-cover"
          />
          <div className="mt-8 space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{product.category || "Marketplace item"}</p>
            <h1 className="text-4xl font-semibold text-slate-900">{product.title}</h1>
            <p className="max-w-3xl text-base leading-8 text-slate-600">{product.description}</p>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-slate-900">₹{product.price?.toFixed(0)}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">Bengaluru society special</span>
            </div>
            <AddToCartButton product={product} />
            <Link href="/cart" className="inline-flex rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Go to cart
            </Link>
          </div>
        </div>

        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Why shop here?</h2>
            <p className="mt-3 text-slate-600">
              This marketplace is built for your society in Bengaluru, so you can browse trusted local items and checkout with a community-first experience.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">Fast delivery inside society</p>
              <p className="mt-2 text-sm text-slate-600">Buy items and expect quick coordination with sellers nearby.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">Secure neighborhood shopping</p>
              <p className="mt-2 text-sm text-slate-600">A safe, familiar marketplace designed for society members.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
