import React, { Component } from 'react';
import EventFooter from '../Components/EventFooter';
import EventNav from '../Components/EventNav';
import EventMainCont from '../Components/EventMainCont';
import EventSideNav from '../Components/EventSideNav';
import EventSum from '../Components/EventSum';

function EventHome() {
    return (
      <div className="row">

          <div className="col-lg-1.5 side">
            <EventSideNav />
          </div>

          <div className="col main">

            <EventNav />

            <EventMainCont />

            <EventFooter />
            
          </div>

              
          <div className="col-lg-2">
                <EventSum />
          </div>
      </div>
    );
}
 
export default EventHome;