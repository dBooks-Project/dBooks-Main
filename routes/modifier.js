var express = require('express');
var router = express.Router();
var connection = require('../middleware/connect')

/* GET home page. */
router.get('/modifier', function (req, res, next) {
    res.render('modifier', {
        nav: true
    });
});

module.exports = router;