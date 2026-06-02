import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log("MongoDB already connected, readyState=", mongoose.connection.readyState);
        if (mongoose.connection.db) {
            console.log("Using database:", mongoose.connection.db.databaseName);
        }
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

    const dbName = process.env.MONGO_DB || "ecom-app";

    await mongoose.connect(process.env.MONGO_URI, {
        dbName,
        serverSelectionTimeoutMS: 20000,
        connectTimeoutMS: 20000,
    });

    console.log("Connected to MongoDB");
    if (mongoose.connection.db) {
        console.log("Using database:", mongoose.connection.db.databaseName);
    }
};

export default connectDB;
