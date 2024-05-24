const express = require("express");
const rutasController = require("../controllers/rutas/rutasController");

const routes = express.Router();

//endpoints y controllers
routes.post("/rutas", rutasController.createRuta);

module.exports = routes;
