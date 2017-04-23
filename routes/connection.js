var express = require('express');
var router = express.Router();

router
    .get('/connection', function(req, res, next) {

        res.render('connection');
    })

    .post('/connection', function(req, res, next) {

        res.end();
    });

module.exports = router;