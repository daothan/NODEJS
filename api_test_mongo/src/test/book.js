process.env.NODE_ENV = 'test';

// Require the dev-depedencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const expect = chai.expect;

chai.use(chaiHttp);

// Parent block
describe('Books', () => {
  beforeEach((done) => {
    done(); // before each new test, we finish previous test
  });
});

// Test get all books
describe('/GET books', () => {
  it('It expect get all data from booklist', (done) => {
    chai.request(server)
      .get('/books')
      .end((err, res) => {
        expect(res.body).to.be.a('array');
        expect(res.body.length).be.eql(7);
        done();
      });
  });
});

// Test post add new book
describe('/POST book', () => {
  // Return message, newBook if book is valid
  it('It expect add new book with id: Date.new, name and status', (done) => {
    const book = {
      name: 'Book 1',
      status: 'Available',
    };

    chai.request(server)
      .post('/books')
      .send(book)
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.body).have.property('message').eql('Book successfully added');
        expect(res.body.book).have.property('id');
        expect(res.body.book).have.property('name').eql(book.name);
        expect(res.body.book).have.property('status').eql(book.status);
        done();
      });
  });

  // Return false if book is invalid
  it('It expect not POST new book if lack of field', (done) => {
    const book = {
      name: 'Book 1',
    };

    chai.request(server)
      .post('/books')
      .send(book)
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.body).have.property('message').eql('Book is invalid');
        done();
      });
  });
});

// Test get book by Id
describe('/GET/:id', () => {
  it('It expects return data of book by id', (done) => {
    const id = 3;
    chai.request(server)
      .get(`/books/${id}`)
      .end((err, res) => {
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
describe('/DELETE/:id', () => {
  it('It expects delete book by id and message, result->roweffected', (done) => {
    const id = 1;

    chai.request(server)
      .delete(`/books/${id}`)
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.body).have.property('message').eql('Book successfully deleted');
        expect(res.body).have.property('result');
        expect(res.body.result).have.property('roweffected').eql(1);
        done();
      });
  });
});


// Test update book by Id
describe('/UPDATE/:id', () => {
  it('It expects update book by id', () => {
    const id = 1;
    book = {
      name: 'Book 1',
      status: 'Unavailable',
    };
    chai.request(server)
      .put(`/books/${id}`)
      .send(book)
      .end((err, res) => {
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
