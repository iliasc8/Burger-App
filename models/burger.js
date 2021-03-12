const orm = require("../config/orm");

const burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res)
        })
    },
    insertOne: function(newBurgerName, cb){
        orm.insertOne(newBurgerName, function(res){
            cb(res)
        })
    },
    updateOne: function(burgerId, cb) {
        orm.updateOne(burgerId, function(res){
            cb(res)
        })
    }
}

module.exports = burger;