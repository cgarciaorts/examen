var express = require('express');
var router = express.Router();

router.get('/listaUsuario', function(req, res, next) {
    res.render('listaUsuario' );
});

module.exports = router