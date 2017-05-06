var express = require('express');
var router = express.Router();
var query = require('../middleware/query');

var queryBibliotheque = "SELECT * FROM Collection INNER JOIN Livres ON Livres.ID = LivreID";

/* GET home page. */
router.get('/bibliotheque', function (req, res, next) {
    query.simple(queryBibliotheque, (result) => {{
        res.render('bibliotheque', {
            livre: result
        });
    }});
});

module.exports = router;