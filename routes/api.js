const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/contact', (req, res) => {
  console.log(req.body);
  const output =`
  <p>You have a new Contact Request</p>
  <h3>Contact Details</h3>
  <ul>
  <li>Name: ${req.body.name}</li
  <li>Company: ${req.body.company}</li>
  <li>Email: ${req.body.email}</li>
  <li>Phone: ${req.body.phone}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 25,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'kenyon.westbrook@gmail.com', // generated ethereal user
            pass: 'Im11-11gone' // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"My Profile" <kenyon.westbrook@gmail.com>', // sender address
        to: 'kenyon.westbrook@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
module.exports = router;
