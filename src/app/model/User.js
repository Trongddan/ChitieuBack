const mongoose = require("mongoose");
const User = new mongoose.Schema({
  username: { type: String, minlength: 8, unique: true, required: true },
  password: { type: String, minlength: 8, required: true, unique: true },
  avatar: { type: String },
  coin: {
    type: Number,
    validate: {
      validator: function (value) {
        return value >= 0;
      },
      message: (props) => `${props.value} must be a positive number!`,
    },
  },
});
module.exports = mongoose.model("users", User);
