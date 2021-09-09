import express from 'express';
import { userRoutes, authRoutes } from './api/routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', userRoutes);
app.use('/auth', authRoutes);

app.listen(3000, () => {console.log('listening on port 3000')});
