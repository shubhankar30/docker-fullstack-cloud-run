const keys = require('../keys');
module.exports = {
  "development": {
    "username": keys.pgUser,
    "password": keys.pgPassword,
    "database": keys.pgDatabase,
    "host": keys.pgHost,
    "dialect": "postgres"
  },
  "test": {
    "username": keys.pgUser,
    "password": keys.pgPassword,
    "database": keys.pgDatabase,
    "host": keys.pgHost,
    "dialect": "postgres"
  },
  "production": {
    "username": 'postgres',
    "password": 'password',
    "database": 'postgres',
    "host": '104.155.230.250',
    "dialect": "postgres"
  }
}
