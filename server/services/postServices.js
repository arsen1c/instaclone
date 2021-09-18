import { User, Post } from '../models/index.js';

export default class PostService {
  async createNewPost(data) {
    try {
      const newPost = await Post.create(data);
      return { success: true }
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

  async getPosts(username) {
    try {
      const result = await Post.find({ author: username });
      if (!result) {
        throw Error('Not user found');
      }
      return result; 
    } catch (error) {
      throw Error(error);
    }
  }
}