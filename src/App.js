import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./ComponentsAkila/EventHome";
import EventHome from "./ComponentsAkila/EventHome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EventCreate from "./ComponentsAkila/EventCreate";
import EventEditHome from "./ComponentsAkila/EventEditHome";
import EventSuccess from "./ComponentsAkila/EventSuccess";

function App() {
  return (
    <Router>
      <Route component={EventHome} path="/event"></Route>
      <Route component={EventCreate} path="/create"></Route>
      <Route component={EventEditHome} path="/edit"></Route>
      <Route component={EventSuccess} path="/success"></Route>
    </Router>
  );
}

export default App;
