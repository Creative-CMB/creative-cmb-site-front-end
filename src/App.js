/** @format */

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

import InventoryItems from "./ComponentsHimasha/InventoryItems";
import RentalDetails from "./ComponentsHimasha/RentalDetails";
import AddItems from "./ComponentsHimasha/AddItems";

import Feedback from "./ComponentsMalaka/FeedbackTemp";
import Adminfeedback from "./ComponentsMalaka/feedadmin";
import Editfeedbac from "./ComponentsMalaka/editfeedback";
import DemoInvoice from "./ComponentKajan/DemoInvoice";
import AddInvoice from "./ComponentKajan/AddInvoice";
import InvoiceDashboard from "./ComponentKajan/InvoiceDashboard";
import EditInvoice from "./ComponentKajan/EditInvoice";
import Advertise from "./ComponentShalini/Advertise";
import AdDash from "./ComponentShalini/AdDash";
import PackageForm from "./ComponentShalini/PackageForm";
import PackageBasic from "./ComponentShalini/PackageBasic";
import Add from "./ComponentShalini/Add";
import CreateAdd from "./ComponentShalini/CreateAdd";




import Payment from "./ComponentKajan/Payment";
function App() {
  return (
    <Router>
      <Route component={EventHome} path='/event'></Route>
      <Route component={EventCreate} path='/create'></Route>
      <Route component={EventEditHome} path='/edit'></Route>

      <Route component={Test} path='/test'></Route>
      <Route component={TicketForm} path='/ticket'></Route>

      <Route component={InventoryItems} path='/inventory'></Route>
      <Route component={AddItems} path='/add'></Route>

      <Route component={DemoInvoice} path='/Demoinvoice'></Route>
      <Route component={AddInvoice} path='/AddInvoice'></Route>
      <Route component={InvoiceDashboard} path='/Invoice'></Route>
      <Route component={Payment} path='/Payment'></Route>
      <Route component={EditInvoice} path='/EditInvoice'></Route>


      
      <Route component={Advertise} path='/Ad'></Route>
      <Route component={AdDash} path='/AdDash'></Route>
      <Route component={PackageForm} path='/AddPackage'></Route>
      <Route component={PackageBasic} path='/Basic'></Route>
      <Route component={Add} path='/Adddemo'></Route>
      <Route component={CreateAdd} path='/advertise'></Route>









      <Route component={Feedback} path='/feedback'></Route>
      <Route component={Adminfeedback} path='/adminfeedback'></Route>
      <Route component={Editfeedbac} path='/editfeedback'></Route>
    </Router>
  );
}

export default App;
