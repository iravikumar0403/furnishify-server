const mongoose = require("mongoose");
const wishListSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: { type: Array, default: [] },
  },
  { timestamps: true }
);
module.exports = new mongoose.model("Wishlist", wishListSchema);
