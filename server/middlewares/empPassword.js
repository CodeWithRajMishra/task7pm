


const userPassword=()=>{
    let UPass="";
     let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

     const strLen= str.length;

     for (var i=0; i<=7; i++){
         let myno= Math.floor(Math.random()*strLen);
         UPass+=str.charAt(myno);
     }
    return UPass;
    }

    module.exports={
        userPassword
    }