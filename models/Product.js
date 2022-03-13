const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    seller: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    category: { type: String },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Product", productSchema);
