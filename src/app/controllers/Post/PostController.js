import { cloud } from '../../middlaware/cloudinary.js';
import Post from '../../model/Post.js';
import path from 'path';
const PostController = {
  addPost: async (req, res) => {
    try {
      const categoryId = req.body.categoryId.split(',');
      const newPost = await new Post({
        title: req.body.title,
        content: req.body.content,
        numberView: req.body.numberView,
        userId: req.body.userId,
        categoryId: categoryId,
        picture: null,
      });
      await cloud.uploader.upload(
        req.files.picture[0].path,
        {
          resource_type: 'image',
          folder: 'codeleader',
          public_id: path.basename(req.files.picture[0].path),
        },
        (err, result) => {
          if (err) {
            return res.status(500).json('có lỗi xảy ra');
          }
          newPost.picture = result.url;
        }
      );
      await newPost.save();
      return res.status(200).json('Thêm thành công');
    } catch (error) {
      return res.status(500).json('that bai');
    }
  },
  deletePost: async (req, res) => {
    try {
      await Post.findByIdAndRemove(req.params.id);
      return res.status(200).json('Xóa thành công');
    } catch (error) {
      return res.status(500).json('Thất bại');
    }
  },
  updatePost: async (req, res) => {
    try {
      const body = req.body;
      if (body.categoryId) {
        body.categoryId = body.categoryId.split(',');
      }
      if (req.files) {
        await cloud.uploader.upload(
          req.files.picture[0].path,
          {
            resource_type: 'image',
            folder: 'codeleader',
            public_id: path.basename(req.files.picture[0].path),
          },
          (err, result) => {
            if (err) {
              return res.status(500).json('có lỗi xảy ra');
            }
            body.picture = result.url;
          }
        );
      }
      const postFound = await Post.findById(req.params.id);
      await postFound.updateOne({ $set: body });
      res.status(200).json('update thành công');
    } catch (error) {
      return res.status(500).json('Thất bại');
    }
  },
  // get film by Theme
  getPostByCategoryId: async (req, res) => {
    try {
      const postList = await Post.find({categoryId:req.params.cateId})
      console.log(postList)
      res.status(200).json(postList);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // getAllPost: async (req, res) => {
  //   try {
  //     const PostgoryList = await Category.find();
  //     res.status(200).json(CategoryList);
  //   } catch (error) {
  //     return res.status(500).json('that bai');
  //   }
  // },
};
export default PostController;
