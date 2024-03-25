import express from "express";
import middlaware from "../app/middlaware/middlaware.js";
import { validate } from "../utils/validate.js";
import CommentController from "../app/controllers/Comment/CommentController.js";

const Router = express.Router();
Router.post("/add-comment", CommentController.addComment);
Router.delete("/delete-comment/:id", CommentController.deleteComment);
Router.get("/get-comment", CommentController.getCommentbyPostId);
Router.put("/update-comment/:id", CommentController.updateComment);
export default Router;
