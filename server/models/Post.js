import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
  // ID. Tip: Theres a isValidObjectId function.
  author: { type: String, default: Date.now },
  image_link: { type: String, required: true },
  caption: { type: String },
  location: { type: String },
  likes: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Post', postSchema, 'posts');