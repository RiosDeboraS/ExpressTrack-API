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
const geocodingRouter = require("./src/routes/geocodingRouter");
const socketIO = require("socket.io");
const cors = require("cors");
const getWelcomeMessage = require("./welcome");

const app = express();

const server = app.listen(3000, () =>
  console.log("¡Hola! Estoy funcionando correctamente.")
);

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
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
app.use("/geocoding", geocodingRouter )

mongoose
  .connect(process.env.MONGOSE_URI)
  .then(() => console.log("Base de datos conectada correctamente"))
  .catch(() => console.log("Error al conectar a la base de datos"));
