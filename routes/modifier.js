var express = require('express');
var router = express.Router();
var connection = require('../middleware/connect')
var query = require("../middleware/query")

var queryRead = "SELECT * FROM AuteursLivres INNER JOIN Livres ON LivreID = Livres.ID INNER JOIN Auteurs ON AuteurID = Auteurs.ID INNER JOIN GenresLitteraires ON GenresLitteraires.ID = GenreID INNER JOIN Langues ON Langues.ID = LangueID Where Livres.ID = ?"
var queryUpdateLivres = "UPDATE Livres SET Titre = ?, AnneeParution = ?, LangueID = ?, GenreID = ? WHERE ID = ?;";
var queryUpdateAuteurs = "UPDATE Auteurs SET Nom = ?, Prenom = ? WHERE ID = ?";

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
        query.complex("SELECT ID FROM Langues WHERE NomLangue = ?", [req.body.langue], (langueID) => {
            query.complex("SELECT ID FROM GenresLitteraires WHERE NomGenre = ?", [req.body.genre], (genreID) => {
                query.complex("SELECT Auteurs.ID FROM AuteursLivres INNER JOIN Auteurs ON Auteurs.ID = AuteurID INNER JOIN Livres ON LivreID = Livres.ID WHERE LivreID = ?", [req.params.id], (auteurID) => {
                connection.query(queryUpdateLivres, [req.body.titre, req.body.annee,langueID[0].ID, genreID[0].ID ,req.params.id], (err,rows,fields) => {
                    if(err) throw err;
                    connection.query(queryUpdateAuteurs, [req.body.nom, req.body.prenom, auteurID[0].ID], (err, rows, fields) => {
                        if(err) throw err;
                        res.redirect('/bibliotheque');
                    });
                });
            });
        });
    });
});



module.exports = router;