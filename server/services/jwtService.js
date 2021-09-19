import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/index.js';

export const JWTService = {
  generateJWTToken(payload, expiry = '7d', secret=JWT_SECRET) {
    try {
      return jwt.sign(payload, secret, { expiresIn: expiry });
    } catch (error) {
      throw new Error('Error while generating JWT token.');
    }
  },

  verifyJWTToken(token, secret=JWT_SECRET) {
    try {
      return jwt.verify(token, secret=JWT_SECRET);
    } catch (error) {
      throw Error('Error verifying the JWT token');
    }
  }
}

