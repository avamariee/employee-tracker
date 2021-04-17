const mysql = require('mysql2');

// connect to the database 'company'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'biddy',
    database: 'company'
  },
  console.log("Connected to the Company Database!"));

module.exports = db;