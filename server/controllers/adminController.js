const AdminModel = require("../models/adminModel");
const EmpModel = require("../models/empModel");
const TaskModel = require("../models/taskModel");
const EmpPass = require("../middlewares/empPassword");
const nodemailer = require('nodemailer');

const adminLogin = async (req, res) => {
    const { email, password } = req.body;



    try {
        const admin = await AdminModel.findOne({ email: email });

        if (!admin) {
            res.status(401).send({ msg: "Invalid Admin Email!" });
        }

        if (admin.password != password) {
            res.status(401).send({ msg: "Invalid Admin Password!" });
        }

        res.status(200).send({ admin: admin, msg: "You are Successfully Login!" })


    } catch (error) {
        console.log(error);
    }
}

const createUser = async (req, res) => {
    const { name, email, designation } = req.body;
    let userPassword = EmpPass.userPassword();


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rajmishra3@gmail.com',
            pass: 'ngbq ieiu hhhp qxdh'
        }
    });

    const mailOptions = {
        from: 'rajmishra3@gmail.com',
        to: email,
        subject: "Employee Task Management Password",
        text: `Welcome ${name}! \n Your Task Management Password is : ${userPassword}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error occurred:", error);
            res.status(500).send('Error in sending email. Please try againlater.');
        } else {
            console.log('Email sent:', info.response);
            res.send('Email sent successfully!');
        }
    });


    const employee = await EmpModel.create({
        name: name,
        email: email,
        designation: designation,
        password: userPassword
    })
    res.status(201).send("New User Created!!!");
}
const showUser = async (req, res) => {

    const employee = await EmpModel.find();
    res.status(200).send(employee);
}

const taskAssign = async (req, res) => {
    const { tasktitle, duration, priority, empid } = req.body;

    const task = await TaskModel.create({
        tasktitle: tasktitle,
        duration: duration,
        priority: priority,
        empid: empid
    })
    res.status(201).send("Task Succesfully Assigned!");
}

module.exports = {
    adminLogin,
    createUser,
    showUser,
    taskAssign
}