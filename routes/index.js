var express = require('express');
var router = express.Router();
var mysql = require('mysql');

function random(low, high) {
    var res = Math.floor(Math.random() * (high - low + 1) + low);
	console.log(res);
    return res;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  var connection = mysql.createConnection({
        host: "192.168.2.65",
        user: "readonly",
        password: "uQgbI7IKaP1gn91n",
        database: "dBooks"
    });

    connection.connect((err) => {
        if(err){
            console.log(err);
            
            res.render('index',{
                	placeholder: ""
                });
        } else {
            connection.query('SELECT * FROM `Livres` WHERE `ID` = ?', [random(1,18)], (err, row, fields) => {
                if(err) {
                    console.log(err);
                    
                    res.render('index',{
                	placeholder: ""
                });
                }
                
                res.render('index',{
                	placeholder: row[0]
                });

                connection.end();
            });
        }
    });
});

module.exports = router;
