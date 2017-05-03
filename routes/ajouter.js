var express = require('express');
var router = express.Router();
var connection = require('../middleware/connect')

/* GET home page. */
router.get('/ajouter', function (req, res, next) {
    res.render('ajouter', {

    });
});

module.exports = router;