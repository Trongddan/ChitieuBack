import express from "express";
import middlaware from "../app/middlaware/middlaware.js";
import { validate } from "../utils/validate.js";
import { PostSchema } from "../app/controllers/Post/PostSchame.js";
import PostController from "../app/controllers/Post/PostController.js";
import upload from "../app/middlaware/upload.js";

const Router = express.Router();
Router.post(
  "/add-image",
  upload.fields([{ name: "picture", maxCount: 1 }]),
  middlaware.verifyToken,
  PostController.uploadImage
);
export default Router;
