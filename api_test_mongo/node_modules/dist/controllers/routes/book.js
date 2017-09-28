'use strict';

var Book = require('../model/book');

// Get all books
var getBooks = function getBooks(req, res) {
  Book.find(function (err, books) {
    if (err) {
      res.send(err);
      return;
    }
    res.send(books);
  });
};

// Post, add new book
var postBook = function postBook(req, res) {
  var book = req.body; // new book
  Book.save(book, function (err, newBook) {
    if (err) {
      res.send(err);
      return;
    }
    res.send({
      message: 'Book successfully added',
      book: newBook
    });
  });
};

// Get book by Id
var getBook = function getBook(req, res) {
  Book.findById(req.params.id, function (err, book) {
    // find book by id = req.params.id
    if (err) {
      res.send(err);
      return;
    }
    res.send({ book: book });
  });
};

// Delete book by Id
var deleteBook = function deleteBook(req, res) {
  Book.delete(req.params.id, function (err, result) {
    res.json({
      message: 'Book successfully deleted',
      result: result
    });
  });
};

// Update book
var updateBook = function updateBook(req, res) {
  Book.update(req.params.id, req.body, function (err, book) {
    if (err) {
      res.send(err);
      return;
    }
    res.send({
      message: 'Book updated',
      book: book
    });
  });
};

module.exports = {
  getBooks: getBooks,
  postBook: postBook,
  getBook: getBook,
  deleteBook: deleteBook,
  updateBook: updateBook
};