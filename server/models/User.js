import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  // an array of post ID's
  posts: { type: [String] },
  profile_image: { type: String },
  // A collection of Object ID's of users (followers and following)
  followers: { type: [String] },
  following: { type: [String] },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema, 'users');