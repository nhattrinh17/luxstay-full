const mysql = require('mysql2');

const HOST = process.env.HOST
const USER = process.env.USER
const DATABASE = process.env.DATABASE

const connectDatabase = mysql.createConnection({
  host: HOST,
  user: USER,
  database: DATABASE,
}).promise();

module.exports =  connectDatabase