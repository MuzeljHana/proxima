import express from "express";
import mongoose from "mongoose";
import products from "./routes/products";

mongoose.connect("mongodb://localhost:27017/db",
    { user: process.env.MONGO_USER, pass: process.env.MONGO_PASS })
    .then(() => {
        const app = express();
        app.use(express.json());

        app.use("/products", products);

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server started on port: ${port}`);
        })
    });