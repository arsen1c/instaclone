import express from 'express';
import postsController from '../../controllers/posts.controller.js';
const router = express.Router();

router.get('/', postsController.greet);


export default router;