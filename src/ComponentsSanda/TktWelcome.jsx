import React, { Component } from "react";
import "./cssSanda/welcome.css";

import imgwelcome from "./img/welcome.png";

class TktWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div >
        {/* <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "35vh",
          }}
        >
          Welcome
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              background:
                "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(58,161,255,1) 0%, rgba(73,220,252,1) 100%)",
              display: "list-item",
              alignItems: "center",
              justifyContent: "center",
              border: "0.5px solid black",
              padding: "15px",
              borderRadius: "10px",
              marginTop: "50px",
            }}
          >
            MY TICKETS
          </button>
        </div> */}
        <div class="header-text" style={{ marginLeft: "10px"}}>
          <h1 style={{color:"blue",  textAlign: "center",textTransform: "uppercase",color: "#4CAF50"}}>Welcome!</h1>
          <span class="square"></span>
          <p style={{color:"DodgerBlue", fontSize:"15px", fontFamily:"Arial , Helvetica, sans-serif"}}>Reserve your Tickets here and enjoy!</p>
          {/* <button class="common-btn">Read more</button> */}
          <img className="d-block w-100" src={imgwelcome} alt="Third slide" style={{height:"80%" , width:"80%"}}/>
          <div class="line">
            <span class="line-1"></span>
            <br />
            <span class="line-2"></span>
            <br />
            <span class="line-3"></span>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default TktWelcome;
