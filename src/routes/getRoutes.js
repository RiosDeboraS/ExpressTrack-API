const express = require("express");
const rutasController = require("../controllers/rutas/getAllRutas");

const router = express.Router();

router.get("/", rutasController.getAllRutas);

module.exports = router;
