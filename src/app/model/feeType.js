const mongoose = require("mongoose");
const FeeType = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    user: { type: mongoose.Types.ObjectId, ref: "users"},
  },
  { timestamps: true }
);
module.exports = mongoose.model("feetype", FeeType);
