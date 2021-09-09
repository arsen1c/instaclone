import express from 'express';
const router = express.Router();
import authController from '../../controllers/auth.controller.js';

router.get('/', authController.greet);
router.post('/login', authController.login);

export default router;