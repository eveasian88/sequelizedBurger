var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    insertOne: function(val_one, val_two, cb){
        orm.insertOne('burgers', 'burger_name', 'devoured', val_one, val_two, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb){
        orm.updateOne('burgers', objColVals, condition, function(res){
            cb(res);
        });
    },
    deleteOne: function(conditionVal, cb){
        orm.deleteOne('burgers', 'id', conditionVal, function(res){
          cb(res);
        });
      }
}

module.exports = burger;