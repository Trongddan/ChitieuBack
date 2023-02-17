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
      console.log(newUser);
      const saved = await newUser.save();
      res.status(200).json({ mess: "Đăng ký thành công" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //dang nhap
  login: async (req, res) => {
    try {
      const username = req.body.username;
      const userFound = await User.findOne({ username: username });
      if (!userFound) {
        res.status(404).json({ mess: "tài khoản không tồn tại" });
      } else {
        const password = req.body.password;
        const ispass = bcrypt.compareSync(password, userFound.password);
        if (ispass) {
          res
            .status(200)
            .json({ ...userFound, ...{ mess: "đăng nhập thành công" } });
        } else {
          res.status(404).json({ mess: "Mật khẩu không chính xác" });
        }
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // cập nhật coin:
  addCoin: async (req, res) => {
    try {
      const id = req.params.id;
      const userFound = await User.findById(id);
      if (userFound) {
        console.log(Number(req.body.coin) + Number(userFound.coin));
        const total = Number(req.body.coin) + Number(userFound.coin);
        await userFound.updateOne({
          $set: { coin: total },
        });
        res.status(200).json({ mess: "Thêm ngân sách thành công" });
      } else {
        res.status(404).json({ mess: "người dùng không tồn tại" });
      }
    } catch (error) {
      res.status(500).json({ mess: "Thêm ngân sách thất bại" });
    }
  },
};

module.exports = UserController;
