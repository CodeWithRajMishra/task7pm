import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

const SeeReport = () => {
    const [mydata, setMydata] = useState([]);

    const loadData = async () => {
        let api = `${import.meta.env.VITE_BACKEND_URL}/admin/seereport`;
        try {
            const response = await axios.get(api);
            console.log(response.data);
            setMydata(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadData();
    }, [])

  const taskReassign=async(id)=>{
       let api = `${import.meta.env.VITE_BACKEND_URL}/admin/taskreassign/?tid=${id}`;
       const response= axios.get(api);
       console.log(response.data);
  }


   let sno=0;
    const ans = mydata.map((key) => {
        sno++;
        return (
            <>
                <tr>
                    <td>{sno}</td>
                    <td>{key.tasktitle} </td>
                    <td>{key.duration} </td>
                    <td>{key.priority} </td>
                    <td>{key.empid.name} </td>
                     <td>{key.empid.designation} </td>
                      <td>{key.empid.email} </td>
                    <td>{key.comment} </td>
                    <td>{key.taskstatus} </td>
                    <td>{key.completionday} </td>
                    <td>

                        <button onClick={()=>{taskReassign(key._id)}}>Task ReAssign</button>
                    </td>
                </tr>
            </>
        )
    })
    return (
        <>
            <h1> See Employee Task Reporot</h1>
            <hr />
             <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Title</th>
          <th>Duration</th>
          <th>Priority</th>
          <th>Emp Name</th>
          <th>Designation</th>
          <th>Email</th>
          <th>Comment</th>
          <th>Status</th>
          <th>Completion Day</th>
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

export default SeeReport;