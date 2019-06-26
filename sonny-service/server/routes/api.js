const express = require('express');
const router = express.Router();
const mysql = require('mysql');  // mysql -u root -p < database/schema.sql

// CONNECT TO MYSQL WITH CREDENTIALS
var connection = mysql.createConnection({
    // host : 'localhost',
    // user : 'root',
    // database : 'airbnb'

    host : 'aafg1anosul5i4.cmk5qh6smwj7.us-east-2.rds.amazonaws.com',
    port : 3306,
    user : 'sonny',
    password : 'crailtap',
    database : 'ebdb'
  });



const defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'content-type': 'application/json'
};

// CHECK CONNECTION
connection.connect((err)=> {
  if (err) {
    throw new Error(err);
  } else {
    console.log('mysqlConnecttion successful')
  }
})

// GET ALL REVIEWS
router.get('/reviews', (req, res, next) => {
  res.set(defaultCorsHeaders);
  console.log('router.get called')
  let sql = 'SELECT * FROM reviews;';
  connection.query(sql, (err, data)=> {
    if (err) {
      throw new Error(err);
    } else {
      res.send(data);
    }
  })
})

module.exports = router;

