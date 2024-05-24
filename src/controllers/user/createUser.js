const Users = require("../../modelos/usersModel")
const bcryptjs = require("bcryptjs");
const sendEmail = require("../../utils/emails");

const createUser = async (req, res) => {
  try {
    const {nombre, apellido, email, contrasena, rol, dni, cod_contrasena, datos_de_contacto} = req.body
    if (!(nombre || apellido || email || contrasena || rol || estado || dni)) throw Error("Se requiere mas data")
        const userExistDni = await Users.findOne({dni: dni})
    if (userExistDni) throw Error("Ya existe un usuario con este dni") 
        const userExistEmail = await Users.findOne({email: email})
        if (userExistEmail) throw Error("Ya existe un usuario con este mail") 
        const passwordHash = await bcryptjs.hash(contrasena, 8)
        const user = await Users.create({nombre, apellido, email, contrasena:passwordHash, rol, dni, cod_contrasena: cod_contrasena || null, datos_de_contacto: datos_de_contacto || {telefono: null, direccion: null} })
        sendEmail(email, user.id)
        return (
            res.status(201).json({message:"Usario creado con exito"})
        )
} catch (error) {
    res.status(404).json({ error: error.message });
}
};


module.exports = { createUser };
