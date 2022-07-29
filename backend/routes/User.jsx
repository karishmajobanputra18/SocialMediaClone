const express = require("express");
const router = express.Router();
const db=require("../config/db");
const Joi=require('@hapi/joi');
 

const schema={
    username:Joi.string().min(6).required,
    email:Joi.string().min(6).required.email,
    password:Joi.string().min(6).required
};
router.post('/register' ,(req, res) => {
const Validation= Joi.validate(req.body,schema);
const{username,email,password}=req.body;
    db.query(
        'INSERT INTO users (username, password) VALUES (?,?);',[username,password],
        (err,results)=>{
            console.log(err);
            // res.send(Validation);
        }
    );
  });

router.post('/login', async (req, res) => {
    
    const username=req.body.username;
    const password =req.body.password;
    
    //const email=req.body.email
    db.query(
        'SELECT username FROM users WHERE username = ?' ,[username],
        (err,results) => {
            if (err) {
            console.log(err);
            console.log(req.body);
             }
            if(results.length > 0){ 

            if(password == results[0].password){
            res.json({loggedIn: true ,username:username})
            console.log(results);
            
        }else {
            res.json({loggedIn:false,
            message:"wrong username or password combination",
        });
           
            
        }
        
        } else{
            res.json({loggedIn:false, message:"user doesnt exist"});
        }
        
    
    });
});  



  
module.exports=router; 