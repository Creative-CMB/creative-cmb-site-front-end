import React, { Component } from "react";
import drop from "../Images/drop.png";
import create from "../Images/Icon material-create-new-folder.png";
import edit from "../Images/Icon material-update.png";
import show from "../Images/Icon ionic-ios-stats.png";
import Tooltip from "@material-ui/core/Tooltip";
import dlt from "../Images/Icon feather-delete.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EventCreate from "../ComponentsAkila/EventCreate";

function EventSideNav() {
  return (
    <ul className="event-side-nav">
      <li className="drop-event">
        <Link to="/event">
          <Tooltip title="Go to home">
            <img src={drop} alt="" className="drop" />
          </Tooltip>
        </Link>
      </li>
      <li className="create-event">
        <Link to="/create">
          <Tooltip title="Click here to create a new event">
            <img src={create} alt="" />
          </Tooltip>
        </Link>
      </li>
      <li className="create-event">
        <Link to="/dlt-event">
          <Tooltip title="Click here to edit an existing event">
            <img src={dlt} alt="" />
          </Tooltip>
        </Link>
      </li>
      <li className="create-event">
        <Link to="/edit-event">
          <Tooltip title="Click here to delete an exsisting event">
            <img src={edit} alt="" />
          </Tooltip>
        </Link>
      </li>
      <li className="create-event">
        <Link to="/show-all">
          <Tooltip title="Click here to show the event dashbord">
            <img src={show} alt="" />
          </Tooltip>
        </Link>
      </li>
    </ul>
  );
}

export default EventSideNav;
