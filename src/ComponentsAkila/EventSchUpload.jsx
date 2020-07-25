import React, { Component } from 'react';
import upload from "../Images/upload.png";

class EventSchUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <div>
            <div className="light-sub-topic up-topic">
              <p>UPLOAD YOUR EVENT SCHEDULE HERE</p>
            </div>
            <div className="event-card form-card upload">
              <div className="row">
                <div className="col-lg-6">
                  <p>
                    UPLOAD YPUR <br /> SCHEDULE HERE
                  </p>
                  <form action="">
                    <input type="file" name="" id="" />
                  </form>
                </div>

                <div className="col-lg-6">
                  <img src={upload} alt="upload" />
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default EventSchUpload;