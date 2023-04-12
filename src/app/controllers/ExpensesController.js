const Expenses = require("../model/Expenses");
const ExpensesController = {
  addExp: async (req, res) => {
    try {
      const newFee = await new Expenses(req.body);
      await newFee.save();
      res.status(200).json({ mess: "Đã thêm mới khoản chi" });
    } catch (error) {
      res.status(500).json({ mess: "Thêm mới thất bại!" });
    }
  },
  getAllFeetype: async (req, res) => {
    try {
      const listfee = await Expenses.find();
      res.status(200).json(listfee);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = ExpensesController;
