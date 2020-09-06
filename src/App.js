import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./ComponentsAkila/EventHome";
import EventHome from "./ComponentsAkila/EventHome";
import { BrowserRouter as Router, Switch, Route, Link,HashRouter } from "react-router-dom";
import EventCreate from "./ComponentsAkila/EventCreate";
import EventEditHome from "./ComponentsAkila/EventEditHome";
import Test from "./ComponentsSanda/main";
import TicketForm from "./ComponentsSanda/TicketForm";

import InventoryItems from './ComponentsHimasha/InventoryItems';
import RentalDetails from './ComponentsHimasha/RentalDetails';
import AddItems from './ComponentsHimasha/AddItems';

import Feedback from './ComponentsMalaka/FeedbackTemp';
import Adminfeedback from './ComponentsMalaka/feedadmin';


import AddEmployee from './ComponentsDeepika/AddEmployee';
import AddDepartment from './ComponentsDeepika/AddDepartment';
import AddDeptManager from './ComponentsDeepika/AddDeptManager';
import AddDeptSupervisor from './ComponentsDeepika/AddDeptSupervisor';
import AddDeptEmployee from './ComponentsDeepika/AddDeptEmployee';
import AddLeave from './ComponentsDeepika/AddLeave';
import AddSalary from './ComponentsDeepika/AddSalary';
import EmployeeManagementHome from './ComponentsDeepika/EmployeeManagementHome';




function App() {
  return (
    <Router>
      <Route component={EventHome} path="/event"></Route>
      <Route component={EventCreate} path="/create"></Route>
      <Route component={EventEditHome} path="/edit"></Route>

      <Route component={Test} path="/test"></Route>
      <Route component={TicketForm} path="/ticket"></Route>


      <Route component={InventoryItems} path= "/inventory"></Route>
      <Route component={AddItems} path= "/add"></Route>

      <Route component={Feedback} path="/feedback"></Route>
      <Route component={Adminfeedback} path="/adminfeedback"></Route>
      

      <Route component={AddEmployee} path="/addEmployee"></Route>
      <Route component={AddDepartment} path="/addDepartment"></Route>
      <Route component={AddDeptManager} path="/addDeptManager"></Route>
      <Route component={AddDeptSupervisor} path="/addDeptSupervisor"></Route>
      <Route component={AddDeptEmployee} path="/addDeptEmployee"></Route>
      <Route component={AddLeave} path="/addLeave"></Route>
      <Route component={AddSalary} path="/addSalary"></Route>
      <Route component={EmployeeManagementHome} path="/employeeHome"></Route>
      



    </Router>
  );
}

export default App;
