export const metadata = {
  title: "About - Bengaluru Society Marketplace",
  description: "Learn more about the society marketplace for members in Bengaluru.",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">About the Marketplace</p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">A friendly marketplace for Bengaluru society members</h1>
          <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            This marketplace is built for members of your society in Bengaluru to discover local products, share offers, and support a community-driven storefront. Browse goods listed by trusted sellers from your neighborhood, and checkout with confidence.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Community Focused</h2>
            <p className="mt-3 text-slate-600">
              Everything here is designed for society members in Bengaluru. That means easier coordination, localized support, and better understanding of deliveries and services.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Trusted Sellers</h2>
            <p className="mt-3 text-slate-600">
              We encourage transparent listings and friendly interactions between neighbors. Sellers can share products, while buyers can enjoy a safe local shopping experience.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Everyday Essentials</h2>
            <p className="mt-3 text-slate-600">
              Discover daily essentials, fitness items, home goods, electronics, and more — all in one place. The marketplace is built to help society members find what they need quickly.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Designed for Bengaluru</h2>
            <p className="mt-3 text-slate-600">
              Local context matters. The platform is intended for a society audience in Bengaluru, with simple navigation and clear product browsing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
