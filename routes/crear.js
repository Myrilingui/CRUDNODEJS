const express = require('express');
const router = express.Router();

const connection =require('../conexion/conexion');
  
/* crear */
router.get('/', function(req, res, next) {
  res.render('crear', { title: 'Agregar nuevo producto' });

});
const crud = require('../crud/crud');

router.post('/save', crud.save);


module.exports = router;
