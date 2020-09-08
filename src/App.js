import React from "react";
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

import Startup from "./ComponentsSid/Startup";
import Signup from "./ComponentsSid/Signup";
import Login from "./ComponentsSid/Login";
import UserAccount from "./ComponentsSid/UserAccount";
import UserDashboard from "./ComponentsSid/UserDashboard";

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

      <Route component={Startup} path="/startup" />
      <Route component={Signup} path="/signup" />
      <Route component={Login} path="/login" />
      <Route component={UserAccount} path="/useraccount" />
      <Route component={UserDashboard} path="/userdashboard" />
    </Router>
  );
}

export default App;
