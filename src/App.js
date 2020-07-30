import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashLayout from './Dashboard/DashLayout';
import EventCreate from "./ComponentsAkila/EventCreate";

function App() {
  return (
    <Router>
      <Route component={EventCreate} path="/create-event"></Route>
      <Route component={DashLayout} path="/dash"></Route>
    </Router>
  );
}

export default App;
