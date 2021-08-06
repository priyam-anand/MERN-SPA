const express = require('express');
const app=express();
const mongoose = require('mongoose');
const dotenv=require('dotenv');

//using dotenv to hide password and port, also can be used to hide api keys
dotenv.config({path:'./config.env'});
const PORT = process.env.PORT;

//DB part 
require('./DB/connect');
const User = require('./Models/userSchema');

//To convert raw data to json format
app.use(express.json());

//MIDDLEWARE
const middleWare = (req,res,next) =>{
    console.log('this is middleware');
    setTimeout(next, 1000);
}

//Defined endpoints in another file
app.use(require('./router/endpoints'));

//ENDPOINTS
app.get('/about',middleWare,(req,res)=>{
    res.send("hello form about page");
});
app.get('/contact',(req,res)=>{
    res.send("hello from contact page");
});
app.get('/signup',(req,res)=>{
    res.send("hello from signup page");
});

//Server listen
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
});