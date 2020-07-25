import React, { Component } from 'react';
import rec from './images/Rectangle2.png'
import './css/dash.css'

class DashboardTemp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <div className="row dash-main">
            <div className="col-lg-2 side">akila</div>
            <div className="col-lg-10 mid">pramod <br/> akila</div>
          </div>
        );
    }
}
 
export default DashboardTemp;