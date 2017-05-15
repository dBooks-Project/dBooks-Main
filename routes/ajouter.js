var express = require('express');
var router = express.Router();
var query = require("../middleware/query");

var queryAjouterLivres = "INSERT INTO Livres (`Titre`, `AnneeParution`,`LangueID`,`GenreID`) VALUES(?,?,?,?)";
var queryAjouterAuteurs = "INSERT INTO Auteurs (`Nom`,`Prenom`) VALUES(?,?)";
var queryAjouterAuteursLivres = "INSERT INTO AuteursLivres (`LivreID`,`AuteurID`) VALUES(?,?)";

router.get('/ajouter', function (req, res, next) {
    res.render('ajouter', {
        nav: true
    });
});

router.post('/ajouter', (req, res, next) => {
    query.complex("SELECT ID FROM Langues WHERE NomLangue = ?", [req.body.langue], (langueID) => {
        query.complex("SELECT ID FROM GenresLitteraires WHERE NomGenre = ?", [req.body.genre], (genreID) => {
            query.complex(queryAjouterLivres, [req.body.titre, req.body.annee, langueID[0].ID, genreID[0].ID], (result) => {
                query.complex(queryAjouterAuteurs, [req.body.nom, req.body.prenom], (result) => {
                    query.simple("SELECT ID FROM Livres ORDER BY ID DESC LIMIT 1", (livreID) => {
                        query.simple("SELECT ID FROM Auteurs ORDER BY ID DESC LIMIT 1", (auteurID) => {
                            query.complex(queryAjouterAuteursLivres, [livreID[0].ID, auteurID[0].ID], (result) => {
                                res.redirect('/bibliotheque');
                            });
                        });
                    });
                });
            });
        });
    });
});

module.exports = router;