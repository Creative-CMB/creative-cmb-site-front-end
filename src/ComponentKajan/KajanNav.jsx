import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {Button,Navbar,NavLink,Nav,NavDropdown} from "react-bootstrap";
import logo from '../Images/logo.png';




function KajanNav() {
    return(

      <Navbar variant="light">
      <Navbar.Brand href="#home"><img className="mt-4" src={logo}></img></Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="#Services">About</Nav.Link>
        <NavDropdown title="Services" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/advertise">Tickets</NavDropdown.Item>
        <NavDropdown.Item href="/advertise">Advertisements</NavDropdown.Item>
        <NavDropdown.Item href="/advertise">Equipment Rentals</NavDropdown.Item>
        
      </NavDropdown>
        <Nav.Link href="/create">Events</Nav.Link>
        <Nav.Link href="/Feedback">Contact Us</Nav.Link>
        <Nav.Link href="/Feedback">Logout</Nav.Link>


      </Nav>
      
    </Navbar>
    )
}
 
export default KajanNav;