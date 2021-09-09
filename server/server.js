import express from 'express';
import { userRoutes, authRoutes } from './api/routes/index.js';
import errorHandler from './api/middlewares/errorHandler.js';
import { PORT } from './config/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', userRoutes);
app.use('/auth', authRoutes);
// Error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {console.log(`listening on port ${PORT}`)});