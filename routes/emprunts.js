var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../middleware/connect');

var queryEmprunts = "SELECT NomUtilisateur, Titre, DATE_FORMAT(DateEmprunt,'%d-%m-%Y') AS DateEmprunt, DATE_FORMAT(DateRetourPrevue,'%d-%m-%Y') AS DateRetourPrevue, DATE_FORMAT(DateRetour,'%d-%m-%Y') AS DateRetour, DateRetour - DateEmprunt AS Duree, COUNT(*) AS NombreEmprunts FROM Emprunts INNER JOIN Exemplaires ON Emprunts.ExemplaireID = Exemplaires.ID INNER JOIN Livres ON Exemplaires.LivreID = Livres.ID INNER JOIN Membres ON Emprunts.MembreID = Membres.ID GROUP BY Emprunts.ID;";
var queryNombreEmpruntsDaphne = "SELECT COUNT(*) AS Nombre1 FROM Emprunts WHERE MembreID=1;";
var queryNombreEmpruntsJulien = "SELECT COUNT(*) AS Nombre2 FROM Emprunts WHERE MembreID=2;";

/* GET home page. */
router.get('/emprunts', function (req, res, next) {
    connection.query(queryEmprunts + queryNombreEmpruntsDaphne + queryNombreEmpruntsJulien, (err, results, fields) => {
        if (err) {
            console.log(err);

            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        }
        res.render('emprunts', {
            results: {
                emprunts: results[0],
                nombre1: results[1][0],
                nombre2: results[2][0]
            }, 
             nav: true     
        });
    });
});


module.exports = router;