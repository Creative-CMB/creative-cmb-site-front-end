import React, { Component } from "react";
import mainimg from "../Images/main.png";

function EventMainCont() {
  return (
    <div>
      <div className="maincont-img">
        <img src={mainimg} alt="" className="main-img" />
      </div>

      <div className="select-option">
        <p>
          OOPS YOU HAVE NOT SELECTED ANY OPTION, <br /> PLEASE SELECT YOUR
          DESIRED OPTION IN THE LEFT PANAL
        </p>
      </div>
    </div>
  );
}

export default EventMainCont;
