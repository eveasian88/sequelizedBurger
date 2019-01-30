var express = require("express");
var router = express.Router();
var db = require("../models");


router.get("/api/burgers", function (req, res) {
    db.Burger.findAll({}).then(function (dbburgers) {
        res.json(dbBurgers);
    });
});

// Create a new Burger
router.post("/api/burgers", function (req, res) {
    db.Burger.create(req.body).then(function (dbBurger) {
        res.json(dbBurger);
    });
});

// Delete a Burger by id
router.delete("/api/burgers/:id", function (req, res) {
    db.Burger.destroy({ where: { id: req.params.id } }).then(function (dbBurger) {
        res.json(dbBurger);
    });
});



module.exports = router;
