const Rutas = require("../../modelos/rutasModel");

exports.getAllRutas = async (req, res) => {
  try {
    const rutas = await Rutas.find();
    res.status(200).json(rutas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las rutas" });
  }
};
