import { cloud } from "../../middlaware/cloudinary.js";
import path from "path";
const ImageController = {
  uploadImage: async (req, res) => {
    try {
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
          return res.status(200).json({ picture: result.url });
        }
      );
    } catch (error) {}
  },
};
export default ImageController;
