import { v2 as cloudinary } from 'cloudinary';
import PostService from '../services/postServices.js';
import cloudinaryConfig from '../config/cloudinary.js';
import path from 'path';
import { response } from 'express';
import AppError from '../utils/AppError.js';

cloudinary.config(cloudinaryConfig);

function uploadFile(imageName) {
  try {
    return cloudinary.uploader.upload(imageName, (error, result) => {
      if (error) throw Error(error);

      return result;
    });
  } catch (e) {
    return {error: e.message};
  }
}

const postsController = {
  protectedRoute(req, res, next) {
    console.log(req.body);
    res.send('<h1>HELLO WORLD</h1>');
  },

  async allPosts (req, res, next) {
    try {
      const postServiceInstance = new PostService();
      const response = await postServiceInstance.getAllPosts();
      res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  },

  async allUsers (req, res, next) {
    try {
      const postServiceInstance = new PostService();
      const response = await postServiceInstance.getAllUsers();
      res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  },

  async user (req, res, next) {
    try {
      const { username } = req.params;
      const postServiceInstance = new PostService();
      const response = await postServiceInstance.getUserDetails(username);
      res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  },

  async newPost(req, res, next) {
    const { caption } = req.body;
    const user = req.user;

    if (!user) return next(AppError.unAuthorized());

    if (!req.file) return next(new Error('Image missing!')); 

    try {
      const result = await uploadFile(`${path.resolve()}/uploads/${req.file.originalname}`);

      const post = {
        author: user,
        caption,
        image_link: result.url
      }

      const postServiceInstance = new PostService();
      const response = await postServiceInstance.createNewPost(user, post);
      res.status(200).json({ response });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  },

  async feed(req, res, next) {
    // Grab the token
    const { token } = req.cookies;

    try {
      if (!token) return AppError.unAuthorized();

      const postServiceInstance = new PostService();
      const { feedPosts } = await postServiceInstance.feed(token);
      
      if (!feedPosts) throw AppError.unAuthorized();

      res.json({ feedPosts });
    } catch (error) {
      return next(error);
    }
  },

  async like(req, res, next) {
    const { postId } = req.body;

    try {
      const postServiceInstance = new PostService();
      const response = await postServiceInstance.addLike(postId);

      res.json({ response });
    } catch (error) {
      return next(error);
    }
  },

   async unlike(req, res, next) {
    const { postId } = req.body;

    try {
      const postServiceInstance = new PostService();
      const response = await postServiceInstance.removeLike(postId);

      res.json({ response });
    } catch (error) {
      return next(error);
    }
  } 
}

export default postsController;