const mysql = require("mysql");
const dbconnection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "mypassword",
  database: "schooldir",
});

dbconnection.connect();
