var mysql = require('mysql');

var connection = mysql.createConnection({
        host: "localhost",
        user: "readonly",
        password: "uQgbI7IKaP1gn91n",
        database: "dBooks",
        multipleStatements: true
});

module.exports = connection;
