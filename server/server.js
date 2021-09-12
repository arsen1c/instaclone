import { userRoutes, authRoutes } from './api/routes/index.js';
import { PORT, DB_URL } from './config/index.js';
import express from 'express';
import errorHandler from './api/middlewares/errorHandler.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

mongoose.connect(DB_URL)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DB Connected...');
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', 'https://flashnotes.vercel.app');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Content-Type', 'application/json;charset=UTF-8');

  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes);
app.use('/auth', authRoutes);

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
// Error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {console.log(`listening on port ${PORT}`)});