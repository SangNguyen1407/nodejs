var express = require('express');
var router  = express.Router();
var database = require('../database/database');
var config  = require('../config/webconfig');

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
module.exports = router;


/*
https://www.tohoho-web.com/ex/express.html
https://www.geeksforgeeks.org/express-js-res-render-function/
 */