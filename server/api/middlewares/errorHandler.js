import { DEBUG_MODE } from '../../config/index.js';

/**
 * @returns {Object} error status code and error message
 * */
const errorHandler = (error, req, res, next) => {
  let statusCode = 500;
  let data = {
    message: 'Internal server error',
    ...(DEBUG_MODE === 'true' && { originalError: error.message }),
  };

  return res.status(statusCode).json(data);
}

export default errorHandler;