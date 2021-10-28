var express = require('express');
var router = express.Router();
val = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  val = val +1;
  res.send('User accesses are: '+val);
});

module.exports = router;
