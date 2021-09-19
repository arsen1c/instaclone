import AppError from '../../utils/AppError.js';
import { JWTService } from '../../services/jwtService.js';

export const isAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return next(AppError.unAuthorized());
  }

  try {
    const { username } = JWTService.verifyJWTToken(token);
    req.user = username; 
    return next();
  } catch (error) {
    return next(error);
  }

}