import { registerValidator } from '../app/controllers/User/UserSchema.js';
import express from 'express';
import middlaware from '../app/middlaware/middlaware.js';
import UserController from '../app/controllers/User/UserController.js';
import { validate } from '../utils/validate.js';
const Router = express.Router();
Router.post('/register', validate(registerValidator), UserController.register);
Router.post('/login', UserController.login);
Router.post('/api/google/auth', UserController.googleLoginOrRegister);
Router.get('/getuser/:id', UserController.getUserByID);
Router.get(
  '/verify',
  middlaware.verifyTokenEmail,
  UserController.createVerifiedAccount
);
Router.put('/add-coin/:id', UserController.addCoin);
Router.put('/update-coin/:id', UserController.updateCoin);
export default Router;
