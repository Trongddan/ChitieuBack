import { cloud } from "../../middlaware/cloudinary.js";
import Post from "../../model/Post.js";
import path from "path";
const PostController = {
  addPost: async (req, res) => {
    try {
      const categoryId = req.body.categoryId.split(",");
      const newPost = await new Post({
        title: req.body.title,
        content: req.body.content,
        numberView: req.body.numberView,
        userId: req.body.userId,
        categoryId: categoryId,
        picture: req.body.picture,
      });
      await newPost.save();
      return res.status(200).json("Thêm thành công");
    } catch (error) {
      console.log(error);
      return res.status(500).json("that bai");
    }
  },
  deletePost: async (req, res) => {
    try {
      await Post.findByIdAndRemove(req.params.id);
      return res.status(200).json("Xóa thành công");
    } catch (error) {
      return res.status(500).json("Thất bại");
    }
  },
  updatePost: async (req, res) => {
    try {
      const body = req.body;
      if (body.categoryId) {
        body.categoryId = body.categoryId.split(",");
      }
      const postFound = await Post.findById(req.params.id);
      await postFound.updateOne({ $set: body });
      res.status(200).json("update thành công");
    } catch (error) {
      console.log(error);
      return res.status(500).json("Thất bại");
    }
  },
  // get film by Theme
  getListPost: async (req, res) => {
    try {
      const category = req.query.categoryId;
      const postName = req.query.name;
      const dateStr = req.query.date; // Get date as string first

      const query = {}; // Initialize an empty query object

      // Dynamically add filter conditions based on query parameters:
      if (category) {
        query.categoryId = category;
      }

      if (postName) {
        query.title = { $regex: postName };
      }

      if (dateStr) {
        const date = new Date(dateStr);
        date.setHours(0, 0, 0, 0); // Start of day
        const nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 1);
        nextDay.setHours(0, 0, 0, 0); // Start of next day
        query.createdAt = { $gte: date, $lt: nextDay };
      }
      //phan trang
      const page = req.query.page || 1;
      const limit = req.query.limit || 10;
      const skip = (page - 1) * limit;

      const postList = await Post.find(query)
        .populate("categoryId")
        .skip(skip)
        .limit(limit);

      const totalDocs = await Post.find(query).countDocuments();
      const totalPages = Math.ceil(totalDocs / limit);
      res.status(200).json({ totalPages: totalPages, data: postList });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  getPostById: async (req, res) => {
    try {
      const postDetail = await Post.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { numberView: 1 } },
        { new: true } // Optionally, return the updated document
      ).populate("categoryId");

      res.status(200).json(postDetail);
    } catch (error) {
      return res.status(500).json("that bai");
    }
  },
  uploadImage: async (req, res) => {
    try {
      if (req.files) {
        await cloud.uploader.upload(
          req.files.picture[0].path,
          {
            resource_type: "image",
            folder: "codeleader",
            public_id: path.basename(req.files.picture[0].path),
          },
          (err, result) => {
            if (err) {
              return res.status(500).json("có lỗi xảy ra");
            }
            return res.status(200).json({ url: result.url });
          }
        );
      }
    } catch (error) {
      return res.status(error);
    }
  },
};
export default PostController;
