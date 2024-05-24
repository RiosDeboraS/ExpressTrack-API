const Vehiculos = require("../../modelos/vehiculoModel")

const deleteVehicle = async (req, res) => {
    try {
        const { id } = req.params;

        const vehicle = await Vehiculos.findById(id);
        if (!vehicle) {
            return res.status(404).json({ message: "El vehículo no se encontró" });
        }

        await Vehiculos.deleteOne({ _id: id });

        return res.status(200).json({ message: "Vehículo eliminado correctamente" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = deleteVehicle;