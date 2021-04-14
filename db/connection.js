const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'biddy',
    database: 'company'
  });

module.exports = db;