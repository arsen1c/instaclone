import express from 'express';
import routes from './api/routes/index.js';

const app = express();

app.use('/api', routes);


app.listen(3000, () => {console.log('listening on port 3000')});
