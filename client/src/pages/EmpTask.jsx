import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const EmpTask=()=>{
    const [mydata, setMydata] = useState([]);

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
 <Button variant="success">Send Report</Button>

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
        </>
    )
}
export default EmpTask;