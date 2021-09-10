import dotenv from 'dotenv';
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

export const {
  DEBUG_MODE,
  PORT,
  DB_URL,
  HASHING_SALT,
  JWT_SECRET
} = process.env;