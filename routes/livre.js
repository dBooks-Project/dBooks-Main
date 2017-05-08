var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../middleware/connect');

function unifierAuteurs(row) {
    var auteurs = [];
    for(var i = 0; i < row.length; i++){
        auteurs[i] = {};
        auteurs[i].Prenom = row[i].Prenom;
        auteurs[i].Nom = row[i].Nom;
    }
    return auteurs;
}

router.get('/livre/:id', function (req, res, next) {
    connection.query('SELECT Titre,AnneeParution,Nom,Prenom FROM `AuteursLivres` INNER JOIN Livres ON Livres.ID = LivreID INNER JOIN Auteurs ON Auteurs.ID = AuteurID WHERE LivreID = ? ORDER BY Prenom ASC', [req.params.id], (err, row, fields) => {
        if (err) {
            console.log(err);

            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        }

        res.render('livre', {
            title: "dBooks",
            row: row[0],
            auteur: unifierAuteurs(row),
            nav: true
        });
    });
});

module.exports = router;