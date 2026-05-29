import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log("MongoDB already connected, readyState=", mongoose.connection.readyState);
        return;
    }

    mongoose.set("strictQuery", false);
    mongoose.connection.on("connected", () => {
        console.log("Mongoose event: connected");
    });
    mongoose.connection.on("error", (err) => {
        console.error("Mongoose event: error", err);
    });
    mongoose.connection.on("disconnected", () => {
        console.log("Mongoose event: disconnected");
    });

    await mongoose.connect(process.env.MONGO_URI, {
        dbName: "ecom-app",
        serverSelectionTimeoutMS: 20000,
        connectTimeoutMS: 20000,
    });
    console.log("Connected to MongoDB");
};

export default connectDB;
