'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteBook = exports.updateBook = exports.BookById = exports.addBook = exports.getAll = undefined;

// Get all books
var getAll = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _Book2.default.find({});

                    case 3:
                        result = _context.sent;

                        res.json(result);
                        _context.next = 10;
                        break;

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](0);
                        throw _context.t0;

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 7]]);
    }));

    return function getAll(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

// Add Book


var addBook = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var newBook, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        newBook = {
                            id: Date.now(),
                            name: req.body.name,
                            status: req.body.status
                        };
                        _context2.next = 4;
                        return _Book2.default.create(newBook);

                    case 4:
                        result = _context2.sent;

                        res.json(result);
                        _context2.next = 11;
                        break;

                    case 8:
                        _context2.prev = 8;
                        _context2.t0 = _context2['catch'](0);

                        console.log(_context2.t0);

                    case 11:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 8]]);
    }));

    return function addBook(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

// Get Book by Id


var BookById = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return _Book2.default.findById(req.params.id);

                    case 3:
                        result = _context3.sent;

                        res.json(result);
                        _context3.next = 11;
                        break;

                    case 7:
                        _context3.prev = 7;
                        _context3.t0 = _context3['catch'](0);
                        throw _context3.t0;

                    case 11:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 7]]);
    }));

    return function BookById(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

// Update Book By Id


var updateBook = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var book;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return _Book2.default.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, status: req.body.status } });

                    case 3:
                        book = _context4.sent;

                        if (book) {
                            res.json({
                                message: 'Updated successfully',
                                book: book
                            });
                        }
                        _context4.next = 11;
                        break;

                    case 7:
                        _context4.prev = 7;
                        _context4.t0 = _context4['catch'](0);
                        throw _context4.t0;

                    case 11:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[0, 7]]);
    }));

    return function updateBook(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

// Delete Book by Id

var deleteBook = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var book;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return _Book2.default.remove({ _id: req.params.id });

                    case 3:
                        book = _context5.sent;

                        if (book) {
                            res.json({
                                message: 'Delete successfully',
                                book: book
                            });
                        }
                        _context5.next = 11;
                        break;

                    case 7:
                        _context5.prev = 7;
                        _context5.t0 = _context5['catch'](0);
                        throw _context5.t0;

                    case 11:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[0, 7]]);
    }));

    return function deleteBook(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var _Book = require('../model/Book');

var _Book2 = _interopRequireDefault(_Book);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.getAll = getAll;
exports.addBook = addBook;
exports.BookById = BookById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;