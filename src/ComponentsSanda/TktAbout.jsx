import React, { Component } from "react";
import "./cssSanda/ticketAbout.css";

class TktAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <section id="about">
          <div class="about-right-col">
            <div class="about-text">
              <h1>About Reservation</h1>
              <span class="square"></span>
              <p style={{ fontSize: "15px" }}>
                We are planning to give you the massive event experience. Get
                Ready! paragraph is a series of related sentences developing a
                central idea, called the topic. Try to think about paragraphs in
                terms of thematic unity: a paragraph is a sentence or a group of
                sentences that supports one central, unified idea. Paragraphs
                add one idea at a time to your broader argument.
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
