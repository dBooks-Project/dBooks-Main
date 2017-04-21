var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../middleware/connect');

/* GET home page. */
router.get('/livre/:id', function(req, res, next) {
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
    });
});

module.exports = router;