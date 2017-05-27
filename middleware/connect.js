var mysql = require('mysql');

var connection = mysql.createConnection({
        host: "gitlab.acidjump.com",
        user: "all",
        password: "0FIFoWcGP1KkwORN",
        database: "dBooks",
        multipleStatements: true
});

module.exports = connection;
