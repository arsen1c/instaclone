import AppError from '../../utils/AppError.js';

export const isAuth = (req, res, next) => {
  const token = null;
  if (!token) {
    next(AppError.unAuthorized());
  }
}