import React, { Component } from 'react'
import Tooltip from "@material-ui/core/Tooltip";
import user from "../Images/user.png";

function EventNav() {
    return (
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          <Tooltip title="Event dasjboard">
            <p>EVENT DASHBOARD</p>
          </Tooltip>
        </a>

        <div class="dropdown">
          <a
            class="btn btn-secondary user-btn"
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