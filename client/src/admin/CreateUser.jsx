import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");


  const handleSubmit=async(e)=>{
    e.preventDefault();
     console.log(name, email, designation);
     try {
        let api = `${import.meta.env.VITE_BACKEND_URL}/admin/createuser`;
        const response = await axios.post(api, {name, email, designation});
     } catch (error) {
        console.log(error);
     }
     

  }
  return (
    <>
      <h2> Create New User</h2>
      <Form style={{ width: "400px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Employee Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" name={email} onChange={(e)=>{setEmail(e.target.value)}} /> 
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Select Designation</Form.Label>
          <Form.Select aria-label="Default select example" value={designation} onChange={(e)=>{setDesignation(e.target.value)}} >
            <option>Select Designation</option>
            <option value="Analyst">Analyst</option>
            <option value="Programmer">Programmer</option>
            <option value="Coder">Coder</option>
            <option value="Designer">Designer</option>
            <option value="Data Base Designer">Data Base Designer</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default CreateUser;