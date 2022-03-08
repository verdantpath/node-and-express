// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript
const sgMail = require('@sendgrid/mail')
// require('dotenv').config()
// import secure from './secure'
const secure = require('./secure/index.js');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
sgMail.setApiKey(secure.sendgridApiKey)
const msg = {
  to: 'mattdittmann@gmail.com', // Change to your recipient
  from: 'hello@verdantpath.io', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })