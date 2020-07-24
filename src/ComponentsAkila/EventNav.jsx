import React, { Component } from 'react'
import Tooltip from "@material-ui/core/Tooltip";
import user from "../Images/user.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function EventNav() {
    return (
      <nav className="navbar">
        <Link to="/" className="navbar-brand" href="#">
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
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </nav>
    );
}

export default EventNav;