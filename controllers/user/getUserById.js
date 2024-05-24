const Users = require("../../modelos/usersModel")

const getUserById = async(req,res) => {
    try {
        const {id} = req.params
        const user = await Users.findOne({_id: id})
        res.status(201).send(user)
    } catch (error) {
        res.status(404).json({ error: error.message });
        
    }
}

module.exports = {getUserById}