const mongoose = require("mongoose");
const User = new mongoose.Schema({
  username: { type: String, minlength: 8, unique: true, required: true },
  password: { type: String, minlength: 8, required: true },
  avatar: { type: String },
  coin: {
    type: Number,
    validate: {
      validator: function (value) {
        return value >= 0;
      },
      message: (props) => `${props.value} must be a positive number!`,
    },
    default: 0,
  },
  expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: "expenses" }],
  isAdmin: { type: Boolean, default: false },
});
module.exports = mongoose.model("users", User);
