const Router = require("express").Router();
const middlaware = require("../app/middlaware/middlaware")
const FeeTypeController = require("../app/controllers/FeeTypeController");
Router.get("/all-fee", FeeTypeController.getAllFeetype);

module.exports = Router;