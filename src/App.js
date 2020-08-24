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
import Editfeedbac from './ComponentsMalaka/editfeedback';
import homefeedback from './ComponentsMalaka/homefeed';




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
      <Route component={Editfeedbac} path="/editfeedback"></Route>
      <Route component={homefeedback} path="/homefeed"></Route>



    </Router>
  );
}

export default App;
