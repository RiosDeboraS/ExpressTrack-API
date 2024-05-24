const express = require("express");

const assignRuta = require("../controllers/rutas/asiganciondeRepertidorController");

const routes = express.Router();

//endpoints y controllers

routes.post("/asignar-repartidor", assignRuta.assignRepartidor);

module.exports = routes;
