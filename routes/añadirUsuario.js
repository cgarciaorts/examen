var express = require('express');
var router = express.Router();

router.get('/añadirUsuario', function(req, res, next) {
    res.render('añadirUsuario');
});

module.exports = router