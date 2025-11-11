const mongoose = require("mongoose");

const taskSchema= new mongoose.Schema({
    tasktitle:String,
    duration:Number,
    priority:String,
    empid:String,
    taskstatus:String,
    completionday:Number,
    comment:String,    
    tasksend: Boolean
})

module.exports = mongoose.model("task", taskSchema);