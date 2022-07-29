const express =require ("express");
const app = express();
const cors=require("cors");
const db=require("./config/db");
const { Router } = require("express");
const Joi=require('@hapi/joi');

app.use(cors());
app.use(express.json());

const userRoute=require("/Users/karishmajobanputra/Documents/WebApps/SocialMediaClone/backend/routes/User.jsx");
app.use("/user",userRoute);
app.use("/auth",userRoute);
 

app.listen(3001, (req,res)=>{
console.log('server running');
});

 