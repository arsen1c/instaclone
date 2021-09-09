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
    // Validation schema
    const loginSchema = Joi.object({
      username: Joi.string().alphanum().min(3).max(30).required(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    });

    const userData = req.body;
    
    const { error } = loginSchema.validate(userData);
    console.log(error);
    if (error) return next(error);

    try {
      const authServiceInstance = new AuthService();
      const { user, token } = authServiceInstance.login(userData);
      res.json({user, token});
    } catch (error) {
      next(error);
    }
  },
  async register(req, res, next) {
    // Validation schema
    const registerSchema = Joi.object({
      username: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
      repeat_password: Joi.ref('password')
    });

    const userData = req.body;

    const { error } = registerSchema.validate(userData);
    if (error) return next(error);

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