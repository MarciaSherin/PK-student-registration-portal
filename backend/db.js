require("dotenv").config();
const mysql =require ('mysql2');


const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user:process.env.DB_USER,
   password: null,
  database:process.env.DB_NAME,
});

  module.exports=con;