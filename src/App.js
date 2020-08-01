import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EventCreate from './ComponentsAkila/EventCreate';
import DashboardTemp from './Dashboard/DashboardTemp';
import FeedbackTemp from './ComponentsMalaka/FeedbackTemp';
import feedforms from './componentsdasun/feedforms';

import DashLayout from './Dashboard/DashLayout';
import EventCreate from "./ComponentsAkila/EventCreate";
import DashSuccess from './ComponentsAkila/DashSuccess';


function App() {
  return (
    <Router>

      <Route component={EventHome} exact path="/event"></Route>
      <Route component={EventCreate} path="/create"></Route>
      <Route component={DashboardTemp} path="/event-dashboard"></Route>
      <Route component={FeedbackTemp} path="/feedback"></Route>
      <Route component={feedforms} path="/forms"></Route>

      <Route component={EventCreate} path="/create-event"></Route>
      <Route component={DashLayout} path="/dash"></Route>
      <Route component={DashSuccess} path="/success"></Route>

    </Router>
  );
}

export default App;
