const Vehiculos = require("../../modelos/vehiculoModel")

const getAllVehicles = async (req, res) => {

try {
    const vehicles = await Vehiculos.find()
    res.status(201).send(vehicles)

    } catch (error) {
    res.status(404).json({ error: error.message});
    }
}

module.exports = getAllVehicles;