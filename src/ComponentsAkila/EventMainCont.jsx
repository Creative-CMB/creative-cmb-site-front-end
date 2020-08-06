import React, { Component } from "react";
import mainimg from "../Images/main.png";
import { Button } from 'antd';
import EventFooter from "./EventFooter";

function EventMainCont() {
  return (
    <div className="maincont">
      <div className="maincont-img">
        <img src={mainimg} alt="" className="main-img" />
      </div>

      <div className="select-option">
        <p>
          OOPS YOU HAVE NOT SELECTED ANY OPTION, <br /> PLEASE SELECT YOUR
          DESIRED OPTION IN THE LEFT PANAL
        </p>
      </div>

      <div className="row" style={{marginBottom:20,marginLeft:10,marginTop:10}}>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <Button block type="primary" style={{width:"100%"}}>Primary Button</Button>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <Button block>Default Button</Button>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <Button block>Default Button</Button>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <Button block>Default Button</Button>
        </div>
      </div>

      <EventFooter />
    </div>
  );
}

export default EventMainCont;
