const Router = require("express").Router();
const UserController = require("../app/controllers/UserController");
Router.post("/", UserController.register);
Router.post("/login", UserController.login);
Router.put("/add-coin/:id", UserController.addCoin);
module.exports = Router;
