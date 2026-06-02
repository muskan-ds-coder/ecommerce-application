import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  id: String,
  title: String,
  price: Number,
  quantity: Number,
});

const orderSchema = new mongoose.Schema({
  items: [orderItemSchema],
  subtotal: Number,
  shipping: Number,
  total: Number,
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Order || mongoose.model('Order', orderSchema);
