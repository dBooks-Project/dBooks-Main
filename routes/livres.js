var express = require('express');
var router = express.Router();
var connection = require('../middleware/connect.js');

var queryLivres = "SELECT Livres.ID,Titre,AnneeParution,NomLangue,NomGenre FROM Livres INNER JOIN Langues ON Langues.ID = LangueID INNER JOIN GenresLitteraires ON GenresLitteraires.ID = GenreID";

router
    .get('/livres', function (req, res, next) {
        connection.query(queryLivres, (err, results, values) => {
            res.render('livres', {
                info: results
            });
        });
    });

module.exports = router;