var express = require('express');
var router = express.Router();
//importar conexion
var db = require("../conexion/conexion");


/* GET productos. */
router.get('/', function(req, res, next) {

        db.query("SELECT * FROM tbl_productos", function (err,resultado) {
        console.log(resultado)
        res.render('productos', { title: 'Productos disponibles', Libros:resultado});

        });
  });

module.exports = router;
