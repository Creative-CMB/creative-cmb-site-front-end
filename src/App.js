import React from 'react';
import logo from './logo.svg';
import './App.css';
import './ComponentsAkila/EventHome';
import EventHome from "./ComponentsAkila/EventHome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EventCreate from './ComponentsAkila/EventCreate';
import EventEditHome from './ComponentsAkila/EventEditHome';

import InventoryItems from './ComponentsHimasha/InventoryItems';
import RentalDetails from './ComponentsHimasha/RentalDetails';
import AddItems from './ComponentsHimasha/AddItems';

import Feedback from './ComponentsMalaka/FeedbackTemp';
import Adminfeedback from './ComponentsMalaka/feedadmin';
import Editfeedbac from './ComponentsMalaka/editfeedback';



function App() {
  return (
    <Router>
      <Route component={EventHome} exact path="/event"></Route>
      <Route component={EventCreate} path="/create"></Route>
      <Route component={EventEditHome} path="/edit"></Route>

      <Route component={InventoryItems} path= "/inventory"></Route>
      <Route component={AddItems} path= "/add"></Route>

      <Route component={Feedback} path="/feedback"></Route>
      <Route component={Adminfeedback} path="/adminfeedback"></Route>
      <Route component={Editfeedbac} path="/editfeedback"></Route>

    </Router>

  );
}

export default App;
