import { User, Post } from '../models/index.js';
import AppError from '../utils/AppError.js';
import { JWTService } from './jwtService.js';

export default class PostService {
  async createNewPost(username, data) {
    try {
      const user = await User.findOne({ username: username });
      const newPost = await Post.create(data);
      user.posts.push(newPost.id);
      await user.save();

      // console.log(newPost); // => newPost.id
      return { status: 'success' } // => { success: true, postId: newPost.id };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async getAllPosts() {
    try {
      const result = await Post.find();
      return result; 
    } catch (error) {
      throw Error(error);
    }
  }

  async getAllUsers() {
    try {
      const result = await User.find();
      return result; 
    } catch (error) {
      throw Error(error);
    }
  }


  async getUserDetails(username) {
    try {
      const user = await User.findOne({ username });
      console.log(user.posts);
      if (!user) throw Error('User not found');

      const posts = await Post.find({ _id: {$in: user.posts} });
      
      if (!posts) {
        throw Error('Not user found');
      }

      return { user, posts }; 
    } catch (error) {
      throw Error(error);
    }
  }

  async addLike(id) {
   try {
     const post = await Post.findOne({_id: id});

      if (!post) throw Error('Post not found');

      post.likes++;
      await post.save();

      return true;
    } catch (error) {
      throw Error(error);
    }
  }

  async removeLike(id) {
   try {
     const post = await Post.findOne({_id: id});

      if (!post) throw Error('Post not found');

      post.likes--;
      await post.save();

      return true;
    } catch (error) {
      throw Error(error);
    }
  }

  async feed(token) {
    // Verify the token

    try {
      const { username } = JWTService.verifyJWTToken(token);
      if (!username) return AppError.unAuthorized('unAuthorized');

      const user = await User.findOne({ username });

      if (!user) throw Error('User no found');

      const feedPosts = await Post.find({ "author": { $in: user.following } });

      return { feedPosts }
    } catch (error) {
      return new Error(error);
    }
  }
}