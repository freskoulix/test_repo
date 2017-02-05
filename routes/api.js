var express = require('express');
var router = express.Router();

router.post('/api', function(req, res, next) {
  console.log(req);
});

module.exports = router;
