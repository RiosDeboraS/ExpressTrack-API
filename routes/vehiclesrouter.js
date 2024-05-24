const {Router} = require("express");
const getAllVehicles = require("../controllers/vehicles/getAllVehicles");
const getVehiclesById = require("../controllers/vehicles/getByIdVheicles");
const postVehicle = require("../controllers/vehicles/postVehicle")
const putVehicle = require("../controllers/vehicles/putVehicle");
const deleteVehicle = require("../controllers/vehicles/deletVehicle");


const vehicleRouter = Router();

vehicleRouter.get("/", getAllVehicles)
vehicleRouter.get("/:id", getVehiclesById)
vehicleRouter.post("/create", postVehicle)
vehicleRouter.put("/update/:id", putVehicle)
vehicleRouter.delete("/delete/:id", deleteVehicle)

module.exports = vehicleRouter;