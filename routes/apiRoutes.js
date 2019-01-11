var express = require("express");
var router = express.Router();


router.get("/burgers", function(req, res) {
    res.render("index");
})

router.post("/customers", function (req, res)) {
    res.render("index");
}

module.exports = router;
