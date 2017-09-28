'use strict';

process.env.NODE_ENV = 'test';

// Require the dev-depedencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');

var expect = chai.expect;

chai.use(chaiHttp);

// Parent block
describe('Books', function () {
  beforeEach(function (done) {
    done(); // before each new test, we finish previous test
  });
});

// Test get all books
describe('/GET books', function () {
  it('It expect get all data from booklist', function (done) {
    chai.request(server).get('/books').end(function (err, res) {
      expect(res.body).to.be.a('array');
      expect(res.body.length).be.eql(7);
      done();
    });
  });
});

// Test post add new book
describe('/POST book', function () {
  // Return message, newBook if book is valid
  it('It expect add new book with id: Date.new, name and status', function (done) {
    var book = {
      name: 'Book 1',
      status: 'Available'
    };

    chai.request(server).post('/books').send(book).end(function (err, res) {
      expect(res.body).to.be.a('object');
      expect(res.body).have.property('message').eql('Book successfully added');
      expect(res.body.book).have.property('id');
      expect(res.body.book).have.property('name').eql(book.name);
      expect(res.body.book).have.property('status').eql(book.status);
      done();
    });
  });

  // Return false if book is invalid
  it('It expect not POST new book if lack of field', function (done) {
    var book = {
      name: 'Book 1'
    };

    chai.request(server).post('/books').send(book).end(function (err, res) {
      expect(res.body).to.be.a('object');
      expect(res.body).have.property('message').eql('Book is invalid');
      done();
    });
  });
});

// Test get book by Id
describe('/GET/:id', function () {
  it('It expects return data of book by id', function (done) {
    var id = 3;
    chai.request(server).get('/books/' + id).end(function (err, res) {
      expect(res.body).to.be.a('object');
      expect(res.body).have.property('book');
      expect(res.body.book).have.property('id').eql(id);
      expect(res.body.book).have.property('name');
      expect(res.body.book).have.property('status');
      done();
    });
  });
});

// Test delete book by id
describe('/DELETE/:id', function () {
  it('It expects delete book by id and message, result->roweffected', function (done) {
    var id = 1;

    chai.request(server).delete('/books/' + id).end(function (err, res) {
      expect(res.body).to.be.a('object');
      expect(res.body).have.property('message').eql('Book successfully deleted');
      expect(res.body).have.property('result');
      expect(res.body.result).have.property('roweffected').eql(1);
      done();
    });
  });
});

// Test update book by Id
describe('/UPDATE/:id', function () {
  it('It expects update book by id', function () {
    var id = 1;
    book = {
      name: 'Book 1',
      status: 'Unavailable'
    };
    chai.request(server).put('/books/' + id).send(book).end(function (err, res) {
      expect(res.body).to.be.a('object');
      expect(res.body).have.property('message').eql('Book updated');
      expect(res.body).have.property('book');
      expect(res.body.book).have.property('id').eql(id);
      expect(res.body.body).have.property('name').eql(book.name);
      expect(res.body.book).have.property('status').eql(book.status);
      done();
    });
  });
});