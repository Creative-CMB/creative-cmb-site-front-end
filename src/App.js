import React, { useState } from "react";
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
import Editfeedbac from './ComponentsMalaka/editfeedback';


import Startup from "./ComponentsSid/Startup";
import Signup from "./ComponentsSid/Signup";
import Login from "./ComponentsSid/Login";
import UserAccount from "./ComponentsSid/UserAccount";
import UserDashboard from "./ComponentsSid/UserDashboard";
import AddUsers from "./ComponentsSid/AddUsers";
import ManageUsers from "./ComponentsSid/ManageUsers";
import UpdateUsers from "./ComponentsSid/UpdateUsers";
import Admin_login from "./ComponentsSid/adminlogin";
import Customers from "./ComponentsSid/customers";

function App() {
  
  const userLogin = (tok) => {
    setToken(tok);
    
  }

  const[ token, setToken] = useState('');

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
      <Route component={Editfeedbac} path="/editfeedback"></Route>

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
