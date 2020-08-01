import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashLayout from './Dashboard/DashLayout';
import EventCreate from "./ComponentsAkila/EventCreate";
import DashSuccess from './ComponentsAkila/DashSuccess';

function App() {
  return (
    <Router>
      <Route component={EventCreate} path="/create-event"></Route>
      <Route component={DashLayout} path="/dash"></Route>
      <Route component={DashSuccess} path="/success"></Route>
    </Router>
  );
}

export default App;
