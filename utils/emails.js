const nodeMailer = require("nodemailer");
const emailRegister = require("./templateRegister");
require("dotenv").config();

const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth:{
        user: process.env.USER_EMAIL,
        pass: process.env.PASSWORD_EMAIL
    }
})



const sendEmail = (to, id) => {
    transporter.sendMail(emailRegister(to, id), (error, info) => {
    if(error) {
        console.log(error);
    } else {
        console.log("email sent.");
    }
})
}

module.exports = sendEmail