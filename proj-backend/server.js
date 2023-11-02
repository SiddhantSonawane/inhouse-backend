const express = require("express");
const mysqlConnection = require("./config/mysql");
// const importCsv = require("./csvManager/importCsv");
const exportCsv = require("./csvManager/exportCsv");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
