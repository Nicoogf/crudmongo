const express = require("express") ;
const { default: mongoose } = require("mongoose");

const router = express.Router() ;

const mongo = require("mongoose") ;

const eschema = mongoose.Schema

const eschemaUsuario = new eschema({
    nombre : String ,
    email : String ,
    telefono : String ,
    idUsuario: String
})

const ModeloUsuario = mongoose.model("usuario" , eschemaUsuario)
module.exports = router

router.get("/test" , ( req, res ) => {
    res.end("Saludos carga desde ruta ejemplo")
})