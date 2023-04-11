const mongoose = require("mongoose");
const Database = {
  connect: () => {
    mongoose.connect(
      "mongodb+srv://doantrongdan:trongdan123@cluster0.rmgfe1g.mongodb.net/?retryWrites=true&w=majority",
      
    ).then(() => {
      console.log("connected success");
    }).catch((err)=>console.log(err))
  },
};
module.exports = Database;
