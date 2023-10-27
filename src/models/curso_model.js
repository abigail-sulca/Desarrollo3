const mongoose =require('mongoose');

const curso_model = mongoose.Schema({
    Cod_Curso:{
        type:Array,
        required:true
    },
    Nombre_Curso:{
        type:Array,
        required:true
    },
    Duracion:{
        type:Number,
        required:true
    },
    Tiempo:{
        type:String,
        required:true
    },
    Temas:{
        type:Array,
        required:true[{
            Cod_Tema:{
                type:String,
                required:true
            },
            Nombre_Tema:{
                type:String,
                required:true
            }
        }]
    }
});

module.exports = mongoose.model('curso', curso_model);