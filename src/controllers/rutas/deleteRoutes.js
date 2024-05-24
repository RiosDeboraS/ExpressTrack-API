const Rutas = require("../../modelos/rutasModel");

exports.deleteRutaById = async (req, res) => {
  try {
    const { rutaId } = req.params;

    const deletedRuta = await Rutas.findByIdAndDelete(rutaId);

    if (!deletedRuta) {
      return res.status(404).json({ message: "Ruta no encontrada" });
    }

    res
      .status(200)
      .json({ message: "Ruta eliminada exitosamente", deletedRuta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar la ruta" });
  }
};
