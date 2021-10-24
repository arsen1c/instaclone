// NO BUSINESS LOGIC HERE!!

import AuthService from '../services/authServices.js';
import { NODE_ENV } from '../config/index.js';
import AppError from '../utils/AppError.js';

const authController = {
  // Login method
  async login(req, res, next) {
    const userData = req.body;
    try {
      const authServiceInstance = new AuthService();
      const result = await authServiceInstance.login(userData);
      // Todo: Set cookies insead of sending simple json response
      res.cookie('token', result.token, {
        httpOnly: true,
        sameSite: 'none',
        secure: NODE_ENV === 'development' ? false : true,
        path: '/',
      });
      res.status(200).json({ result });
    } catch (error) {
      return next(AppError.wrongCredentials(error.message));
    }
  },
  // Register(user) method
  async register(req, res, next) {
    const userData = req.body;

    try {
      const authServiceInstance = new AuthService();
      const result = await authServiceInstance.register(userData);
      res.cookie('token', result.token, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        path: '/',
      });
      res.status(200).json(result);
    } catch(error) {
      // console.log(error);
      return next(error);
    }
  }
}

export default authController;