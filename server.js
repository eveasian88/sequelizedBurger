// requiring express, bodyparser, and mysql
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var path = require("path");
var morgan = require("morgan");

// creating an express app instance
var app = express();

var PORT = process.env.PORT || 8080;

var db = require("./models");


// set default directory to public
app.use(express.static("public"));

// parse request body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// set handlebars
var exphbs = require("express-handlebars");


// prepares express app to use and layout handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// requiring routes specified in burgers_controller.js file
var routes = require("./controllers/burgers_controller.js");


// tell express to use routes
var htmlRoutes = require("./routes/htmlRoutes");
app.use("/", htmlRoutes);

var apiRoutes = require("./routes/htmlRoutes");
app.use("/", apiRoutes);


// sets app to listen at specified port
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT);
    });
});

