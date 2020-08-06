import React, { Component } from 'react'
import Tooltip from "@material-ui/core/Tooltip";
import user from "../Images/user.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import drop from '../Images/drop.png';
import { Menu, Dropdown } from 'antd';
import { Avatar } from 'antd';
import { Button } from 'antd';
import './css/nav.css'; 

function EventNav() {
  return ( 
    <div>
      <nav>
        <input type="checkbox" id="check"/>
          <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>
        <Link to="/event"><label class="logo">Event Dashboard</label></Link>
        <ul>
          <li className="nav-items">Create Event</li>
          <li className="nav-items">Update Event Event</li>
          <li className="nav-items">Delete Event Event</li>
            <li><Avatar size={"large"} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></li>
            <li>Akila Liyanage</li>
            <li><Button type="primary">My Account</Button></li>
          <li> <Button danger>Log Out</Button></li>
          </ul>
        </nav>
    </div>  
    );
}

export default EventNav;