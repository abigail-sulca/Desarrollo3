const express =require('express');
const curso_model = require('../models/curso_model');
const route = express.Router();

//Metodos HTTP[REST{json} SOA{xml}]
route.get('/cursos',(req, res)=>{
    curso_model
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});


route.post('/curso',(req, res)=>{
    const curso = curso_model(req.body);
    curso
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

route.get('/curso/:id',(req, res)=>{
    const {id} = req.params;
    curso_model
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});


/*
route.delete();
route.put();*/


module.exports = route;