var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../middleware/connect');

var queryCollections = 'SELECT * FROM Collections;';

router.get('/collections', function (req, res, next) {
    connection.query(queryCollections, (err, results, fields) => {
        if (err) {
            console.log(err);
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        }
        res.render('collections', {
            collections: results,
             nav: true
        });
    });
});

module.exports = router;