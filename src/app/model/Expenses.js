const mongoose = require("mongoose");
const Expenses = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    time: { type: Date, default: Date.now() },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("expenses", Expenses);
