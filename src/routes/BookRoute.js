const Router = require('express').Router();
const BookController = require('../app/controllers/BookController')
Router.get('/',BookController.getAllBook);
Router.put('/:id',BookController.updateBook);
Router.post('/',BookController.addBook);
Router.delete('/:id',BookController.deleteBook);
module.exports = Router