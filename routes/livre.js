var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var isEmpty = require('lodash.isempty');

/* GET home page. */
router.get('/livre/:id', function(req, res, next) {

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
            connection.query('SELECT * FROM `Livres` WHERE `ID` = ?', [req.params.id], (err, row, fields) => {
                if(err) {
                    console.log(err);
                    
                    res.status(err.status || 500);
                    res.render('error', { message: err.message, error: err });
                }
                
                res.render('livre', {
                    title: "dBooks",
                    row: row[0]
                });

                connection.end();
                console.log("Connection Ended!");
            });
        }
    });
});

    
module.exports = router;