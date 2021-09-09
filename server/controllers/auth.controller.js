import AuthService from '../services/authServices.js';

const authController = {
  greet(req, res, next) {
    res.json({
      "route": "/auth",
      "message": "Welcome to /auth endpoint",
      "version": "1.0.0",
      "author": "arsen1c"
    })
  },
  login(req, res, next) {
    const userData = req.body;

    const authService = new AuthService();
    const data = authService.login(userData);
    res.json({user: data});
  }
}

export default authController;