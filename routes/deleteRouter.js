const express = require("express");
const router = express.Router();
const rutasController = require("../controllers/rutas/deleteRoutes");

// Ruta para eliminar una ruta por su ID
router.delete("/rutas/:rutaId", rutasController.deleteRutaById);

module.exports = router;
