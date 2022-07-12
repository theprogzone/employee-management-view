import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { FooterComponent } from './components/FooterComponent';
import { HeaderComponent } from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { CreateEmployeeComponent } from './components/CreateEmployeeComponent';
import { SidebarComponent } from './components/SidebarComponent';
import { ListJobDepartmentComponent } from './components/ListJobDepartmentComponent';
import { CreateJobDepartmentComponent } from './components/CreateJobDepartmentComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <SidebarComponent/>
        <Routes>
            <Route exact path = "/" element={<ListEmployeeComponent/>}></Route>
            <Route exact path = "/employees" element={<ListEmployeeComponent/>}></Route>
            <Route exact path = "/create-employee" element={<CreateEmployeeComponent/>}></Route>
            <Route exact path = "/job-departments" element={<ListJobDepartmentComponent/>}></Route>
            <Route exact path = "/create-job-department" element={<CreateJobDepartmentComponent/>}></Route>
          </Routes>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
