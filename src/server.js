import express from 'express';
import config from 'dotenv';
import indexRouter from './routes/index';
import userRoutes from './routes/userRoutes';

config.config();

const app = express();
app.use(express.json());
app.use(indexRouter);
app.use('/api/v1/users', userRoutes);


export default app;
