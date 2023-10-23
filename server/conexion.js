const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objetobd = mongoose.connection ;

objetobd.on('connected' , () => {
    console.log("Conexion a la BD Realizada")
})

objetobd.on('error' , () => {
    console.log("Conexion a la BD Anulada")
})

module.exports = mongoose