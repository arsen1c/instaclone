import { User } from '../models/index.js';
import bcrypt from 'bcrypt';
import { HASHING_SALT } from '../config/index.js'

export default class AuthService {
  // Make it async later
  login(userData) {
    // Perform Database query and get data back
    return { user: userData, token: '1234xxxx1234' } // 
  }

  async register(userData) {
    let result;
    // Todo: Hash the passwords
    let { username, email, password } = userData;
    // input validatoin
    email = email.trim();

    // Check if user already exists
    const user = await User.exists({ email });
    // Todo: Create new custom error handler for custom status codes
    if (user) throw Error('User already exists');

    try {
      const hashedPassword = await bcrypt.hash(password, Number(HASHING_SALT));
      
      result = await User.create({ username, email, password: hashedPassword });
    } catch (error) {
      throw Error(error);
    }

    return result;
  }
}