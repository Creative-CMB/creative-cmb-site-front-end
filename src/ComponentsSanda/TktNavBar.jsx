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
            {/* <Button>{this.props.link1}</Button> */}
            <Nav.Link href="#features" style={{color:"#000000" , fontSize:"20px", fontFamily:"Times New Roman"}}>{this.props.link1}</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"#000000", fontSize:"20px",fontFamily:"Times New Roman"}}>{this.props.link2}</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"#000000", fontSize:"20px",fontFamily:"Times New Roman"}}>{this.props.link3}</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"#000000", fontSize:"20px",fontFamily:"Times New Roman"}}>{this.props.link4}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TktNavBar;
