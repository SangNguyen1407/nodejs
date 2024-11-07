var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', (req, res, next) => {
  console.log("test 1234...");
  res.send('respond with a resource');
});

/* GET users listing. */
router.post('/submitForm', (req, res, next) => {
  res.render(
    'submitForm', 
    { 
      title: 'Express123',
      data: []
    }
  );
});

  
module.exports = router;