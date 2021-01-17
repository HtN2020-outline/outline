const express = require("express");
const cors = require("cors");
// Convert string to object
const bodyParser = require('body-parser');

const main_route = require("./routes/main");

const app = express();

// cors is middleware that connects frontend and backend
app.use(cors());
// express.json so we read/write in json
app.use(express.json());
// bodyparser works on json format
app.use(bodyParser.json());

// Basic Routing
app.use("/", main_route);


module.exports = app;