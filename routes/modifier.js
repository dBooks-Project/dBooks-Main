var express = require('express');
var router = express.Router();
var query = require('../middleware/query')

var queryRead = "SELECT * FROM AuteursLivres INNER JOIN Livres ON LivreID = Livres.ID INNER JOIN Auteurs ON AuteurID = Auteurs.ID INNER JOIN GenresLitteraires ON GenresLitteraires.ID = GenreID INNER JOIN Langues ON Langues.ID = LangueID Where Livres.ID = ?"

router
    .get('/modifier/:id', function (req, res, next) {
        query.complex(queryRead, [req.params.id], (rows) => {
            console.log(rows[0]);
            res.render('modifier', {
                results: rows[0],
                nav: true
            });
        });
    })
    .post('/modifier/:id', (req, res) => {
        query.simple("UPDATE Livres SET Titre = ?")
        res.redirect('/bibliotheque');
    });



module.exports = router;