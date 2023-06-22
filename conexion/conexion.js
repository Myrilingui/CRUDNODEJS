var mysql = require ('mysql')

var connection = mysql.createConnection({

    //variables de conexion
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'ventas'
});
//validacion 
connection.connect(
    (err)=> {
        if(!err){
        console.log('Conexion exitosa');
        }
        else{
            console.log('Error de conexion');
        }
    }
);

module.exports=connection

// connection.query("SELECT * FROM tbl_productos", function (err,resultado) {
//     console.log(resultado)
// });

// connection.end();