// require express, path, and burger module
var express = require('express');
var path = require('path');

// set up express router
var router = express.Router();

// import burger.js to use database funvctions
var burger = require('../models/burger.js');

// defining paths
router.get("/", function(req, res) {
    burger.selectAll(function(data){
        var hbObject = {
            burgers : data
        };
        // console.log(' GET ROUTE :: ', hbObject);
        res.render("index", hbObject);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log("request.body", req.body);

    burger.insertOne(req.body.burger_name, false, function(result){
        console.log('result :: ', result);
        res.json({ id: result.insertId });
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = 'id = ' + req.params.id; 
    connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        // if error, send generic server failure
        return res.status(500).end();
      }
      else if (result.affectedRows === 0) {
        // if no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
  
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id + ';';
  
    console.log("condition", condition);
  
    burger.updateOne('devoured = true', condition, function(result) {
      if (result.changedRows == 0) {
        // if no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

// exporting router.
module.exports = router;