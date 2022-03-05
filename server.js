//Require the neccessary dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mongodbURI = require('./config/keys');

const app = express();

//Middleware: bodyparser
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

// Database
const db = mongodbURI.mongoURI;

// Database connnection

mongoose.connect(
    db,
    { useNewUrlParser: true }
)
    .then(() => console.log("Database successfully connected"))
    .catch(err => console.log(error));

// port to listen
const port = process.env.PORT || 5000;


// run the app
app.listen(port, () => console.log(`Server up and running on port ${port} `));




