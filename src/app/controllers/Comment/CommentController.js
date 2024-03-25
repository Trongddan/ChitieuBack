import Comment from "../../model/Comment.js";
import Post from "../../model/Post.js";
const CommentController = {
  addComment: async (req, res) => {
    try {
      const body = req.body;
      const newComment = await new Comment(body);
      await newComment.save();
      await Post.updateOne(
        { _id: body.postId },
        { $inc: { numberComment: 1 } }
      );
      return res.status(200).json({ mess: "Thêm thành công" });
    } catch (error) {
      return res.status(500).json({ err: "something went wrong!" });
    }
  },
  getCommentbyPostId: async (req, res) => {
    try {
      const listComment = await Comment.find({
        postId: req.query.postId,
      }).populate({
        path: "userId",
        select: "avatar name",
      });
      return res.status(200).json(listComment);
    } catch (error) {
      return res.status(500).json({ err: "something went wrong!" });
    }
  },
  deleteComment: async (req, res) => {
    try {
      const commentFound = await Comment.findByIdAndRemove(req.params.id);
      return res.status(200).json({ mess: "Xoá thành công" });
    } catch (error) {
      return res.status(500).json({ err: "something went wrong!" });
    }
  },
  updateComment: async (req, res) => {
    try {
      const commentFound = await Category.findById(req.params.id);
      await commentFound.updateOne({ $set: req.body });
      res.status(200).json(commentFound);
    } catch (error) {
      return res.status(500).json({ err: "something went wrong!" });
    }
  },
};
export default CommentController;
