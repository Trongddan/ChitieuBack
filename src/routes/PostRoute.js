import express from "express";
import middlaware from "../app/middlaware/middlaware.js";
import { validate } from "../utils/validate.js";
import { PostSchema } from "../app/controllers/Post/PostSchame.js";
import PostController from "../app/controllers/Post/PostController.js";
import upload from "../app/middlaware/upload.js";

const Router = express.Router();
Router.post(
  "/add-post",
  validate(PostSchema),
  middlaware.verifyToken,
  PostController.addPost
);
Router.delete(
  "/delete-post/:id",
  middlaware.verifyToken,
  PostController.deletePost
);
Router.put(
  "/update-post/:id",
  validate(PostSchema),
  middlaware.verifyToken,
  PostController.updatePost
);
Router.get("/get-post", PostController.getListPost);
Router.get("/get-detail/:id", PostController.getPostById);
export default Router;
