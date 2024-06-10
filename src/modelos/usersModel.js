const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  contrasena: {
    type: String,
    required: true,
  },

  rol: {
    type: String,
    enum: ["administrador", "repartidor"],
    default: "repartidor",
    required: true,
  },
  fecha_registro: {
    type: Date,
    default: Date.now,
  },
  estado: {
    type: String,
    enum: ["activo", "inactivo", "eliminado"],
    default: "inactivo",
  },
  vehiculo: {
    type: String,
    required: function () {
      return this.rol === "repartidor";
    },
    required: false,
  },
  ruta: {
    type: [{ lat: Number, lng: Number }],
    default: [],
    required: function () {
      return this.rol === "repartidor";
    },
  },
  cod_contrasena: {
    type: String,
    required: false,
    default: null,
  },
  datos_de_contacto: {
    telefono: {
      type: Number,
      required: false,
    },
    direccion: {
      type: String,
      required: false,
    },
  },
});

module.exports = mongoose.model("Users", userSchema);
