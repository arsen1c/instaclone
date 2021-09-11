import { userRoutes, authRoutes } from './api/routes/index.js';
import { PORT, DB_URL } from './config/index.js';
import express from 'express';
import errorHandler from './api/middlewares/errorHandler.js';
import mongoose from 'mongoose';
import path from 'path';

const app = express();

mongoose.connect(DB_URL)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DB Connected...');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', userRoutes);
app.use('/auth', authRoutes);
// Error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {console.log(`listening on port ${PORT}`)});