process.env.NODE_ENV = 'test';

// Require the dev-depedencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

const expect = chai.expect;

chai.use(chaiHttp);

// parent block
describe('Book', () => {
    beforeEach((done) => {
        done();
    });
});

// Test get all books
describe('/GET books', () => {
    it('It expect get all data from booklist', (done) => {
      chai.request(server)
        .get('/books')
        .end((err, res) => {
          expect(res.body).to.be.a('array');
          expect(res.body.length).be.eql(4);
          done();
        });
    });

    it('It can add new Book', () => {
      const newBook = {
          name: 'Book 1',
          status: 'Available',
      }
      chai.request(index)
        .get('/books')
        .send(newBook)
        .end((err, res) => {
            
        })

    })
});

  // Test add new Book



