const mongoose = require("mongoose");

const usuario_model = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  dni: {
    type: Number,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  id_rol: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("usuario", usuario_model);
