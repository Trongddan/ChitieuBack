import { addCateSchema } from "../app/controllers/Category/CategorySchema.js";
import express from "express";
import middlaware from "../app/middlaware/middlaware.js";
import ImageController from "../app/controllers/Image/ImageController.js";
import { validate } from "../utils/validate.js";
import CategoryController from "../app/controllers/Category/CategoryController.js";
import upload from "../app/middlaware/upload.js";
const Router = express.Router();
Router.post(
  "/upload-image",
  upload.fields([{ name: "picture", maxCount: 1 }]),
  middlaware.verifyToken,
  ImageController.uploadImage
);

export default Router;
