/** @format */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./ComponentsAkila/EventHome";
import EventHome from "./ComponentsAkila/EventHome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import EventCreate from "./ComponentsAkila/EventCreate";
import EventEditHome from "./ComponentsAkila/EventEditHome";
import EventSuccess from './ComponentsAkila/EventSuccess';

import TicketForm from "./ComponentsSanda/TicketForm";
import TktTemplate from "./ComponentsSanda/TktTemplate";
import ResTemplate from "./ComponentsSanda/ResTemplate";
import TicketEdit from "./ComponentsSanda/TicketEdit"

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
import Api from "./ComponentKajan/ApiInvoice";
import InvoiceAdd from "./ComponentKajan/InvoiceAdd";
import Home from "./ComponentKajan/Home";
import PackForm from "./ComponentShalini/PackForm";




import Startup from "./ComponentsSid/Startup";
import Signup from "./ComponentsSid/Signup";
import Login from "./ComponentsSid/Login";
import UserAccount from "./ComponentsSid/UserAccount";
import UserDashboard from "./ComponentsSid/UserDashboard";

import AddUsers from "./ComponentsSid/AddUsers";
import ManageUsers from "./ComponentsSid/ManageUsers";
import UpdateUsers from "./ComponentsSid/UpdateUsers";
import Admin_login from "./ComponentsSid/adminlogin";
import Customers from "./ComponentsSid/customers";

import Payment from "./ComponentKajan/Payment";
function App() {
  
  const userLogin = (tok) => {
    setToken(tok);
    
  }

  const[ token, setToken] = useState('');


  return (
    <Router>
     

      <Route component={DemoInvoice} path='/Demoinvoice'></Route>
      <Route component={AddInvoice} path='/AddInvoice'></Route>
      <Route component={InvoiceDashboard} path='/Invoice'></Route>
      <Route component={Payment} path='/Payment'></Route>
      <Route component={EditInvoice} path='/EditInvoice'></Route>
      <Route component={Api} path='/apiinvo'></Route>
      <Route component={InvoiceAdd} path='/invoadd'></Route>
      <Route component={Home} path='/home'></Route>





      
      <Route component={Advertise} path='/Ad'></Route>
      <Route component={AdDash} path='/AdDash'></Route>
      <Route component={PackageForm} path='/AddPackage'></Route>
      <Route component={PackageBasic} path='/Basic'></Route>
      <Route component={Add} path='/Adddemo'></Route>
      <Route component={CreateAdd} path='/advertise'></Route>
      <Route component={PackForm} path='/packform'></Route>






      <Route component={EventHome} path="/event"></Route>
      <Route component={EventCreate} path="/create"></Route>
      <Route component={EventEditHome} path="/edit"></Route>
      <Route component = {EventSuccess}path = "/success" ></Route>

      <Route component={TicketForm} path="/ticket"></Route>
      <Route component={TktTemplate} path="/template"></Route>
      <Route component={ResTemplate} path="/reservation"></Route>
      <Route component={TicketEdit} path="/ticketedit"></Route>

      <Route component={InventoryItems} path="/inventory"></Route>
      <Route component={AddItems} path="/add"></Route>



      <Route component={Feedback} path='/feedback'></Route>
      <Route component={Adminfeedback} path='/adminfeedback'></Route>
      <Route component={Editfeedbac} path='/editfeedback'></Route>
      <Route component={Startup} path="/startup"/>
      <Route component={Signup} path="/signup"/>
      <Route component={Login} path="/login"/>
      <Route component={UserAccount} path="/useraccount"/>
      <Route component={UserDashboard} path="/userdashboard"/>
      <Route component={AddUsers} path="/addusers"/>
      <Route component={ManageUsers} path="/manageusers"/>
      <Route component={UpdateUsers} path="/updateusers"/>
      <Route component={Admin_login} path="/adminlogin" userLogin={userLogin}/>
      <Route component={Customers} path="/customers"/>
     


     

    </Router>

  );
}

export default App;
