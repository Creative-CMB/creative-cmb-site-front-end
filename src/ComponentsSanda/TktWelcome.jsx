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
        <div class="header-text" style={{ marginLeft: "10px"}}>
          <h1 style={{color:"blue",  textAlign: "center",textTransform: "uppercase",color: "#4CAF50",textShadow:"2px 2px 5px #4CAF50"}}>Welcome!</h1>
          <span class="square"></span>
          <h2 style={{color:"DodgerBlue", fontSize:"20px", fontFamily:"Arial , Helvetica, sans-serif"}}>Reserve your Tickets here and enjoy!</h2>
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
