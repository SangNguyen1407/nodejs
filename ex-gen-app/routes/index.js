var express = require('express');
var router = express.Router();
var mysql        = require('mysql2');


var con = mysql.createConnection({
  host    : "localhost",
  user    : "root",
  password: "123456",
  database: "database_persons"
});

con.connect();

/* GET home page. */
router.get('/', (req, res, next) => {
  // query from database
  var query = "SELECT * FROM table_persons";
  con.query(query,  (err, result, fields) => {
    
  //  if (err) throw err;
    
    res.render(
      'index', 
      { 
        title: 'Express',
        data: result
      }
    );

  });

});

module.exports = router;
