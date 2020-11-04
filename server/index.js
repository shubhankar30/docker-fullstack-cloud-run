// const keys = require('./keys');
// import routes from './routes/index.js';
const routes = require('./routes');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


routes(app);

const db = require("./models");
// db.sequelize.sync();

// In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
// Postgres Client Setup
// const { Pool } = require('pg');
// const pgClient = new Pool({
//   user: keys.pgUser,
//   host: keys.pgHost,
//   database: keys.pgDatabase,
//   password: keys.pgPassword,
//   port: keys.pgPort
// });
// pgClient.on('error', () => console.log('Lost PG connection'));

// pgClient
//   .query('CREATE TABLE IF NOT EXISTS values (number INT)')
//   .catch(err => console.log(err));

// // Express route handlers

// app.get('/', (req, res) => {
//   res.send('Hi');
// });

// app.get('/values/all', async (req, res) => {
//   // const values = await pgClient.query('SELECT * from values');

//   res.send([1, 2, 3]);
// });

// app.get('/values/current', async (req, res) => {
// });

// app.post('/values', async (req, res) => {
//   const index = req.body.index;

//   if (parseInt(index) > 40) {
//     return res.status(422).send('Index too high');
//   }

//   pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);

//   res.send({ working: true });
// });
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the .',
}));

const port = process.env.PORT || 8080;
db.sequelize.sync().then(() => {
  app.listen(port, err => {
    console.log('Listening');
  });
});
