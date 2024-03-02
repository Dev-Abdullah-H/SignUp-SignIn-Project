const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path');  // Import the 'path' module
//  Middleware & packages
const uri = require("./pass");
const app = express();
app.use(bodyParser.json())
app.use(cors())
// Dist
app.use(express.static(path.join(__dirname, '../frontend/dist')));
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
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

const SignUpRoute = require('./routes/SignUp')
app.use('/api1', SignUpRoute)

const TodoRoute = require('./routes/Todo')
app.use('/api2', TodoRoute)