// require MySQL
var mysql = require("mysql");

// setting up specific connection for heroku
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "esperAnza#88",
    database: "burgers_db"
  });

// mysql://hgj6br7gjurrluws:qb7nx85zha4ons40@nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/xkpvztxr6wp5tkjv

// establish connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export connection
module.exports = connection;