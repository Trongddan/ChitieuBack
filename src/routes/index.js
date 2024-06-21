import userRoute from "./userRoute.js";
import cateRoute from "./CategoryRoute.js";
import postRoute from "./PostRoute.js";
import imageRoute from "./ImageRoute.js";
// import expensesRoute from"./ExpensesRoute.js";
// import BookRoute  from'./BookRoute.js'
const Route = (app) => {
  app.use("/user", userRoute);
  app.use("/api/cate", cateRoute);
  app.use("/api/post", postRoute);
  app.use("/api/image", imageRoute);
  // app.use("/exp", expensesRoute);
  // app.use("/book",BookRoute)
};
export default Route;
