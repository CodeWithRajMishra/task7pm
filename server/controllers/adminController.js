const AdminModel = require("../models/adminModel");


const adminLogin=async(req, res)=>{
    const { email , password} = req.body;
    
    try {
         const admin= await AdminModel.findOne({email:email});
        
         if (!admin)
         {
            res.status(401).send({msg:"Invalid Admin Email!"});
         }

         if (admin.password!=password){
            res.status(401).send({msg:"Invalid Admin Password!"});
         }

         res.status(200).send({admin:admin, msg:"You are Successfully Login!"})


    } catch (error) {
        console.log(error);
    }


}

module.exports ={
    adminLogin
}