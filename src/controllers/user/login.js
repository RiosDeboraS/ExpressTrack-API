const Users = require("../../modelos/usersModel")
const bcrypt = require("bcryptjs")
const login = async (req, res) => {
  try {
    const {email, contrasena} = req.body
    const findUser = await Users.findOne({email: email})
    if(!findUser) throw Error ("No se encuentra usuario")
    console.log(findUser.nombre);
    const validatePass = await bcrypt.compare(contrasena, findUser.contrasena) 
    if (!validatePass) throw Error("contrseña invalida")
    return (
        res.status(201).json({message: "Login confirmado"})
    )
} catch (error) {
    res.status(404).json({ error: error.message });
}
};


module.exports = { login };
