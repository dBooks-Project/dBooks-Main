module.exports = function(query, callback) {
    var connection = require('./connect');
    connection.query(query, (err, rows, fields) => {
        callback(rows);
    });
};