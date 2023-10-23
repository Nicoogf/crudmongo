const express = require("express") ;

const app = express() ;
const archivoDB = require("./conexion")

const PORT = process.env.PORT || 5000 ;

//Importar Archivo de rutas

const rutaUsuario = require("./rutas/usuarios") ;

app.use( "/api/usuario" , rutaUsuario )

app.get("/"  , (req,res) => {res.send("Pagina inicio")} )

app.listen ( PORT , () => {
    console.log( ` Servidor Corriendo en puerto ${ PORT }` )
})