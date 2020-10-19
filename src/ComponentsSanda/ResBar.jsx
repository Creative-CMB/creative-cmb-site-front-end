import React, { Component } from "react";

class ResBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          background: " linear-gradient(to bottom, #00cc99 0%, #006699 100%)",
        }}
      >
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            marginLeft: "15px",
          }}
        >
          <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
            <h1 style={{ fontFamily: "Times New Roman", textAlign:"left", fontSize:"25px" }}>{this.props.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ResBar;
