import React, { Component } from "react";
import "./cssSanda/restktimage.css";
import eventticket from "./img/event-ticket.jpg";

class ResTicketImg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <img
        className="ss-image"
        src={eventticket}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%",
        }}
        alt=""
      />
    );
  }
}

export default ResTicketImg;
