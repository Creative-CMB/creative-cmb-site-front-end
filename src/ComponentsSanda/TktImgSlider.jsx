import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "./img/2.jpg";
import img2 from "./img/3.jpg";
import img3 from "./img/4.jpg";
import img4 from "./img/5.jpg";

const imgList = [img1, img2, img3, img4];

class TktImgSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //fetvh the data [4]
  }

  render() {
    return (
      <Carousel>
        {imgList.map((item) => {
          return (
            <Carousel.Item style={{ height: "88vh" }}>
              <img className="d-block w-100" src={item} alt="First slide" />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}

        {/*  <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Third slide"
                />
            
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />
            
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item> */}
      </Carousel>
    );
  }
}

export default TktImgSlider;
