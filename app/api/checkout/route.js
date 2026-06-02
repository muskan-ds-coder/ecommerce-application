import connectDB from '@/lib/db';
import Order from '@/models/Order';

export async function POST(request) {
  try {
    await connectDB();

    const order = await request.json();

    if (!order?.items || !Array.isArray(order.items) || order.items.length === 0) {
      return Response.json({ error: "Cart cannot be empty when placing an order." }, { status: 400 });
    }

    // Persist order to MongoDB
    const created = await Order.create({
      items: order.items,
      subtotal: order.subtotal,
      shipping: order.shipping,
      total: order.total,
    });

    return Response.json({
      message: "Order placed successfully!",
      order: created,
    }, { status: 201 });
  } catch (error) {
    console.error("Checkout API error:", error);
    return Response.json(
      { error: "Failed to place order", detail: error.message || String(error) },
      { status: 500 }
    );
  }
}
