var mysql = require('mysql');

var connection = mysql.createConnection({
        host: "192.168.2.65",
        user: "readonly",
        password: "uQgbI7IKaP1gn91n",
        database: "dBooks",
        multipleStatements: true
});

module.exports = connection;
