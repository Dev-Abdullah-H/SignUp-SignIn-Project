const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require('cors');
//  Middleware & packages
const uri = require("./pass");
const app = express();
app.use(bodyParser.json())
app.use(cors())
// Database Connection
mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected");
    listen();
  })
  .catch((err) => console.log(err));
// Server Connection
const listen = () => {
  app.listen(3000, () => {
    console.log("Server Running");
  });
};

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

const SignUpRoute = require('./routes/SignUp')
app.use('/api1', SignUpRoute)

const TodoRoute = require('./routes/Todo')
app.use('/api2', TodoRoute)