const empModel = require("../models/empModel");
const TaskModel= require("../models/taskModel");


const empLogin=async(req, res)=>{
    const { email , password }=req.body;
    const employee = await empModel.findOne({email:email});

     if (!employee)
     {
        res.status(401).send({msg:"Invalid Employee Email!"});
     }

     if (employee.password!=password){
          res.status(401).send({msg:"Invalid Employee Password!"});
     }
    

    res.status(200).send({employee:employee, msg:"You are Successfully Login!"});

}


const showTask=async(req, res)=>{
     const { id } = req.query;
    const task= await TaskModel.find({empid:id});
    res.status(200).send(task);
}

module.exports ={
    empLogin,
    showTask
}