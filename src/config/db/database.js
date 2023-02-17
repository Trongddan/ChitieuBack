const mongoose = require("mongoose");
const Database = {
  connect: () => {
    mongoose.connect(
      "mongodb://localhost:27017/chitieu",
      () => {
        console.log("connected success");
      }
    );
  },
};
module.exports = Database;
