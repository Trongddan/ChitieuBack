const userRoute = require("./userRoute");
const expensesRoute = require("./ExpensesRoute");
const Route = (app) => {
  app.use("/user", userRoute);
  app.use("/exp", expensesRoute);
};
module.exports = Route;
