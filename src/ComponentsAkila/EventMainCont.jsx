import React, { Component } from "react";
import mainimg from "../Images/main.png";
import { Button } from 'antd';
import EventFooter from "./EventFooter";
import { Link } from "react-router-dom";

function EventMainCont() {
  return (
    <div className="maincont" style={{height:"auto"}}>
      <div className="maincont-img">
        <img src={mainimg} alt="" style={{width:"700px"}} className="main-img" />
      </div>

      <div className="select-option">
        <p>
          OOPS YOU HAVE NOT SELECTED ANY OPTION, <br /> PLEASE SELECT YOUR
          DESIRED OPTION IN THE LEFT PANAL
        </p>
      </div>

      <div className="row" style={{marginBottom:20,marginLeft:10,marginTop:10}}>
        <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12">
          <Link to="create"> <Button block type="primary" style={{ width: "100%" }}>Create a new event</Button></Link>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12">
          <Link to="/edit"> <Button block>Edit already created events</Button></Link>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12">
          <Link to="edit"> <Button block>Delete a created event</Button></Link>
        </div>
      </div>

    </div>
  );
}

export default EventMainCont;
