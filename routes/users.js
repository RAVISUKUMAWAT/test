var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const apiKey = process.env.API_KEY || '';
  console.log("apiKey", apiKey);
  res.send(apiKey);
});

module.exports = router;
