import { Link, Outlet } from "react-router-dom";
const AdminDashBoard=()=>{
    return(
        <>
        <div id="adminheader">
              <h1> Admin DashBoard</h1>
        </div>
        <div id="admincontainer">
            <div id="adminmenu">
                <Link to="create-user" className="adminmenu">  Create User   </Link>

                <br /> <br />
                <Link to="assign-task" className="adminmenu">  Assing Task   </Link>
             
                
            </div>
            <div id="admindata">
                
                 <Outlet/>
                
                
             </div>
        </div>
          
        </>
    )
}

export default AdminDashBoard;