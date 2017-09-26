'use strict';

const { index, store, show, deleteCandidate } =   require('../src/controller/BookController.js');

module.exports.index = index;
module.exports.store = store;
module.exports.show = show;
module.exports.delete = deleteCandidate;
