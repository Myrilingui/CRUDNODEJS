var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Myrilingui Store' });
}); 





const crud = require('../crud/crud');
const connection = require('../conexion/conexion');
router.post('/save', crud.save);
router.post('/update',crud.update);


module.exports = router;
