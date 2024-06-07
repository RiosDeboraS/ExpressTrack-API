const Users = require ("../../modelos/usersModel");

const roleChange = async (req, res) =>{

    const {id} = req.params;

 try {
    const user = await Users.findById(id);

    if(!user){
        throw new Error("No se encontro el usuario")
    }

    user.rol = user.rol === "administrador" ? "repartidor" : "administrador";
    await user.save();

    res.status(200).json({ message: "Rol del usuario modificado"})
    
    } catch (error) {
        res.status(404).json({error: error.message})
    }

}

module.exports = roleChange;