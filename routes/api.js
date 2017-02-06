const express = require('express');
const router = express.Router();

router.post('/api', function(req, res, next) {
  console.log(req);
});

module.exports = router;
