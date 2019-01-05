var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Burgers = sequelize.define("Burgers", {

    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
});

// sync with DB
Burgers.sync();


module.exports = Burgers;