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
import TicketEdit from "./ComponentsSanda/TicketEdit"

import InventoryItems from "./ComponentsHimasha/InventoryItems";
import RentalDetails from "./ComponentsHimasha/RentalDetails";
import AddItems from "./ComponentsHimasha/AddItems";

import Feedback from "./ComponentsMalaka/FeedbackTemp";
import Adminfeedback from "./ComponentsMalaka/feedadmin";
import Editfeedbac from "./ComponentsMalaka/editfeedback";

import UserDashboard from "./ComponentsSid/UserDashboard";
import AddUsers from "./ComponentsSid/AddUsers";
import ManageUsers from "./ComponentsSid/ManageUsers";
import ManageLoggedUsers from "./ComponentsSid/manageLoggedUsers";
import UpdateUsers from "./ComponentsSid/UpdateUsers";
import Login from "./ComponentsSid/Login";

function App() {

  return (
    <Router>
      <Route component={EventHome} path="/event"></Route>
      <Route component={EventCreate} path="/create"></Route>
      <Route component={EventEditHome} path="/edit"></Route>
      <Route component = {EventSuccess}path = "/success" ></Route>

      <Route component={TicketForm} path="/ticket"></Route>
      <Route component={TktTemplate} path="/template"></Route>
      <Route component={ResTemplate} path="/reservation"></Route>
      <Route component={TicketEdit} path="/ticketedit"></Route>

      <Route component={InventoryItems} path="/inventory"></Route>
      <Route component={AddItems} path="/add"></Route>

      <Route component={Feedback} path="/feedback"></Route>
      <Route component={Adminfeedback} path="/adminfeedback"></Route>
      <Route component={Editfeedbac} path="/editfeedback"></Route>


      <Route component={AddUsers} path="/addusers"/>    
      <Route component={ManageUsers} path="/manageusers"/>
      <Route component={UpdateUsers} path="/updateusers"/>  
      <Route component={ManageLoggedUsers} path="/manageloggedusers"/>  
      <Route component={UserDashboard} path="/userdashboard" />
      <Route component={Login} path="/login" />

    </Router>

  );
}

export default App;
