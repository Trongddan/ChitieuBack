const Router = require("express").Router();
const middlaware = require("../app/middlaware/middlaware");
const ExpensesController = require("../app/controllers/ExpensesController");
Router.get("/all-exp/:userId", ExpensesController.getAllFeetype);
Router.post("/add-exp", ExpensesController.addExp);

module.exports = Router;
