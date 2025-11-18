import {BrowserRouter, Routes,Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashBoard from "./admin/AdminDashboard";
import { ToastContainer } from 'react-toastify';
import CreateUser from "./admin/CreateUser";
import AssignTask from "./admin/AssignTask";
import EmpDashBoard from "./pages/EmpDashBoard";
import EmpTask from "./pages/EmpTask";
import SeeReport from "./admin/SeeReport";
import CompletedTask from "./pages/CompletedTask";
const App=()=>{
  return(
    <>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
           </Route>
         </Routes>


         <Routes>
          <Route path="admin-dashboard" element={<AdminDashBoard/>}>
            <Route path="create-user" element={<CreateUser/>} />
            <Route path="assign-task" element={<AssignTask/>}/>
            <Route path="see-report" element={<SeeReport/>}/>
          </Route>     
         </Routes>

        <Routes>
          <Route path="emp-dashboard" element={<EmpDashBoard/>}>
             <Route path="emptask" element={<EmpTask/>} />
             <Route  path="completedtask" 
             element={<CompletedTask/>}/>
          </Route>
        </Routes>

     <ToastContainer autoClose={2000} />
       </BrowserRouter>

    </>
  )
}
export default App;