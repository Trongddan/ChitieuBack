const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const transporter = require('./EmailController');
const UserController = {
  // sinh ra ma token:
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user._id,
        admin: user.isAdmin,
      },
      'dankenvil',
      { expiresIn: '30d' }
    );
  },
  generateVerifyToken: (user) => {
    return jwt.sign(
      {
        email: user.email,
        username: user.username,
        password: user.password,
      },
      'dankenvil',
      { expiresIn: '5m' }
    );
  },
  // sinh ma refresh token
  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user._id,
        admin: user.isAdmin,
      },
      'dankenvil',
      { expiresIn: '30d' }
    );
  },
  createVerifiedAccount: async (req, res) => {
    try {
      const genSalt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.user.password, genSalt);
      req.user.password = password;
      const newUser = await new User(req.user);
      await newUser.save();
      return res.redirect('http://localhost:3000/login');
    } catch (error) {
      return res.status(500).json({
        mess: 'email is required',
      });
    }
  },
  register: async (req, res) => {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const email = req.body.email;
      if (username.length < 8 || password.length < 8) {
        return res.status(500).json({
          mess: 'username và password phải có ít nhất 8 ký tự',
        });
      }
      if (!email) {
        return res.status(500).json({
          mess: 'Vui lòng nhập email',
        });
      }
      const userFound = await User.findOne({ email: email });
      if (userFound) {
        return res.status(400).json({ mess: 'Tài khoản đã tồn tại' });
      }
      const accessToken = UserController.generateVerifyToken({
        email: email,
        username: username,
        password: password,
      });
      transporter.sendMail(
        {
          from: 'Code Leader', // sender address
          to: email, // list of receivers
          subject: 'Verify Code Leader', // Subject line
          text: 'Verify Code Leader', // plain text body
          html: `<p>Please click here to verify account:  <a href="http://localhost:8000/user/verify?token=${accessToken}">Verify</a></p>`, // html body
        },
        (err, info) => {
          if (err) {
            console.log(err);
          }
        }
      );
      res.status(200).json({
        mess: `Một tin nhắn đã được gửi tới email: ${email}. Vui lòng kiểm tra`,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //dang nhap
  login: async (req, res) => {
    try {
      const username = req.body.username;
      const userFound = await User.findOne({
        $or: [{ username: username }, { email: username }],
      });
      if (!userFound) {
        res.status(404).json({ mess: 'tài khoản không tồn tại' });
      } else {
        const password = req.body.password;
        const ispass = bcrypt.compareSync(password, userFound.password);
        if (ispass) {
          const accessToken = UserController.generateAccessToken(userFound);
          const { password, ...other } = userFound._doc;
          res.status(200).json({
            ...other,
            accessToken,
            ...{ mess: 'đăng nhập thành công' },
          });
        } else {
          res.status(404).json({ mess: 'Mật khẩu không chính xác' });
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
        res.status(200).json({ mess: 'Thêm ngân sách thành công' });
      } else {
        res.status(404).json({ mess: 'người dùng không tồn tại' });
      }
    } catch (error) {
      res.status(500).json({ mess: 'Thêm ngân sách thất bại' });
    }
  },
  //cập nhật coin khi thêm bill
  updateCoin: async (req, res) => {
    try {
      const id = req.params.id;
      const userFound = await User.findById(id);
      if (userFound) {
        const totalRemain = Number(userFound.coin) - Number(req.body.coin);
        await userFound.updateOne({
          $set: { coin: totalRemain },
        });
        res.status(200).json({ mess: 'Thêm ngân sách thành công' });
      } else {
        res.status(404).json({ mess: 'người dùng không tồn tại' });
      }
    } catch (error) {
      res.status(500).json({ mess: 'Thêm ngân sách thất bại' });
    }
  },
  // lay thong tin user qua Id
  getUserByID: async (req, res) => {
    try {
      const userId = req.params.id;
      const userFound = await User.findById(userId);
      res.status(200).json(userFound);
    } catch (error) {
      res.status(500).json({ mess: 'Không có user' });
    }
  },
};

module.exports = UserController;
