// NO BUSINESS LOGIC HERE!!

import AuthService from '../services/authServices.js';
import { NODE_ENV } from '../config/index.js';

const authController = {
  // Login method
  async login(req, res, next) {
    const userData = req.body;
    console.log('jeeje', userData);
    try {
      const authServiceInstance = new AuthService();
      const result = await authServiceInstance.login(userData);

      // Todo: Set cookies insead of sending simple json response
      res.cookie('token', result.token, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        path: '/',
      });
      res.status(200).json({ result });
    } catch (error) {
      return next(error);
    }
  },
  // Register(user) method
  async register(req, res, next) {
    console.log(req.cookies)
    const userData = req.body;

    try {
      const authServiceInstance = new AuthService();
      const result = await authServiceInstance.register(userData);
      res.status(200).json(result);
    } catch(error) {
      return next(error);
    }
  }
}

export default authController;