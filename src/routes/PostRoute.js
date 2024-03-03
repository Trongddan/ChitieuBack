import express from 'express';
import middlaware from '../app/middlaware/middlaware.js';
import { validate } from '../utils/validate.js';
import { PostSchema } from '../app/controllers/Post/PostSchame.js';
import PostController from '../app/controllers/Post/PostController.js';
import upload from '../app/middlaware/upload.js';

const Router = express.Router();
Router.post(
  '/add-post',
  upload.fields([{ name: 'picture', maxCount: 1 }]),
  validate(PostSchema),
  PostController.addPost
);
Router.delete('/delete-post/:id', PostController.deletePost);
Router.put(
  '/update-post/:id',
  upload.fields([{ name: 'picture', maxCount: 1 }]),
  PostController.updatePost
);
Router.get('/get-post-by-cate/:cateId', PostController.getPostByCategoryId);
export default Router;
