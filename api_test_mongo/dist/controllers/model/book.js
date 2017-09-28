'use strict';

var mongodb = require('mongodb');

// Use MongoClinet interface to connect db
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running
var url = 'mongodb://localhost:27017/book';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to Book database');
  }
  console.log('Connected successfully to', url);

  // Query data from book
  var collection = db.collection('booklist');

  var result_find = collection.find({}).toArray(function (err, result) {
    console.log(result);

    if (err) {
      console.log(err);
    } else if (result.length) {
      var BookList = result;
      // Export datas from books get, and add new book
      module.exports.find = function (callback) {
        callback(undefined, BookList); // Get all books
      };

      module.exports.save = function (book, callback) {
        var _book = book,
            name = _book.name,
            status = _book.status;

        if (!name || !status) {
          callback({ message: 'Book is invalid' });
        }

        book = {
          id: Date.now(), // Get id by time now
          name: name,
          status: status
        };

        collection.insert(book, function (err, result) {
          if (err) {
            console.log(err);
          } else {
            console.log('Insert succefully');
          }
          callback(undefined, book);
        });
      };

      // Export data books by Id: get, delete and update
      // Get by id
      module.exports.findById = function (id, callback) {
        callback(undefined, BookList.find(function (item) {
          return item.id == id;
        })); // Get book by Id
      };

      // Delete book by id
      module.exports.delete = function (id, callback) {
        var roweffected = BookList.length;
        roweffected -= BookList.length;
        var myquery = { id: id };
        db.collection('book').deleteOne(myquery, function (err, obj) {
          if (err) throw err;
          console.log('1 document deleted');
          callback(undefined, { roweffected: roweffected });
        });
      };

      // Update book by id
      module.exports.update = function (id, book, callback) {
        var oldBook = BookList.find(function (item) {
          return item.id == id;
        });
        if (!oldBook) {
          callback('Book not found');
          return;
        }
        var myquery = { name: oldBook.name };
        var newvalues = { name: book.name, status: book.status };
        db.collection('book').updateOne(myquery, newvalues, function (err, res) {
          if (err) throw err;
          console.log('1 document updated');
          callback(undefined, book);
        });
      };
    } else {
      console.log('No data found');
    }
  });
});