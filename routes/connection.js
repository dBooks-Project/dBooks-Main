var express = require('express');
var router = express.Router();

router.get('/connection', function(req, res, next) {
    res.render('connection');
});

module.exports = router;