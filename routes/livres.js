var express = require('express');
var router = express.Router();
var query = require('../middleware/query');
var mysql = require('mysql');
var connection = require('../middleware/connect');

var queryLivres = "SELECT Livres.ID,Titre,AnneeParution,NomLangue,NomGenre FROM Livres INNER JOIN Langues ON Langues.ID = LangueID INNER JOIN GenresLitteraires ON GenresLitteraires.ID = GenreID;";


router
    .get('/livres', function (req, res, next) {
        query.simple(queryLivres, (result) => {
            res.render('livres', {
                info: result,
                nav: true
            });
        });
    })
    .get('/livres/:id', function (req, res, next) {
        res.send(req.params.id);
        res.end();
    })
    .get('/livres/langue/:id', function (req, res, next) {
        connection.query('SELECT Livres.ID,Titre,AnneeParution,NomLangue,NomGenre FROM Livres INNER JOIN Langues ON Langues.ID = LangueID INNER JOIN GenresLitteraires ON GenresLitteraires.ID = GenreID WHERE LangueID = ? ORDER BY Titre ASC', [req.params.id], (err, row, fields) => {
            if (err) {
                console.log(err);

                res.status(err.status || 500);
                res.render('error', {
                    message: err.message,
                    error: err
                });
            }
            res.render('livres', {
                info: row,
                nav: true
            });
        });
    });

module.exports = router;