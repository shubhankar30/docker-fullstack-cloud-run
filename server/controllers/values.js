// import model from '../models/index.js';
const model = require('../models');

const { Value } = model;

class Values {
  static getAllValues(req, res) {
    // return User
    //   .create({
    //     name,
    //     username,
    //     email,
    //     password
    //   })
    //   .then(userData => res.status(201).send({
    //     success: true,
    //     message: 'User successfully created',
    //     userData
    //   }))
    res.status(200).send([1, 2, 3, 4, 5, 6, 7]);
  }
  static addValue(req, res) {
    const { value } = req.body
      return Value
        .create({
          value,
        })
        .then(userData => res.status(201).send({
          success: true,
          message: 'User successfully created',
          userData
        }))
    }
  static editValue(req,res) {
      const { title, author, description, quantity } = req.body
      return Book
        .findById(req.params.bookId)
        .then((book) => {
          book.update({
            title: title || book.title,
            author: author || book.author,
            description: description || book.description,
            quantity: quantity || book.quantity
          })
          .then((updatedBook) => {
            res.status(200).send({
              message: 'Book updated successfully',
              data: {
                title: title || updatedBook.title,
                author: author || updatedBook.author,
                description: description || updatedBook.description,
                quantity: quantity || updatedBook.quantity
              }
            })
          })
          .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
  }
}

module.exports = Values;