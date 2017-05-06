var connection = require('./connect');

module.exports = {
    simple: function(query, callback) {
        connection.query(query, (err, rows, fields) => {
            callback(rows);
        });
    },
    complex: function(query, params, callback) {
        connection.query(query, params, (err, rows, fields) => {
            callback(rows);
        });
    }
};