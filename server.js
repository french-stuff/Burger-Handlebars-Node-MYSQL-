const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout "main"}));
app.set("view engine", "handlebars");

var routes = require(".controller/burgers_controller");
app.use(routes);


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

