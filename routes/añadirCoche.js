var express = require('express');
var router = express.Router();

router.get('/añadirCoche', function(req, res, next) {
    res.render('añadirCoche');
  });

module.exports = router;