var mysql = require('mysql');

var connection = mysql.createConnection({
        host: "acidjump.com",
        user: "readonly",
        password: "uQgbI7IKaP1gn91n",
        database: "dBooks"
});

module.exports = connection;