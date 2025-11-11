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


    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.tasktitle} </td>
                    <td>{key.duration} </td>
                    <td>{key.priority} </td>
                    <td>{key.empid} </td>
                    <td>{key.comment} </td>
                    <td>{key.taskstatus} </td>
                    <td>{key.completionday} </td>

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
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
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