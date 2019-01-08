// require express, path, and burger module
var express = require('express');
var path = require('path');

// set up express router
// var router = express.Router();

// import burger.js to use database functions
var burger = require('../models/burger.js');


var db = require("../models");
// db.sequelize.sync();

module.exports =function(app) {
// defining paths to GET all burgers
app.get("/", function (req, res) {

    // var query = {};
    // if (req.query.customer_id) {
    //     query.CustomerId = req.query.customer_id;
    // }
    db.Burger.findAll({
        // where: query,
        include: [db.Customer]
    }).then(function (dbBurger) {
        res.json("dbBurger");
    });
});

// defining paths to POST new burger
app.post("/burgers/create", function (req, res) {

    db.Burger.create(req.body).then(function(dbBurger) {
        res.json(dbBurger);
      });
    });


    // update input with customer name and devoured
    app.delete("/api/burgers/:id", function (req, res) {
        var burgerEaten = req.body.devoured;
        var burgerId = req.params.id;
        // creating a customer from user input
        if (req.body.customer_name === "") {
            console.log("Please enter Customer name");
        } else {
            db.Customer.create({
                name: req.body.customer_name
            }).then(function (data) {
                // updating the burger table with the new customer input
                db.Burger.update({
                    devoured: burgerEaten,
                    CustomerId: data.id
                }, {
                        where: {
                            id: burgerId
                        },
                        include: [db.Customer]

                    }).then(function (data) {
                        console.log(data);
                        res.redirect("/burgers");
                    });
            });
        };


    });

    // // // exporting router
    // module.exports = router;
}