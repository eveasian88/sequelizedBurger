module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 111]
              }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Burger.associate = function (models) {
        Burger.belongsTo(models.Customer, {
           foreignKey: {
               allowNull: false
           }
        });
    };
    return Burger;
};

// sequelize model:generate --name bike --attributes name:string,customer:string