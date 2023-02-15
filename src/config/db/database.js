const mongoose = require("mongoose");
const Database = {
  connect: () => {
    mongoose.connect(
      "mongodb+srv://doantrongdan:Trongdan123@cluster0.rmgfe1g.mongodb.net/?retryWrites=true&w=majority",
      () => {
        console.log("connected success");
      }
    );
  },
};
module.exports = Database;
