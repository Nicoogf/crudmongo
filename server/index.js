const express = require("express") ;

const app = express() ;

const PORT = process.env.PORT || 5000 ;

const archivoDB = require("./conexion")


app.get("/"  , (req,res) => {res.send("Pagina inicio")} )

app.listen ( PORT , () => {
    console.log( ` Servidor Corriendo en puerto ${ PORT }` )
})