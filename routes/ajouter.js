var express = require('express');
var router = express.Router();
var query = require("../middleware/query");

/* GET home page. */
router.get('/ajouter', function (req, res, next) {
    res.render('ajouter');
});

router.post('/ajouter', (req, res, next) => {
    query.complex("SELECT ID FROM Langues WHERE NomLangue = ?", [req.body.langue], (rows) => {console.log(rows[0].ID)});
    res.render('ajouter');
});

module.exports = router;