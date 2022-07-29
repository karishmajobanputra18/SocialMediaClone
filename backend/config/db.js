const dotenv = require('dotenv');
dotenv.config({path:"./config/database.env"});
const mysql = require ("mysql");

const db = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    
  });
  
  db.connect((err)=>{
    if(err){
      console.log(err);
    }else{
      console.log("mysql connected!");
    }
  });

  module.exports=db;