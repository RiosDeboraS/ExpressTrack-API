const Vehiculos = require("../../modelos/vehiculoModel")

const getVehiclesById = async (req, res) => {

try {
    const {id} = req.params
    const vehicle = await Vehiculos.findOne({_id:id})
    res.status(201).send(vehicle)

    } catch (error) {
    res.status(404).json({ error: error.message});
    }
}

module.exports = getVehiclesById;