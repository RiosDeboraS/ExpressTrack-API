const Users = require("../../modelos/usersModel")

const activateUser = async(req,res) => {
    try {
        const {id} = req.params
        const user = await Users.findOne({_id: id})
        if (!user) {
            return res.status(404).json({message: "Usuario no encontrado"})
        }
        user.estado = user.estado === "inactivo" ? "activo" : "inactivo";
        await user.save()     
        return res.status(200).json({message: "Usuario activado"})
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = {activateUser}