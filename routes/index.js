var express = require('express');
var router  = express.Router();
var database = require('../database/database');
var config  = require('../config/webconfig');


const person_list_controller = require('../controllers/person_list_controller');

let latestData = null;
/*
// Function to fetch and update data
async function updateData() {
  try {
    // Fetch the latest entry from the database
    const data = await database.Read();
    
    if (data) {
      latestData = data;
      console.log('Data updated:', latestData);
    } else {
      console.log('No data found in the database');
    }
  } catch (error) {
    console.error('Error updating data:', error);
  };

};

//setInterval(updateData, 3000);

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

router.post('/submitForm', (req, res, next) => {
  //var data = JSON.parse(req.body['key']);
  var result = latestData;
  
  result.then(function (arr) {
    // do something with the rows
    res.render(
      'index', 
      { 
        title: 'Express',
        data: arr
      }
    );
  })
  .catch(function (error) {
      /* code if some error */ 
      console.error( error )
  });

});
/*
router.get('/submitForm', (req, res, next) => {
    
  if (latestData) {
    res.json(latestData);
  } else {
    res.status(404).json({ message: 'No data available' });
  }

});
*/

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