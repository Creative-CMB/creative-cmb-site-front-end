import React, { Component } from 'react'

class DashCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="event-card dash-card">
                <p>{this.props.title}</p>

                <div className="row number">
                    <div className="col-lg-7">
                        <p>{this.props.count}</p>
                    </div>

                    <div className="col-lg-5">
                        <img className="dash-card-img" src={this.props.img} alt="" />
                    </div>
                </div>

                <div className="row number">
                    <div className="col-lg-12">
                        <span><img src={this.props.indi} alt="" className="dash-indi" /> 	&nbsp; {this.props.stat} <span className="dash-sub-top">SINCE LAST MONTH</span></span> 
                    </div>
                </div>
            </div>
         );
    }
}
 
export default DashCard;