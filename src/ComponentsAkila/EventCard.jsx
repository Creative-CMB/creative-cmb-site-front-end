import React, { Component } from 'react';


class EventCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <div className="event-card">
                <p>Total Events Created</p>
                
                <div className="row number">
                    <div className="col-lg-6">
                        <p>{this.props.count}</p>
                    </div>

                    <div className="col-lg-6">
                        <img src={this.props.img} alt=""/>
                    </div>
                </div>
          </div>
        );
    }
}
 
export default EventCard;