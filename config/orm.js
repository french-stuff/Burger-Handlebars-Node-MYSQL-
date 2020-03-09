var connection = require("../config/connection");

var orm = {
    selectAll: function(table, cb) {
        var dbQuery = "SELECT * FROM " + table + ";";
    }
};

 