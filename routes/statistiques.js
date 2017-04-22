var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var isEmpty = require('lodash.isempty');

/* GET home page. */
router.get('/statistiques', function(req, res, next) {

    var connection = mysql.createConnection({
        host: "70.30.248.159",
        user: "readonly",
        password: "uQgbI7IKaP1gn91n",
        database: "dBooks"
    });
    connection.connect((err) => {
        if(err){
            console.log(err);
            
            res.status(err.status || 500);
            res.render('error', { message: err.message, error: err });
        } else {
            connection.query("SELECT COUNT(*) AS NombreDeLivres FROM Livres",(err, result, fields) => {
                if(err) {
                    console.log(err);
                    
                    res.status(err.status || 500);
                    res.render('error', { message: err.message, error: err });
                }
            res.render('statistiques', {
                 result: result[0]
                });

                connection.end();
                console.log("Connection Ended!");
            });
        }
    });
});

    
module.exports = router;

  

