const express =require('express');
const programa_model = require('../models/programa_model');
const route = express.Router();

//Metodos HTTP[REST{json} SOA{xml}]
route.get('/programas',(req, res)=>{
    programa_model
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});


route.post('/programa',(req, res)=>{
    const programa = programa_model(req.body);
    programa
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

route.get('/programa/:id',(req, res)=>{
    const {id} = req.params;
    programa_model
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});


/*
route.delete();
route.put();*/


module.exports = route;