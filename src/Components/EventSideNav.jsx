import React, { Component } from 'react';
import drop from "../Images/drop.png";
import create from "../Images/Icon material-create-new-folder.png";
import dlt from "../Images/Icon material-update.png";
import show from "../Images/Icon ionic-ios-stats.png";
import Tooltip from "@material-ui/core/Tooltip";
import edit from "../Images/Icon feather-delete.png";

function EventSideNav() {
    return (
      <ul>
        <li className="drop-event">
          <Tooltip title="Click this button to hide the left navigation panal">
            <a href="">
              <img src={drop} alt="" className="drop" />
            </a>
          </Tooltip>
        </li>
        <li className="create-event">
          <Tooltip title="Click here to create a new event">
            <a href="">
              <img src={create} alt="" />
            </a>
          </Tooltip>
        </li>
        <li className="create-event">
          <Tooltip title="Click here to edit an existing event">
            <a href="" className="edit-event">
              <img src={dlt} alt="" />
            </a>
          </Tooltip>
        </li>
        <li className="create-event">
          <Tooltip title="Click here to delete an exsisting event">
            <a href="" className="dlt-event">
              <img src={edit} alt="" />
            </a>
          </Tooltip>
        </li>
        <li className="create-event">
          <Tooltip title="Click here to show the event dashbord">
            <a href="" className="show-dash">
              <img src={show} alt="" />
            </a>
          </Tooltip>
        </li>
      </ul>
    );
}

export default EventSideNav;