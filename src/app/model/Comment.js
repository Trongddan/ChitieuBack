import mongoose from "mongoose";
const CommentModel = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
      required: true,
    },
    content: { type: String, required: true },
  },
  { timestamps: true }
);
const Comment = mongoose.model("comments", CommentModel);
export default Comment;
