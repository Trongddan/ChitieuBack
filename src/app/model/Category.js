import mongoose from 'mongoose';
const CategoryModel = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  des: { type: String, required: true },
});
const Category = mongoose.model('categories', CategoryModel);
export default Category;
