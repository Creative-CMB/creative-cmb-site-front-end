import React from "react";
import logo from "./logo.svg";
import "./assets/scss/style.css";
import "./App.css";
import "./ComponentsAkila/EventHome";
import EventHome from "./ComponentsAkila/EventHome";
import indexRoutes from "./routes/index"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  HashRouter,
} from "react-router-dom";
import EventCreate from "./ComponentsAkila/EventCreate";
import EventEditHome from "./ComponentsAkila/EventEditHome";
import EventSuccess from "./ComponentsAkila/EventSuccess";
import Feedback from './ComponentsMalaka/FeedbackTemp';
import Adminfeedback from './ComponentsMalaka/feedadmin';
import Editfeedbac from './ComponentsMalaka/editfeedback';




function App() {
  return (
    <Router>
      <Route component={EventHome} path="/event"></Route>
      <Route component={EventCreate} path="/create"></Route>
      <Route component={EventEditHome} path="/edit"></Route>
      <Route component={Feedback} path="/feedback"></Route>
      <Route component={Adminfeedback} path="/adminfeedback"></Route>
      <Route component={Editfeedbac} path="/editfeedback"></Route>
      <HashRouter>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} key={key} component={prop.component} />
            );
          })}
        </Switch>
      </HashRouter>
    </Router>
  );
}

export default App;
