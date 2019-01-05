// require express, path, and burger module
var express = require('express');
var path = require('path');

// set up express router
var router = express.Router();

// import burger.js to use database funvctions
var burger = require('../models/burger.js');


var db = require("../models");
// db.sequelize.sync();

// defining paths to GET all burgers
router.get("/", function (req, res) {

    var query = {};
    if (req.query.customer_id) {
        query.CustomerId = req.query.customer_id;
    }
    db.Burger.findAll({
        where: query,
        include: [db.Customer]
    }).then(function (data) {
        var hbObject = {
            burgers: data
        };
        res.render("index", hbObject);
    });
});

// defining paths to POST new burger
router.post("/api/burgers", function (req, res) {
    console.log("request.body", req.body);

    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function (data) {
        res.redirect("/burgers");
    });
});

// update input with customer name and devoured
router.delete("/api/burgers/:id", function (req, res) {
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

// exporting router.
module.exports = router;