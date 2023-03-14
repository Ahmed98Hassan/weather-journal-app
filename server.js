// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

// Initialize the main project folder
app.use(express.static("website"));

// Communication with the server
const cors = require("cors");

// Cors for cross origin allowance
app.use(cors());

//Contact with the customer (body-parser)
const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sending data to the client 
app.get("/all", (req, res) => {
    res.send(projectData)
});


// Get page data 
app.post("/add", (req, res) => {
    projectData = req.body;
    res.send(projectData);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
