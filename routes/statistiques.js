var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require("../middleware/connect");

var query1 = "SELECT COUNT(*) AS NombreDeLivres FROM Livres;";
var query2 = "SELECT COUNT(LangueID) AS LangueFrancaise FROM Livres WHERE LangueID = 1;";
var query3 = "SELECT COUNT(LangueID) AS LangueAnglaise FROM Livres WHERE LangueID=2;";
var query4 = "SELECT COUNT(LangueID) AS LangueEspagnole FROM Livres WHERE LangueID=3;";

/* GET home page. */
router.get('/statistiques', function(req, res, next) {
    connection.query(query1 + query2 + query3 + query4,(err, results, fields) => {
        if(err) {
            console.log(err);
            
            res.status(err.status || 500);
            res.render('error', { message: err.message, error: err });
        }
        res.render('statistiques', {
            results: {
                nombre: results[0][0],
                langueFrancaise: results[1][0],
                langueAnglaise: results[2][0],
                langueEspagnole: results[3][0]
            }
        });
    });
});

    
module.exports = router;