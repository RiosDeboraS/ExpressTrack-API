const mongoose = require("mongoose");

const rutaSchema = new mongoose.Schema({
  id_usuario_creador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  id_repartidor_asignado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: false,
  },
  origen: {
    type: { type: String, enum: ["Address"], required: true }, // Changed type to "Address"
    address: { type: String, required: true }, // Added address property
  },
  destino: {
    type: { type: String, enum: ["Address"], required: true }, // Changed type to "Address"
    address: { type: String, required: true }, // Added address property
  },
  puntos_intermedios: [
    {
      type: { type: String, enum: ["Address"] }, // Changed type to "Address"
      address: { type: String }, // Added address property
    },
  ],
  descripcion: { type: String },
  fecha_creacion: { type: Date, default: Date.now },
  estado: {
    type: String,
    enum: ["en curso", "completada", "cancelada"],
    default: "en curso",
  },
  historial_estados: [
    {
      estado: {
        type: String,
        enum: ["en curso", "completada", "cancelada"],
      },
      fecha: { type: Date, default: Date.now },
    },
  ],
  tiempo_estimado_llegada: { type: Date },
});

module.exports = mongoose.model("Rutas", rutaSchema);
