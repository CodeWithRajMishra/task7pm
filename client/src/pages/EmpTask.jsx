import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const EmpTask=()=>{
    const [mydata, setMydata] = useState([]);
    const [show, setShow] = useState(false);
    const [tid, setTid] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id) =>{
    setTid(id);
    setShow(true);
  } 
  const [input, setInput] = useState({}); 

  const loadData= async()=>{
        try {
             let api = `${import.meta.env.VITE_BACKEND_URL}/employee/showtask/?id=${localStorage.getItem("empid")}`;
             const response = await axios.get(api);
             console.log(response.data);
             setMydata(response.data);
        } catch (error) {
             console.log(error);
        }
    } 

    useEffect(()=>{
        loadData();
    }, [])


  const handleInput=(e)=>{
     let  name=e.target.name;
     let value = e.target.value;
     setInput(values=>({...values, [name]:value}));
     console.log(input);
  }


  const taskreportSubmit=async(e)=>{
    e.preventDefault();
      try {
            let api = `${import.meta.env.VITE_BACKEND_URL}/employee/taskreport`;
            const response  = await axios.post(api, {tid, ...input});
            console.log(response.data);
      } catch (error) {
         console.log(error);
      }
  }


    let sno=0;
    const ans= mydata.map((key)=>{
        sno++;
        return(
            <>
              <tr>
                <td>{sno}</td>
                <td> {key.tasktitle} </td>
                 <td> {key.duration} </td>
                  <td> {key.priority} </td>
                  <td>
 <Button variant="success" onClick={()=>{handleShow(key._id)}}>Send Report</Button>

                  </td>
              </tr>
            </>
        )
    })
    return(
        <>
          <h1> Display Tasks</h1>
          <hr />
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Name</th>
          <th>Duration in Day's</th>
          <th>Task Priority</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
   {ans}
      </tbody>
</Table>

 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Task Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select Task Status</Form.Label>
         <Form.Select aria-label="Default select example" name="taskstatus" onChange={handleInput}>
      <option>Open this select menu</option>
      <option value="Fully Completed">Fully Completed</option>
      <option value="Partial Completed">Partial Completed</option>
      <option value="No Complete">No Complete</option>
    </Form.Select>
  
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Completion Day</Form.Label>
        <Form.Control type="text" name="completionday" onChange={handleInput}  />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Comment</Form.Label>
        <Form.Control type="text" name="comment" onChange={handleInput}  />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={taskreportSubmit}>
        Submit
      </Button>
    </Form>

        </Modal.Body>
      </Modal>
        </>
    )
}
export default EmpTask;