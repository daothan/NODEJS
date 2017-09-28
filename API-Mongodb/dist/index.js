'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _book = require('./routes/book');

var _book2 = _interopRequireDefault(_book);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.PORT || 3000;

if (process.env.PORT !== 'test') {
    app.use((0, _morgan2.default)('combined'));
}

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.text());
app.use(_bodyParser2.default.json({ type: 'application/json' }));

app.get('/', function (req, res) {
    return res.json({ message: 'Welcome to Book list' });
});

_mongoose2.default.connect('mongodb://localhost:27017/book', {
    useMongoClient: true
});

_mongoose2.default.Promise = Promise;

app.use('/', _book2.default);

app.listen(port, function () {
    console.log('App is running');
});

module.exports = app;