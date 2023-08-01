const mysql = require("mysql");

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: "localhost", // Hostname of the MySQL server
  port: 3306, // Port number of the MySQL server
  user: "root", // Username for connecting to MySQL
  password: "371969", // Password for connecting to MySQL
  database: "app_auto", // Name of the database created in step 3
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});
console.log(mysql.version);
// Perform database operations using the "connection" object
// ... Your database operations here ...

// Close the MySQL connection when done
