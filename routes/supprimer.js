var express = require('express');
var router = express.Router();
var query = require("../middleware/query");

router.get('/supprimer/:id', (req, res) => {
    query.complex("DELETE FROM AuteursLivres WHERE LivreID= ?", [req.params.id], () => {
        query.complex("DELETE FROM Livres WHERE ID=?", [req.params.id], () => {
            res.redirect("/bibliotheque");
        });
    });
});

module.exports = router;
