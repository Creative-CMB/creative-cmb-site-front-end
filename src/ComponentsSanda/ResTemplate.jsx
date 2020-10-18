import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ResTable from "./ResTable";
import ResForm from "./ResForm";

import ResBar from "./ResBar";
import TktNavBar from "./TktNavBar";
import ResTicketImg from "./ResTicketImg";

import imgwelcome from "./img/welcome.png";


class ResTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <TktNavBar link1="Home" link2="Event Details" link3="Reservation" />
          </div>
        </div>
        <div className="row">
          <ResTicketImg />
        </div>

       

        <div className="row" style={{ marginTop: "30px" }}>
          <ResBar title="Reservation" />

          <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
            <h4 style={{ marginTop: "20px", color:"blue"}}>Availability:</h4>
            {/* button*/}
            <img className="d-block w-100" src={imgwelcome} alt="Third slide" style={{height:"80%" , width:"80%"}}/>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
            <ResForm />
          </div>
        </div>

        <div className="row">
          {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> */}
          <div
            style={{
              width: "100%",
              background:
                " linear-gradient(to bottom, #33cccc 0%, #ffffcc 100%)",
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
                <h1 style={{ fontFamily: "sanseriff", alignItems:"left" }}>Event Name</h1>
              </div>
              <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                <button type="button" class="btn btn-info">
                  Reserve
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="row" style={{ padding: "10px", marginTop: "30px" }}>
          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
            <ResTable />
          </div>

          <div
            className="col-lg-4 col-md-12 col-sm-12 col-xs-12"
            style={{ textAlign: "center" }}
          >
              <img className="d-block w-100" src={imgwelcome} alt="Third slide" style={{height:"80%" , width:"80%"}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ResTemplate;
