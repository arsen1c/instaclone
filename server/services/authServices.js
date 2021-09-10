import { User } from '../models/index.js';
import bcrypt from 'bcrypt';
import { HASHING_SALT, JWT_SECRET } from '../config/index.js'
import AppError from '../utils/AppError.js';
import jwt from 'jsonwebtoken';

export default class AuthService {
  async login(userData) {
    let { username, password } = userData;

    try {
      const user = await User.findOne({ username });
      if (!user) return AppError.wrongCredentials('Oops! Looks like theres no user with that username');

      // compare password
      const match = await bcrypt.compare(password, user.password);
      if (!match) return AppError.wrongCredentials();

      let token = this.generateJWTToken({ id: user.id });

      return { _id: user.id, token };
    } catch (error) {
      throw Error(error);
    }

  }

  async register(userData) {
    let { username, email, password } = userData;
    // input validatoin
    email = email.trim();

    // Check if user already exists
    const user = await User.exists({ email });
    const usernameExists = await User.exists({ username });
    // Todo: Create new custom error handler for custom status codes
    if (user) return AppError.userAlreadyExists('Sorry, that email already exists.');
    if (usernameExists) return AppError.userAlreadyExists('Sorry, that username already exists');

    try {
      const hashedPassword = await bcrypt.hash(password, Number(HASHING_SALT));
      let user = await User.create({ username, email, password: hashedPassword });
      let token = this.generateJWTToken({ id: user.id });

      return { _id: user.id, token }
    } catch (error) {
      throw Error(error);
    }
  }

  generateJWTToken(payload, expiry = '7d', secret=JWT_SECRET) {
    try {
      return jwt.sign(payload, secret, { expiresIn: expiry });
    } catch (error) {
      throw new Error('Error while generating JWT token.');
    }
  }

}

