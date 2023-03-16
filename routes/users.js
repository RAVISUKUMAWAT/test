var express = require('express');
const config = require('../config.json');
var router = express.Router();

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env].database;

/* GET users listing. */
router.get('/env', function(req, res, next) {
  const apiKey = process.env.API_KEY || '';
  res.send({ apiKey });
});

router.get('/json', function(req, res, next) {
  res.send({ dbConfig });
});


module.exports = router;
