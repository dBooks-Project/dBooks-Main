var express = require('express');
var router = express.Router();
var connection = require('../middleware/connect')

var queryLivres = "SELECT * FROM AuteursLivres INNER JOIN Livres ON Livres.ID = LivreID INNER JOIN Auteurs ON Auteurs.ID = AuteurID";

/* GET home page. */
router.get('/dashboard', function(req, res, next) {
    connection.query(queryLivres, (err, result, fields) => {
        console.log(result);
        res.render('dashboard', {
            livre: result
        });
    })
});

module.exports = router;