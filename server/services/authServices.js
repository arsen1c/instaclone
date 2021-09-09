export default class AuthService {
  // Make it async later
  login(userData) {
    // Perform Database query and get data back
    return { user: userData, token: '1234xxxx1234' } // 
  }
}