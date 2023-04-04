const mongoose = require("mongoose");
const Database = {
  connect: () => {
    mongoose.connect(
      "mongodb+srv://danken:dankenvil@chitieu.iwa4cmj.mongodb.net/?retryWrites=true&w=majority",
      () => {
        console.log("connected success");
      }
    );
  },
};
module.exports = Database;
