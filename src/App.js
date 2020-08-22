import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./ComponentsAkila/EventHome";
import EventHome from "./ComponentsAkila/EventHome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EventCreate from "./ComponentsAkila/EventCreate";
import EventEditHome from "./ComponentsAkila/EventEditHome";
import Test from "./ComponentsSanda/main";
import TicketForm from "./ComponentsSanda/TicketForm";

function App() {
  return (
    <Router>
      <Route component={EventHome} exact path="/event"></Route>
      <Route component={EventCreate} path="/create"></Route>
      <Route component={EventEditHome} path="/edit"></Route>
      <Route component={Test} path="/test"></Route>
      <Route component={TicketForm} path="/ticket"></Route>
    </Router>
  );
}

export default App;
