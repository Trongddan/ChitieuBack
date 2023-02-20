const FeeType = require("../model/feeType");
const FeeTypeController = {
  addFeeType: async (req, res) => {
    try {
        const newFee = await new FeeType(req.body);
        await newFee.save();
        res.status(200).json({mess:"Thêm mới loại tiền thành công!"})
    } catch (error) {
        res.status(500).json({mess:"Thêm mới thất bại!"})
    }
  },
  getAllFeetype: async (req, res) => {
    try {
        const listfee = await FeeType.find();
        res.status(200).json(listfee)
    } catch (error) {
        res.status(500).json(error)
    }
  },
};
module.exports = FeeTypeController
