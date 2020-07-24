import React, { Component } from 'react';
import dot from "../Images/Group 31.png";
import EventCard from "../ComponentsAkila/EventCard";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";

function EventSum() {
    return (
      <div>
        <div className="row right">
          <div className="col-lg-10 col-md-10 col-sm-10">
            <p>SUMMARY</p>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-2">
            <img src={dot} alt="" className="dot" />
          </div>
        </div>

        <div className="tota-ev">
          <EventCard img={img1} count="150"/>
        </div>

        <div className="tota-can">
          <EventCard img={img2} count="20"/>
        </div>

        <div className="tota-up">
          <EventCard img={img3} count="10"/>
        </div>
      </div>
    );
}
export default EventSum;