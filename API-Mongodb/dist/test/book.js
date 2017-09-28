'use strict';

process.env.NODE_ENV = 'test';

// Require the dev-depedencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');

var expect = chai.expect;

chai.use(chaiHttp);

// parent block
describe('Book', function () {
    beforeEach(function (done) {
        done();
    });
});

// Test get all books
describe('/GET books', function () {
    it('It expect get all data from booklist', function (done) {
        chai.request(server).get('/books').end(function (err, res) {
            expect(res.body).to.be.a('array');
            expect(res.body.length).be.eql(4);
            done();
        });
    });
});