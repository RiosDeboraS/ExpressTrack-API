const Vehiculos = require("../../modelos/vehiculoModel");

const updateVehicle = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const vehicle = await Vehiculos.findOneAndUpdate(
            { _id: id }, 
            updateData, 
            { new: true } 
        );

        if (!vehicle) {
            return res.status(404).json({ message: "El vehículo no fue encontrado" });
        }

        return res.status(200).json({ message: "Vehículo actualizado correctamente", vehicle });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = updateVehicle;