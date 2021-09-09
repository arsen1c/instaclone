import { User } from '../models/index.js';

export default class AuthService {
  // Make it async later
  login(userData) {
    // Perform Database query and get data back
    return { user: userData, token: '1234xxxx1234' } // 
  }

  async register(userData) {
    let result;
    // Todo: Hash the passwords
    const { username, email, password } = userData;

    const user = new User({ username, email, password });

    const error = await user.validateSync();

    if (error) throw Error(error);

    try {
      result = await user.save();
    } catch (error) {
      throw Error(error);
    }

    return result;
  }
}