import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        available: {
            type: Boolean,
            required: true
        },
        dateCreated: { type: Date, default: Date.now }
    }
);

export default mongoose.model("Product", productSchema);