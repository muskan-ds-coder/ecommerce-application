import connectDB from "@/lib/db";
import Product from "@/models/Product";

export async function GET() {
    try {
        console.log("Connecting to DB with URI:", process.env.MONGO_URI ? "Set" : "NOT SET");
        await connectDB();
        console.log("DB connected successfully");
        const products = await Product.find();
        console.log(`Found ${products.length} products`);
        return Response.json(products);
    } catch (error) {
        console.error("Products API Error:", error.message);
        console.error("Full error:", error);
        return Response.json(
            { error: "Failed to fetch products", message: error.message, hint: "Check MONGO_URI in .env.local" },
            { status: 500 }
        );
    }
}