import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config/index.js';

function verifyJWTToken(token, secret=JWT_SECRET) {
  try {
    console.log(jwt.verify(token, secret=JWT_SECRET));
  } catch (error) {
    console.log(error);
    throw new Error('Error verifying the JWT token');
  }
}
verifyJWTToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFyc2VuaWMiLCJpYXQiOjE2MzE5NTc5OTQsImV4cCI6MTYzMjU2Mjc5NH0.8cRzN2rYevUGc_K2dhkCW9i-V0InhvWy5aIAfKqVKAo')