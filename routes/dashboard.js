var express = require('express');
var router = express.Router();

var books = [{
    id: "1",
    titre: "Harry Potter à l'école des sorciers",
    auteur: "J.K Rowling"}
    ];

/* GET home page. */
router.get('/dashboard', function(req, res, next) {
    res.render('dashboard', {
        livre: books
    });
});

module.exports = router;