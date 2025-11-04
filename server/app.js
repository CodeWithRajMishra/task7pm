const express = require("express");
const app=express();
require("dotenv").config();
const AdminRoute= require("./routers/adminRoutes");
const cors = require("cors");
const bodyparser = require('body-parser')
const mongoose = require("mongoose");

mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB Connected!");
})

app.use(cors());
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/admin", AdminRoute);



const Port = process.env.PORT || 8000
app.listen(Port, ()=>{
    console.log(`Server run on Port ${Port}!`);
})