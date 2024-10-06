var express = require('express');
var router  = express.Router();
var database = require('../database/database');


/* GET home page. */
router.get('/', (req, res, next) => {
  var result = database.Read(req, res);

  result.then(function (arr) {
    // do something with the rows
    res.render(
      'index', 
      { 
        title: 'Express123',
        data: arr
      }
    );
  })
  .catch(function (error) {
      /* code if some error */ 
      console.error( error )
  });


});

module.exports = router;
