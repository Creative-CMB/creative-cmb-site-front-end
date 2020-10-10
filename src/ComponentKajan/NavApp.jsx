import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';




function NavApp() {
    return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/Basic">Package <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item" style={{color:"black"}}>
        <Link className="nav-link" to="/adDash">Advertisement</Link>
      </li>
      
     
      
    </ul>
   
  </div>
</nav>
    )
}
 
export default NavApp;