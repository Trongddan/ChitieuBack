import mongoose from 'mongoose';
const PostModel = mongoose.Schema({
  title: { type: String, required: true },
  picture: { type: String, required: true },
  content: { type: String, required: true },
  numberView: { type: Number, default: 0 },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  categoryId: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true },
  ],
});
const Post= mongoose.model('posts', PostModel);

export default Post