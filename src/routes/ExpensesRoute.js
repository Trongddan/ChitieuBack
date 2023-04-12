const Router = require("express").Router();
const middlaware = require("../app/middlaware/middlaware");
const ExpensesController = require("../app/controllers/ExpensesController");
Router.get("/all-exp", ExpensesController.getAllFeetype);

module.exports = Router;
