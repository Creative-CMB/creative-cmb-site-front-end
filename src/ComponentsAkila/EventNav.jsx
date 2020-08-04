import React, { Component } from 'react'
import Tooltip from "@material-ui/core/Tooltip";
import user from "../Images/user.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function EventNav() {
    return (
      <nav style={{paddingBottom:0}} className="navbar">
        <Link to="/event" className="navbar-brand" href="#">
          <Tooltip title="Event dasjboard">
            <p>EVENT DASHBOARD</p>
          </Tooltip>
        </Link>

        <div className="dropdown">
          <a
            className="btn btn-secondary user-btn"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={user} className="user-img" alt="" /> Akila Pramod
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="/my-account">
              My Account
            </Link>

            <Link className="dropdown-item" to="/logout">
              Log Out
            </Link>
          </div>
        </div>
      </nav>
    );
}

export default EventNav;