import React, { Component } from 'react';
import EventFooter from './EventFooter';
import EventNav from './EventNav';
import EventMainCont from './EventMainCont';
import EventSideNav from './EventSideNav';
import EventSum from './EventSum';


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