const userRoute = require("./userRoute");
const Route=(app)=> {
  app.use("/user", userRoute);
}
module.exports = Route;
