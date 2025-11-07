import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usertype, setUserType] = useState("");

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (usertype == 'admin') {
            try {
                let api = `${import.meta.env.VITE_BACKEND_URL}/admin/login`;
                const response = await axios.post(api, {email, password})
                console.log(response);
              
                 localStorage.setItem("adminname", response.data.admin.name);
                 localStorage.setItem("adminemail", response.data.admin.email)
               
                   toast.success(response.data.msg);
                 setTimeout(()=>{
                     navigate("/admin-dashboard");
                   
                 }, 2000);
                  
                   
            } catch (error) {
                toast.error(error.response.data.msg);
              
            }
        }
        else {
          
            try {
                   let api = `${import.meta.env.VITE_BACKEND_URL}/employee/login`;
                    const response = await axios.post(api, {email, password})
                console.log(response);
              
                 localStorage.setItem("empname", response.data.admin.name);
                 localStorage.setItem("empemail", response.data.admin.email)
                  localStorage.setItem("empemail", response.data.admin.designation)
               
                   toast.success(response.data.msg);
                 setTimeout(()=>{
                     navigate("/admin-dashboard");
                   
                 }, 2000);
                  
                   
            } catch (error) {
                 console.log(error)
            }
             
        }




    }



    return (
        <>
            <h2 align="center"> User Login</h2>
            <Form style={{ width: "400px", margin: "auto" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Login As</Form.Label>
                    <Form.Select aria-label="Default select example" value={usertype} onChange={(e) => { setUserType(e.target.value) }}>
                        <option> select user type</option>
                        <option value="employee">Employee</option>
                        <option value="admin">Admin</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>

             
        </>
    )
}

export default Home;