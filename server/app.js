const express = require('express');
const app=express();
const mongoose = require('mongoose');
const dotenv=require('dotenv');
const cookieParser = require('cookie-parser')
//using dotenv to hide password and port, also can be used to hide api keys
dotenv.config({path:'./config.env'});
const PORT = process.env.PORT;

//DB part 
require('./DB/connect');
const User = require('./Models/userSchema');

//To convert raw data to json format
app.use(express.json());
app.use(cookieParser())

//Defined endpoints in another file
app.use(require('./router/endpoints'));

//Server listen
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
});