'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _BookController = require('../controllers/BookController');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/books', _BookController.getAll);
router.post('/books', _BookController.addBook);
router.get('/books/:id', _BookController.getOne);
router.delete('/books/:id', _BookController.deleteBook);
router.put('/books/:id', _BookController.updateBook);

exports.default = router;