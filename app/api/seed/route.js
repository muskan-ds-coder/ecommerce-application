import connectDB from "@/lib/db";

import Product from "@/models/Product";

export async function GET() {
    await connectDB();
    await Product.deleteMany();

    await Product.insertMany([
  {
    title: "Blue Sneakers",
    description: "Comfortable blue sneakers for everyday wear",
    price: 59.99,
    category: "Footwear",
    image: "https://media.istockphoto.com/id/1249496770/photo/running-shoes.jpg?s=612x612&w=0&k=20&c=b4MahNlk4LH6H1ksJApfnlQ5ZPM3KGhI5i_yqhGD9c4="
  },
  {
    title: "Red T-Shirt",
    description: "Soft and stylish red t-shirt made from organic cotton",
    price: 29.99,
    category: "Apparel",
    image: "https://media.istockphoto.com/id/178527852/photo/plain-red-t-shirt-on-a-white-background.jpg?s=612x612&w=0&k=20&c=W05Lg-8LZ17ia4v0hLyowEMWm1xsWPg_-pK-_oHz5wg="
  },
  {
    title: "Green Jacket",
    description: "Warm and durable green jacket for cold weather",
    price: 79.99,
    category: "Apparel",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Black Hoodie",
    description: "Cozy black hoodie with front pockets",
    price: 49.99,
    category: "Apparel",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "White Running Shoes",
    description: "Lightweight running shoes designed for comfort",
    price: 89.99,
    category: "Footwear",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Leather Wallet",
    description: "Premium leather wallet with multiple card slots",
    price: 34.99,
    category: "Accessories",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Silver Watch",
    description: "Elegant silver wristwatch with water resistance",
    price: 129.99,
    category: "Accessories",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Wireless Earbuds",
    description: "Noise-cancelling wireless earbuds with long battery life",
    price: 99.99,
    category: "Electronics",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Gaming Mouse",
    description: "Ergonomic gaming mouse with customizable buttons",
    price: 45.99,
    category: "Electronics",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and waterproof design",
    price: 69.99,
    category: "Electronics",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Yoga Mat",
    description: "Eco-friendly yoga mat with non-slip surface",
    price: 24.99,
    category: "Fitness",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Dumbbell Set",
    description: "Adjustable dumbbell set for home workouts",
    price: 149.99,
    category: "Fitness",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Coffee Maker",
    description: "Automatic coffee maker with programmable timer",
    price: 89.99,
    category: "Home Appliances",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Air Fryer",
    description: "Compact air fryer for healthier cooking",
    price: 119.99,
    category: "Home Appliances",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Desk Lamp",
    description: "LED desk lamp with adjustable brightness",
    price: 39.99,
    category: "Home Decor",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Wooden Chair",
    description: "Modern wooden chair with cushioned seat",
    price: 159.99,
    category: "Furniture",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Office Desk",
    description: "Spacious office desk with storage drawers",
    price: 249.99,
    category: "Furniture",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Travel Backpack",
    description: "Durable backpack with multiple compartments",
    price: 74.99,
    category: "Bags",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Sunglasses",
    description: "UV-protected stylish sunglasses",
    price: 19.99,
    category: "Accessories",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Beanie Hat",
    description: "Warm knit beanie for winter season",
    price: 14.99,
    category: "Apparel",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Digital Camera",
    description: "High-resolution camera with 4K video support",
    price: 499.99,
    category: "Electronics",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Smartphone Stand",
    description: "Adjustable stand compatible with all smartphones",
    price: 12.99,
    category: "Accessories",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Laptop Sleeve",
    description: "Protective sleeve for laptops up to 15 inches",
    price: 27.99,
    category: "Accessories",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Winter Boots",
    description: "Insulated boots designed for snowy weather",
    price: 109.99,
    category: "Footwear",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Sports Cap",
    description: "Breathable sports cap with adjustable strap",
    price: 16.99,
    category: "Accessories",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Graphic Hoodie",
    description: "Trendy hoodie with unique graphic print",
    price: 54.99,
    category: "Apparel",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Ceramic Vase",
    description: "Minimalist ceramic vase for home decoration",
    price: 31.99,
    category: "Home Decor",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Table Fan",
    description: "Compact table fan with quiet operation",
    price: 42.99,
    category: "Home Appliances",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Electric Kettle",
    description: "Fast-boiling electric kettle with auto shut-off",
    price: 35.99,
    category: "Home Appliances",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Mountain Bike Helmet",
    description: "Protective helmet with lightweight design",
    price: 64.99,
    category: "Sports",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Tennis Racket",
    description: "Professional-grade tennis racket for all skill levels",
    price: 139.99,
    category: "Sports",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Camping Tent",
    description: "Waterproof tent suitable for 4 people",
    price: 199.99,
    category: "Outdoor",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Sleeping Bag",
    description: "Warm sleeping bag ideal for camping trips",
    price: 59.99,
    category: "Outdoor",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Cookware Set",
    description: "Non-stick cookware set with 10 pieces",
    price: 179.99,
    category: "Kitchen",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Knife Set",
    description: "Professional stainless steel kitchen knife set",
    price: 89.99,
    category: "Kitchen",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Wall Clock",
    description: "Modern wall clock with silent movement",
    price: 22.99,
    category: "Home Decor",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Perfume Spray",
    description: "Long-lasting fragrance with floral notes",
    price: 49.99,
    category: "Beauty",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Hair Dryer",
    description: "Powerful hair dryer with multiple heat settings",
    price: 58.99,
    category: "Beauty",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Portable Charger",
    description: "High-capacity power bank with fast charging",
    price: 39.99,
    category: "Electronics",
    image: "https://picsum.photos/seed/picsum/500/300"
  },
  {
    title: "Smart Fitness Band",
    description: "Fitness tracker with heart rate monitoring",
    price: 79.99,
    category: "Electronics",
    image: "https://picsum.photos/seed/picsum/500/300"
  }
]);

    return Response.json({ message: "Database seeded successfully" });
}
