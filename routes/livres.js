var express = require('express');
var router = express.Router();
var query = require('../middleware/query');

var queryLivres = "SELECT Livres.ID,Titre,AnneeParution,NomLangue,NomGenre FROM Livres INNER JOIN Langues ON Langues.ID = LangueID INNER JOIN GenresLitteraires ON GenresLitteraires.ID = GenreID";

router.get('/livres', function (req, res, next) {
    query(queryLivres, (result) => {
        console.log(result);
        res.render('livres', {
            info: result
        });
    });
});

module.exports = router;