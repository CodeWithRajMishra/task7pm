const mongoose = require("mongoose");

const taskSchema= new mongoose.Schema({
    tasktitle:String,
    duration:Number,
    priority:String,
    empid:{type:mongoose.Schema.Types.ObjectId, ref:"employee"},
    taskstatus:String,
    completionday:Number,
    comment:String,    
    tasksend: Boolean
})

module.exports = mongoose.model("task", taskSchema);