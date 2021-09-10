import express from 'express';
const router = express.Router();
import authController from '../../controllers/auth.controller.js';
import schemaValidator from '../middlewares/schemaValidator.js';

router.post('/login', schemaValidator.validateLoginUser , authController.login);
router.post('/register', schemaValidator.validateRegisterUser, authController.register);

export default router;