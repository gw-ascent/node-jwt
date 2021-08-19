const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'node-jwt',
  database: 'node-jwt',
  password: 't)c760rNqw[QBQkt'
});
connection.connect();
module.exports = connection;