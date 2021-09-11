import { DEBUG_MODE } from '../../config/index.js';
import pkg from 'joi';
import AppError from '../../utils/AppError.js';

const { ValidationError } = pkg;

/**
 * @returns {Object} error status code and error message
 * */
const errorHandler = (error, _req, res, _next) => {
  // console.log(error);
  let statusCode = 500;
  let data = {
    message: 'Internal server error',
    ...(DEBUG_MODE === 'true' && { originalError: error.message }),
  };

  if (error instanceof ValidationError) {
    statusCode = 422;
    data.message = error.message;
  }

  if (error instanceof AppError) {
    statusCode = error.statusCode;
    data.message = error.message;
  }

  return res.status(statusCode).json(data);
}

export default errorHandler;