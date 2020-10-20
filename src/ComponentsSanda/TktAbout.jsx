import React, { Component } from "react";
import "./cssSanda/ticketAbout.css";

class TktAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div >
        <section id="about">
          <div class="about-right-col">
            <div class="about-text">
              <h1 style={{textAlign:"left", color:"#000066", textShadow:"2px 2px 5px #000066" ,fontFamily:"Times New Roman"}}>About Reservation</h1>
              <span class="square"></span>
              <p style={{ fontSize: "20px", fontFamily:"Times New Roman",color:"#228B22" }}>
                We are planning to give you the massive event experience. Get
                Ready! You can easily review the latest bookings and tickets
                 sold on a user-friendly admin dashboard, customize the booking form,
                  add and edit bookings manually, etc.
              </p>
              <br />
              <br />
              <div class="line">
                <span class="line-1"></span>
                <br />
                <span class="line-2"></span>
                <br />
                <span class="line-3"></span>
                <br />
              </div>
              <h2>
                "Reservation is kind of an interesting task that anyone who
                desire to plan an event or participate for an event can do!"
              </h2>
              <h3>---Moon</h3>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TktAbout;
