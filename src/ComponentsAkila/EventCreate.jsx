import React, { Component } from 'react';
import EventSideNav from "./EventSideNav";

class EventCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <div className="row">

            <div className="col-lg-1.5 side">
              <EventSideNav />
            </div>

            <div className="col main">

              

            </div>


            <div className="col-lg-2">
            
            </div>
          </div>
        );
    }
}
 
export default EventCreate;