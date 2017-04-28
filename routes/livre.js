var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../middleware/connect');

/* GET home page. */
router.get('/livre/:id', function(req, res, next) {
    connection.query('SELECT Titre,AnneeParution,Nom,Prenom FROM `AuteursLivres` INNER JOIN Livres ON Livres.ID = LivreID INNER JOIN Auteurs ON Auteurs.ID = AuteurID WHERE LivreID = ?', [req.params.id], (err, row, fields) => {
        if(err) {
            console.log(err);
            
            res.status(err.status || 500);
            res.render('error', { message: err.message, error: err });
        }
        
        res.render('livre', {
            title: "dBooks",
            row: row[0]
        });
    });
});

module.exports = router;