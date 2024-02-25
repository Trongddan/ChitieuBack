const Router = require("express").Router();
const middlaware = require("../app/middlaware/middlaware")
const UserController = require("../app/controllers/UserController");
Router.post("/register", UserController.register);
Router.post("/login", UserController.login);
Router.get("/getuser/:id",UserController.getUserByID)
Router.get("/verify",middlaware.verifyTokenEmail,UserController.createVerifiedAccount)
Router.put("/add-coin/:id", UserController.addCoin);
Router.put("/update-coin/:id", UserController.updateCoin);
module.exports = Router;
