export const metadata = {
  title: "Checkout - Bengaluru Society Marketplace",
  description: "Review your order and complete checkout for the society marketplace.",
};

export default function CheckoutPage() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Checkout</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Review your order</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Confirm the items you want to purchase from the marketplace. This checkout page is a placeholder for your order summary and payment flow.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Cart items</h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  name: "Blue Sneakers",
                  description: "Comfortable sneakers for everyday wear",
                  price: 59.99,
                },
                {
                  name: "Wireless Earbuds",
                  description: "Noise-cancelling earbuds with long battery life",
                  price: 99.99,
                },
              ].map((item) => (
                <div key={item.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-900">{item.name}</p>
                      <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                    </div>
                    <p className="font-semibold text-slate-900">₹{item.price.toFixed(0)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Order summary</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Subtotal</span>
                <span>₹159</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Delivery</span>
                <span>₹20</span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-base font-semibold text-slate-900">
                <span>Total</span>
                <span>₹179</span>
              </div>
            </div>
            <button className="mt-8 w-full rounded-3xl bg-slate-900 px-4 py-4 text-base font-semibold text-white transition hover:bg-slate-800">
              Place Order
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
