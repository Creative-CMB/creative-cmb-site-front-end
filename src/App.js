/** @format */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./ComponentsAkila/EventHome";
import EventHome from "./ComponentsAkila/EventHome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import EventCreate from "./ComponentsAkila/EventCreate";
import EventEditHome from "./ComponentsAkila/EventEditHome";
import EventSuccess from './ComponentsAkila/EventSuccess';

import TicketForm from "./ComponentsSanda/TicketForm";
import TktTemplate from "./ComponentsSanda/TktTemplate";
import ResTemplate from "./ComponentsSanda/ResTemplate";
import TicketEdit from "./ComponentsSanda/TicketEdit";
import ReservationReport from "./ComponentsSanda/ReservationReport";



import Rental from './ComponentsHimasha/Rental';
import InventoryItems from "./ComponentsHimasha/InventoryItems";
import RentalDetails from "./ComponentsHimasha/RentalDetails";
import AddItems from "./ComponentsHimasha/AddItems";
import RentalHistory from './ComponentsHimasha/RentalHistory'

import Feedback from "./ComponentsMalaka/FeedbackTemp";
import Adminfeedback from "./ComponentsMalaka/feedadmin";
import Editfeedbac from "./ComponentsMalaka/editfeedback";
import DemoInvoice from "./ComponentKajan/DemoInvoice";
import AddInvoice from "./ComponentKajan/AddInvoice";
import InvoiceDashboard from "./ComponentKajan/InvoiceDashboard";
import Advertise from "./ComponentShalini/Advertise";
import AdDash from "./ComponentShalini/AdDash";
import PackageForm from "./ComponentShalini/PackageForm";
import PackageBasic from "./ComponentShalini/PackageBasic";
import Add from "./ComponentShalini/Add";
import CreateAdd from "./ComponentShalini/CreateAdd";
import Api from "./ComponentKajan/ApiInvoice";
import InvoiceAdd from "./ComponentKajan/InvoiceAdd";
import Home from "./ComponentKajan/Home";
import PackForm from "./ComponentShalini/PackForm";



import AddEmployee from './ComponentsDeepika/AddEmployee';
import AddDepartment from './ComponentsDeepika/AddDepartment';
import AddDeptManager from './ComponentsDeepika/AddDeptManager';
import AddDeptSupervisor from './ComponentsDeepika/AddDeptSupervisor';
import AddDeptEmployee from './ComponentsDeepika/AddDeptEmployee';
import AddSalary from './ComponentsDeepika/AddSalary';
import EmployeeManagementHome from './ComponentsDeepika/EmployeeManagementHome';
import ViewDepartment from './ComponentsDeepika/ViewDepartment';
import ViewDeptEmployee from './ComponentsDeepika/ViewDeptEmployee';
import ViewDeptManager from './ComponentsDeepika/ViewDeptManager';
import ViewDeptSupervisors from './ComponentsDeepika/ViewDeptSupervisors';
import ViewEmployee from './ComponentsDeepika/ViewEmployee';
import ViewSalary from './ComponentsDeepika/ViewSalary';
import EmployeePDF from './ComponentsDeepika/EmployeePDF';
import DepartmentPDF from './ComponentsDeepika/DepartmentPDF';
import DeptManagerPDF from './ComponentsDeepika/DeptManagerPDF';
import SalaryPDF from './ComponentsDeepika/SalaryPDF';



import Startup from "./ComponentsSid/Startup";
import Signup from "./ComponentsSid/Signup";
import Login from "./ComponentsSid/Login";
import UserAccount from "./ComponentsSid/UserAccount";
import UserDashboard from "./ComponentsSid/UserDashboard";

//admin panal
import Dashboard from "./ComponentsAkila/Dashboard";

import AddUsers from "./ComponentsSid/AddUsers";
import ManageUsers from "./ComponentsSid/ManageUsers";
import UpdateUsers from "./ComponentsSid/UpdateUsers";
import Admin_login from "./ComponentsSid/adminlogin";
import Customers from "./ComponentsSid/customers";

import Payment from "./ComponentKajan/Payment";
function App() {
  
  const userLogin = (tok) => {
    setToken(tok);
    
  }

  const[ token, setToken] = useState('');


  return (
    <Router>
     

      <Route component={DemoInvoice} path='/Demoinvoice'></Route>
      <Route component={AddInvoice} path='/AddInvoice'></Route>
      <Route component={InvoiceDashboard} path='/Invoice'></Route>
      <Route component={Payment} path='/Payment'></Route>
      <Route component={Api} path='/apiinvo'></Route>
      <Route component={InvoiceAdd} path='/invoadd'></Route>

      <Route component={Home} path='/home'></Route>





      
      <Route component={Advertise} path='/Ad'></Route>
      <Route component={AdDash} path='/AdDash'></Route>
      <Route component={PackageForm} path='/AddPackage'></Route>
      <Route component={PackageBasic} path='/Basic'></Route>
      <Route component={Add} path='/Adddemo'></Route>
      <Route component={CreateAdd} path='/advertise'></Route>
      <Route component={PackForm} path='/packform'></Route>






      <Route component={EventHome} path="/event"></Route>
      <Route component={EventCreate} path="/create"></Route>
      <Route component={EventEditHome} path="/edit"></Route>
      <Route component={EventSuccess} path="/success" ></Route>
      <Route component={Dashboard} path="/admin" ></Route>

      <Route component={TicketForm} path="/ticket"></Route>
      <Route component={TktTemplate} path="/template"></Route>
      <Route component={ResTemplate} path="/reservation"></Route>
      <Route component={TicketEdit} path="/ticketedit"></Route>
      <Route component={ReservationReport} path="/reservation-report"></Route>
   

     <Route component={InventoryItems} path="/inventory"></Route>
      <Route component={AddItems} path="/add"></Route>
      <Route component={Rental} path='/rent' ></Route>
      <Route component={RentalDetails} path='/rental_details'></Route>
      <Route component={RentalHistory} path='/rental_history' ></Route>

    
      

      <Route component={AddEmployee} path="/addEmployee"></Route>
      <Route component={AddDepartment} path="/addDepartment"></Route>
      <Route component={AddDeptManager} path="/addDeptManager"></Route>
      <Route component={AddDeptSupervisor} path="/addDeptSupervisor"></Route>
      <Route component={AddDeptEmployee} path="/addDeptEmployee"></Route>
      <Route component={AddSalary} path="/addSalary"></Route>
      <Route component={ViewDepartment} path="/viewdept"></Route>
      <Route component={ViewDeptEmployee} path="/viewdeptemp"></Route>
      <Route component={ViewDeptManager} path="/viewdeptmanag"></Route>
      <Route component={ViewDeptSupervisors} path="/viewdeptsuper"></Route>
      <Route component={ViewEmployee} path="/viewemp"></Route>
      <Route component={ViewSalary} path="/viewsalary"></Route>
      <Route component={EmployeeManagementHome} path="/employeeHome"></Route>
      <Route component={EmployeePDF} path="/employeePDF"></Route>
      <Route component={DepartmentPDF} path="/departmentPDF"></Route>
      <Route component={DeptManagerPDF}path="/deptmanagerPDF"></Route>
      <Route component={SalaryPDF} path="/salaryPDF"></Route>

      
      <Route component={Feedback} path='/feedback'></Route>
      <Route component={Adminfeedback} path='/adminfeedback'></Route>
      <Route component={Editfeedbac} path='/editfeedback'></Route>
      <Route component={Startup} path="/startup"/>
      <Route component={Signup} path="/signup"/>
      <Route component={Login} path="/login"/>
      <Route component={UserAccount} path="/useraccount"/>
      <Route component={UserDashboard} path="/userdashboard"/>
      <Route component={AddUsers} path="/addusers"/>
      <Route component={ManageUsers} path="/manageusers"/>
      <Route component={UpdateUsers} path="/updateusers"/>
      <Route component={Admin_login} path="/adminlogin" userLogin={userLogin}/>
      <Route component={Customers} path="/customers"/>
     


     

    </Router>

  );
}

export default App;
