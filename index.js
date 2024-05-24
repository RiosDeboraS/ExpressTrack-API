// **Librerías:** Importamos Express y Mongoose, y configuramos dotenv para las variables de entorno.
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const vehicleRouter = require("./src/routes/vehiclesrouter");
require("dotenv").config();
const routes = require("./src/routes/routes");
const asignarRepartidorRouter = require("./src/routes/asignarRepartidorRoute");
const userRoutes = require("./src/routes/userRouter");
const getAllRoutes = require("./src/routes/getRoutes");
const deleteRoutes = require("./src/routes/deleteRouter");
const socketIO = require("socket.io"); // Import socketIO
const getWelcomeMessage = require("./welcome");

const app = express();

const server = app.listen(3000, () =>
  console.log("¡Hola! Estoy funcionando correctamente.")
);

const io = socketIO(server);

app.get("/", (req, res) => {
  const welcomeText = getWelcomeMessage(req, res);
  res.send(welcomeText);
});
app.use(bodyParser.json());

// rutas montadas

app.use("/", routes);
app.use("/api/rutas", asignarRepartidorRouter);
app.use("/api/rutas", getAllRoutes);
app.use("/api", deleteRoutes);
app.use("/user", userRoutes);
app.use("/vehicles", vehicleRouter);

mongoose
  .connect(process.env.MONGOSE_URI)
  .then(() => console.log("Base de datos conectada correctamente"))
  .catch(() => console.log("Error al conectar a la base de datos"));
