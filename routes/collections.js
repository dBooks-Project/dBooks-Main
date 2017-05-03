var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../middleware/connect');

var query1 = 'SELECT * FROM Collections';

router.get('/collections', function (req, res, next) {
    connection.query(query1, (err, rows, fields) => {
        var collection = [{
            nomVille: rows[0].NomVille,
            nomCollection: rows[0].NomCollection
        }];
        if (err) {
            console.log(err);
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });

        }
        res.render('collections', {
            collection: collection
        });
    });
});

module.exports = router;