const mongoose = require("mongoose");
const Rutas = require("../../modelos/rutasModel");
const Users = require("../../modelos/usersModel");

exports.assignRepartidor = async (req, res) => {
  try {
    const { rutaId, repartidorId } = req.body;

    console.log("Received rutaId:", rutaId);
    console.log("Received repartidorId:", repartidorId);

    if (!mongoose.Types.ObjectId.isValid(rutaId)) {
      return res.status(400).json({ message: "ID de ruta inválido" });
    }

    if (!mongoose.Types.ObjectId.isValid(repartidorId)) {
      return res.status(400).json({ message: "ID de repartidor inválido" });
    }

    const ruta = await Rutas.findById(rutaId);
    if (!ruta) {
      return res.status(404).json({ message: "Ruta no encontrada" });
    }

    const repartidor = await Users.findById(repartidorId);
    if (!repartidor) {
      return res.status(404).json({ message: "Repartidor no encontrado" });
    }

    if (repartidor.rol !== "repartidor") {
      return res
        .status(400)
        .json({ message: "El usuario no tiene el rol de repartidor" });
    }

    ruta.id_repartidor_asignado = repartidorId;
    const updatedRuta = await ruta.save();

    // Emitir evento con la información de la ruta y el repartidor
    io.emit("rutaAsignada", { ruta: updatedRuta, repartidor: repartidor });

    res
      .status(200)
      .json({ message: "Repartidor asignado exitosamente", ruta: updatedRuta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al asignar el repartidor" });
  }
};
