const Vehiculos = require("../../modelos/vehiculoModel");

const updateVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const { marca, modelo, placa, tipo, capacidad, estado, ubicacion_actual, fecha_mantenimiento } = req.body;

        const vehicle = await Vehiculos.findById(id);
        if (!vehicle) {
            return res.status(404).json({ message: "El vehículo no se encontró" });
        }

        if (marca) vehicle.marca = marca;
        if (modelo) vehicle.modelo = modelo;
        if (placa) vehicle.placa = placa;
        if (tipo) vehicle.tipo = tipo;
        if (capacidad) vehicle.capacidad = capacidad;
        if (estado) vehicle.estado = estado;
        if (ubicacion_actual) vehicle.ubicacion_actual = ubicacion_actual;
        if (fecha_mantenimiento) vehicle.fecha_mantenimiento = fecha_mantenimiento;

        await vehicle.save();

        return res.status(200).json({ message: "Vehículo actualizado correctamente" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = updateVehicle;