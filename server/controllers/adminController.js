const AdminModel = require("../models/adminModel");


const adminLogin=async(req, res)=>{
    const { email , password} = req.body;
     console.log(req.body);
     res.send("OKKK");
}

module.exports ={
    adminLogin
}