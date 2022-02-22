var express = require('express');
var router = express.Router();

router.get('/listaCoche', function(req, res, next) {
    res.render('listaCoche') ;
  });

module.exports = router;