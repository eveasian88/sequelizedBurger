var express = require("express");
var router = express.Router();
var db = require("../models");


router.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (dbBurgers) {
        res.render("index", {
            burgers: dbBurgers
        });
    });
});

router.get("/burger/:id", function (req, res) {
    db.Buger.findOne({
        where: { id: req.params.id }
    }).then(function (dbBurger) {
        res.render("burger", {
            burger: dbBurger
        });
    });
});


router.get("*", function (req, res) {
    res.render("404");
});


module.exports = router;
