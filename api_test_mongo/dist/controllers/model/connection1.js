'use strict';

var get_book_collection = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var db, collection;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return MongoClient.connect(url);

          case 3:
            db = _context.sent;
            collection = db.collection('booklist');
            return _context.abrupt('return', collection);

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);
            throw _context.t0;

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));

  return function get_book_collection() {
    return _ref.apply(this, arguments);
  };
}();

var find = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var collection;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return get_book_collection();

          case 3:
            collection = _context2.sent;
            return _context2.abrupt('return', collection);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);
            throw _context2.t0;

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 7]]);
  }));

  return function find() {
    return _ref2.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

  /*   const result_find = collection.find({ name: 'Book 1' }).toArray((err, result) => {
      if (err) {
        console.log(err);
      } else if (result.length) {
        // console.log(result);
        return result;
      } else {
        // console.log('No data found');
      }
    }); */
});

find().then(function (collection) {
  return console.log(collection);
}).catch(function (err) {
  return console.log(err);
});