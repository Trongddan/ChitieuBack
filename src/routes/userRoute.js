const Router = require("express").Router();
const middlaware = require("../app/middlaware/middlaware")
const UserController = require("../app/controllers/UserController");
Router.post("/", UserController.register);
Router.post("/login", UserController.login);
Router.get("/getuser/:id",middlaware.verifyTokenUser,UserController.getUserByID)
Router.put("/add-coin/:id", UserController.addCoin);
module.exports = Router;
