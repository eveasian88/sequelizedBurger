'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const customer = sequelize.define('customer', {
//     burger: DataTypes.STRING,
//     customer: DataTypes.STRING
//   }, {});
//   customer.associate = function(models) {
//     // associations can be defined here
//   };
//   return customer;
// };

module.exports = function (sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1, 111]
            }
      }
  });

  Customer.associate = function (models) {
      Customer.hasMany(models.Burger, {
          onDelete: "cascade"
      });
  };

  return Customer;
};