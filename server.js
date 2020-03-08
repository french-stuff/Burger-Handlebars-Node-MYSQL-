const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 3000;


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});