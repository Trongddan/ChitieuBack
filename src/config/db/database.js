import mongoose  from "mongoose";
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
export {Database}
