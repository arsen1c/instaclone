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
verifyJWTToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFyc2VuaWMiLCJpYXQiOjE2MzIwMzM2NTMsImV4cCI6MTYzMjYzODQ1M30.BQv4YrULT9F1pui4lI2LdJ9mqCOcnApN3g30cLSUCe8')