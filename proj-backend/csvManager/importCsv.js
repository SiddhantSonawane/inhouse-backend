const fs = require("fs");
const mysql = require("mysql");
const fastcsv = require("fast-csv");

  console.log('importing started')
  let stream = fs.createReadStream("./sample.csv");
  let csvData = [];
  let csvStream = fastcsv
    .parse()
    .on("data", function (data) {
      csvData.push(data);
    })
    .on("end", function () {
      // remove the first line: header
      csvData.shift();

      // create a new connection to the database
      const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "siddhant",
        database: "clgdata",
      });

      // open the connection
      connection.connect((error) => {
        if (error) {
          console.error(error);
        } else {
          let query = "INSERT INTO sampledata (RollNo, Mail) VALUES ?";
          connection.query(query, [csvData], (error, response) => {
            console.log(error || response);
            // Close the database connection
            connection.end();
          });
        }
      });
    });

  stream.pipe(csvStream);
