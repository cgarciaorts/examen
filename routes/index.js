var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/añadirCoche', function(req, res, next) {
  res.redirect('añadirCoche');
});

router.get('/añadirUsuario', function(req, res, next) {
  res.render('añadirUsuario');
});

router.get('/listaCoche', function(req, res, next) {
  res.render('listaCoche');
});

router.get('/listaUsuario', function(req, res, next) {
  res.render('listaUsuario');
});

module.exports = router;