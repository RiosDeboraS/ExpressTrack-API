const mongoose = require("mongoose");
const Rutas = require("../../modelos/rutasModel");

exports.createRuta = async (req, res) => {
  try {
    const {
      id_usuario_creador,
      origen,
      destino,
      puntos_intermedios,
      descripcion,
      estado,
    } = req.body;

    const newRuta = new Rutas({
      id_usuario_creador,
      origen: {
        type: "Address",
        address: origen,
      },
      destino: {
        type: "Address",
        address: destino,
      },
      puntos_intermedios: puntos_intermedios
        ? puntos_intermedios.map((punto) => ({
            type: "Address",
            address: punto,
          }))
        : [],
      descripcion,
      estado,
      id_repartidor_asignado: null,
    });

    const savedRuta = await newRuta.save();

    res
      .status(201)
      .json({ message: "Ruta creada exitosamente", ruta: savedRuta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear la ruta" });
  }
};
