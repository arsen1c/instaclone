import express from 'express';
import postsController from '../../controllers/posts.controller.js';
import multer from 'multer';
import { isAuth } from '../middlewares/isAuth.js';
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Uploads is the Upload_folder_name
    cb(null, "uploads")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

const upload = multer({ dest: 'uploads/', storage });


router.post('/', postsController.protectedRoute);
router.post('/post', upload.single('postImage'), postsController.newPost);
router.get('/allpost', isAuth, postsController.allPosts);
router.get('/posts/:username', postsController.posts);

export default router;