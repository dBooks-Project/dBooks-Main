var express = require('express');
var router = express.Router();
var connection = require('../middleware/connect');

var queryLivres = "SELECT * FROM Collection INNER JOIN Livres ON Livres.ID = LivreID";

/* GET home page. */
router.get('/bibliotheque', function (req, res, next) {
    connection.query(queryLivres, (err, result, fields) => {
        console.log(result);
        res.render('bibliotheque', {
            livre: result
        });
    });
});

module.exports = router;