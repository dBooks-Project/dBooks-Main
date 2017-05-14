var express = require('express');
var router = express.Router();
var connection = require('../middleware/connect')

var queryRead = "SELECT * FROM "

router.get('/modifier/:id', function (req, res, next) {
    res.render('modifier', {
        results: rows,
        nav: true
    });
});

module.exports = router;