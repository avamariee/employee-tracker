const db = require('./db/connection');
const express = require('express')
const logger = require('morgan');
const questionsStart = require('./app.js')


const app = express();

const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(logger("dev"))


db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

