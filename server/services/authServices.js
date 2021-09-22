import { User } from '../models/index.js';
import bcrypt from 'bcrypt';
import { HASHING_SALT, JWT_SECRET } from '../config/index.js'
import AppError from '../utils/AppError.js';
import { JWTService } from './jwtService.js';

export default class AuthService {
  async login(userData) {
    let { username, password } = userData;
    try {
      const user = await User.findOne({ username });
      if (!user) throw AppError.wrongCredentials('Oops! No such username found');

      // compare password
      const match = await bcrypt.compare(password, user.password);
      if (!match) throw Error(AppError.wrongCredentials('INvalid password')) ;

      let token = JWTService.generateJWTToken({ username: user.username });

      return { token };
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
    if (user) throw AppError.userAlreadyExists('Sorry, that email already exists.');
    if (usernameExists) throw AppError.userAlreadyExists('Sorry, that username already exists');

    try {
      const hashedPassword = await bcrypt.hash(password, Number(HASHING_SALT));
      let user = await User.create({ username, email, password: hashedPassword });
      user.following.push(user.username);
      await user.save();

      let token = await JWTService.generateJWTToken({ username: user.username });

      return { token }
    } catch (error) {
      throw Error(error);
    }
  }
}

