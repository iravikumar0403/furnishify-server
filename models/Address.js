const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    address: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model("Address", addressSchema);
