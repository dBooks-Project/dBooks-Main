var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var query = require('../middleware/query');

var randomBook = "SELECT Titre FROM ( SELECT FLOOR(mm.min_id + (mm.max_id - mm.min_id + 1) * RAND()) AS ID FROM ( SELECT MIN(ID) AS min_id, MAX(ID) AS max_id FROM Livres ) AS mm JOIN ( SELECT ID dummy FROM Livres LIMIT 11 ) z ) AS init JOIN Livres AS r ON r.ID = init.ID LIMIT 1";

router.get('/', function (req, res, next) {
    query.simple(randomBook, (result) => {
        console.log(result);
        res.render('index', {
            placeholder: result[0],
            quote: {
                auteur: "Frank Zappa",
                texte: "So many books, so little time."
            }
        });
    });
});

module.exports = router;