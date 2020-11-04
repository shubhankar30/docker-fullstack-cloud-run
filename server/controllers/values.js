// import model from '../models/index.js';
const models = require('../models/index');

const { Value } = models;

class Values {
  static getAllValues (req, res) {
    console.log("GET ALL VALUES API CONTROLLER");
    // const allValues = await models.Value.findAll({}).map(el => el.get({ plain: true }));
    models.Value.findAll({raw:true})
    .then(allValues => {
      console.log(allValues);
      if(allValues && allValues.length > 0) {
        const temp = allValues.map(tp => tp.value)
        res.status(200).send(temp);
      } else {
        res.status(200).send([1, 2, 3, 4, 5, 6, 7]);
      }
    });
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
      // const { title, author, description, quantity } = req.body
      // return Book
      //   .findById(req.params.bookId)
      //   .then((book) => {
      //     book.update({
      //       title: title || book.title,
      //       author: author || book.author,
      //       description: description || book.description,
      //       quantity: quantity || book.quantity
      //     })
      //     .then((updatedBook) => {
      //       res.status(200).send({
      //         message: 'Book updated successfully',
      //         data: {
      //           title: title || updatedBook.title,
      //           author: author || updatedBook.author,
      //           description: description || updatedBook.description,
      //           quantity: quantity || updatedBook.quantity
      //         }
      //       })
      //     })
      //     .catch(error => res.status(400).send(error));
      //   })
      //   .catch(error => res.status(400).send(error));
  }
}

module.exports = Values;