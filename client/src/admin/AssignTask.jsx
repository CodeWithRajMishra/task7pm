import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AssignTask = () => {

  const [mydata, setMydata] = useState([]);
  const [show, setShow] = useState(false);
  const [tasktitle, setTaskTitle] = useState("");
   const [duration, setDuration] = useState("");
    const [priority, setPriority] = useState("");
    const [empid, setEmpid] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id) =>{ 
    setShow(true)
    setEmpid(id)
  };
  



  const loadData = async () => {

    try {
      let api = `${import.meta.env.VITE_BACKEND_URL}/admin/showuser`;
      const response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    loadData();
  }, []);


  const taskSubmit=async(e)=>{
    e.preventDefault();
      try {
              let api = `${import.meta.env.VITE_BACKEND_URL}/admin/taskassign`;
              const response = await axios.post(api, {tasktitle, duration, priority, empid});
              console.log(response);
      } catch (error) {
         console.log(error);
      }
  }




  let sn=0;
  const ans = mydata.map((key) => {
     sn++;
    return (
      <>
        <tr>
          <td>{sn}</td>
          <td>{key.name}</td>
          <td>{key.email}</td>
          <td>{key.designation}</td>
          <td>
            <Button variant="success" onClick={()=>{handleShow(key._id)}} >Assign Task</Button>
          </td>
        </tr>
      </>
    )
  })

  return (
    <>
      <h1> Assign New Task</h1>
      <hr/>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Employee Name</th>
          <th>Email</th>
          <th>Designation</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
     {ans}
      </tbody>
      </Table>


       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>

             <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Task Title</Form.Label>
        <Form.Control type="text" value={tasktitle} onChange={(e)=>{setTaskTitle(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Duration (In Day's)</Form.Label>
        <Form.Control type="text" value={duration} onChange={(e)=>{setDuration(e.target.value)}} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Select Priority</Form.Label>
        <Form.Select aria-label="Default select example" value={priority} onChange={(e)=>{setPriority(e.target.value)}}>
      <option>Select Priority</option>
      <option value="High Priority">High Priority</option>
      <option value="Medium Priority">Medium Priority</option>
      <option value="Low Priority">Low Priority</option>
    </Form.Select>
      </Form.Group>

    
      <Button variant="primary" type="submit" onClick={taskSubmit}>
        Submit
      </Button>
    </Form>
        </Modal.Body>
      </Modal>

    </>
  )
}
export default AssignTask;