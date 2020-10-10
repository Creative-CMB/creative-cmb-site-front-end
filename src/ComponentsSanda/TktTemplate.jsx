import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import TktNavBar from "./TktNavBar";
import TktWelcome from "./TktWelcome";
import TktImgSlider from "./TktImgSlider";
import TktEventCard from "./TktEventCard";
import TktAbout from "./TktAbout";
import img4 from "./img/5.jpg";

class TktTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Currenttitle: "titleTest",
    };
  }
  render() {
    return (
      <div style={{ padding: "20px", backgroundColor: "#8d93ab" }}>
        <div style={{ overflowX: "hidden", backgroundColor: "white" }}>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <TktNavBar
                link1="Home"
                link2="Event"
                link3="Seminar"
                link4="About Us"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 d-none d-md-block">
              <TktWelcome />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <TktImgSlider />
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
              style={{
                width: "200vh",
                overflowX: "scroll",
                padding: "50px",
                scrollbarWidth: "none",
              }}
            >
              <h1>EVENT</h1>
              <TktEventCard title={this.state.Currenttitle} des="test desc 1" />
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
              style={{ width: "200vh", overflowX: "scroll", padding: "50px" }}
            >
              <h1>SEMINAR</h1>
              <TktEventCard title="seminar title" des="test desc 2" />
            </div>
          </div>

          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12"></div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <img className="d-block w-100" src={img4} alt="Third slide" />
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <TktAbout />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TktTemplate;
