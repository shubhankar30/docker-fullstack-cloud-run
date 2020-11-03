// import Values from '../controllers/values';
const Values = require('../controllers/values');

module.exports = (app) => {

  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the BookStore API!',
  }));

  app.get('/v1/values/all', Values.getAllValues); // API route for user to signup
  // app.put('/api/books/:bookId', Books.modify); // API route for user to edit a book

};