import mongoose from'mongoose';
const UserModel = new mongoose.Schema({
  name: { type: String, minlength: 8,required: true },
  password: { type: String, minlength: 8, required: true },
  email: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  token: { type: String, default: '' },
  avatar: { type: String, default: '' },
});
const User = mongoose.model('users', UserModel);
export default User
