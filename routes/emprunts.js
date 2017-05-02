var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../middleware/connect');

var queryNombre = "SELECT COUNT(*) AS Emprunts FROM Emprunts WHERE MembreID=1;";
var queryLivre = "SELECT Titre FROM Emprunts INNER JOIN Exemplaires ON ExemplaireID = Exemplaires.ID INNER JOIN Livres ON Livres.ID = LivreID;";
var queryDateEmprunt = "SELECT DATE_FORMAT(DateEmprunt,'%d-%m-%Y') AS DateEmprunt FROM Emprunts WHERE ID=1;";
var queryDateRetourPrevue = "SELECT DATE_FORMAT(DateRetourPrevue,'%d-%m-%Y') AS DateRetourPrevue FROM Emprunts WHERE ID=1;";
var queryDateRetour = "SELECT DATE_FORMAT(DateRetour,'%d-%m-%Y') AS DateRetour FROM Emprunts WHERE ID=1;";

/* GET home page. */
router.get('/emprunts', function(req, res, next) {
    connection.query(queryLivre + queryNombre + queryDateEmprunt + queryDateRetourPrevue + queryDateRetour,(err, results, fields) => {
        if(err) {
            console.log(err);
            
            res.status(err.status || 500);
            res.render('error', { message: err.message, error: err });
        }
        res.render('emprunts', {
            results: {
                livre: results[0][0],
                emprunts: results[1][0],
                dateEmprunt: results[2][0],
                dateRetourPrevue: results[3][0],
                dateRetour: results[4][0]
            }
            
        });
    });
});


module.exports = router;