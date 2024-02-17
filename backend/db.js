require("dotenv").config();
const mysql =require ('mysql2');


const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  debug: true,
});

  let sql="SELECT * FROM student_basic;"
pool.execute(sql,function(err,res){
    if (err) throw err;
    console.log(res); 

})
  module.exports=pool.promise();