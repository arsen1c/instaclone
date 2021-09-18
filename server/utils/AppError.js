/**
 * A custom error handler with methods like
 *  
 *  - userAlreadyExists
 *  - wrongCredentials
 * */
export default class AppError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  };

  /**
   * @returns StatusCode: 409. User already exists. 
   * */
  static userAlreadyExists(message) {
    return new AppError(409, message);
  }
  /**
   * @returns StatusCode: 401. Invalid credentials. 
   * 
   * */
  static wrongCredentials(message = 'Invalid credentials') {
    return new AppError(401, message);
  }
  /**
   * @returns StatusCode: 403. Unauthorized. 
   * 
   * */
  static unAuthorized() {
    return new AppError(403, 'UnAuthorized');
  }

};