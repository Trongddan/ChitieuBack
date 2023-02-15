const Router = require("express").Router();
const UserController = require("../app/controllers/UserController")
Router.post("/",UserController.register)
module.exports = Router
