var orm = require("../config/orm.js");

var burger = {
    selectAll: function(table, cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(table, val, cb) {
        orm.insertOne("burgers", val, function(res) {
            cb(res);
        });
    },
    updateOne: function(table, val, id, cb) {
        orm.updateOne("burgers", val, id, function(res) {
            cb(res);
        })
    }
};

module.exports = burger;