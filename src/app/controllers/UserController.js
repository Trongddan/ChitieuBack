const User = require("../model/User");
const bcrypt = require("bcrypt");
const UserController = {
  //dang ki
  register: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      const newUser = await new User({
        username: req.body.username,
        password: hashed,
      });
      await newUser.save();
      res.status(200).json({ mess: "Đăng ký thành công" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = UserController;
