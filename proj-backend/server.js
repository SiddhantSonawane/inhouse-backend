const express = require('express');
const dotenv = require('dotenv').config();


const app = express();

const port = process.env.PORT || 5000


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})


//creating connection to mysql
const mysqlConnection = require('../proj-backend/csvManager/mysql')
const importCsv = require('../proj-backend/csvManager/importCsv')