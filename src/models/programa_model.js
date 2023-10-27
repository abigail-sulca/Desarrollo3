const mongoose =require('mongoose');

const programa_model = mongoose.Schema({
    Cod_Programas:{
        type:Array,
        required:true
    },
    Nombre_Programa:{
        type:Array,
        required:true
    },
    Cursos:{
        type:Array,
        required:true
    },
    Fecha_Inicio:{
        type:Array,
        required:true
    },
    Fecha_Fin:{
        type:Array,
        required:true
    }
});

module.exports = mongoose.model('programa', programa_model);