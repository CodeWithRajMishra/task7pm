import { Link, Outlet } from "react-router-dom";

const EmpDashBoard = () => {
    return (
        <>
            <h1>
                <div id="empheader">
                    <h1> Welcom To Employee DashbBorad</h1>
                </div>
                <div id="empcontainer">
                    <div id="empmenu">
                        <Link to="emptask" className="menucolor">My Task</Link>
                        <br />
                        <Link to="emptask" className="menucolor">My Task</Link>
                          <br />
                        <Link to="emptask" className="menucolor">My Task</Link>
                          <br />
                        <Link to="emptask" className="menucolor">My Task</Link>

                    </div>
                    <div id="empdata"> 

                          <Outlet/>

                    </div>
                </div>

            </h1>
        </>
    )
}

export default EmpDashBoard;