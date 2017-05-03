var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../middleware/connect');

function random(low, high) {
    var res = Math.floor(Math.random() * (high - low) + low);
    console.log(res);
    return res;
}

/* GET home page. */
router.get('/', function (req, res, next) {
    connection.query('SELECT Titre FROM Livres', (err, row, fields) => {
        if (err) {
            console.log(err);
            res.render('index');
        }

        res.render('index', {
            placeholder: row[random(0, row.length)],
            quote: {
                auteur: "Frank Zappa",
                texte: "So many books, so little time."
            }
        });
    });
});

module.exports = router;