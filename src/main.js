const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const rol_Service = require('./service/rol_service');
const usuario_Service = require('./service/usuario_service');
const programa_Service = require('./service/programa_service');
const curso_Service = require('./service/curso_service');



const app = express();
const port = 3000;

//Invocando nuestro servicio de roles
app.use(express.json());
app.use('/api',rol_Service);
app.use('/api',usuario_Service);
app.use('/api',programa_Service);
app.use('/api',curso_Service);


//Rutas
app.get('/',(req, res)=>{
    res.send("Servicio Iniciado");
});

mongoose
.connect(process.env.url_DataBase)
.then(function(){
    console.log(process.env.mensaje_base_datos)
})
.catch((error)=> console.error(error));


app.listen(port, ()=> 
    console.log("Se ha iniciado la aplicacion de NODE en el puerto "+port)
);