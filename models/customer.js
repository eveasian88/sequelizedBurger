var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Customer = sequelize.define("Customer", {

    name: Sequelize.STRING,
    allowNull: false,

    freezeTableName: true,
});

// sync with DB
Customer.sync();


module.exports = Customer;