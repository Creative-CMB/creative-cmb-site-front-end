import { lightGreen } from '@material-ui/core/colors';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import lg from '../Images/lg.png';





function NavApp() {
    return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
 
  <img style={{position:"relative",top:"10px",bottom:"10px"}} src={lg}></img>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse navbar navbar-light bg-secondary" id="navbarSupportedContent" style={{right:"-10px",top:"10px"}} >
    <ul class="navbar-nav mr-auto" >
      <li class="nav-item active" >
        <Link class="nav-link" to="/Basic">Package <span class="sr-only" >(current)</span></Link>
      </li>
      <li class="nav-item" style={{color:"black"}}>
        <Link className="nav-link" to="/adDash">Advertisement</Link>
      </li>
      <li class="nav-item" style={{color:"black"}}>
        <Link className="nav-link" to="/payment">Payment</Link>
      </li>
      
     
      
    </ul>
   
  </div>
</nav>
    )
}
 
export default NavApp;