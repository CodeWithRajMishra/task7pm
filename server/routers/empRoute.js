
const express = require("express");
const route = express.Router();
const EmpController = require("../controllers/empController");


route.post("/login", EmpController.empLogin);
route.get("/showtask", EmpController.showTask);
route.post("/taskreport", EmpController.taskReport);






module.exports=route;