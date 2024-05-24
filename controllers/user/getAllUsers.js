const Users = require("../../modelos/usersModel")

const getAllUsers = async (req,res) => {
    try {
        const users = await Users.find()
        res.status(201).send(users)
    } catch (error) {
        res.status(404).json({ error: error.message });
        
    }
}

module.exports = {getAllUsers}

