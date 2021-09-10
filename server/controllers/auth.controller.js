// NO BUSINESS LOGIC HERE!!

import AuthService from '../services/authServices.js';
import Joi from 'joi';

const authController = {
  greet(req, res, next) {
    // throw Error('my new ERROR vro');
    res.json({
      "route": "/auth",
      "message": "Welcome to /auth endpoint",
      "version": "1.0.0",
      "author": "arsen1c"
    })
  },
  // make it async later
  login(req, res, next) {
    const userData = req.body;
    
    try {
      const authServiceInstance = new AuthService();
      const { user, token } = authServiceInstance.login(userData);
      res.json({user, token});
    } catch (error) {
      next(error);
    }
  },
  async register(req, res, next) {
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