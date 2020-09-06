import React, { Component } from 'react';
import AdIcon from "../Images/AdIcon.png";
import Edit from "../Images/edit2.png";
import Delete from "../Images/delete1.png";
import {Space} from "antd";






class AdDash extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <div>

            <div className="wrapper1">
                <div className="row">
                <div className="col-sm-4">
<div className="addimg1">
    <img src={AdIcon}></img>
</div>
</div>
                    <div className="col-sm-2">
                <h4>Current Ads</h4>
                <count className="adcount">30</count>
     </div>
     </div>
     </div>

<div className="wrapper2">
<div className="row">
    <div className="col-sm-4">
<div className="addimg1">
    <img src={AdIcon}></img>
</div>

    </div>

    <div className="col-sm-2">
<h2>Pending Ads</h2>
<count>{300}</count>
</div>
</div>
</div>

<div className="wrapper3">
                <div className="row">
<div className="addimg1">
    <img src={AdIcon}></img>
</div>

    
                    <div className="Expired">
                <h2>Expired Ads</h2>
                <count>{150}</count>
     </div>
     </div>
     </div>

            <div className="table-wrapper">
     <table class="table">
  <thead>
    <tr>
      <th scope="col">adID</th>
      <th scope="col">customer</th>
      <th scope="col">packageType</th>
      <th scope="col">AdTitle</th>
      <th scope="col">Image</th>
      <th scope="col">Date</th>
      <th scope="col">Duration</th>
      <th scope="col">Action</th>



    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>shala</td>
      <td>silver</td>
      <td>Exhibition</td>
      <td>IMG20.png</td>
      <td>12.10.2019</td>
      <td>1 week</td>
      <td><Space size="middle">
        <a className="a-class">Edit</a>
        <a className="a-class">Delete</a>
    </Space></td>


    </tr>
    <tr>
      <th scope="row">2</th>
      <td>kevin</td>
      <td>platinum</td>
      <td>Music Concert</td>
      <td></td>
      <td>10.03.2020</td>
      <td>2 week</td>
      <td><Space size="middle">
        <a className="a-class">Edit</a>
        <a className="a-class">Delete</a>
    </Space></td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>janaka</td>
      <td>gold</td>
      <td>Product Launching</td>
      <td>IMG05.png</td>
      <td>10.03.2020</td>
      <td>2 week</td>
      <td><Space size="middle">
        <a className="a-class">Edit</a>
        <a className="a-class">Delete</a>
    </Space></td>
    </tr>

    <tr>
      <th scope="row">4</th>
      <td>Niro</td>
      <td>silver</td>
      <td>Batch party</td>
      <td>IMG10.jpg</td>
      <td>05.04.2020</td>
      <td>1 week</td>
      <td><Space size="middle">
        <a className="a-class">Edit</a>
        <a className="a-class">Delete</a>
    </Space></td>
    </tr>

  </tbody>
</table>
</div>
     
     </div>
         );
    }
}
 
export default AdDash;