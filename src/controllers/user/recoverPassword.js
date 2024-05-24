const Users = require("../../modelos/usersModel")
const {v4:uuidv4} = require("uuid"

)
const recoverPasswoord = async(req, res) => {
    const {id} = req.params
    console.log(id);
    const user = await Users.findOne ({_id:id})
    // const
    user.cod_contrasena = uuidv4()
    await user.save()
    return res.status(200).json({message: "Clave generada"})

}

module.exports = {recoverPasswoord}