import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./ComponentsAkila/EventHome";
import EventHome from "./ComponentsAkila/EventHome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EventCreate from "./ComponentsAkila/EventCreate";
import EventEditHome from "./ComponentsAkila/EventEditHome";

import TicketForm from "./ComponentsSanda/TicketForm";

import test from "./ComponentsSanda/test";
import TktTemplate from "./ComponentsSanda/TktTemplate";
import ResTemplate from "./ComponentsSanda/ResTemplate";
import TicketEdit from "./ComponentsSanda/TicketEdit";

function App() {
  return (
    <Router>
      <Route component={EventHome} exact path="/event"></Route>
      <Route component={EventCreate} path="/create"></Route>
      <Route component={EventEditHome} path="/edit"></Route>
      <Route component={TicketForm} path="/ticket"></Route>
      <Route component={test} path="/tableTest"></Route>
      <Route component={TktTemplate} path="/template"></Route>
      <Route component={ResTemplate} path="/reservation"></Route>
      <Route component={TicketEdit} path="/ticketedit"></Route>
    </Router>
  );
}

export default App;
