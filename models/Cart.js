const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: { type: Array, default: [] },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Cart", cartSchema);