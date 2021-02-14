const nodemailer = require('nodemailer');
require("dotenv").config();


module.exports.email_post = async (req, res) => {
    const { name, email, topic, description } = req.body;

    console.log("body", req.body)

    const output = `
        <p>You have a new email from architectureIcons</p>
        <h3>Contact Details</h3>
        <ul>
            	<li>Name: ${name}</li>
            	<li>Email: ${email}</li>
            	<li>Topic: ${topic}</li>
                <li>Date: ${new Date().toDateString()}</li>
        </ul>
        <h3>Message</h3>
        <p>${description}</p>
    `

    try {

        let transporter = nodemailer.createTransport({
            // host: "smtp.ethereal.email",
            service: "gmail",
            // port: 587,
            // secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `${email}`, // sender address
            to: "architectureiconsweb@gmail.com", // list of receivers
            subject: topic, // Subject line
            text: "Hello world?", // plain text body
            html: output, // html body
        });

        // console.log("Message sent: %s", info.messageId);


        // console.log("email sent")

        res.status(200).json({ message: "Email sent successfully" })
    }
    catch (e) {
        // console.log(e)
        res.status(400).json({ error: e })
    }


}