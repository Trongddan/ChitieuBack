import { addCateSchema } from '../app/controllers/Category/CategorySchema.js';
import express from 'express';
import middlaware from '../app/middlaware/middlaware.js';

import { validate } from '../utils/validate.js';
import CategoryController from '../app/controllers/Category/CategoryController.js';
const Router = express.Router();
Router.post(
  '/add-category',
  validate(addCateSchema),
  CategoryController.addCate
);
Router.put(
  '/update-category/:id',
  CategoryController.updateCategory
);
Router.delete(
  '/delete-category/:id',
  CategoryController.deleteCate
);
Router.get(
  '/list-category',
  CategoryController.getAllCategory
);
export default Router;
