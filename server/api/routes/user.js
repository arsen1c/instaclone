import express from 'express';
import postsController from '../../controllers/posts.controller.js';
import { isAuth } from '../middlewares/isAuth.js';
const router = express.Router();

router.post('/', postsController.protectedRoute);

export default router;