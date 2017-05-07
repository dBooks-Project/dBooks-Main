var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var query = require('../middleware/query');

var queryMembres = "SELECT *,DATE_FORMAT(DateCreation,'%d-%m-%Y:%H:%M:%S') AS DateCreation,DATE_FORMAT(DateCreation,'%m/%d/%Y') AS DateCreationFormatted FROM Membres LIMIT 10";

function now() {
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd;
} 

if(mm<10) {
    mm='0'+mm;
} 

today = mm+'/'+dd+'/'+yyyy;
return today;
}

function JoursDepuis(results) {
    for(var i = 0; i < results.length; i++){
        var date1 = new Date(results[i].DateCreationFormatted);
        var date2 = new Date(now());
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        results[i].jours = diffDays;
    }
    return results;
}

/* GET home page. */
router.get('/membres', function (req, res, next) {
    query.simple(queryMembres, (results) => {
        var results = JoursDepuis(results);
        res.render('membres', {
            results: results
        });
    });
});


module.exports = router;