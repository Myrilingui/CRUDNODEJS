var express = require('express');
var router = express.Router();


/* GET actualizar. */
router.get('/:ID', function(req, res, next) {
  const ID = req.params.ID;
  connection.query('SELECT * FROM tbl_productos WHERE ID=?', [ID], (err,resultado)=>{
    if(err){
      throw err;
    }else{
  res.render('actualizar',{user:resultado[0]})
    }
})
});

const crud = require('../crud/crud');
const connection = require('../conexion/conexion');
router.post('/save', crud.save);
router.post('/update',crud.update);

module.exports = router;

