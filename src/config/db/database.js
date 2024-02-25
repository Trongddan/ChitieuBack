const mongoose = require("mongoose");
const Database = {
  connect: () => {
    mongoose
      .connect(
        "mongodb+srv://doandan301:Trongdan123@blogapp.1kcuawa.mongodb.net/?retryWrites=true&w=majority&appName=blogapp"
      )
      .then(() => {
        console.log("connected success");
      })
      .catch((err) => console.log(err));
  },
};
module.exports = Database;
