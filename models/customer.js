var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Customer = sequelize.define("Customer", {

    name: Sequelize.STRING,
    allowNull: false
});

// sync with DB
Customer.sync();


module.exports = Customer;