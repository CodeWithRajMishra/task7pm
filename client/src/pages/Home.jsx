import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
const Home = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usertype, setUserType] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (usertype == 'admin') {
            try {
                let api = `${import.meta.env.VITE_BACKEND_URL}/admin/login`;
                const response = await axios.post(api, {email, password})
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        else {
            alert("Employee")
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