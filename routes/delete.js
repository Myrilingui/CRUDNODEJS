var express = require('express');
var router = express.Router();


router.get('/:ID', (req,res)=>{
  const ID = req.params.ID;
  connection.query('DELETE FROM tbl_productos WHERE ID = ?', [ID], (err,resultado)=>{
    if(err){
      throw err;
    }else{
      res.redirect('/productos');
    }
  })
})

const crud = require('../crud/crud');
const connection = require('../conexion/conexion');
router.post('/save', crud.save);
router.post('/update',crud.update);


module.exports = router;