const mongoose = require("mongoose");
const Database = {
  connect: () => {
    mongoose.connect(
      "mongodb://127.0.0.1:27017/chitieu",
      
    ).then(() => {
      console.log("connected success");
    }).catch((err)=>console.log(err))
  },
};
module.exports = Database;
