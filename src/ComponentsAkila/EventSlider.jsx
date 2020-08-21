import React, { Component } from 'react';
import { Carousel } from "antd";
import slide1 from '../Images/slide1.png';
import img1 from '../Images/img1.png'


const contentStyle = {
    width: '100%',
    height:"200px",
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
    background: '#364d79',
  //marginTop:"10px"
};
const contentStyleText = {
  //width: "100%",
  //height: "200px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "left",
    background: "#364d79",
  paddingLeft:"10px"
  //marginTop:"10px"
};



class EventSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (a, b, c) => {
    console.log(a, b, c);
    };
    
  render() {
    return (
      <div>
        <Carousel style={contentStyle} afterChange={this.onChange}>
          <div>
            <h3 style={contentStyleText}>my birthday party</h3>
          </div>
          <div>
            <h3 style={contentStyleText}>2</h3>
          </div>
          <div>
            <h3 style={contentStyleText}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}
 
export default EventSlider;