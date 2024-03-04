import Category from '../../model/Category.js';
const CategoryController = {
  addCate: async (req, res) => {
    try {
      // const cateFound = await Category.find({ name: req.name });
      // if (cateFound) {
      //   return res.status(400).json({ mess: 'Danh mục đã tồn tại' });
      // }
      const newCate = await new Category(req.body);
      await newCate.save();
      return res.status(200).json({ mess: 'Thêm thành công' });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deleteCate: async (req, res) => {
    try {
      const cateFound = await Category.findByIdAndRemove(req.params.id);
      return res.status(200).json('xoa thanh cong');
    } catch (error) {
      return res.status(500).json('thất bại');
    }
  },
  updateCategory: async (req, res) => {
    try {
      const CategoryFound = await Category.findById(req.params.id);
      await CategoryFound.updateOne({ $set: req.body });
      res.status(200).json('update thanh cong');
    } catch (error) {
      return res.status(500).json('that bai');
    }
  },
  getAllCategory: async (req, res) => {
    try {
      const CategoryList = await Category.find();
      res.status(200).json(CategoryList);
    } catch (error) {
      return res.status(500).json('that bai');
    }
  },
};
export default CategoryController;
