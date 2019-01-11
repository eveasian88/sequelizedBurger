var express = require("express");

var router = express.Router();

var db = require("../models");


// module.exports = function (router) {
    // defining paths to GET all burgers
    router.get("/", function (req, res) {

        db.Burger.findAll({
            // include: [db.Customer]
        }).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    // defining paths to POST new burger
    router.post("/burgers/create", function (req, res) {

        db.Burger.create(req.body).then(function (dbBurger) {
            res.json(dbBurger);
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

    // exporting router
    module.exports = router;
