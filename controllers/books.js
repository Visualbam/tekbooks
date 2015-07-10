'use strict';

// var BookModel = require('../models/book');

module.exports = function(router) {
  //  var model = new BookModel();

    router.get('/', function(req, res) {
        res.render('/');
    });

    router.get('/details/:id', function(req, res) {
        res.render('books/details');
    });
}
