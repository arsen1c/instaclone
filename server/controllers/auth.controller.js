import AuthService from '../services/authServices.js';

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
    try {
      const userData = req.body;

      const authServiceInstance = new AuthService();
      const { user, token } = authServiceInstance.login(userData);
      res.json({user, token});
    } catch (error) {
      next(error);
    }
  }
}

export default authController;