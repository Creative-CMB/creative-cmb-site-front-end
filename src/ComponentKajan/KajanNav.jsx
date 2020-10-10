import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {Button,Navbar,NavLink,Nav,NavDropdown} from "react-bootstrap";
import logo from '../Images/logo.png';




function KajanNav() {
    return(

      <Navbar variant="light">
      <Navbar.Brand href="#home"><img className="mt-4" src={logo}></img></Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Services">About</Nav.Link>
        <NavDropdown title="Services" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Tickets</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Advertisements</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Equipment Rentals</NavDropdown.Item>
        
      </NavDropdown>
        <Nav.Link href="#Events">Events</Nav.Link>
        <Nav.Link href="#Events">Contact Us</Nav.Link>

      </Nav>
      
    </Navbar>
    )
}
 
export default KajanNav;