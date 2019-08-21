import express from 'express';
import dbConnection from './database';

const app = express();
dbConnection();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Party API.');
});

module.exports = app;
