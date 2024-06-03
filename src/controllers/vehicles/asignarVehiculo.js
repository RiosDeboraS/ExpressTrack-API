const mongoose = require("mongoose");
const Vehicles = require("../../modelos/vehiculoModel");
const Users = require("../../modelos/usersModel");

exports.assignVehicle = async (req, res) => {
  try {
    const { _id, repartidorId } = req.body;

    console.log("Received rutaId:", _id);
    console.log("Received repartidorId:", repartidorId);

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({ message: "ID de vehiculo inválido" });
    }

    if (!mongoose.Types.ObjectId.isValid(repartidorId)) {
      return res.status(400).json({ message: "ID de repartidor inválido" });
    }

    const vehicle = await Vehicles.findById(_id);
    if (!vehicle) {
      return res.status(404).json({ message: "vehiculo no encontrada" });
    }

    const repartidor = await Users.findById(repartidorId);
    if (!repartidor) {
      return res.status(404).json({ message: "Repartidor no encontrado" });
    }

    vehicle.id_repartidor_asignado = repartidorId;
    const updatedVehicle = await vehicle.save();

    // // Emitir evento con la información de la vehiculo y el repartidor
    // io.emit("Vehiculo Asignado", {
    //   vehicle: updatedVehicle,
    //   repartidor: repartidor,
    // });

    res.status(200).json({
      message: "Repartidor asignado exitosamente",
      vehicle: updatedVehicle,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al asignar el repartidor" });
  }
};
