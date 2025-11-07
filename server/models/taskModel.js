const mongoose = require("mongoose");

const taskSchema= new mongoose.Schema({
    tasktitle:String,
    duration:Number,
    priority:String,
    empid:String
    
})

module.exports = mongoose.model("task", taskSchema);