const { Router } = require("express");
const { createUser } = require("../controllers/user/createUser");
const { getAllUsers } = require("../controllers/user/getAllUsers");
const { getUserById } = require("../controllers/user/getUserById");
const { activateUser } = require("../controllers/user/activateUser");
const { login } = require("../controllers/user/login");
const { recoverPasswoord } = require("../controllers/user/recoverPassword");

const userRouter = Router();

userRouter.get("/all", getAllUsers);
userRouter.post("/create", createUser);
userRouter.post("/login", login);
userRouter.get("/:id", getUserById);
userRouter.put("/activate/:id", activateUser);
userRouter.put("/recover/:id", recoverPasswoord);

module.exports = userRouter;
