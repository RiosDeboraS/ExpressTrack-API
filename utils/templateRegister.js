require("dotenv").config();
const email = process.env.USER_EMAIL

const emailRegister = (to, id) => {
    return {
        from: email,
        to: to,
        subject: "Registro",
        text : "gracias por registrarte",
        // falta redireccionar al front
        // ESTA PARTE DE CAMBIA CON EL FRONT
        html: `<h5>para activar tu cuenta: http://localhost:3000/user/activate/${id}</h5>`

    }
}

module.exports = emailRegister