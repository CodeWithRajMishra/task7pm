
const express = require("express");
const route = express.Router();
const AdminController = require("../controllers/adminController");


route.post("/login", AdminController.adminLogin);
route.post("/createuser", AdminController.createUser);
route.get("/showuser", AdminController.showUser);
route.post("/taskassign", AdminController.taskAssign);




module.exports=route;