import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import lat1 from './images/lat1.png';
import lat2 from "./images/lat2.png";
import lat3 from "./images/lat3.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class EventSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Carousel style={{ width: "100%", overflowY: "none", height: "200px" }}>
        <Carousel.Item>
          <img
            style={{ height: "200px", marginLeft: 5 }}
            className="d-block"
            src={lat1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3><Link to="myEvents/myevent">birthday</Link></h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "200px", marginLeft: 5 }}
            className="d-block"
            src={lat2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "200px", marginLeft: 5 }}
            className="d-block "
            src={lat3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
 
export default EventSlider;