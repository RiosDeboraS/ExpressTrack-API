const Vehiculos = require("../../modelos/vehiculoModel")

const createVehicle = async (req, res) => {

    try {
        
        const {marca, modelo, placa, tipo, capacidad, estado, ubicacion_actual,fecha_mantenimiento} = req.body;
        if ( !(marca || modelo || placa || tipo || capacidad || estado || ubicacion_actual || fecha_mantenimiento)) throw Error ("Falta informacion necesaria")

        //verif patente
        const vehicleLicensePlate = await Vehiculos.findOne ({placa: placa})
        if (vehicleLicensePlate) throw Error ("Existe un vehiculo con esa patente asignada")

        const vehicle = await Vehiculos.create({marca, modelo, placa, tipo, capacidad, estado, ubicacion_actual,fecha_mantenimiento})

        return (
            res.status(201).json ({message: "Vehiculo creado con exito"})
        )

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = createVehicle;