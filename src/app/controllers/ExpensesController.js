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
      const today = new Date();
      today.setHours(0, 0, 0, 0); // set giờ phút giây về 0 để lấy ngày đầu tiên của ngày hôm nay
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1); // lấy ngày hôm sau để sử dụng trong truy vấn
      const listfee = await Expenses.find({
        createdAt: { $gte: today, $lt: tomorrow },
      });
      res.status(200).json(listfee);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = ExpensesController;
