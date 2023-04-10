const Router = require("express").Router();
const middlaware = require("../app/middlaware/middlaware")
const UserController = require("../app/controllers/UserController");
Router.post("/register", UserController.register);
Router.post("/login", UserController.login);
Router.get("/getuser/:id",UserController.getUserByID)
Router.put("/add-coin/:id", UserController.addCoin);
module.exports = Router;
