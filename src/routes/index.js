const userRoute = require("./userRoute");
const feeRouter = require("./feeRoute")
const Route=(app)=> {
  app.use("/user", userRoute);
  app.use("/fee",feeRouter)
}
module.exports = Route;
