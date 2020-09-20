import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  FormControl,
  Navbar,
  Nav,
  Form,
  NavDropdown,
} from "react-bootstrap";

import logo from "./img/67946022.jpg";

class TktNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img src={logo} style={{ width: "50px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">{this.props.link1}</Nav.Link>
            <Nav.Link href="#pricing">{this.props.link2}</Nav.Link>
            <Nav.Link href="#pricing">{this.props.link3}</Nav.Link>
            <Nav.Link href="#pricing">{this.props.link4}</Nav.Link>
            {/*             <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TktNavBar;
