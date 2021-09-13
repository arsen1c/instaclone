import { v2 as cloudinary } from 'cloudinary';
import PostService from '../services/postServices.js';
import cloudinaryConfig from '../config/cloudinary.js';
import path from 'path';

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
  async newPost(req, res, next) {
    const { caption } = req.body;
    if (!req.file) return next(new Error('Image missing!')); 

    try {
      const result = await uploadFile(`${path.resolve()}/uploads/${req.file.originalname}`);

      const post = {
        author: '613b7a4e8acc1941e5a4dd50',
        caption,
        image_link: result.url
      }

      const postServiceInstance = new PostService();
      const response = await postServiceInstance.createNewPost(post);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
}

export default postsController;