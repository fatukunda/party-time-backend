import express from 'express';
import dbConnection from './database';
import indexRouter from './routes/index';

const app = express();
dbConnection();
app.use(express.json());
app.use(indexRouter);


export default app;
