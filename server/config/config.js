module.exports = {
  "development": {
    "username": "postgres",
    "password": "postgres_password",
    "database": "postgres",
    "host": "postgres",
    "dialect": "postgres",
    "port": 5432
  },
  "test": {
    "username": "postgres",
    "password": "postgres_password",
    "database": "postgres",
    "host": "postgres",
    "dialect": "postgres",
    "port": 5432
  },
  "production": {
    "username": "postgres",
    "password": "password",
    "database": "postgres",
    "host": "/cloudsql/futura-data-logger-development:asia-east1:development",
    "dialect": "postgres",
    "port": 5432
  }
}
