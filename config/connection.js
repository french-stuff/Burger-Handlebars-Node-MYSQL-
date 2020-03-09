var mysq = require("mysql");
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ca5aBlanca310",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err){
        console.err("err connecting: " + err.stack);
        return;
    }
    console.log("connecting as id " + connection.threadId);

});

module.exports = connection;