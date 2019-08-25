require('dotenv').config();

module.exports = {

  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    database: 'party-timeDB',
    username: 'postgres',
    password: 'makanda2000',
    host: 'localhost',
    dialect: 'postgres',
  },

  test: {
    database: 'party-time-testDB',
    username: 'postgres',
    password: 'makanda2000',
    host: 'localhost',
    dialect: 'postgres',
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
};
