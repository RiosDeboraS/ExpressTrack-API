const { Router } = require('express');
const getcordinate = require("../controllers/geocoding/getCordinates");

const goecodingRouter = Router();

goecodingRouter.post("/", getcordinate );


module.exports = goecodingRouter;