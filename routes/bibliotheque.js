var express = require('express');
var router = express.Router();
var query = require('../middleware/query');

var queryBibliotheque = "SELECT Livres.ID,Titre,AnneeParution,NomLangue,Prenom,Nom FROM `AuteursLivres` INNER JOIN Livres ON Livres.ID = LivreID INNER JOIN Auteurs ON Auteurs.ID = AuteurID INNER JOIN Langues ON Langues.ID = LangueID ORDER BY Titre ASC";

/* GET home page. */
router.get('/bibliotheque', function (req, res, next) {
    query.simple(queryBibliotheque, (result) => {{
        console.log(result);
        res.render('bibliotheque', {
            livre: result,
            nav: true
        });
    }});
});

module.exports = router;