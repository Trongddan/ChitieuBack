const userRoute = require("./userRoute");
const expensesRoute = require("./ExpensesRoute");
const BookRoute = require('./BookRoute')
const Route = (app) => {
  app.use("/user", userRoute);
  app.use("/exp", expensesRoute);
  app.use("/book",BookRoute)
};
module.exports = Route;
