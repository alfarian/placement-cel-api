const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// simple route
app.get("/status", (req, res) => {
  let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
       user: 'put_your_username_here',
       pass: 'put_your_password_here'
    }
});
const message = {
  from: 'info@alfarians.com', // Sender address
  to: 'adarsh97vtk@gmail.com',         // List of recipients
  subject: 'Test | auto generated email', // Subject line
  text: 'This is a test dont replay' // Plain text body
};
transport.sendMail(message, function(err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log(info);
  }
});
res.json({ message: "up and healthy :)" });
});

require("./app/routes/placement.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
