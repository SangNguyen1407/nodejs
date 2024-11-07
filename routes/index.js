var express = require('express');
var router  = express.Router();
var database = require('../database/database');
var config  = require('../config/webconfig');

const person_list_controller = require('../controllers/person_list_controller');

/* GET home page. */
router.get('/1', (req, res, next) => {
  database.Read(req, res)
  .then( result => {
  //  console.log(result);
    res.render(
      'index', 
      { 
        title: 'Express123',
        data: result
      }
    );
  });
});

router.get('/submitForm', (req, res, next) => {
  res.render(
    'index', 
    { 
      title: 'Express',
      data: []
    }
  );
});

/* GET home page. */
router.get('/', async (req, res, next) => {
  let result = await person_list_controller.getAllPerson();

  let value = JSON.stringify(result);
//  console.log("test............" + value);
  res.render(
    'index', 
    { 
      title: 'Express123',
      data: value
    }
  );

});

module.exports = router;


/*
https://www.tohoho-web.com/ex/express.html
https://www.geeksforgeeks.org/express-js-res-render-function/
 */